'use client'
import { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Image from 'next/image';
import Link from 'next/link';
import PinnedProjects from '@/app/projects/components/pinned-projects';

export default function Projects() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PinnedProjects />
  
      <div className="my-8 border-2 border-black">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          width={1920}
          height={200}
          objectFit="cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Collapsible Cards</h2>
        
        <div className="border border-gray-300 rounded-lg p-4 overflow-hidden">
          <Collapsible>
            <CollapsibleTrigger className="border border-gray-300 rounded-lg p-4 w-full mb-4" onClick={() => handleCardClick(0)}>
              <CardTitle>Card 1</CardTitle>
            </CollapsibleTrigger>
            <CollapsibleContent className={`border border-gray-300 rounded-b-lg p-4 ${activeCard === 0 ? 'h-auto' : 'h-0'}`} style={{ marginTop: activeCard === 0 ? '1rem' : '0' }}>
              <CardContent>
                <p className="text-gray-500">Card content goes here</p>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible>
            <CollapsibleTrigger className="border border-gray-300 rounded-lg p-4 w-full mb-4" onClick={() => handleCardClick(1)}>
              <CardTitle>Card 2</CardTitle>
            </CollapsibleTrigger>
            <CollapsibleContent className={`border border-gray-300 rounded-b-lg p-4 ${activeCard === 1 ? 'h-auto' : 'h-0'}`} style={{ marginTop: activeCard === 1 ? '1rem' : '0' }}>
              <CardContent>
                <p className="text-gray-500">Card content goes here</p>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible>
            <CollapsibleTrigger className="border border-gray-300 rounded-lg p-4 w-full mb-4" onClick={() => handleCardClick(2)}>
              <CardTitle>Card 3</CardTitle>
            </CollapsibleTrigger>
            <CollapsibleContent className={`border border-gray-300 rounded-b-lg p-4 ${activeCard === 2 ? 'h-auto' : 'h-0'}`} style={{ marginTop: activeCard === 2 ? '1rem' : '0' }}>
              <CardContent>
                <p className="text-gray-500">Card content goes here</p>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible>
            <CollapsibleTrigger className="border border-gray-300 rounded-lg p-4 w-full mb-4" onClick={() => handleCardClick(3)}>
              <CardTitle>Card 4</CardTitle>
            </CollapsibleTrigger>
            <CollapsibleContent className={`border border-gray-300 rounded-b-lg p-4 ${activeCard === 3 ? 'h-auto' : 'h-0'}`} style={{ marginTop: activeCard === 3 ? '1rem' : '0' }}>
              <CardContent>
                <p className="text-gray-500">Card content goes here</p>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible>
            <CollapsibleTrigger className="border border-gray-300 rounded-lg p-4 w-full mb-4" onClick={() => handleCardClick(4)}>
              <CardTitle>Card 5</CardTitle>
            </CollapsibleTrigger>
            <CollapsibleContent className={`border border-gray-300 rounded-b-lg p-4 ${activeCard === 4 ? 'h-auto' : 'h-0'}`} style={{ marginTop: activeCard === 4 ? '1rem' : '0' }}>
              <CardContent>
                <p className="text-gray-500">Card content goes here</p>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}