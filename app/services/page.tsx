"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    desc: "Premium websites that generate leads and grow your business.",
    link: "/services/website-development",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    desc: "Android and iOS applications built for scale.",
    link: "/services/mobile-app-development",
    icon: "📱",
  },
  {
    title: "AI Voice Agents",
    desc: "24/7 AI calling assistants that qualify leads automatically.",
    link: "/services/ai-voice-agents",
    icon: "🎙",
  },
  {
    title: "AI Automation",
    desc: "Automate repetitive business processes with AI.",
    link: "/services/ai-automation",
    icon: "🤖",
  },
  {
    title: "Graphic Design",
    desc: "Premium branding, creatives and marketing assets.",
    link: "/services/graphic-design",
    icon: "🎨",
  },
  {
    title: "Social Media Management",
    desc: "Content creation and growth strategies for businesses.",
    link: "/services/social-media-management",
    icon: "📢",
  },
  {
    title: "Custom Software Development",
    desc: "Tailor-made software solutions for unique business needs.",
    link: "/services/custom-software-development",
    icon: "⚙️",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white overflow-hidden">

      <section className="relative min-h-screen py-32">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
              WHAT WE DO
            </p>

            <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
              Services
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build websites, apps, automations and AI solutions
              that help businesses scale faster.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                }}
              >
                <Link href={service.link}>

                  <div
                    className="
                    h-full
                    bg-white
                    rounded-[32px]
                    p-8
                    border
                    border-blue-100
                    shadow-[0_25px_80px_rgba(0,90,156,0.15)]
                    hover:shadow-[0_35px_100px_rgba(0,90,156,0.25)]
                    transition-all
                    duration-300
                    "
                  >

                    <div className="text-5xl mb-6">
                      {service.icon}
                    </div>

                    <h3 className="text-3xl font-black text-[#003F73] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-8">
                      {service.desc}
                    </p>

                    <div className="text-[#005A9C] font-bold">
                      Learn More →
                    </div>

                  </div>

                </Link>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}