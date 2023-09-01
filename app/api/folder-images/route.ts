import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

const getImageFiles = (imgFolderPath: string) => {
  const publicFolderPath = path.join(process.cwd(), 'public');
  const imgFolder = path.join(publicFolderPath, imgFolderPath);
  const files = fs.readdirSync(imgFolder);

  console.log('Step 1: Reading files from folder...');

  return files.map((file) => {
    const filePath = path.join(imgFolder, file);
    const alt = path.basename(file, path.extname(file));
    const dimensions = sizeOf(filePath);

    console.log('Step 2: Processing file:', file);

    return {
      src: `/${imgFolderPath}/${file}`, // Use the constructed file path
      alt,
      dimensions,
    };
  });
};

export async function getStaticProps() {
  try {
    console.log('Step 3: Handling GET request...');
    const imgFolderPath = 'your_image_folder_path';
    const images = getImageFiles(imgFolderPath);

    console.log('Step 4: Sending JSON response...');
    return {
      props: {
        images,
      },
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    console.log('Step 3: An error occurred while fetching images.');
    return {
      props: {
        error: 'An error occurred while fetching images.',
      },
    };
  }
}
