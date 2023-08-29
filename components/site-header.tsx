import Link from "next/link";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className={`container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
            })}
          >
            <Icons.menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {/* Main Nav (Visible on non-mobile) */}
        {!isMobileMenuOpen && (
          <MainNav items={siteConfig.mainNav} />
        )}

        {/* Icons and Theme Toggle */}
        <div className={`flex flex-1 items-center justify-end space-x-4 ${isMobileMenuOpen ? 'hidden' : 'sm:flex'}`}>
          <nav className="flex items-center space-x-1">
            <Link
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
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
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
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link href="#">Use Client</Link>
              </li>
              {/* Add other menu items here */}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
