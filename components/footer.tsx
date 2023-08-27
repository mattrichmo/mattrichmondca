import Link from "next/link";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Icons.logo className="h-8 w-8" />
            </div>
            <p className="mt-4 max-w-xs">
              "Learn The Rules Like a Pro, So You Can Break Them Like an Artist." <br /> - Pablo Picasso
            </p>
          </div>
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:col-span-2">
            <div>
              <p className="font-medium">Projects</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/projects" className="transition hover:opacity-75">
                    What I'm Working On Now
                  </Link>
                </li>
                <li>
                  <Link href="/projects/code" className="transition hover:opacity-75">
                    Code
                  </Link>
                </li>
                <li>
                  <Link href="/projects/design" className="transition hover:opacity-75">
                    Design
                  </Link>
                </li>
                <li>
                  <Link href="/projects/creative" className="transition hover:opacity-75">
                    Creative
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Me</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="transition hover:opacity-75">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:opacity-75">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/about/film-cv" className="transition hover:opacity-75">
                    Film CV
                  </Link>
                </li>
                <li>
                  <Link href="/link-list" className="transition hover:opacity-75">
                    Link List
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Photography</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/photo/selected-galleries" className="transition hover:opacity-75">
                    Favourite Photo Galleries
                  </Link>
                </li>
                <li>
                  <Link href="/photo/external-galleries" className="transition hover:opacity-75">
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
  );
}
