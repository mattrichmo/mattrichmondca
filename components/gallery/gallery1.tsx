import * as React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';

interface ImageData {
  src: string;
  alt: string;
  dimensions: { width: number; height: number } | null; // Allow dimensions to be null
}

interface Gallery1Props {
  imgFolderPath: string;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    // Update state to show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Use the 'unknown' type for error
      const error = this.state.error as unknown;

      // You can render any custom fallback UI here
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{String(error)}</p> {/* Use String() to convert to string */}
        </div>
      );
    }
    return this.props.children;
  }
}



export default function Gallery1({ imgFolderPath }: Gallery1Props) {
  const [index, setIndex] = React.useState(-1);
  const [images, setImages] = React.useState<ImageData[]>([]);

  React.useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`https://mattrichmond.ca/api/folder-images?imgfolderpath=${encodeURIComponent(imgFolderPath)}`);
        const data: ImageData[] = await response.json();
        console.log(data); // Add this line after fetching data

        setImages(data); // Update the state after fetching data
      } catch (error) {
        console.error('Error fetching images:', error);
        throw error; // Rethrow the error to trigger the error boundary
      }
    }

    fetchImages(); // Trigger data fetching when the component mounts
  }, [imgFolderPath]);

  // Now, render the component with the updated state
  return (
    <ErrorBoundary>
      <div className="mx-auto mt-24 max-w-screen-xl px-8">
        <PhotoAlbum
          layout="rows"
          photos={images.map((image) => ({
            src: image.src,
            alt: image.alt,
            width: image.dimensions?.width || 0, // Use optional chaining
            height: image.dimensions?.height || 0, // Use optional chaining
          }))}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={images.map((image) => ({
            src: image.src,
            alt: image.alt,
            width: image.dimensions?.width || 0, // Use optional chaining
            height: image.dimensions?.height || 0, // Use optional chaining
          }))}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </ErrorBoundary>
  );
}
