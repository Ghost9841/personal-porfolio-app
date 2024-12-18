import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";
import TransitionEffect from "@/components/TransitionEffect";
 

const poppins = Poppins({
  weight: ['100','300','200','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Aakash Subedi Portfolio",
  description: "Website Portfolio of Ghost Aakash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full min-h-screen">
      <Head >
        <meta name="viewport" content="width-device-width, initial-scale=1 "/>
        <link rel="icon" href="@/logo.png"/>
      </Head>
      <body
        className={`${poppins.className} font-poppins bg-light text-dark dark:bg-dark` }
      >
        <TransitionEffect/>
      <Script id="theme-switcher" strategy="beforeInteractive">
        {`document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)`}
      </Script>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
