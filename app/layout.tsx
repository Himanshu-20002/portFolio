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
  title: "DevPortfolio",
  description: "A portfolio website showcasing web development projects and skills.",
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
    other: [
      {
        rel: "mask-icon",
        url: "/img/code.png",
      },
    ],
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
