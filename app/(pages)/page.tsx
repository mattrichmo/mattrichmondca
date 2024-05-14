import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <article>
    <section className="mx-4 flex flex-col items-center gap-6 pb-16 pt-6 md:mx-12 md:py-10">
      <div className="mt-6 max-w-[1200px]">
        <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl md:ml-12">
          Hello, I'm Matt.
        </h1>
        <p className="text-md mt-4 font-bold md:ml-12">
        Welcome to my evolving website where I experiment with new technologies and document my creative journey.
        </p>

        <div className="mt-6 md:ml-12 text-sm ">
        <p className = "mt-4 ">
          My professional journey encompasses diverse roles: grip, photographer, designer, and programmer. Each of these disciplines contributes uniquely to my comprehensive approach to creative projects but share a common thread of construction and innovation.
        </p>
        <p className = "mt-8">
        As a grip, I'm deeply involved in shaping the scenes of a film. From handling the intricacies of lighting and camera setups to rigging everything securely, I make sure every shot looks its best. This hands-on experience with lighting and framing not only enhances the storytelling in film but also deeply influences my photography. I bring the same keen eye for detail and understanding of visual aesthetics to capturing images, using my skills to spotlight moments that might otherwise go unnoticed. My background in both rigging and safety means I'm always prepared, whether on a bustling film set or when I'm out in nature with my camera. Bridging these two worlds has enriched my perspective, allowing me to see and show things in a unique light.
        </p>
        <p className = "mt-8">
        My fascination with coding and data extends into every facet of my creative work. As a hobbyist programmer, I tackle challenges that pique my interest, automating tedious tasks to streamline my creative process. This technical prowess also informs my approach to managing and constructing datasets, where I employ techniques like data scraping to gather insights that enhance my projects, from photography to design.        </p>
        <p className = "mt-8">
        My foundation in design and branding is where my technical skills meet my creative vision. Crafting digital spaces that are not only visually appealing but also intuitive and user-friendly reflects my dedication to creating seamless user experiences. This background in graphic design not only enriches my capabilities but also amplifies my work across various mediums, blending the tangible with the digital to innovate and inspire. Leveraging my diverse skill set, I continually strive to push the boundaries of creativity and collaboration, constructing compelling narratives whether behind the camera, at the coding desk, or in the design studio.        </p>
        <p className = "mt-8">
        So explore my site, have fun while you're and don't mind any errors you may come accross. </p>
          </div>
          
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
