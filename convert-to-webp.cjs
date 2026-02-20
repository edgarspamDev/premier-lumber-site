const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src', 'assets', 'images', 'lumbrr'),
  path.join(__dirname, 'public'),
  path.join(__dirname, 'public', 'images'),
];

async function convert() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
      
      const input = path.join(dir, file);
      const output = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      // Skip if webp already exists
      if (fs.existsSync(output)) {
        console.log(`SKIP (exists): ${output}`);
        continue;
      }
      
      try {
        const stats = fs.statSync(input);
        await sharp(input)
          .webp({ quality: 80 })
          .toFile(output);
        const newStats = fs.statSync(output);
        const savings = Math.round((1 - newStats.size / stats.size) * 100);
        console.log(`OK: ${file} -> ${path.basename(output)} (${savings}% smaller)`);
      } catch (err) {
        console.error(`FAIL: ${file} - ${err.message}`);
      }
    }
  }
}

convert().then(() => console.log('\nDone!'));
