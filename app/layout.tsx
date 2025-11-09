import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ankit Kashyap",
  description: "Ankit Kashyap Portfolio",
  icons: "/x.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
        <body
          className={` antialiased w-11/12 w-4xl max-w-4xl mx-auto bg-[#F6F5FE] dark:bg-[#000000] text-white border-x px-4 dark:border-zinc-900`}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme="black"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
