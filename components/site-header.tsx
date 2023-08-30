"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  // State variables
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Event listeners and handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    toggleVisibility(); // Toggle overlay visibility
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsVisible(false); // Ensure overlay is closed
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };


  // Body scroll management
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMobileMenuOpen]);

  // Icon rendering based on state
  const mobileMenuIcon = isMobileMenuOpen ? (
    <Icons.close className="h-5 w-5" />
  ) : (
    <Icons.menu className="h-5 w-5" />
  );

  return (
    <header>
      {/* Header content */}
      <div
        className={`container z-50 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 ${
          isMobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        {/* Mobile Menu Button */}
        <div className="z-50 md:hidden">
          <Button
            onClick={toggleMobileMenu}
            className={`${buttonVariants({
              size: "sm",
              variant: "ghost",
            })} z-50`} // Ensure button is on top
          >
            {mobileMenuIcon}
            <span className="sr-only">Menu</span>
          </Button>
        </div>

        {/* Main Nav (Visible on medium and larger screens) */}
        <div className="hidden md:flex">
          <MainNav items={siteConfig.mainNav} />
        </div>

        {/* Icons and Theme Toggle */}
        <div className={`flex flex-1 items-center justify-end space-x-4 sm:flex`}>
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
      <div className="z-49 fixed left-0 top-0 h-full w-full bg-white transition-all duration-300 ease-in-out dark:bg-black">          
      <div className="ml-3 mt-1 flex p-4">
            
          </div>
          <MobileNav items={siteConfig.mainNav} onItemClick={closeMobileMenu} />
        </div>
      )}
    </header>
  );
}