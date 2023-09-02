'use server'
import { promises as fs } from 'fs'
import path from 'path'

type ImageArray = string[] | undefined;

/**
 * Get an array of image filenames from a directory.
 * 
 * @returns {Promise<ImageArray>}
 */
export const getImages = async (imgFolderPath: string): Promise<ImageArray> => {
        try {
        const imageDirectory = path.join(process.cwd(), '/public', imgFolderPath);
        const imageFilenames: ImageArray = await fs.readdir(imageDirectory)

        return imageFilenames
    } catch (error: any) {
        console.error(error)
    }
}
