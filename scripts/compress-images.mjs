// One-off script to compress images in-place
// Run: node scripts/compress-images.mjs

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.resolve(__dirname, '../src/assets/images/lumbrr');

const MAX_WIDTH = 1920;
const QUALITY = 80;

const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg'));
let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = path.join(imgDir, file);
  const tmpPath = filePath + '.tmp';
  const before = fs.statSync(filePath).size;
  totalBefore += before;
  
  try {
    const buffer = await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();
    
    // Write to temp file then rename to avoid file lock
    fs.writeFileSync(tmpPath, buffer);
    fs.unlinkSync(filePath);
    fs.renameSync(tmpPath, filePath);
    
    const after = buffer.length;
    totalAfter += after;
    
    const savedPct = ((1 - after / before) * 100).toFixed(0);
    console.log(`${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${savedPct}%)`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
    // Clean up temp file if it exists
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
  }
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (-${((1 - totalAfter/totalBefore)*100).toFixed(0)}%)`);
