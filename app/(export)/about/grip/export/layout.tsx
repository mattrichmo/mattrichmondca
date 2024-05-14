import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";



interface exportLayoutProps {
  children: React.ReactNode;
}

export default function exportLayout({ children }: exportLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://latex.now.sh/style.css" />
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          fontSans.variable
        )}
      >
        <article>{children}</article>
      </body>
    </html>
  );
}

