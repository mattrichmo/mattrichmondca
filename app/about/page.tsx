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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim est vitae semper luctus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Suspendisse varius, nulla nec condimentum vulputate, augue tortor facilisis purus, at eleifend libero mi eu metus.
          Suspendisse tristique augue ut nisi eleifend malesuada. Cras vel nibh purus. Quisque at massa eu arcu facilisis rhoncus.
          Vivamus dignissim urna in quam gravida, vel eleifend eros varius.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Ut posuere pellentesque vestibulum. Sed et dapibus erat, ut tincidunt erat.
          Fusce at pharetra mauris. Nullam ac eros non purus hendrerit tincidunt.
          Ut tincidunt bibendum libero, non pharetra justo tincidunt eu. Maecenas malesuada efficitur elit, id lacinia ligula.
          Vivamus eleifend hendrerit dictum.
        </p>
      </div>
      <div className="flex max-w flex-col items-start gap-4 ml-12 mr-12 lg:ml-12 sm:ml-4 lg:mr-12 sm:mr-4">
        <h2 className="text-md font-extrabold leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5" }}>
          Happiest When Building.
        </h2>
      </div>
      <div className="flex max-w flex-col items-start gap-4 ml-12 mr-12 lg:ml-12 sm:ml-4 lg:mr-12 sm:mr-4">
          <p className="text-md font-serif max-w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec augue vel turpis pellentesque tincidunt vel at libero.
          Proin pharetra, augue ac blandit commodo, arcu justo blandit mi, a commodo orci felis a urna.
          Nullam facilisis nisi in arcu luctus, eu tincidunt nulla vulputate. Fusce nec massa ut tellus luctus accumsan ac in elit.
          Etiam et velit ipsum. Integer a orci libero. Sed rhoncus, ante ac efficitur commodo, neque libero vehicula orci, a posuere erat felis et justo.
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
