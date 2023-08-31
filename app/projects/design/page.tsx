import { Lora } from 'next/font/google';
import { Icons } from '@/components/icons';
import { CardProject } from '@/components/cards/card-project';
import { Card } from '@/components/ui/card';
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function DesignProjectPage () {
  return (
<section className={`flex h-screen flex-col gap-6 pb-8 pt-6 md:py-10 mx-12 ${lora.variable}`}>
      <div className="flexbox w-full flex-col items-start gap-4 justify-center items genter mx:12">
      <CardProject 
  link={"https://zyrelife.com"} 
  title="Zyre Cannabis" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.grip className="w-8"/>} 
  linkText="zyrelife.com"
  client="Zyre Cannabis"
  work="Created: Brand, website, packaging, brand launch."

  />
        <CardProject 
  link={"https://zyrelife.com"} 
  title="Zyre Cannabis" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.grip className="w-8"/>} 
  linkText="zyrelife.com"
  client="Zyre Cannabis"
  work="Created: Brand, website, packaging, brand launch."

  /> <CardProject 
  link={"https://zyrelife.com"} 
  title="Zyre Cannabis" 
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."   
  icon={<Icons.grip className="w-8"/>} 
  linkText="zyrelife.com"
  client="Zyre Cannabis"
  work="Created: Brand, website, packaging, brand launch."

  />
          </div>
          </section>
);
  }