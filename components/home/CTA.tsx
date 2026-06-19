"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-white">

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
          relative
          rounded-[50px]
          bg-white
          border
          border-blue-100
          shadow-[0_40px_100px_rgba(0,90,156,0.18)]
          p-16
          text-center
          overflow-hidden
          "
        >

          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-100 opacity-50" />

          <div className="relative z-10">

            <p className="uppercase tracking-[0.3em] text-[#005A9C] font-semibold mb-6">
              Ready To Grow?
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-[#003F73] mb-8">
              Let's Build Something
              <br />
              Amazing Together
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Websites, Mobile Apps, AI Voice Agents, AI Automation and Custom
              Software Solutions designed for growth.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">

              <a
                href="/contact"
                className="
                px-10
                py-5
                rounded-2xl
                bg-[#003F73]
                text-white
                font-bold
                shadow-xl
                hover:scale-105
                transition-all
                "
              >
                Book Free Consultation
              </a>

              <a
                href="https://wa.me/918106092063"
                target="_blank"
                className="
                px-10
                py-5
                rounded-2xl
                bg-white
                border
                border-blue-200
                text-[#003F73]
                font-bold
                shadow-lg
                hover:scale-105
                transition-all
                "
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}