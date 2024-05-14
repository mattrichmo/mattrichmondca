import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <article>
    <section className="mx-4 flex flex-col items-center gap-6 pb-16 pt-6 md:mx-12 md:py-10">
      <div className="mt-6 max-w-[1200px]">
        <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl md:ml-12">
          Welcome To My Photography Page
        </h1>
        <p className="text-sm md:ml-12">
        <Link href="https://mattrichmo.com/" className="hover:text-link-hover px-1 underline">
            Main Photography Page
          </Link>
          </p>
        </div>
      </div>
    </section>
    </article>
  );
}
