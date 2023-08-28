import { Icons } from "@/components/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";


export default function ContactPage () {
  return (
    <section className="flex h-screen flex-col gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-12 flex h-[600px] flex-col items-center justify-center sm:mx-4 md:mx-12">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl" style={{ lineHeight: "1.2" }}>
          Ready to shake things up?
        </h1>
        <h2 className="text-lg font-extrabold leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5" }}>
          Got a wild idea? Let`&apos`s bring it to life.
        </h2>
      </div>
      <div className="mx-12 mt-8 flex flex-row justify-center gap-8 sm:mx-4 md:mx-12">
        <div className="w-1/2 rounded-lg bg-background p-8 shadow-lg ">
          
          <p className="mt-4">Email: info@example.com</p>
          <ul className="mt-4 flex space-x-4">
            <li><Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">Gh</span>
              </div>
            </Link>
            </li>
            <li><Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">In</span>
              </div>
            </Link></li>
            <li><Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.facebook className="h-5 w-5" />
                <span className="sr-only">Fb</span>
              </div>
            </Link></li>
            <li><Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">Li</span>
              </div>
            </Link></li>
          </ul>
        </div>
        <div className="w-1/2 rounded-lg bg-background p-8 shadow-lg ">
  <div className="p-4">
    <h3 className="mb-4 text-2xl font-bold">Speak Your Mind</h3>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="mb-2  block font-bold">Name</label>
        <input type="text" id="name" name="name" className="w-full rounded-lg border border-black p-2 " />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2  block font-bold">Email</label>
        <input type="email" id="email" name="email" className="w-full rounded-lg border border-black p-2 " />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="mb-2  block font-bold">Message</label>
        <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-black p-2 "></textarea>
              </div>
      <button type="submit" className="rounded-lg bg-white px-4 py-2 font-bold text-black transition duration-200 hover:bg-gray-200">Send Message</button>
    </form>
  </div>
</div>

        </div>
        </section>
  );
              }

    
