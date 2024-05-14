const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "beBDzExSkKY", width: 1080, height: 1620 },
  { id: "_kmdT3M2wmM", width: 1080, height: 720 },
  { id: "Uh2kb5PCczo", width: 1080, height: 1920 },
  { id: "m4U7XRaWXwo", width: 1080, height: 716 },
  { id: "6mze64HRU2Q", width: 1080, height: 1620 },
  { id: "7ENqG6Gmch0", width: 1080, height: 718 },
 
];

export const slides = unsplashPhotos.map((photo) => {
  const width = photo.width;
  const height = photo.height;
  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return { src: unsplashLink(photo.id, breakpoint, breakpointHeight), width: breakpoint, height: breakpointHeight };
    }),
  };
});



export default slides;
