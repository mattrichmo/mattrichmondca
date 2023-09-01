import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

const getImageFiles = (imgFolderPath: string) => {
  const publicFolderPath = path.join(process.cwd(), 'public');
  const imgFolder = path.join(publicFolderPath, imgFolderPath);
  const files = fs.readdirSync(imgFolder);
  
  return files.map((file) => {
    const filePath = imgFolderPath + file;
    const alt = path.basename(file, path.extname(file));
    const dimensions = sizeOf(path.join(imgFolder, file));
    
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
      const images = getImageFiles(imgFolderPath);
      return NextResponse.json(images);
    } else {
      return NextResponse.json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: 'An error occurred while fetching images.' });
  }
}
