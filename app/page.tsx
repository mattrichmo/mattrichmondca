import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <section className="mx-4 flex flex-col items-center gap-6 pb-16 pt-6 md:mx-12 md:py-10">
      <div className="xs:mt-6 max-w-full">
        <div className="flex flex-col items-start gap-4">
          <h1 className="ml-2 mt-8 text-left text-2xl leading-tight tracking-tighter md:ml-12 md:text-3xl">
            Hi, My Name Is Matt. <br className="hidden sm:inline" />
            This is my website, and it&apos;s continually under development, always changing as I try new technologies out. <br />
            To get a better idea of who I am, you can check out my
            <Link href={siteConfig.links.github} className="hover:text-link-hover mx-1 underline hover:underline">
              GitHub,
            </Link>
            <Link href={siteConfig.links.pexels} className="hover:text-link-hover mx-1 underline hover:underline">
              My Photography,
            </Link>
            <Link href={siteConfig.links.instagram} className="hover:text-link-hover mx-1 underline hover:underline">
              IG,
            </Link>
            or,
            <Link href={siteConfig.links.linkedin} className="hover:text-link-hover mx-1 underline hover:underline">
              Linkedin.
            </Link>
          </h1>
          <h2 className="sm:text-md ml-2 text-center text-lg tracking-tighter sm:text-left md:ml-12">
            Or alternatively, view my
            <Link href="/about/film-cv" className="hover:link-hover mx-1 underline hover:underline">
              Grip Resume
            </Link>
          </h2>
          <p className="ml-2 mt-6 text-lg md:ml-12">
            I wear many hats: I am a grip, photographer, designer, and an aspiring data engineer. These roles may seem disparate, but they are all threads in the same tapestry: the pursuit of creativity and the joy of building. As a grip, I construct the physical world that the camera captures, handling the intricacies of lighting and rigging to create a visually compelling scene. Through photography, I frame the world in unique ways, capturing moments and details that others might overlook. My design work allows me to build again, but this time in digital spaces, creating interfaces that are not only aesthetically pleasing but also intuitive and user-friendly. As a data enthusiast, I am learning to construct and manage data sets, delving into the world of data scraping and building my own data sets. Each role enhances the other, providing me with a unique lens through which to approach problems and projects. My diverse background enables me to bring a multifaceted approach to my work, integrating the technical with the artistic, the tangible with the digital, all grounded in creativity and the desire to build and create.
          </p>
        </div>
      </div>
    </section>
  );
}
