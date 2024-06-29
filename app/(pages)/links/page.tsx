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
        <p className="mb-2 pt-2 text-2xl font-bold">Matt Richmond</p>
        <p className="text-sm">Some Links Of Stuff.</p>
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
      <h2 className="mb-4 mt-2 text-center text-lg font-medium">
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
      <h2 className="my-4 text-center text-lg font-medium">
        Photography
      </h2>
      <CollapsibleLink 
        link={siteConfig.links.pexels} 
        title="Open-Source Photos On Pexels" 
        description="Open-source creativity is inspiring which is why I post most of my photos for free-use on Pexels. All photos can be used for any purpose with no credit here."   
        icon={<Icons.camera className="w-8"/>} 
        linkText="pexels.com"
      />
      <CollapsibleLink 
        link={siteConfig.links.unsplash} 
        title="Open-Source Photos On Unsplash" 
        description="Pexels - another site I publish my pictures for free use on, but less frequently. "   
        icon={<Icons.camera className="w-8"/>} 
        linkText="unsplash.com"
      />
      </div>
      <div>
      <h2 className="my-4 text-center text-lg font-medium">
        Data Visualization
      </h2>

      <CollapsibleLink 
        link="https://cinecompute.com/data/canadian-cinema-graph"
        title="Canadian Cinema Graph" 
        description="Mapping out the professional relationships and involvement of the Canadian Film Industry in a graph database. Useful to illustrate connectedness of of the industry."   
        icon={<Icons.logo className="mt-2 w-8"/>} 
        linkText="cinecompute.com"
      />
      <CollapsibleLink 
        link="https://cinecompute.com/data/genre-heat-map"
        title="Canadian Film Genre Heatmap" 
        description="Mapping out the genres of all the films produced in Canada in the last # of years."   
        icon={<Icons.logo className="mt-2 w-8"/>} 
        linkText="cinecompute.com"
      />
      
      </div>
      <div>
        <h2 className="my-4 text-center text-lg font-medium">
          Code
        </h2>
        <CollapsibleLink 
        link="https://github.com/mattrichmo/chalker" 
        title="Chalker - Object logging in the console made sexy." 
        description="Object logging using chalk and iterative color changes for each nested level. Great for debugging JS objects in the console. "   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
       <CollapsibleLink 
        link="https://github.com/mattrichmo/BookMarker" 
        title="BookMarker - Local Bookmark Backup" 
        description="Local bookmarks. Saves all bookmarks inside a .MD file. Great for local backup and storage of your bookmarks."   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
        <CollapsibleLink 
        link="https://github.com/mattrichmo/NERM" 
        title="NERM - Netflix Engagement Report Matcher" 
        description="Combining provided Netflix engagement reports with additional sources to create a full data set of all the titles within the engagement report. Great for people who plan to build their own data sets. "   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
      <CollapsibleLink 
        link="https://github.com/mattrichmo/ScreenParse" 
        title="ScreenParseV2 - Node.JS Screenplay Parser" 
        description="A Node.JS PDF Screenplay Parser, which parses text PDF Screenplays into a JSON Object and uploads to a DB"   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
      <CollapsibleLink 
        link="https://github.com/mattrichmo/wisewriterv3" 
        title="WiseWriter V3 - Automated Book Creation (Open Source) (Broken but Code Logic is there)" 
        description="WiseWriter V3 was an interesting experiment in full-automation of a product from pre-product, product launch to post-product that includes audience research, topic generation, content generation in a 5D array recursively to main content and direction, book cover generation and uploading to Sales Channels."   
        icon={<Icons.gitHub className="w-8"/>} 
        linkText="github.com"
      />
      <CollapsibleLink 
        link="https://github.com/mattrichmo/Brand-Bloom" 
        title="Brand-Bloom (Open Source) - Brand Name Generator (Experiment)" 
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
        <h2 className="my-4 text-center text-lg font-medium">
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
