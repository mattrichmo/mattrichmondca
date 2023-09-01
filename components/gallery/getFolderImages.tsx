import fs from 'fs';
import path from 'path';

export default async function getImagesFolder(imgFolderPath) {
  const images = [];

  const imgFolder = path.join(process.cwd(), imgFolderPath);
  const files = fs.readdirSync(imgFolder);

  files.forEach((file) => {
    const filePath = path.join(imgFolder, file);
    const alt = path.basename(file, path.extname(file));
    const dimensions = getImageDimensions(filePath);

    console.log('File Path:', filePath);
    console.log('Alt Text:', alt);
    console.log('Dimensions:', dimensions);

    images.push({
      src: filePath,
      alt,
      dimensions,
    });
  });
  console.log('Images:', images);
  return images;
}

function getImageDimensions(filePath) {
  const image = new Image();
  image.src = filePath;

  return {
    width: image.width,
    height: image.height,
  };
}
