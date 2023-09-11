"use client"
import * as React from "react"
import { useTheme } from "next-themes"
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
import { Icons } from "@/components/icons";
import Image from 'next/image';


import { CodeProject } from "@/components/cards/codeproject";

import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function CodeProjectPage() {
  const { theme } = useTheme()
  const opacity = theme === "dark" ? 0.1 : 0.5


  const blendMode = theme === "dark" ? "darken" : "lighten"

  return (
    <div className={`flexbox flex-col items-center ${lora.variable}`}>

<div className="relative">
  <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
    
  ></div>
  <div className="flex flex-col items-start bg-white bg-opacity-80 rounded-lg shadow-md p-8 mt-24 mx-12 md:ml-12 relative" style={{ backgroundImage: 'url("/bg/bg1.jpg")', backgroundSize: 'cover', backgroundBlendMode: 'lighten', backgroundColor: `rgba(255, 255, 255, ${opacity})` }}>
            <h1 className="font-lora text-4xl font-semibold mb-2">Code Projects.</h1>
            <h2 className="font-lora text-2xl font-bold md:mr-24">Some Hobby Projects. View my <Link href="github.com/mattrichmo" className="text-accent hover:underline">Github</Link> for my most up to date project list.</h2>    <p className="mt-8">I open-source almost anything as I am just having a great time coding. Let's make magic.</p>
  </div>
</div>

      <section className={`mx-12 flex h-screen flex-col gap-6 pb-8 pt-6 md:py-10 ${lora.variable}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CodeProject 
            link={"https://github/mattrichmo/"} 
            title="WiseWriter v3" 
            description="An experiment in automating the full product creation from ideation to publishing. This uses OpenAI, Midjourney, and a few other APIs to create a full product. From audience creation, to marketing demographics creation, to aesthic choice, to tone o the book, to launch is all automated by AI decision making."   
            icon={<Icons.logo className="mt-2 w-10"/>} 
            linkText="github.com"
            projectName="Wise Writer V3."
            technologies="OpenAI, Midjourney, Replica, Node.js"
            imgFolderPath=""
          />
          <CodeProject 
            link={"https://github/mattrichmo/"} 
            title="ScreenParse" 
            description="Taking a pdf script and parsing it into a JSON Object for easy manipulation. This is used to visualize your script in a new way. This is a work in progress."   
            icon={<Icons.logo className="mt-2 w-10"/>} 
            linkText="github.com"
            projectName="ScreenParse"
            technologies="Next.js, React, Node.js, SQL"
            imgFolderPath=""
          />
                    <CodeProject 
            link={"https://github/mattrichmo/"} 
            title="BookMarker" 
            description="A CLI handy app for saving your bookmarks into a readable markdown file. Also exports to bookmarks.html."   
            icon={<Icons.logo className="mt-2 w-10"/>} 
            linkText="github.com"
            projectName="BookMarker"
            technologies="Python, CLI"
            imgFolderPath=""
          />
          
        </div>
      </section>
    </div>
  );
}