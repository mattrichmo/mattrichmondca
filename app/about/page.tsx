import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="mx-4 flex flex-col items-center gap-6 pb-8 pt-6 sm:mx-6 sm:ml-0 md:mx-12 md:py-10">
      <div className="xs:mt-6 max-w-[980px]">
        <div className="flex flex-col items-start gap-4">
          <h1 className="ml-0 mt-8 text-left text-2xl leading-tight tracking-tighter md:text-3xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Hi, I&apos;m Matt.
          </h1>
          <h2 className="text-md ml-0 mt-2 leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            I am a Grip in the film industry, and I love photography, design, and code.
          </h2>
          <p className="ml-0 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Throughout my journey, I&apos;ve truly embodied the roles of a &quot;Creator&quot; and &quot;Builder&quot;, traits that have defined my path. My recent experiences have been quite diverse; during the pandemic, I immersed myself in the Vancouver film industry as a Grip, contributing to the magic of visual storytelling behind the scenes. Before that, I found myself engaged in brand-building endeavors within the dynamic landscape of Aurora Cannabis. Reflecting on my journey, I ventured into entrepreneurship with my own company, a venture that might not have reached the heights I envisioned, but one that undoubtedly enriched me with invaluable lessons.
          </p>
          <p className="ml-0 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            My earlier days were marked by a deep involvement in creating brands, an arena where my passion for shaping concepts into something substantial truly shone. Each step has added to my arsenal of skills—whether it was the art of crafting compelling narratives in the film industry, establishing resonant brand identities, or navigating the complexities of running a business.
          </p>
          <h2 className="text-md ml-0 mt-6 leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Happiest When Creating With Like-minded People
          </h2>
          <p className="ml-0 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            As I gaze ahead, my enthusiasm for both creating and building remains undiminished. I am driven to channel my creativity and drive into future projects that embody this innate passion. There&apos;s an undeniable thrill in taking an idea, nurturing it, and bringing it into existence. With my background as a testament to my dedication, I eagerly anticipate the opportunity to continue this journey of transforming imagination into reality, leaving a trail of meaningful accomplishments along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
