"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const bannerSlides = [
  {
    bgColor: "bg-blue-600 bg-opacity-50",
    text: "Slide 1",
    textColor: "text-white",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    imgSrc: "https://images.unsplash.com/photo-1686165159819-50329ffec09b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    alt: "Slide 1"
  },
  {
    bgColor: "bg-pink-400 bg-opacity-50",
    text: "Slide 2",
    textColor: "text-white",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    imgSrc: "https://images.unsplash.com/photo-1686165159819-50329ffec09b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    alt: "Slide 2"
  },
  {
    bgColor: "bg-teal-500 bg-opacity-50",
    text: "Slide 3",
    textColor: "text-white",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum .",
    imgSrc: "https://images.unsplash.com/photo-1686165159819-50329ffec09b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    alt: "Slide 3"
  },
];

function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + bannerSlides.length) % bannerSlides.length);
    setShowGallery(false);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerSlides.length);
    setShowGallery(false);
  };

  useEffect(() => {
    console.log(`Scrolling to slide ${currentSlide}`);
  }, [currentSlide]);

  const handleSlideClick = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-full flex flex-row" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "transform 0.5s ease" }}>
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`flex-none w-full h-full relative`} style={{ zIndex: 1 }}
            onClick={handleSlideClick}
          >
            <Image src={slide.imgSrc} alt={slide.alt} layout="fill" objectFit="cover" />
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ${slide.bgColor}`} style={{ zIndex: 2 }}>
              <div className={`flex flex-col items-center justify-center h-full ${slide.textColor}`}>
                <h2 className="text-4xl max-w-md">{slide.text}</h2>
                <p className="max-w-md">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-row items-center justify-between opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ zIndex: 3 }}>
        <button className="text-white text-2xl px-4 py-2 bg-black bg-opacity-50 hover:bg-opacity-75" onClick={handlePrevClick}>Prev</button>
        <button className="text-white text-2xl px-4 py-2 bg-black bg-opacity-50 hover:bg-opacity-75" onClick={handleNextClick}>Next</button>
      </div>
      {showGallery && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-2">
            {bannerSlides.map((slide, index) => (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => setCurrentSlide(index)}
              >
                <Image src={slide.imgSrc} alt={slide.alt} width={120} height={80} objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BannerSlider;
