import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const IMAGE_PATHS = [
  'logo.png',
  'images/logo.png',
  'Ecovation Images/workspace/workspace_bg.png',
  'Ecovation Images/general/contact_bg.png',
  'Ecovation Images/general/Clientbg_image.png',
  'Ecovation Images/general/about.png',
  'Ecovation Images/acoustic-panels/acoustic_bg.png',
  'Ecovation Images/acoustic-panels/acoustic_service.png',
  'Ecovation Images/acoustic-panels/ceiling2.jpg',
  'Ecovation Images/residential/residential_bg.png',
  'Ecovation Images/residential/service.jpg',
  'Ecovation Images/general/readytostart.png',
];

let optimizedCount = 0;

for (const imagePath of IMAGE_PATHS) {
  const sourcePath = resolve('public', imagePath);
  const outputPath = sourcePath.replace(/\.(?:png|jpe?g)$/i, '.webp');
  const sourceStats = await stat(sourcePath);

  try {
    const outputStats = await stat(outputPath);
    if (outputStats.mtimeMs >= sourceStats.mtimeMs) continue;
  } catch {
    // Generate the optimized image when no derivative exists yet.
  }

  await sharp(sourcePath)
    .rotate()
    .resize({ width: 2560, height: 2560, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(outputPath);
  optimizedCount += 1;
}

if (optimizedCount > 0) console.log(`Optimized ${optimizedCount} large images to WebP.`);