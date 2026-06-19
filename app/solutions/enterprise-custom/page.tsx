"use client";

import Link from "next/link";

export default function EnterpriseCustomPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="py-32 max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
          ENTERPRISE CUSTOM SOLUTION
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
          Built For
          <br />
          Your Business.
        </h1>

        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          Fully custom software, applications and automation systems tailored to your needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            "Custom Software",
            "Mobile Applications",
            "AI Integrations",
            "Dashboards",
            "Enterprise Automation",
            "Dedicated Support",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,90,156,0.12)]"
            >
              <div className="text-2xl font-bold text-[#003F73]">
                ✓ {item}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-block bg-[#003F73] text-white px-10 py-5 rounded-2xl font-bold"
        >
          Book Free Consultation
        </Link>

      </section>
    </main>
  );
}