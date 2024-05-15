"use client"
import { useState } from "react";
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { CollapsibleLink } from "@/components/links/collapsible-links";

export default function LinkListPage() {
  return (
    <section className="mx-4 flex-col rounded-3xl px-4 py-6">
      <div className="text-center">
        <p className="pt-2 text-2xl font-bold mb-2">@mattrichmo</p>
        <p className="text-sm">Just some stuff I&apos;m proud of or working on.</p>
      </div>
      <div className="flex items-center justify-center">
  <div className="flex-grid xs:p-6 my-3 flex-col p-4">
    <Link href={siteConfig.links.instagram}>
      <Button className="duration-900 mx-2 h-10 w-10 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary">
        <div className="flex h-32 w-32 items-center justify-center hover:text-primary">
          <Icons.instagram size={24} className="hover:text-primary" />
        </div>
      </Button>
    </Link>
    <Link href={siteConfig.links.github}>
      <Button className="duration-900 mx-2 h-10 w-10 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary">
        <div className="flex h-32 w-32 items-center justify-center hover:text-primary">
          <Icons.gitHub size={24} />
        </div>
      </Button>
    </Link>
    <Link href={siteConfig.links.facebook}>
      <Button className="duration-900 mx-2 h-10 w-10 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary">
        <div className="flex h-32 w-32 items-center justify-center hover:text-primary">
          <Icons.facebook size={24} />
        </div>
      </Button>
    </Link>

    <Link href={siteConfig.links.linkedin}>
      <Button className="duration-900 mx-2 h-10 w-10 rounded-full bg-background text-foreground hover:-translate-y-3 hover:bg-secondary">
        <div className="flex h-32 w-32 items-center justify-center hover:text-primary">
          <Icons.linkedin size={24} />
        </div>
      </Button>
    </Link>
  </div>
</div>

    <div>
      <h2 className="text-center text-lg font-medium mt-2 mb-4">
        Film
      </h2>
      <CollapsibleLink 
        link={"/about/grip"} 
        title="Grip Resume" 
        description="An ongoing list of the productions I have Gripped on."   
        icon={<div className="flex"><Icons.grip className="w-8"/> <Icons.video className="w-8"/></div>} 
        linkText="mattrichmond.ca"
      />
      </div>
      <div>
      <h2 className="text-center text-lg font-medium mt-4 mb-4">
        Photography
      </h2>
      <CollapsibleLink 
        link={siteConfig.links.photography} 
        title="Main Photography Site" 
        description="My main photography site, seperated from my perosnal site and will be updated with more photos and projects as I go."   
        icon={<Icons.camera className="w-8"/>} 
        linkText="mattrichmo.com"
      />
      <CollapsibleLink 
        link={siteConfig.links.pexels} 
        title="Download My Photography for Free On Pexels" 
        description="I post most of my photos for free to use for any purpose, including commercial. I figure, they are just going to sit in a folder anyways so I may as well aim to inspire others."   
        icon={<Icons.camera className="w-8"/>} 
        linkText="pexels.com"
      />
      <CollapsibleLink 
        link={siteConfig.links.unsplash} 
        title="Download My Photography for Free On Unsplash" 
        description="I post most of my photos for free to use for any purpose, including commercial. I figure, they are just going to sit in a folder anyways so I may as well aim to inspire others."   
        icon={<Icons.camera className="w-8"/>} 
        linkText="unsplash.com"
      />
      </div>
      <div>
        <h2 className="text-center text-lg font-medium mt-4 mb-4">
          Code
        </h2>
      <CollapsibleLink 
        link="https://github.com/mattrichmo/ScreenParse" 
        title="ScreenParseV2 - Node.JS Screenplay Parser" 
        description="A Node.JS PDF Screenplay Parser, which parses text PDF Screenplays into a JSON Object and uploads to a DB"   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
      <CollapsibleLink 
        link="https://github.com/mattrichmo/wisewriterv3" 
        title="WiseWriter V3 - Automated Book Creation (Open Source)" 
        description="WiseWriter V3 was an interesting experiment in full-automation of a product from pre-product, product launch to post-product that includes audience research, topic generation, content generation in a 5D array recursively to main content and direction, book cover generation and uploading to Sales Channels."   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
            <CollapsibleLink 
        link="https://github.com/mattrichmo/Brand-Bloom" 
        title="Brand-Bloom (Open Source) - Brand Name Generator" 
        description="Node.js flow that generates a brand name, scores that brand name against a weighted method, then recursively generates new names until either a brand name is found that scores above a certain threshold, or the number of iterations is reached, presenting you with the best brand name for your project or product."   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
                        <CollapsibleLink 
        link="https://github.com/mattrichmo/PoemWriter" 
        title="PoemWriter (Open Source) - Poem Book Generator" 
        description="Node.js flow that generates a brand name, scores that brand name against a weighted method, then recursively generates new names until either a brand name is found that scores above a certain threshold, or the number of iterations is reached, presenting you with the best brand name for your project or product."   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
      </div>

      <div>
      <h2 className="text-center text-lg font-medium mt-4 mb-4">
        Web
      </h2>

      <CollapsibleLink 
        link={siteConfig.links.home} 
        title="Homepage" 
        description="My little spot on the net. Full of errors and bugs, and changes more than I change my socks, but I use this as a testing ground for new technologies and ideas."   
        icon={<Icons.logo className="mt-2 w-8"/>} 
        linkText="mattrichmond.ca"
      />
      </div>
    </section>
  );
}
