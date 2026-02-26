const sharp = require('sharp');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;
  const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
  const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

  try {
    // Resize logo to fit nicely within the card without being overwhelming
    const resizedLogo = await sharp(logoPath)
      .resize({ width: 800, height: 400, fit: 'inside' })
      .toBuffer();

    // Create the base charcoal #0f0f0f background and composite logo
    await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 15, g: 15, b: 15, alpha: 1 } // #0f0f0f charcoal
      }
    })
    .composite([
      { input: resizedLogo, gravity: 'center' }
    ])
    .png()
    .toFile(outputPath);

    console.log('OG Image successfully generated at:', outputPath);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

createOgImage();
