"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BusinessGrowthPage() {
return ( <main className="bg-white overflow-hidden">

```
  {/* Hero */}

  <section className="relative min-h-screen flex items-center">

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
            BUSINESS GROWTH PACKAGE
          </p>

          <h1 className="text-6xl md:text-8xl font-black text-[#003F73] leading-none mb-8">
            More Leads.
            <br />
            More Sales.
            <br />
            More Growth.
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-xl">
            A complete growth-focused digital solution designed
            to attract customers, generate leads and scale your business.
          </p>

          <Link
            href="/contact"
            className="
            inline-block
            bg-[#003F73]
            text-white
            px-8
            py-4
            rounded-2xl
            font-bold
            shadow-xl
            "
          >
            Book Free Consultation
          </Link>

        </div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="
          bg-white
          rounded-[40px]
          p-10
          border
          border-blue-100
          shadow-[0_30px_80px_rgba(0,90,156,0.15)]
          "
        >

          <div className="space-y-5">

            <div>✅ Premium Website</div>
            <div>✅ SEO Setup</div>
            <div>✅ Lead Generation System</div>
            <div>✅ WhatsApp Integration</div>
            <div>✅ Analytics Dashboard</div>

          </div>

        </motion.div>

      </div>

    </div>

  </section>

  {/* Included */}

  <section className="py-28">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-5xl font-black text-[#003F73] text-center mb-20">
        What's Included
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          "Premium Website",
          "SEO Optimization",
          "Lead Capture Forms",
          "WhatsApp Integration",
          "Analytics Dashboard",
          "Business Email Setup",
        ].map((item) => (
          <div
            key={item}
            className="
            bg-white
            rounded-[32px]
            p-8
            shadow-[0_20px_60px_rgba(0,90,156,0.12)]
            "
          >
            <div className="text-2xl font-bold text-[#003F73]">
              {item}
            </div>
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* Benefits */}

  <section className="py-28 bg-blue-50">

    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-5xl font-black text-[#003F73] mb-10">
        Why Businesses Choose This Package
      </h2>

      <p className="text-xl text-gray-600 leading-relaxed">
        This package combines design, technology and marketing
        foundations to help businesses build credibility,
        attract customers and generate consistent growth.
      </p>

    </div>

  </section>

  {/* CTA */}

  <section className="py-28">

    <div className="max-w-4xl mx-auto px-6 text-center">

      <h2 className="text-5xl font-black text-[#003F73] mb-8">
        Ready To Grow?
      </h2>

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
        "
      >
        Book Free Consultation
      </Link>

    </div>

  </section>

</main>

);
}