import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from '@/components/gallery/styles.module.css';
import { NextResponse } from 'next/server';

const { grid, card } = styles;

export const Gallery2 = ({ imgFolderPath, onClick }: { imgFolderPath: string; onClick?: ImageProps["onClick"] }) => {
  const [images, setImages] = useState<string[] | undefined>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Create the URL with imgFolderPath as a query parameter
        const apiUrl = `/api/test?imgFolderPath=${imgFolderPath}`;
        // Make a GET request to the API
        const response = await fetch(apiUrl);
        console.log('Response',response);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const data = await response.json();
        setImages(data);
        console.log('Data',data);

        // Extract filenames from the JSON ar
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [imgFolderPath]);

  return (
    <>
      <div className={grid}>
        {images &&
          images.map((filename: string) => (
            <Image
              className={card}
              height={0}
              width={640}
              style={{
                objectFit: 'contain',
              }}
              alt={filename}
              src={`${imgFolderPath}/${filename}`}
              key={filename}
              onClick={onClick ? onClick : undefined}
            />
          ))}
      </div>
    </>
  );
};
