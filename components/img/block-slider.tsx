import Image from "next/image";

const BlockSlider = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div id="default-carousel" className="relative" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white dark:text-gray-800 sm:text-3xl">First Slide</span>
            <Image src="/public/img/design/aurora/Aurora - Banana Split 1080x1920.png" className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." width={640} height={0} />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." fill />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." fill />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          <button type="button" className="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="h-3 w-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
        {/* Slider controls */}
        <button type="button" className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none" data-carousel-prev>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button type="button" className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none" data-carousel-next>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlockSlider;
