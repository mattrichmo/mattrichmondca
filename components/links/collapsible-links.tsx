"use client"

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

export function CollapsibleLink({
  title,
  link,
  description,
  icon,
  linkText,
}: {
  title: string;
  link: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Collapsible>
      <div className={`my-2 flex flex-col bg-secondary ${isExpanded ? 'h-auto py-3' : 'h-16'} items-center justify-center rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl transition-all duration-500 `}>
        <div className="w-full"> {/* Container for icon, title, link text, and trigger */}
          <div className="flex items-center justify-between">
          <Link href={link}>
   


            <div className="flex items-center">
              {icon}
              <div className="ml-2">
                <div className="text-xs font-semibold hover:underline">{title}</div>
              </div>
            </div>
            </Link>

            <div className="flex items-center text-xs font-light text-muted-foreground"> {/* Container for link text and trigger */}
              <Link href={link} className="inline-flex items-center hover:text-primary">
                {linkText} 
                <svg className=" ml-2 flex h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>

              </Link>
              <CollapsibleTrigger onClick={toggleExpansion}>
                <div className="ml-2 flex justify-end text-primary hover:text-background">
                  {isExpanded ? <Icons.chevronsClose /> : <Icons.chevronsOpen />}
                </div>
              </CollapsibleTrigger>
            </div>
          </div>
          {isExpanded && (
            <CollapsibleContent className="mt-2 w-full">
              <div className="mt-4 text-xs"> {/* Apply margin to the top */}
                <p className="mb-4">{description}</p>
              </div>
            </CollapsibleContent>
          )}
        </div>
      </div>
    </Collapsible>
  );
}





