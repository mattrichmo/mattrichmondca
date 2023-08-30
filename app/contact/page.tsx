import ContactForm from "@/components/forms/contact-form";
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
      <div className={`w-full md:w-2/3 mt-10`}>
        <h1 className="text-4xl font-lora font-semibold">Hit Me Up. </h1>
        <h2 className="text-2xl font-lora font-bold mt-2 md:mr-24">
          I'm only using this page to test Form Submission, so probably better to email me directly
        </h2>
        <Link href="mailto:hello@mattrichmond.ca">
          <p className="mt-4 mb-2 hover:underline"> hello@mattrichmond.ca</p>
        </Link>
      </div>
      <div className="w-full md:w-2/3 mt-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-4">
          <p>test test </p>
          <p>test test </p>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}


