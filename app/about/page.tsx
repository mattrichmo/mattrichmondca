import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="mx-4 flex flex-col items-center gap-6 pb-8 pt-6 sm:mx-6 sm:ml-0 md:mx-12 md:py-10">
      <div className="xs:mt-6 max-w-[980px]">
        <div className="flex flex-col items-start gap-4">
          <h1 className="ml-0 mt-8 text-left text-2xl leading-tight tracking-tighter md:text-3xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Hello! I&apos;m Matt, a Grip in the film industry with a deep passion for photography, creating, and coding.
          </h1>
          <p className="ml-0 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            My journey in the film world really took off during a challenging global period, where I found my niche working behind the scenes in Vancouver. This was a time that tested and honed my storytelling abilities and allowed me to make a unique contribution to the art of visual storytelling. After this period, the industry faced another hurdle: the longest actor and writer strike in history. This unexpected twist reignited my long-standing interest in data and coding. It was a perfect chance to revisit and refine these skills, blending them with my film experience.
          </p>
          <p className="ml-0 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            My earlier days were marked by roles in branding and marketing at Aurora Cannabis, where I dived into the fast-paced world of brand building. I&apos;ve also ventured into entrepreneurship, launching my own business. While it didn&apos;t take off as I hoped, the experience was rich with lessons. Branding has always been a central aspect of my work. I thrive on turning ideas into tangible, resonant brands. This path has equipped me with a diverse skill set, from crafting narratives in film to developing strong brand identities and navigating business complexities.
          </p>
          <h2 className="text-md ml-0 mt-6 leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            What really excites me is collaborating with other creative minds.
          </h2>
          <p className="ml-0 mt-6 max-w-[800px] text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            There&apos;s a special thrill in bringing an idea to life, nurturing it from concept to reality. With such a varied background, I&apos;m looking forward to what the future holds – more creative projects, more innovation, and more impactful accomplishments.
          </p>
        </div>
      </div>
    </section>
  );
}
