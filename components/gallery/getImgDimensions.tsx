export function getImageDimensions(filePath) {
    const image = new Image();
    image.src = filePath;
  
    return {
      width: image.width,
      height: image.height,
    };
  }
  