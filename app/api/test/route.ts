import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

type ImageArray = string[] | undefined;

const getImages = async (imgFolderPath: string): Promise<ImageArray> => {
    try {
        const imageDirectory = path.join(process.cwd(), '/public', imgFolderPath);
        console.log(imageDirectory);
        const images: ImageArray = await fs.readdir(imageDirectory);
        console.log(images);

        return images;
    } catch (error: any) {
        console.error(error);
        return undefined;
    }
}

export async function GET(req: NextRequest) {
    try {
        const { method } = req;
        const imgFolderPath = req.nextUrl.searchParams.get('imgFolderPath');
        
        if (method === 'GET' && imgFolderPath) {
            // Corrected: Add await here
            const images = await getImages(imgFolderPath);
            console.log('Step 4: Sending JSON response...');
            return NextResponse.json(images);
        } else {
            return NextResponse.json({ error: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred' });
    }
}
