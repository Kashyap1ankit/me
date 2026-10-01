import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ankit Kashyap",
  description: "Ankit Kashyap Portfolio",
  icons: "/x.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <ReactLenis root>
        <body
          className={` antialiased w-11/12  max-w-4xl mx-auto bg-[#FFFFFF] dark:bg-[#000000] text-white border-x  dark:border-zinc-900`}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme="black"
            enableSystem
            disableTransitionOnChange={false}
          >
            <Navbar />
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
