import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from '@/components/gallery/styles.module.css';

const { grid, card } = styles;

export const getStaticProps = async () => {
  try {
    // Define the imgFolderPath here
    const imgFolderPath = '/your/image/folder/path'; // Change this to your actual folder path

    // Create the URL with imgFolderPath as a query parameter
    const apiUrl = `/api/test?imgFolderPath=${imgFolderPath}`;

    // Make a GET request to the API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the data as props
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    // Handle errors appropriately
  }
};

export const Gallery2 = ({
  imgFolderPath,
  onClick,
  data, // Access the data prop you fetched
}: {
  imgFolderPath: string;
  onClick?: ImageProps['onClick'];
  data: string[]; // Assuming data is an array of image filenames
}) => {
  const [images, setImages] = useState<string[] | undefined>(data); // Set initial state with data

  return (
    <>
      <div className={grid}>
        {images &&
          images.map((filename: string) => (
            <Image
              className={card}
              height={0}
              width={300}
        
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
