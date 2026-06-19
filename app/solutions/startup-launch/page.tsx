"use client";

import Link from "next/link";

export default function StartupLaunchPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="py-32 max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
          STARTUP LAUNCH PACKAGE
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
          Launch
          <br />
          Your Startup.
        </h1>

        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          Everything needed to launch a startup professionally and start attracting customers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            "Logo Design",
            "Brand Identity",
            "Business Website",
            "Social Media Setup",
            "Marketing Assets",
            "Launch Strategy",
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