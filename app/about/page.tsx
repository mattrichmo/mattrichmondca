import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="mx-12 flex h-screen flex-col items-center gap-6 pb-4 pt-6 sm:ml-4 md:py-10">
      <div className="xs:mt-6">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="ml-12 mt-8 text-left text-2xl leading-tight tracking-tighter md:text-3xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Hi, I&apos;m Matt. 
          </h1>
          <h2 className="text-md ml-12 mt-2 leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            I am a Grip in the film industry, and I love photography, design, and code.
          </h2>
          <p className="ml-12 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Throughout my journey, I&apos;ve truly embodied the roles of a &quot;Creator&quot; and &quot;Builder&quot;, traits that have defined my path. My recent experiences have been quite diverse; during the pandemic, I immersed myself in the Vancouver film industry as a Grip, contributing to the magic of visual storytelling behind the scenes. Before that, I found myself engaged in brand-building endeavors within the dynamic landscape of Aurora Cannabis. Reflecting on my journey, I ventured into entrepreneurship with my own company, a venture that might not have reached the heights I envisioned, but one that undoubtedly enriched me with invaluable lessons.
          </p>
          <p className="ml-12 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            My earlier days were marked by a deep involvement in creating brands, an arena where my passion for shaping concepts into something substantial truly shone. Each step has added to my arsenal of skills—whether it was the art of crafting compelling narratives in the film industry, establishing resonant brand identities, or navigating the complexities of running a business.
          </p>
          <h2 className="text-md ml-12 mt-6 leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Happiest When Creating With Like-minded People
          </h2>
          <p className="ml-12 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            As I gaze ahead, my enthusiasm for both creating and building remains undiminished. I am driven to channel my creativity and drive into future projects that embody this innate passion. There&apos;s an undeniable thrill in taking an idea, nurturing it, and bringing it into existence. With my background as a testament to my dedication, I eagerly anticipate the opportunity to continue this journey of transforming imagination into reality, leaving a trail of meaningful accomplishments along the way.
          </p>
        </div>
      </div>
      <div className="max-w mx-12 mb-12 mt-auto flex justify-center">
        <Link href="/projects">
          <Button className="bg-black px-4 py-2 font-semibold text-white">
            View My Portfolio
          </Button>
        </Link>
      </div>
    </section>
  );
}
