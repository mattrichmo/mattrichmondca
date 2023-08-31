"use client";


import Image from "next/image";
import { useEffect, useRef } from "react";

export default function FullScreenSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left, behavior: "smooth" });
      }

      setTimeout(moveSlide, 3000);
    };

    setTimeout(moveSlide, 3000);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center " ref={sliderRef}>
      <div className="relative flex-none w-full">
        <Image
          src="https://images.unsplash.com/photo-1686165159819-50329ffec09b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="Slide 1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-4xl max-w-md text-black">Slide 1</h2>
          <p className="max-w-md text-white">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
        </div>
      </div>
      <div className="bg-pink-400 text-black space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">Slide 2</h2>
        <p className="max-w-md">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
      </div>
      <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">Slide 3</h2>
        <p className="max-w-md">Lorem Ipsum Lorem Ipsum Lorem Ipsum .</p>
      </div>
    </div>
  );
}