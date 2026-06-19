"use client";

import Link from "next/link";

export default function CompleteDigitalGrowthPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="relative py-32 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
              COMPLETE DIGITAL GROWTH
            </p>

            <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
              Grow Your Business
              <br />
              Faster
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete digital growth package combining websites,
              branding, social media, automation and lead generation.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

            {[
              "Premium Website",
              "SEO Setup",
              "WhatsApp Integration",
              "Lead Capture System",
              "Social Media Management",
              "Graphic Design",
              "Analytics Dashboard",
              "Business Automation",
              "Growth Strategy",
            ].map((item) => (
              <div
                key={item}
                className="
                bg-white
                rounded-[32px]
                p-8
                border
                border-blue-100
                shadow-[0_20px_60px_rgba(0,90,156,0.12)]
                "
              >
                <div className="text-2xl font-bold text-[#003F73]">
                  ✓ {item}
                </div>
              </div>
            ))}

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