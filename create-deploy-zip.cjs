/**
 * Create Hostinger deployment ZIP using Windows tar command
 * tar creates proper POSIX-compatible archives that Linux can extract correctly
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIST = path.resolve(__dirname, 'dist');
const OUT = path.resolve(__dirname, 'hostinger_deploy.zip');
const TEXT_EXTS = new Set(['.html', '.css', '.js', '.json', '.txt', '.xml', '.svg', '.php', '.webmanifest']);

// Step 1: Convert text files to LF
let converted = 0;
function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else {
      const ext = path.extname(entry.name) || (entry.name.startsWith('.') ? entry.name : '');
      if (TEXT_EXTS.has(ext)) {
        let content = fs.readFileSync(full, 'utf8');
        content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        fs.writeFileSync(full, content, 'utf8');
        converted++;
      }
    }
  }
}

console.log('Step 1: Converting text files to LF line endings...');
walkDir(DIST);
console.log('  Converted ' + converted + ' text files.\n');

// Step 2: Remove old zip
if (fs.existsSync(OUT)) {
  fs.unlinkSync(OUT);
  console.log('Removed old hostinger_deploy.zip\n');
}

// Step 3: Create ZIP using tar command (Windows 10+ has tar built-in)
// This creates a proper ZIP file that Linux can extract correctly
console.log('Step 2: Creating ZIP using tar...');
try {
  // tar -a -cf creates a ZIP archive (-a auto-detects from extension)
  // We cd into dist first so paths are relative (no dist/ prefix)
  execSync(`tar -a -cf "${OUT}" -C "${DIST}" .`, { 
    stdio: 'inherit',
    cwd: DIST 
  });
  
  const stats = fs.statSync(OUT);
  console.log('\nDone! hostinger_deploy.zip = ' + (stats.size / 1024 / 1024).toFixed(2) + ' MB');
} catch (e) {
  console.error('tar failed, trying alternative method...');
  console.error(e.message);
  
  // Fallback: Use Git's zip if available
  const gitZip = 'C:\\Program Files\\Git\\usr\\bin\\zip.exe';
  if (fs.existsSync(gitZip)) {
    console.log('Using Git zip instead...');
    execSync(`"${gitZip}" -r "${OUT}" .`, { cwd: DIST, stdio: 'inherit' });
    const stats = fs.statSync(OUT);
    console.log('\nDone! hostinger_deploy.zip = ' + (stats.size / 1024 / 1024).toFixed(2) + ' MB');
  } else {
    console.error('No usable ZIP tool found!');
    process.exit(1);
  }
}

// Step 4: Verify the ZIP
console.log('\nVerifying ZIP entries...');
try {
  const listing = execSync(`tar -tf "${OUT}"`, { encoding: 'utf8' });
  const entries = listing.trim().split('\n').filter(Boolean);
  console.log('Total entries: ' + entries.length);
  
  const hasBackslash = entries.filter(e => e.includes('\\'));
  if (hasBackslash.length > 0) {
    console.log('WARNING: Found backslash paths:');
    hasBackslash.forEach(e => console.log('  ' + e));
  } else {
    console.log('All paths use forward slashes!');
  }
  
  console.log('\nFirst 15 entries:');
  entries.slice(0, 15).forEach(e => console.log('  ' + e));
  if (entries.length > 15) console.log('  ...');
} catch (e) {
  console.log('(Cannot verify with tar -t, but ZIP was created)');
}
