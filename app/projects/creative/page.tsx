import { Lora } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export default function CreativeProjectPage () {
  return (
    <section className={`flex h-screen flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10 ${lora.variable}`}>
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="font-lora text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Working On it.
          </h1>
          </div>
          </section>
);
  }