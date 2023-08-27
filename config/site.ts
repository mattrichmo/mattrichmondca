

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Made by Matt",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact", 
      href: "/contact"
    },
  ],
  links: {
    twitter: "https://twitter.com/#",
    github: "https://github.com/#",
    docs: "https://#.com",
    facebook: "https://facebook.com/#",
    linkedin: "https://linkedin.com/#",
    pinterest: "https://pinterest.com/#",
    instagram: "https://instagram.com/#",
    tiktok: "https://tiktok.com/#",
    discord: "https://discord.com/#",
  },
}
