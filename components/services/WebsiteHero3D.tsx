"use client";

import { motion } from "framer-motion";

export default function WebsiteHero3D() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="tracking-[0.4em] uppercase text-[#005A9C] font-bold mb-6">
              WEBSITE DEVELOPMENT
            </p>

            <h1 className="text-6xl md:text-8xl font-black text-[#003F73] leading-none mb-8">
              Websites
              <br />
              That Sell.
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Premium business websites designed to generate
              leads, increase trust and grow your business.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-[#003F73] text-white px-8 py-4 rounded-2xl font-bold shadow-xl">
                Book Consultation
              </button>

              <button className="border border-blue-200 px-8 py-4 rounded-2xl font-bold text-[#003F73]">
                View Portfolio
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[700px]">

            {/* Main Website */}

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
              top-24
              left-10
              w-[500px]
              bg-white
              rounded-[40px]
              p-6
              shadow-[0_40px_100px_rgba(0,90,156,0.15)]
              border
              border-blue-100
              "
            >

              <div className="h-12 bg-blue-100 rounded-xl mb-6" />

              <div className="h-56 bg-blue-50 rounded-2xl mb-6" />

              <div className="grid grid-cols-3 gap-4">

                <div className="h-24 bg-blue-50 rounded-xl" />

                <div className="h-24 bg-blue-50 rounded-xl" />

                <div className="h-24 bg-blue-50 rounded-xl" />

              </div>

            </motion.div>

            {/* Analytics Card */}

            <motion.div
              animate={{
                y: [0, -25, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              absolute
              top-0
              right-0
              bg-white
              p-6
              rounded-3xl
              shadow-2xl
              "
            >

              <div className="text-sm text-gray-500 mb-2">
                Growth
              </div>

              <div className="text-4xl font-black text-[#003F73]">
                +245%
              </div>

            </motion.div>

            {/* Leads Card */}

            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
              absolute
              bottom-10
              left-0
              bg-white
              p-6
              rounded-3xl
              shadow-2xl
              "
            >

              <div className="text-sm text-gray-500">
                Monthly Leads
              </div>

              <div className="text-4xl font-black text-[#003F73]">
                120+
              </div>

            </motion.div>

            {/* Mobile Preview */}

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
              absolute
              bottom-0
              right-10
              w-36
              h-64
              bg-white
              rounded-[30px]
              border
              border-blue-100
              shadow-2xl
              p-3
              "
            >

              <div className="h-8 bg-blue-100 rounded-lg mb-3" />

              <div className="h-24 bg-blue-50 rounded-xl mb-3" />

              <div className="h-8 bg-blue-50 rounded-lg mb-2" />

              <div className="h-8 bg-blue-50 rounded-lg" />

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}