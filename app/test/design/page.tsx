import { Lora } from 'next/font/google';
import { Icons } from '@/components/icons';
import { CardProject } from '@/components/cards/card-test';
import { Card } from '@/components/ui/card';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});
import { useState, useEffect } from 'react';

export default function DesignProjectPage () {
  return (
    <div className={`flexbox flex-col items-center ${lora.variable}`}>
    <div className={`flexbox mx-12 mt-24 flex-col md:ml-12`}>
      <h1 className="font-lora text-4xl font-semibold">Design Projects.</h1>
      <h2 className="font-lora mt-2 text-2xl font-bold md:mr-24">
        Previous design projects I have had a hand in.
      </h2>
      <p className="mt-12">Working in the cannabis industry brings challenges and regulatory issues that you don&apos;t see in other industries. It presents challenges when it comes to marketing, branding, and getting your message out there. But creativity thrives when given boundaries, and I am proud to have had a role in developing these brands below, as we saw these restrictions not as walls but hurdles, and the fun was finding loopholes and developing a brand new industry.</p>
    </div>
<section className={`mx-12 flex h-screen flex-col gap-6 pb-8 pt-6 md:py-10 ${lora.variable}`}>
      <div className="flexbox items genter mx:12 w-full flex-col items-start justify-center gap-4 ">
      <CardProject 
  link={"https://zyrelife.com"} 
  title="Zyre Cannabis" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="zyrelife.com"
  client="Zyre Cannabis"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/img/design/zyre/"
  />
  <CardProject 
  link={"https://auroramj.com"} 
  title="Aurora Cannabis" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="auroramj.com"
  client="Aurora Cannabis"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/img/design/aurora/"
  />
    <CardProject 
  link={"https://sanrafael71.com"} 
  title="San Rafael '71" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="sanrafael71.com"
  client="San Rafael '71"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/img/design/sr71/"
  />
    <CardProject 
  link={"https://altavie.ca"} 
  title="Alta Vie" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="altavie.ca"
  client="Alta Vie"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/img/design/altavie/"
  />
      <CardProject 
  link={"https://woodstockcannabis.com"} 
  title="Woodstock Cannabis" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="zyrelife.com"
  client="Zyre Cannabis"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/img/design/woodstockcannabis/"
  />
        <CardProject 
  link={"https://whistlercannabisco.com"} 
  title="Whistler Cannabis Co" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="whistlercannabisco.com"
  client="Zyre Cannabis"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/img/design/whistlercannabis/"
  />
  
          </div>
          </section>
          </div>
);
  }