import { Icons } from "@/components/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";


export default function ContactPage () {
  return (
    <section className="h-screen flex flex-col gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center justify-center h-[600px] ml-12 mr-12 md:ml-12 md:mr-12 sm:ml-4 sm:mr-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl" style={{ lineHeight: "1.2" }}>
          Ready to shake things up?
        </h1>
        <h2 className="text-lg font-extrabold leading-tight tracking-tighter md:text-2xl" style={{ lineHeight: "1.5" }}>
          Got a wild idea? Let's bring it to life.
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-8 mt-8 ml-12 mr-12 md:ml-12 md:mr-12 sm:ml-4 sm:mr-4">
        <div className="w-1/2 bg-background p-8 rounded-lg shadow-lg ">
          <img src="path_to_your_image" alt="Describe the image" />
          <p className="mt-4">Email: info@example.com</p>
          <ul className="flex space-x-4 mt-4">
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
        <div className="w-1/2 bg-background p-8 rounded-lg shadow-lg ">
  <div className="p-4">
    <h3 className="text-2xl font-bold mb-4">Speak Your Mind</h3>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block  font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full border border-black p-2 rounded-lg " />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block  font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full border border-black p-2 rounded-lg " />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block  font-bold mb-2">Message</label>
        <textarea id="message" name="message" rows="4" className="w-full border border-black p-2 rounded-lg "></textarea>
      </div>
      <button type="submit" className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200">Send Message</button>
    </form>
  </div>
</div>

        </div>
        </section>
  )
              }

    
