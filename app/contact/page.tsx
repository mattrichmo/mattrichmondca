import ContactForm from "@/components/forms/contact-form";
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
    <div className={`flex flex-col items-center ${lora.variable}`}>
      <div className={`mt-10 w-full md:w-2/3`}>
        <h1 className="font-lora text-4xl font-semibold">Hit Me Up. </h1>
        <h2 className="font-lora mt-2 text-2xl font-bold md:mr-24">
          I&apos;m only using this page to test Form Submission, so probably better to email me directly
        </h2>
        <Link href="mailto:hello@mattrichmond.ca">
          <p className="mb-2 mt-4 hover:underline"> hello@mattrichmond.ca</p>
        </Link>
      </div>
      <div className="mt-10 flex w-full flex-col md:w-2/3 md:flex-row">
        <div className="w-full pr-0 md:w-1/2 md:pr-4">
          <SocialLinks />

        </div>
        <div className="w-full pl-0 md:w-1/2 md:pl-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}


