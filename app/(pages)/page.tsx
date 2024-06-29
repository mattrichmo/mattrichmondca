import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <article>
    <section className="mx-4 flex flex-col items-center gap-6 pb-16 pt-6 md:mx-12 md:py-10">
      <div className="mt-6 max-w-[1200px]">
        <div className="flex flex-col items-start gap-4">
        <h1 className="text-xl md:ml-12">
          Hello, I&apos;m Matt.
        </h1>
        <p className="text-md mt-4 font-bold md:ml-12">
        Welcome to my evolving website where I experiment with new technologies and document my creative journey.
        </p>


          
        </div>
        <p className="text-sm mt-12 font-bold md:ml-12">
          Discover more about me through my
          <Link href={siteConfig.links.github} className="hover:text-link-hover px-1 underline">
            GitHub,
          </Link>
          <Link href={siteConfig.links.pexels} className="hover:text-link-hover px-1 underline">
            photography work,
          </Link>
          <Link href={siteConfig.links.instagram} className="hover:text-link-hover px-1 underline">
            Instagram,
          </Link>
          or
          <Link href={siteConfig.links.linkedin} className="hover:text-link-hover px-1 underline">
            LinkedIn.
          </Link>
        </p>
      </div>
    </section>
    </article>
  );
}
