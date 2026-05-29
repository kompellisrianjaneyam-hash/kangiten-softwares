import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kangiten Softwares | Websites, Apps, AI & Automation",

  description:
    "Kangiten Softwares helps businesses grow through website development, mobile app development, AI chatbots, voice agents, automation, social media management and graphic design.",

  keywords: [
    "Website Development",
    "Mobile App Development",
    "AI Chatbots",
    "Voice Agents",
    "Automation",
    "Graphic Design",
    "Social Media Management",
    "Software Company Hyderabad",
    "Kangiten Softwares",
  ],

  authors: [
    {
      name: "Kangiten Softwares",
    },
  ],

  creator: "Kangiten Softwares",

  openGraph: {
    title: "Kangiten Softwares",
    description:
      "Websites, Mobile Apps, AI Solutions, Automation and Digital Growth Services.",
    siteName: "Kangiten Softwares",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}