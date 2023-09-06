import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from '@/components/gallery/styles.module.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


const { grid, card } = styles;

export const Gallery2 = ({ imgFolderPath, onClick }: { imgFolderPath: string; onClick?: ImageProps["onClick"] }) => {
  const [images, setImages] = useState<string[] | undefined>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Create the URL with imgFolderPath as a query parameter
        const apiUrl = `/api/test?projectName=${imgFolderPath}`;
        // Make a GET request to the API
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Parse the JSON response
        const data = await response.json();
        setImages(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [imgFolderPath]);

  return (
    <>
      <div className={grid}>
        {images && images.length > 0 &&
          images.map((image: string, index: number) => (
            <div
              className={card}
              key={image}
              onClick={() => setLightboxIndex(index)} // Open lightbox on click
            >
              <Image
                height={0}
                width={640}
                style={{
                  objectFit: 'contain',
                }}
                alt={image}
                src={`/img${imgFolderPath}${image}`}
              />
            </div>
          ))}
      </div>

      {/* Lightbox Component */}
      {images && images.length > 0 && (
        <Lightbox
          index={lightboxIndex}
          slides={images.map((image) => ({
            src: `/img${imgFolderPath}${image}`,
            alt: image,
            width: 640,
            height: 0, // Set the height to 0 if you want to maintain the aspect ratio
          }))}
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
        />
      )}
    </>
  );
};
