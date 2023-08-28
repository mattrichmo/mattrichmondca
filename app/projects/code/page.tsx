import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Link from "next/link";
import { SiteConfig, siteConfig } from "@/config/site";

import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function CodeProjectPage() {
    return (
      <section className={`h-screen flex flex-col justify-center items-center gap-6 pb-8 pt-6 md:py-10 ${lora.variable}`}>
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="font-lora text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
            Working On it.
            </h1>
            </div>
            </section>
  );
}
