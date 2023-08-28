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
    <section className={`h-screen flex flex-col justify-center items-center gap-6 pb-8 pt-6 md:py-10 ${lora.variable}`}>
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="font-lora text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Hi, My Name Is Matt. <br className="hidden sm:inline" />
          This is my website, and it's continually under development, always changing as I try new technologies out. <br />
          To get a better idea of who I am, you can check out my
          <Link href={siteConfig.links.github} className="mx-1 underline hover:underline hover:text-blue-500">
            GitHub,
          </Link>
          <Link href={siteConfig.links.pexels} className="mx-1 underline hover:underline hover:text-blue-500">
            My Photography,
          </Link>
          <Link href={siteConfig.links.instagram} className="mx-1 underline hover:underline hover:text-blue-500">
            IG,
          </Link>
          or, 
          <Link href={siteConfig.links.linkedin} className="mx-1 underline hover:underline hover:text-blue-500">
            Linkedin.
          </Link>
        </h1>
        <h2 className="text-lg font-bold tracking-tighter sm:text-md">
        Or alternatively, view my 
        <Link href="/about/film-cv" className="mx-1 underline hover:underline hover:text-blue-500">
            Grip Resume
          </Link>
        </h2>
      </div>
    </section>
  );
}
