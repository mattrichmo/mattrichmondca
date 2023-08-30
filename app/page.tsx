import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function IndexPage() {
  return (
    <section className={`mx-12 flex h-screen flex-col items-center gap-6 pb-4 pt-6 sm:ml-4 md:py-10${lora.variable}`}>
      <div className="xs:mt-6">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="font-lora mt-8 text-left text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl" style={{ lineHeight: "1.5" }}>
            Hi, My Name Is Matt. <br className="hidden sm:inline" />
            This is my website, and it&apos;s continually under development, always changing as I try new technologies out. <br />
            To get a better idea of who I am, you can check out my
            <Link href={siteConfig.links.github} className="mx-1 underline hover:text-blue-500 hover:underline">
              GitHub,
            </Link>
            <Link href={siteConfig.links.pexels} className="mx-1 underline hover:text-blue-500 hover:underline">
              My Photography,
            </Link>
            <Link href={siteConfig.links.instagram} className="mx-1 underline hover:text-blue-500 hover:underline">
              IG,
            </Link>
            or, 
            <Link href={siteConfig.links.linkedin} className="mx-1 underline hover:text-blue-500 hover:underline">
              Linkedin.
            </Link>
          </h1>
          <h2 className="sm:text-md text-center text-lg font-bold tracking-tighter sm:text-left">
            Or alternatively, view my 
            <Link href="/about/film-cv" className="mx-1 underline hover:text-blue-500 hover:underline">
              Grip Resume
            </Link>
          </h2>

        </div>
        <div className="grid mt-24 mb-24 sm:mx-12">
          <h3 className="text-sm font-bold tracking-tighter sm:text-left">
            Found a typo or bug? <Link href="https://github.com/mattrichmo/mattrichmondca" className="text-xs font-semibold hover:underline"> submit a pull request. </Link> </h3>
  </div>

      </div>
    </section>
  );
}