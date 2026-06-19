"use client";


import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">

        <div className="text-center mb-16">

          <p className="text-[#005A9C] font-bold tracking-[0.3em] mb-6">
            BUILD • AUTOMATE • GROW
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight text-[#003F73]">
            WE BUILD.
            <br />
            WE AUTOMATE.
            <br />
            <span className="text-[#005A9C]">
              YOU GROW.
            </span>
          </h1>

        </div>

        <div className="relative h-[750px] flex items-center justify-center">

          {/* Orbit Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[700px] h-[700px]"
          >

            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              💻 Website Development
            </div>

            <div className="absolute top-[18%] right-[5%] bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              📱 Mobile Apps
            </div>

            <div className="absolute top-[50%] right-0 -translate-y-1/2 bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              🤖 AI Automation
            </div>

            <div className="absolute bottom-[18%] right-[5%] bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              🎙 AI Voice Agents
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              ⚙ Business Automation
            </div>

            <div className="absolute bottom-[18%] left-[5%] bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              🎨 Graphic Design
            </div>

            <div className="absolute top-[50%] left-0 -translate-y-1/2 bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              📢 Social Media
            </div>

            <div className="absolute top-[18%] left-[5%] bg-white shadow-xl rounded-3xl px-6 py-4 border border-blue-100">
              📈 Digital Growth
            </div>

          </motion.div>

          {/* Logo */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="bg-white rounded-full shadow-2xl p-8"
          >
            <img
  src="/logo.png"
  alt="Kangiten Logo"
  className="w-[320px] h-auto"
/>
          </motion.div>

        </div>

      </div>

    </section>
  );
}