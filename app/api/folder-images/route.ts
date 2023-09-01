import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

// Define a function to get image files from a folder
const getImageFiles = (imgFolderPath: string) => {
  // Get the path to the public folder
  const publicFolderPath = path.join(process.cwd(), '/public');
  // Construct the path to the image folder using path.resolve
  const imgFolder = path.resolve(publicFolderPath, imgFolderPath); // Use path.resolve
  // Read the files in the image folder
  const files = fs.readdirSync(imgFolder);
  
  // Log a message indicating the step
  console.log('Step 1: Reading files from folder...');
  
  // Map the file information to an array
  return files.map((file) => {
    // Construct the full file path
    const filePath = path.join(imgFolderPath, file); // Modified path
    // Extract the alternative text from the file name
    const alt = path.basename(file, path.extname(file));
    // Get the dimensions of the image using 'image-size' library
    const dimensions = sizeOf(path.join(imgFolder, file));
    
    // Log a message indicating the step and the file being processed
    console.log('Step 2: Processing file:', file);
    
    // Return an object with the file information
    return {
      src: filePath, // Use the constructed file path
      alt,
      dimensions,
    };
  });
};

// Define an async function to handle GET requests
export async function GET(req: NextRequest) {
  try {
    const { method } = req;
    const imgFolderPath = req.nextUrl.searchParams.get('imgfolderpath');
    
    if (method === 'GET' && imgFolderPath) {
      // Log a message indicating the step
      console.log('Step 3: Handling GET request...');
      // Get the image files
      const images = getImageFiles(imgFolderPath);
      // Log a message indicating the step
      console.log('Step 4: Sending JSON response...');
      // Return a JSON response with the image information
      return NextResponse.json(images);
    } else {
      // Log a message indicating the step when the method is not allowed
      console.log('Step 3: Method Not Allowed');
      // Return a JSON response with an error message
      return NextResponse.json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    // Log an error message if an error occurs
    console.error('Error fetching images:', error);
    // Log a message indicating the step when an error occurs
    console.log('Step 3: An error occurred while fetching images.');
    // Return a JSON response with an error message
    return NextResponse.json({ error: 'An error occurred while fetching images.' });
  }
}
