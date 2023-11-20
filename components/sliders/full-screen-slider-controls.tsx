"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FullScreenSliderWithControls() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  useEffect(() => {
    console.log(`Scrolling to slide ${currentSlide}`);
  }, [currentSlide]);

  const slideContent = [
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

  return (
    <div className="relative h-screen w-full overflow-hidden text-center">
      <div className="absolute left-0 top-0 flex h-full w-full flex-row" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "transform 0.5s ease" }}>
        {slideContent.map((slide, index) => (
          <div key={index} className={`relative h-full w-full flex-none`} style={{ zIndex: 1 }}>
            <Image src={slide.imgSrc} alt={slide.alt} layout="fill" objectFit="cover" />
            <div className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2${slide.bgColor}`} style={{ zIndex: 2 }}>
  <div className={`flex h-full flex-col items-center justify-center ${slide.textColor}`}>
    <h2 className="max-w-md text-4xl">{slide.text}</h2>
    <p className="max-w-md">{slide.description}</p>
  </div>
</div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-between opacity-0 transition-opacity duration-300 hover:opacity-100" style={{ zIndex: 3 }}>
        <button className="bg-black bg-opacity-50 px-4 py-2 text-2xl text-white hover:bg-opacity-75" onClick={handlePrevClick}>Prev</button>
        <button className="bg-black bg-opacity-50 px-4 py-2 text-2xl text-white hover:bg-opacity-75" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
