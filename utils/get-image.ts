
"use server"
import { promises as fs } from 'fs';
import path from 'path';
import { GetStaticPropsContext } from 'next';

type ImageArray = string[] | undefined;

export const getImages = async (imgFolderPath: string): Promise<ImageArray> => {
    try {
        const imageDirectory = path.join(process.cwd(), '/public', imgFolderPath);
        const imageFilenames: ImageArray = await fs.readdir(imageDirectory);

        return imageFilenames;
    } catch (error: any) {
        console.error(error);
        return undefined; // You should return a value here, even if it's undefined
    }
}

