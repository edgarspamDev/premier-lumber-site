import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../src/assets/images/lumbrr');
const sizeLimit = 200 * 1024; // 200KB

async function optimizeImages() {
  console.log(`Scanning ${targetDir} for large images...`);
  const files = fs.readdirSync(targetDir);

  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;

    const filePath = path.join(targetDir, file);
    const stats = fs.statSync(filePath);

    if (stats.size > sizeLimit) {
      console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
      
      const newFileName = file.replace(/\.(jpg|jpeg|png|webp)$/i, '.opt.webp');
      const newFilePath = path.join(targetDir, newFileName);

      try {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(newFilePath);
        
        console.log(`✅ Saved ${newFileName}`);
      } catch (err) {
        console.error(`❌ Failed to optimize ${file}:`, err);
      }
    }
  }
}

optimizeImages();
