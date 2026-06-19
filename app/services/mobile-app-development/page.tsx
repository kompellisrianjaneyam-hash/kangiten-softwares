"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-white overflow-hidden min-h-screen">

      <section className="relative py-32">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
              MOBILE APP DEVELOPMENT
            </p>

            <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
              Build Powerful
              <br />
              Mobile Apps
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Android and iOS applications designed for growth,
              customer engagement and business scalability.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">

            <motion.div
              whileHover={{ y: -10 }}
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
                <div>✓ Android Development</div>
                <div>✓ iOS Development</div>
                <div>✓ Cross Platform Apps</div>
                <div>✓ Admin Dashboard</div>
                <div>✓ Push Notifications</div>
                <div>✓ App Store Deployment</div>
              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
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
                <div>• Healthcare</div>
                <div>• Education</div>
                <div>• E-Commerce</div>
                <div>• Service Businesses</div>
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