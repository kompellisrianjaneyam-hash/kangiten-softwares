import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://kangitensoftwares.in"),

  title: {
    default: "Kangiten Softwares | Websites, AI Automation & Mobile Apps",
    template: "%s | Kangiten Softwares",
  },

  description:
    "Kangiten Softwares helps businesses grow through Website Development, Mobile App Development, AI Automation, AI Voice Agents, Custom Software Development, Graphic Design and Digital Growth Solutions.",

  keywords: [
    "Kangiten Softwares",
    "Website Development Hyderabad",
    "Web Development Company Hyderabad",
    "Mobile App Development",
    "AI Automation",
    "AI Voice Agents",
    "Custom Software Development",
    "Graphic Design",
    "Digital Marketing",
    "Software Company Hyderabad",
    "Business Automation",
    "AI Agency",
    "Startup Software Company",
    "Best Website Development Company",
    "Website Design India",
    "AI Solutions Company",
  ],

  authors: [
    {
      name: "Kangiten Softwares",
    },
  ],

  creator: "Kangiten Softwares",

  publisher: "Kangiten Softwares",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kangitensoftwares.in",
    siteName: "Kangiten Softwares",
    title:
      "Kangiten Softwares | Websites, AI Automation & Mobile Apps",
    description:
      "Premium software solutions including websites, AI automation, mobile applications, business growth systems and custom software development.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kangiten Softwares",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kangiten Softwares | Websites, AI Automation & Mobile Apps",
    description:
      "Premium software solutions including websites, AI automation, mobile applications and business growth systems.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://kangitensoftwares.in",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">

        <StructuredData />

        <Navbar />

        <main>
          {children}
        </main>

        <ChatWidget />

        <WhatsAppButton />

        <Footer />

      </body>
    </html>
  );
}