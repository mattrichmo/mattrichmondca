import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { getImages } from '@/utils/get-image';
import styles from '@/components/gallery/styles.module.css';

const { grid, card } = styles;

export const Gallery2 = ({ imgFolderPath, onClick }: { imgFolderPath: string; onClick?: ImageProps["onClick"] }) => {
    const [images, setImages] = useState<string[] | undefined>([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        try {
          // Use the received imgFolderPath to specify the directory
          const imageList = await getImages(imgFolderPath);
          setImages(imageList);
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
          images.map((el: string) => (
            <Image
              className={card}
              height={200}
                width={200}
              style={{
                objectFit: 'contain',
              }}
              alt={'alt'}
              src={`/${imgFolderPath}${el}`}
                key={el}
              onClick={onClick ? onClick : undefined}
            />
          ))}
      </div>
    </>
  );
};
