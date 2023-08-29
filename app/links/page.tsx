"use client"
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { CollapsibleLink } from "@/components/links/collapsible-links";



export default function linkListPage () {
    return (
      <div> 
        <div className="mx-auto mb-5 flex-col rounded-3xl  px-4 py-6">
  <div className="text-center">

    <p className="pt-2 text-lg font-medium">@mattrichmo</p>
    <p className="text-sm font-extrabold">:thumbs up</p>
  </div>
  <div className="flex items-center justify-center ">
  <div className=" flex-grid flex-col-5 xs:p-6 my-3 p-12 px-4">

<Link href={siteConfig.links.instagram}>
<Button className="duration-900 xs:mx-2 sticky h-12 w-12 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary sm:h-8 sm:w-8">
    <div className="flex h-48 w-48 items-center justify-center">
    <Icons.instagram size={32} className="hover:text-primary" />
    </div>
  </Button>
</Link>

<Link href={siteConfig.links.github}>
<Button className="duration-900 sticky mx-4 h-12 w-12 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary">
<div className="flex h-48 w-48 items-center justify-center hover:text-primary">
    <Icons.gitHub size={32} />
    </div>
  </Button>
</Link>

<Link href={siteConfig.links.facebook}>
<Button className="duration-900 sticky mx-4 h-12 w-12 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary">
  <div className="flex h-48 w-48 items-center justify-center hover:text-primary">
    <Icons.facebook size={32} />
    </div>
  </Button>
</Link>

<Link href={siteConfig.links.linkedin}>
<Button className="duration-900 sticky mx-4 h-12 w-12 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary">
<div className="flex h-48 w-48 items-center justify-center hover:text-primary">
    <Icons.linkedin size={32} />
    </div>
  </Button>
</Link>
  </div>
  </div>

  <CollapsibleLink 
  link={siteConfig.links.pexels} 
  title="Download My Photos For Free" 
  description="I post most of my photos for free to use for any purpose, including commercial. I figure, they are just going to sit in a folder anyways so I may as well aim to inspire others."   
  icon={<Icons.logo className="w-10"/>} 
  linkText="pexels.com"
  />
    <CollapsibleLink 
  link={siteConfig.links.unsplash} 
  title="Download My Photos For Free" 
  description="I post most of my photos for free to use for any purpose, including commercial. I figure, they are just going to sit in a folder anyways so I may as well aim to inspire others."   
  icon={<Icons.logo className="w-12 pt-3"/>} 
  linkText="unsplash.com"
  />
      <CollapsibleLink 
  link={siteConfig.links.github} 
  title="ScreenParse - Node.JS Screenplay Parser" 
  description="A Node.JS PDF Screenplay Parser, which parses text PDF Screenplays into a JSON Object and uploads to a DB"   
  icon={<Icons.gitHub className="w-8"/>} 
  linkText="github.com"
  />
      <CollapsibleLink 
  link={siteConfig.links.github} 
  title="WiseWriter V3 - Automated Content Generation" 
  description="WiseWriter V3 was an interesting experiment in full-automation that includes audience research, topic generation, content generation in a 5D array, book cover generation and uploading to Sales Channels."   
  icon={<Icons.gitHub className="w-8"/>} 
  linkText="github.com"
  />
        <CollapsibleLink 
  link={"/about/film-cv"} 
  title="Grip Resume" 
  description="An ongoing list of the productions I have Gripped on."   
  icon={<Icons.gitHub className="w-8"/>} 
  linkText="mattrichmond.ca"
  />


</div>
      </div>
    );
  }