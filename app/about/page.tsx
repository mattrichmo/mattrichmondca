export default function AboutPage() {
  return (
    <section className="h-screen flex flex-col gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w flex-col items-start gap-4 ml-12 mr-12 lg:ml-12 sm:ml-4 lg:mr-12 sm:mr-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" style={{ lineHeight: "1.5" }}>
          Hi, I'm Matt. 
        </h1>
        <h2 className="text-md font-extrabold leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5" }}>
          I am a Grip in the film industry, and I love photography, design, and code.
        </h2>
      </div>
      <div className="flex max-w flex-col items-start gap-4 ml-12 mr-12 lg:ml-12 sm:ml-4 lg:mr-12 sm:mr-4">
        <p className="text-md font-serif max-w-[800px]">
        Throughout my journey, I've truly embodied the roles of a "Creator" and "Builder," traits that have defined my path. My recent experiences have been quite diverse; during the pandemic, I immersed myself in the Vancouver film industry as a Grip, contributing to the magic of visual storytelling behind the scenes. Before that, I found myself engaged in brand-building endeavors within the dynamic landscape of Aurora Cannabis. Reflecting on my journey, I ventured into entrepreneurship with my own company, a venture that might not have reached the heights I envisioned, but one that undoubtedly enriched me with invaluable lessons.        </p>
      </div>
      
      <div className="flex max-w flex-col items-start gap-4 ml-12 mr-12 lg:ml-12 sm:ml-4 lg:mr-12 sm:mr-4">
          <p className="text-md font-serif max-w-[800px]">
          My earlier days were marked by a deep involvement in creating brands, an arena where my passion for shaping concepts into something substantial truly shone. Each step has added to my arsenal of skills—whether it was the art of crafting compelling narratives in the film industry, establishing resonant brand identities, or navigating the complexities of running a business.
        </p>
      </div>
      <div className="flex max-w flex-col items-start gap-4 ml-12 mr-12 lg:ml-12 sm:ml-4 lg:mr-12 sm:mr-4">
        <h2 className="text-sm font-extrabold leading-tight tracking-tighter md:text-lg" style={{ lineHeight: "1.5" }}>
          Happiest When Creating With Like-minded People
        </h2>
      </div>
      <div className="flex max-w flex-col items-start gap-4 ml-12 mr-12 lg:ml-12 sm:ml-4 lg:mr-12 sm:mr-4">
          <p className="text-md font-serif max-w-[800px]">
          As I gaze ahead, my enthusiasm for both creating and building remains undiminished. I am driven to channel my creativity and drive into future projects that embody this innate passion. There's an undeniable thrill in taking an idea, nurturing it, and bringing it into existence. With my background as a testament to my dedication, I eagerly anticipate the opportunity to continue this journey of transforming imagination into reality, leaving a trail of meaningful accomplishments along the way.
        </p>
      </div>
      <div className="flex max-w justify-center mt-12 mb-auto">
        <button className="bg-black text-white font-semibold py-2 px-4">
          View My Portfolio
        </button>
      </div>
    </section>
  );
}
