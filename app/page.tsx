import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <section className="mx-12 flex h-screen flex-col items-center gap-6 pb-4 pt-6 sm:ml-4 md:py-10">
      <div className="xs:mt-6">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="mt-8 ml-12 text-left text-2xl leading-tight tracking-tighter md:text-3xl" style={{ lineHeight: "1.5", fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Hi, My Name Is Matt. <br className="hidden sm:inline" />
            This is my website, and it&apos;s continually under development, and always changing as I try new technologies out. <br />
            To get a better idea of who I am, you can check out my
            <Link href={siteConfig.links.github} className="mx-1 underline hover:text-link-hover hover:underline">
              GitHub,
            </Link>
            <Link href={siteConfig.links.pexels} className="mx-1 underline hover:text-link-hover hover:underline">
              My Photography,
            </Link>
            <Link href={siteConfig.links.instagram} className="mx-1 underline hover:text-link-hover hover:underline">
              IG,
            </Link>
            or, 
            <Link href={siteConfig.links.linkedin} className="mx-1 underline hover:text-link-hover hover:underline">
              Linkedin.
            </Link>
          </h1>
          <h2 className="sm:text-md ml-12 text-center text-lg tracking-tighter sm:text-left" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            Or alternatively, view my 
            <Link href="/about/film-cv" className="mx-1 underline hover:link-hover hover:underline">
              Grip Resume
            </Link>
          </h2>
          <p className="ml-12 mt-6 text-lg" style={{ fontFamily: "ETBembo, Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif", fontWeight: "normal" }}>
            I wear many hats: I am a grip, photographer, designer, and an aspiring data engineer. These roles may seem disparate, but they are all threads in the same tapestry: the pursuit of creativity and the joy of building. As a grip, I construct the physical world that the camera captures, handling the intricacies of lighting and rigging to create a visually compelling scene. Through photography, I frame the world in unique ways, capturing moments and details that others might overlook. My design work allows me to build again, but this time in digital spaces, creating interfaces that are not only aesthetically pleasing but also intuitive and user-friendly. As a data enthusiast, I am learning to construct and manage data sets, delving into the world of data scraping and building my own data sets. Each role enhances the other, providing me with a unique lens through which to approach problems and projects. My diverse background enables me to bring a multifaceted approach to my work, integrating the technical with the artistic, the tangible with the digital, all grounded in creativity and the desire to build and create.
          </p>
        </div>
      </div>
    </section>
  );
}
