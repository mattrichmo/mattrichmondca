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
      <div className={`ml-12 mt-10 w-full sm:ml-4 md:w-2/3`}>
        <h1 className="font-lora text-4xl font-semibold">Hit Me Up. </h1>
        <h2 className="font-lora mt-2 text-2xl font-bold md:mr-24">
          I&apos;m only using this page to test Form Submission, so probably better to email me directly
        </h2>
        <Link href="mailto:hello@mattrichmond.ca">
          <p className="mb-2 mt-4 hover:underline"> hello@mattrichmond.ca</p>
        </Link>
      </div>
      <div className="mt-10 flex w-full flex-col md:w-2/3 md:flex-row " >
        <div className="ml-4 w-full pr-0 sm:ml-4 md:w-1/2 md:pr-4 ">
          <SocialLinks />
        </div>
        <div className="mx-auto flex w-full items-center justify-center pl-0 md:w-1/2"> {/* Updated line */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
