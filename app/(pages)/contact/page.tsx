import SocialLinks from "@/components/links/social-link-list";
import Link from "next/link";
import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function ContactPage() {
  return (
    <div className={`flex flex-col items-center ${lora.variable} mx-4 md:mx-12`}>
      <div className={`ml-2 mt-10 w-full sm:ml-4 md:ml-12 md:w-2/3`}>
        <h1 className="font-lora text-4xl font-semibold">Hit Me Up.</h1>
        <p> If you have ideas, then let&apos;s get creative and explore what we can create together.</p>
        <Link href="mailto:hello@mattrichmond.ca">
          <p className="mb-2 mt-4 cursor-pointer text-2xl hover:underline">hello@mattrichmond.ca</p>
        </Link>
      </div>
      <div className="mt-10 flex w-full flex-col md:w-2/3 md:flex-row">
        <div className="ml-2 w-full pr-0 md:ml-4 md:w-1/2 md:pr-4">
          <p className="mb-2 mt-4 cursor-pointer text-2xl hover:underline">Social Links:</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
