"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import VoiceROICalculator from "@/components/voice/VoiceROICalculator";
export default function AIVoiceAgentsPage() {
  return (
    <main className="bg-white overflow-hidden min-h-screen">

      <section className="relative py-32">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
              AI VOICE AGENTS
            </p>

            <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
              AI That
              <br />
              Answers Calls
              <br />
              24/7
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Never miss a lead again. Our AI Voice Agents answer calls,
              qualify prospects, book appointments and support customers
              around the clock.
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
                Included Features
              </h2>

              <div className="space-y-4 text-lg">

                <div>✓ 24/7 Call Answering</div>
                <div>✓ Lead Qualification</div>
                <div>✓ Appointment Booking</div>
                <div>✓ Customer Support</div>
                <div>✓ CRM Integration</div>
                <div>✓ Call Routing</div>

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

                <div>• Real Estate Agencies</div>
                <div>• Clinics & Hospitals</div>
                <div>• Coaching Centers</div>
                <div>• Service Businesses</div>
                <div>• Marketing Agencies</div>
                <div>• Local Businesses</div>

              </div>

            </motion.div>

          </div>

          {/* 3D Stats Cards */}

          <div className="grid md:grid-cols-3 gap-8 mb-20">

            <motion.div
              whileHover={{ y: -10 }}
              className="
              bg-white
              rounded-[32px]
              p-8
              text-center
              shadow-[0_20px_60px_rgba(0,90,156,0.12)]
              "
            >
              <div className="text-5xl font-black text-[#003F73]">
                24/7
              </div>

              <div className="text-gray-600 mt-3">
                Availability
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="
              bg-white
              rounded-[32px]
              p-8
              text-center
              shadow-[0_20px_60px_rgba(0,90,156,0.12)]
              "
            >
              <div className="text-5xl font-black text-[#003F73]">
                AI
              </div>

              <div className="text-gray-600 mt-3">
                Smart Conversations
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="
              bg-white
              rounded-[32px]
              p-8
              text-center
              shadow-[0_20px_60px_rgba(0,90,156,0.12)]
              "
            >
              <div className="text-5xl font-black text-[#003F73]">
                ∞
              </div>

              <div className="text-gray-600 mt-3">
                Unlimited Scalability
              </div>
            </motion.div>

          </div>
         <VoiceROICalculator />
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