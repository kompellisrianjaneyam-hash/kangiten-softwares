
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#F7FBFF] via-white to-white" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7EC8FF]/30 rounded-full blur-[140px]" />

      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#7EC8FF]/20 rounded-full blur-[140px]" />

      {/* Grid Pattern */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#005A9C 1px, transparent 1px), linear-gradient(to right, #005A9C 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="
            px-5
            py-2
            rounded-full
            border
            border-[#7EC8FF]
            bg-white/80
            backdrop-blur-xl
            text-[#005A9C]
            font-semibold
            text-sm
            "
          >
            BUILD • AUTOMATE • GROW
          </div>
        </motion.div>

        {/* Main Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-10"
        >
          <h1
            className="
            text-5xl
            sm:text-6xl
            lg:text-8xl
            font-black
            leading-[0.95]
            text-[#003F73]
            "
          >
            Premium Digital
            <br />

            <span className="text-[#005A9C]">
              Solutions For
            </span>

            <br />

            Modern Businesses
          </h1>

          <p
            className="
            max-w-3xl
            mx-auto
            mt-8
            text-lg
            md:text-2xl
            text-slate-600
            "
          >
            We build premium websites, mobile applications,
            AI automation systems and custom software solutions
            that help businesses scale faster.
          </p>
        </motion.div>

        {/* CTA Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-center
          mt-12
          "
        >
          <Link
            href="/contact"
            className="
            bg-[#005A9C]
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            text-center
            shadow-lg
            hover:scale-105
            transition-all
            "
          >
            Book Free Consultation
          </Link>

          <Link
            href="/services"
            className="
            border
            border-[#005A9C]
            text-[#005A9C]
            px-8
            py-4
            rounded-2xl
            font-semibold
            text-center
            hover:bg-blue-50
            transition-all
            "
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trust Statement */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div
            className="
            inline-flex
            flex-wrap
            justify-center
            gap-3
            px-6
            py-4
            rounded-2xl
            bg-white/80
            backdrop-blur-xl
            border
            border-blue-100
            shadow-[0_15px_40px_rgba(0,90,156,0.08)]
            "
          >
            <span className="text-[#003F73] font-semibold">
              Websites
            </span>

            <span className="text-[#7EC8FF]">•</span>

            <span className="text-[#003F73] font-semibold">
              Mobile Apps
            </span>

            <span className="text-[#7EC8FF]">•</span>

            <span className="text-[#003F73] font-semibold">
              AI Automation
            </span>

            <span className="text-[#7EC8FF]">•</span>

            <span className="text-[#003F73] font-semibold">
              Custom Software
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
