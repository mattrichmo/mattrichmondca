import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';

// Define a type for an array of image file names
type ImageArray = string[] | undefined;
const getImages = async (): Promise<ImageArray> => {
    try {
        // Grabs the path to the '/public/' directory
        const imageDirectory = path.join(process.cwd(), '/public/');

        // Reads the content of the '/public/' directory and returns an array of strings
        const imageFilenames: ImageArray = await fs.readdir(imageDirectory);

        return imageFilenames;
    } catch (error: any) {
        console.error(error);
        throw error; // Rethrow the error to propagate it
    }
};
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        // Call the getImages function to retrieve image file names
        const imageFilenames = await getImages();

        // Return a JSON response with the image file names
        return new NextResponse(JSON.stringify(imageFilenames), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        console.error(error);

        // Return an error response
        return new NextResponse(JSON.stringify({ error: 'An error occurred.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
