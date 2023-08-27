import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function IndexPage() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center gap-6 pb-8 pt-6 md:py-10 ">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" style={{ lineHeight: "1.5" }}>
            Hi, My Name Is Matt. <br className="hidden sm:inline" />
            I am a <Link href="/filmCV"><u>Grip</u></Link> in the film industry, and I love <Link href="/photography"><u>photography</u></Link>, <Link href="/design"><u>design</u></Link>, and <Link href="/code"><u>Code</u></Link>.
          </h1>
        </div>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className={buttonVariants()}
          >
            See My Work
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            Hit Me Up
          </Link>
        </div>
      </section>

    </>
  )
}
