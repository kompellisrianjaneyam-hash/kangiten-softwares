"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WebsiteDevelopmentPage() {
return ( <main className="bg-white overflow-hidden min-h-screen">

```
  <section className="relative py-32">

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

    <div className="relative z-10 max-w-7xl mx-auto px-6">

      <div className="text-center mb-24">

        <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
          WEBSITE DEVELOPMENT
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
          Websites
          <br />
          That Convert
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Premium websites designed to generate leads, build trust
          and help businesses grow faster.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">

        <motion.div
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="
          bg-white
          rounded-[40px]
          p-10
          border
          border-blue-100
          shadow-[0_30px_80px_rgba(0,90,156,0.15)]
          "
        >

          <h2 className="text-3xl font-black text-[#003F73] mb-8">
            What's Included
          </h2>

          <div className="space-y-4 text-lg">

            <div>✓ Custom Business Website</div>
            <div>✓ Mobile Responsive Design</div>
            <div>✓ SEO Optimization</div>
            <div>✓ WhatsApp Integration</div>
            <div>✓ Contact Forms</div>
            <div>✓ Performance Optimization</div>

          </div>

        </motion.div>

        <motion.div
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="
          bg-gradient-to-br
          from-[#003F73]
          to-[#005A9C]
          text-white
          rounded-[40px]
          p-10
          shadow-[0_30px_80px_rgba(0,90,156,0.25)]
          "
        >

          <h2 className="text-3xl font-black mb-8">
            Perfect For
          </h2>

          <div className="space-y-4 text-lg">

            <div>• Startups</div>
            <div>• Local Businesses</div>
            <div>• E-Commerce Brands</div>
            <div>• Agencies</div>
            <div>• Healthcare Businesses</div>
            <div>• Growing Companies</div>

          </div>

        </motion.div>

      </div>

      {/* Premium 3D Floating Cards */}

      <div className="grid md:grid-cols-3 gap-8 mb-20">

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="
          bg-white
          rounded-[32px]
          p-8
          text-center
          shadow-[0_20px_60px_rgba(0,90,156,0.12)]
          "
        >
          <div className="text-5xl">💻</div>

          <div className="mt-4 font-bold text-[#003F73]">
            Modern Design
          </div>

        </motion.div>

        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="
          bg-white
          rounded-[32px]
          p-8
          text-center
          shadow-[0_20px_60px_rgba(0,90,156,0.12)]
          "
        >
          <div className="text-5xl">⚡</div>

          <div className="mt-4 font-bold text-[#003F73]">
            Fast Performance
          </div>

        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="
          bg-white
          rounded-[32px]
          p-8
          text-center
          shadow-[0_20px_60px_rgba(0,90,156,0.12)]
          "
        >
          <div className="text-5xl">📈</div>

          <div className="mt-4 font-bold text-[#003F73]">
            Lead Generation
          </div>

        </motion.div>

      </div>

      <div className="text-center">

        <Link
          href="/contact"
          className="
          inline-block
          bg-[#003F73]
          text-white
          px-10
          py-5
          rounded-2xl
          font-bold
          shadow-xl
          hover:scale-105
          transition-all
          "
        >
          Book Free Consultation
        </Link>

      </div>

    </div>

  </section>

</main>

);
}