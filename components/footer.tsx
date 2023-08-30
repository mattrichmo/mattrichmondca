import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
<div className="grid flex-col items-center sm:flex-row sm:items-start sm:justify-between sm:space-x-4 sm:space-y-4">
  <div className="flex items-center space-x-2">
    <Icons.logo className="h-8 w-8" />
    <span className="inline-block text-lg font-bold">{siteConfig.name}</span>
  </div>
  <p className="mt-4  max-w-xs text-left text-sm sm:text-left sm:text-base">
    &quot;Learn The Rules Like a Pro, So You Can Break Them Like an Artist.&quot; <br /> - Pablo Picasso or maybe Buddha
  </p>
  <p className="text-sm font-semibold tracking-tighter sm:text-left mt-2">
            Found a typo or bug? 
            <Link href="https://github.com/mattrichmo/mattrichmondca" target="_blank" className="text-xs font-semibold hover:underline ml-1">
               submit a pull request or issue here. 
            </Link> </p>
</div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-medium">Projects</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/projects" className=" transition hover:opacity-75">
                    What I&apos;m Working On Now
                  </Link>
                </li>
                <li>
                  <Link href="/projects/code" className=" transition hover:opacity-75">
                    Code 
                  </Link>
                </li>
                <li>
                  <Link href="/projects/design" className=" transition hover:opacity-75">
                    Design
                  </Link>
                </li>
                <li>
                  <Link href="/projects/creative" className=" transition hover:opacity-75">
                    Creative
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Me</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/about" className=" transition hover:opacity-75">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className=" transition hover:opacity-75">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/about/film-cv" className=" transition hover:opacity-75">
                    Film CV
                  </Link>
                </li>
                <li>
                  <Link href="/links" className=" transition hover:opacity-75">
                    Link List                                    
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Photography</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/photo/selected-galleries" className=" transition hover:opacity-75">
                    Favourite Photo Galleries             
                  </Link>
                </li>
                <li>
                  <Link href="/photo/external-galleries" className=" transition hover:opacity-75">
                    External Galleries              
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">
          &copy; 2023. Matt Richmond, All rights reserved. Made with Love using React, Next.js, TailwindCSS and Shadcn-UI.
        </p>
      </div>
    </footer>
  )
}