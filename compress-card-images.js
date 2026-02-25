const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'assets');
const cardImages = [
  'manages your inbox.png',
  'goes shopping for you.png',
  'trade stocks.png',
  'book restaurants.png',
  'build websites and apps.png',
  'set up dates.png',
  'Talk to you with its own voice.png'
];

async function compress() {
  for (const name of cardImages) {
    const src = path.join(assetsDir, name);
    if (!fs.existsSync(src)) {
      console.warn('Skip (not found):', name);
      continue;
    }
    const buf = await sharp(src)
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
    fs.writeFileSync(src, buf);
    console.log('Compressed:', name);
  }
}

compress().catch((err) => {
  console.error(err);
  process.exit(1);
});
