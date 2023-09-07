import { Lora } from 'next/font/google';
import { Icons } from '@/components/icons';
import BlockSlider from '@/components/img/block-slider';
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function testPage () {
  return (
    <div>
      <BlockSlider/>
    </div>
   
);
  }