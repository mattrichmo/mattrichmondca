import { Lora } from 'next/font/google';
import { Icons } from '@/components/icons';
import { CardProject } from '@/components/cards/card-project';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function DesignProjectPage () {
  return (
    <div className={`flexbox flex-col items-center ${lora.variable}`}>
    <div className={`flexbox mx-12 mt-24 flex-col md:ml-12`}>
      <h1 className="font-lora text-4xl font-semibold">Design & Marketing</h1>
      <h2 className="font-lora mt-2 text-2xl font-bold md:mr-24">
        Previous projects I have worked on in the cannabis industry.
      </h2>
      <p className="mt-12">Working in the cannabis industry brings challenges and regulatory issues that you don&apos;t see in other industries. It presents challenges when it comes to marketing, branding, and getting your message out there. But creativity thrives when given boundaries, and I am proud to have had a role in developing these brands below, as we saw these restrictions not as walls but hurdles, and the fun was finding loopholes and developing a brand new industry.</p>
    </div>
<section className={`mx-12 flex h-screen flex-col gap-6 pb-8 pt-6 md:py-10 ${lora.variable}`}>
      <div className="flexbox items genter mx:12 w-full flex-col items-start justify-center gap-4 ">
      <CardProject 
  link={"https://zyrelife.com"} 
  title="Zyre Cannabis" 
  description="At Zyre I was repsonsible for bringing the initial brand to life to get the company off the ground. I was responsible for a lot of the initial design and brand guidelines. Zyre is now the number 1 selling cannabis vape brand in British Columbia."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="zyrelife.com"
  client="Zyre Cannabis"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/design/zyre/"
  />
  <CardProject 
  link={"https://auroramj.com"} 
  title="Aurora Cannabis" 
  description="Aurora Cannabis was an existing medical company, who expanded in the recreational market once legalization opened the doors, and with this new face came a new brand. I was responsible creating the brand to the retailers from a Trade Marketing perspective, and also responsible for the brand launch."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="auroramj.com"
  client="Aurora Cannabis"
  work="Responsible For:  Trade Marketing, Brand Launch, Brand Guidelines, Branding, Packaging, Events, Trade Shows, Merchandise, and more."
  imgFolderPath="/design/aurora/"
  />
    <CardProject 
  link={"https://sanrafael71.com"} 
  title="San Rafael '71" 
  description="San Rafael '71 was a sub-brand of Aurora Cannabis that aimed to be a more of a brand that catered to the cannabis connoisseur. I was responsible for the brand launch, trade marketing, and maintaining a consisten brand image across all channels."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="sanrafael71.com"
  client="San Rafael '71"
  work="Responsible For: Trade Marketing, Brand Launch, Brand Guidelines, Branding, Packaging, Events, Trade Shows, Merchandise, and more."
  imgFolderPath="/design/sr71/"
  />
    <CardProject 
  link={"https://altavie.ca"} 
  title="Alta Vie" 
  description="Alta Vie was a sub-brand of Aurora Cannabis that aimed to be a more premium brand. Our team was responsible for creating the brand, pushing it, selling it and activating it. I was responsible for the brand launch."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="altavie.ca"
  client="Alta Vie"
  work=" Responsible For: Trade Marketing, Brand Launch, Brand Guidelines, Branding, Packaging, Events, Trade Shows, Merchandise, and more."
  imgFolderPath="/design/altavie/"
  />
      <CardProject 
  link={"https://woodstockcannabis.com"} 
  title="Woodstock Cannabis" 
  description="The original brand, which I was responible for activating and creating an adience for. I was responsible for the brand launch."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="woodstockcannabisco.ca/"
  client="Woodstock Cannabis"
  work="Responsible for: Brand, packaging, brand launch"
  imgFolderPath="/design/woodstockcannabis/"
  />
        <CardProject 
  link={"https://whistlercannabisco.com"} 
  title="Whistler Cannabis Co" 
  description="The best and most premium cannabis brand in Canada. I was responsible for the brand launch and maintaining a consisten brand image across all channels."   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="whistlercannabisco.com"
  client="Whistler Cannabis"
  work="Responible For :Trade Marketing, Brand Launch, Brand Guidelines, Branding, Packaging, Events, Trade Shows, Merchandise, and more."
  imgFolderPath="/design/whistlercannabis/"
  />
  <CardProject 
  link={"https://blushcannabis.com"} 
  title="Blush Cannabis" 
  description="The original company which meant going out on a limb through a time when the product was still considered legal and everything was sold in jars. We knew there would be a demand for a product that was sealed branding, beautiful and modern while still maintaining a trust of quality control in an unregulated market. "   
  icon={<Icons.logo className="mt-2 w-10"/>} 
  linkText="blushcannabis.com (dead)"
  client="Blush Cannabis"
  work="Created: Brand, website, packaging, brand launch."
  imgFolderPath="/design/blush/ "
  />
  
          </div>
          </section>
          </div>
);
  }