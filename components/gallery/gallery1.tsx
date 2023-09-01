import * as React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';

interface ImageData {
  src: string;
  alt: string;
  dimensions: { width: number; height: number };
}

interface Gallery1Props {
  imgFolderPath: string;
}

export default function Gallery1({ imgFolderPath }: Gallery1Props) {
  const [index, setIndex] = React.useState(-1);
  const [images, setImages] = React.useState<ImageData[]>([]);

  React.useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`/api/folder-images?imgfolderpath=${encodeURIComponent(imgFolderPath)}`);
        const data: ImageData[] = await response.json();
        console.log(data); // Add this line after fetching data


        setImages(data); // Update the state after fetching data
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages(); // Trigger data fetching when the component mounts
  }, [imgFolderPath]);

  // Now, render the component with the updated state
  return (
    <div className="mx-auto mt-24 max-w-screen-xl px-8">
      <PhotoAlbum
        layout="rows"
        photos={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          width: image.dimensions.width,
          height: image.dimensions.height,
        }))}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          width: image.dimensions?.width || 0,
          height: image.dimensions?.height || 0,
        }))}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
