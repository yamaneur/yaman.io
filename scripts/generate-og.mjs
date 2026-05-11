import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;
const LOGO_SIZE = 200;

// Load logo and convert to white (preserve alpha, set all RGB to 255)
const logoRaw = await sharp(join(root, 'public/images/yamaneur-logo.png'))
  .resize(LOGO_SIZE, LOGO_SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const whitePixels = Buffer.alloc(logoRaw.data.length);
for (let i = 0; i < logoRaw.data.length; i += 4) {
  whitePixels[i]     = 255;
  whitePixels[i + 1] = 255;
  whitePixels[i + 2] = 255;
  whitePixels[i + 3] = logoRaw.data[i + 3];
}

const whiteLogo = await sharp(whitePixels, {
  raw: { width: logoRaw.info.width, height: logoRaw.info.height, channels: 4 },
}).png().toBuffer();

const logoLeft = Math.round((WIDTH - logoRaw.info.width) / 2);
const logoTop  = 100;

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#000000"/>
  <text
    x="${WIDTH / 2}"
    y="390"
    font-family="Geeza Pro, Arial, sans-serif"
    font-size="72"
    font-weight="bold"
    fill="#ffffff"
    text-anchor="middle"
    direction="rtl"
    unicode-bidi="embed"
  >يمان العرضي</text>
  <text
    x="${WIDTH / 2}"
    y="468"
    font-family="Geeza Pro, Arial, sans-serif"
    font-size="34"
    fill="#999999"
    text-anchor="middle"
    direction="rtl"
    unicode-bidi="embed"
  >أساعد المؤسسين يختبروا السوق ويوصلوا للعملاء الأوائل</text>
</svg>`;

mkdirSync(join(root, 'public/images'), { recursive: true });

await sharp(Buffer.from(svg))
  .composite([{ input: whiteLogo, top: logoTop, left: logoLeft }])
  .png()
  .toFile(join(root, 'public/images/og-image.png'));

console.log('og-image.png generated at public/images/og-image.png');
