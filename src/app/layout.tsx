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
  metadataBase: new URL("https://kangitensoftwares.in"),

  title: {
    default: "Kangiten Softwares",
    template: "%s | Kangiten Softwares",
  },

  description:
    "Kangiten Softwares provides website development, mobile app development, AI chatbots, automation solutions, social media management, graphic design, and custom software development for businesses worldwide.",

  keywords: [
    "Kangiten Softwares",
    "Website Development",
    "Web Development Company",
    "Mobile App Development",
    "Custom Software Development",
    "AI Chatbots",
    "Voice Agents",
    "Business Automation",
    "Graphic Design",
    "Social Media Management",
    "Software Company India",
    "Software Company Hyderabad",
    "Web Design Services",
    "Digital Solutions",
  ],

  authors: [
    {
      name: "Kangiten Softwares",
      url: "https://kangitensoftwares.in",
    },
  ],

  creator: "Kangiten Softwares",
  publisher: "Kangiten Softwares",

  alternates: {
    canonical: "https://kangitensoftwares.in",
  },

  openGraph: {
    title: "Kangiten Softwares",
    description:
      "Website Development, Mobile Apps, AI Solutions, Automation, Graphic Design and Digital Growth Services.",
    url: "https://kangitensoftwares.in",
    siteName: "Kangiten Softwares",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kangiten Softwares",
    description:
      "Website Development, Mobile Apps, AI Solutions and Business Automation.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Technology",
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