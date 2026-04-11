import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import { Toaster } from 'react-hot-toast';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-url.vercel.app"),
  title: "Himanshu | Full Stack Developer & UI/UX Designer",
  description: "Crafting world-class digital experiences with precision, aesthetics, and high-performance code. Specialized in React, Next.js, and immersive animations.",
  keywords: ["Himanshu", "Full Stack Developer", "Web Designer", "Portfolio", "React Developer", "Next.js", "GSAP Animations"],
  authors: [{ name: "Himanshu" }],
  creator: "Himanshu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.vercel.app", // Replace with actual URL when deployed
    siteName: "Himanshu Portfolio",
    title: "Himanshu | Full Stack Developer & UI/UX Designer",
    description: "Immersive portfolio showcasing high-performance web applications and creative UI/UX designs.",
    images: [
      {
        url: "/img/og-image.png", // Will need to ensure an image exists or fallback
        width: 1200,
        height: 630,
        alt: "Himanshu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu | Full Stack Developer",
    description: "Creative developer building the future of the web.",
    images: ["/img/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/img/code.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/img/code.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/img/code.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/img/code.png",
        sizes: "512x512",
        type: "image/png",
      }
    ],
    shortcut: "/img/code.png",
    apple: {
      url: "/img/code.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
         <Toaster />
      </body>
    </html>
  );
}
