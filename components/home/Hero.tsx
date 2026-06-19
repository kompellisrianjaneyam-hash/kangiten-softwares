"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function ServiceCard({
  title,
  className,
  href,
}: {
  title: string;
  className: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.08,
          y: -10,
        }}
        className={`${className} cursor-pointer`}
      >
        <div
          className="
          bg-white/80
          backdrop-blur-xl
          rounded-3xl
          px-6
          py-4
          border
          border-blue-100
          shadow-[0_15px_40px_rgba(0,90,156,0.15)]
          font-semibold
          text-[#003F73]
          whitespace-nowrap
          "
        >
          {title}
        </div>
      </motion.div>
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="text-center mb-20">
          <p className="text-[#005A9C] font-bold tracking-[0.3em] mb-6">
            BUILD • AUTOMATE • GROW
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none text-[#003F73]">
            WE BUILD.
            <br />
            WE AUTOMATE.
            <br />
            <span className="text-[#005A9C]">
              YOU GROW.
            </span>
          </h1>
        </div>

        <div className="relative h-[900px]">

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 900"
          >
            <line x1="600" y1="450" x2="250" y2="190" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
            <line x1="600" y1="450" x2="900" y2="120" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
            <line x1="600" y1="450" x2="1080" y2="180" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
            <line x1="600" y1="450" x2="1040" y2="500" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
            <line x1="600" y1="450" x2="930" y2="690" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
            <line x1="600" y1="450" x2="640" y2="760" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
            <line x1="600" y1="450" x2="320" y2="760" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
            <line x1="600" y1="450" x2="150" y2="560" stroke="#005A9C" strokeWidth="2" opacity="0.15" />
          </svg>

          <ServiceCard
            title="💻 Website Development"
            href="/services/website-development"
            className="absolute top-[18%] left-[10%]"
          />

          <ServiceCard
            title="📱 Mobile App Development"
            href="/services/mobile-app-development"
            className="absolute top-[8%] right-[18%]"
          />

          <ServiceCard
            title="🤖 AI Automation"
            href="/services/ai-automation"
            className="absolute top-[20%] right-[5%]"
          />

          <ServiceCard
            title="🎙 AI Voice Agents"
            href="/services/ai-voice-agents"
            className="absolute top-[55%] right-[10%]"
          />

          <ServiceCard
            title="⚙ Business Automation"
            href="/solutions/business-automation"
            className="absolute bottom-[16%] right-[12%]"
          />

          <ServiceCard
            title="🎨 Graphic Design"
            href="/services/graphic-design"
            className="absolute bottom-[10%] left-[12%]"
          />

          <ServiceCard
            title="📢 Social Media Management"
            href="/services/social-media-management"
            className="absolute top-[58%] left-[5%]"
          />

          <ServiceCard
            title="📈 Digital Growth"
            href="/solutions"
            className="absolute bottom-[12%] left-[42%]"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            "
          >
            <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-30 rounded-full scale-110" />

            <div
              className="
              relative
              bg-white
              rounded-full
              p-8
              shadow-[0_30px_80px_rgba(0,90,156,0.25)]
              "
            >
              <img
                src="/logo.png"
                alt="Kangiten Logo"
                className="w-[320px] h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}