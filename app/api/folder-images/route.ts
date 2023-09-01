import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import { string } from 'zod';

const getImageFiles = (imgFolderPath: string) => {
  const publicFolderPath = path.join(process.cwd(), 'public');
  const imgFolder = path.join(publicFolderPath, imgFolderPath);
  const files = fs.readdirSync(imgFolder);
  
  console.log('Step 1: Reading files from folder...');
  
  return files.map((file) => {
    const filePath = imgFolderPath + file;
    const alt = path.basename(file, path.extname(file));
    const dimensions = sizeOf(path.join(imgFolder, file));
    
    console.log('Step 2: Processing file:', file);
    
    return {
      src: filePath, // Use the constructed file path
      alt,
      dimensions,
    };
  });
};

export async function GET(req: NextRequest) {
  try {
    const { method } = req;
    const imgFolderPath = req.nextUrl.searchParams.get('imgfolderpath');
    
    if (method === 'GET' && imgFolderPath) {
      console.log('Step 3: Handling GET request...');
      const images = getImageFiles(imgFolderPath);
      console.log('Step 4: Sending JSON response...');
      return NextResponse.json(images);
    } else {
      console.log('Step 3: Method Not Allowed');
      return NextResponse.json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    console.log('Step 3: An error occurred while fetching images.');
    return NextResponse.json({ error: 'An error occurred while fetching images.' });
  }
}
