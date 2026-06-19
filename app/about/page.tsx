"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            style={{ perspective: 1200 }}
          >
            <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
              ABOUT KANGITEN
            </p>
            <motion.h1
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-6xl md:text-8xl font-black text-[#003F73] leading-none mb-8"
              style={{
                transformStyle: "preserve-3d",
                textShadow:
                  "0 1px 0 #cfe1f2, 0 2px 0 #b9d3e8, 0 4px 0 #a3c4dd, 0 8px 16px rgba(0,63,115,0.35), 0 20px 40px rgba(0,63,115,0.25)",
              }}
            >
              Building The Future
              <br />
              Of Business Growth.
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kangiten Softwares helps businesses grow through websites, AI
              automation, mobile applications, digital marketing and custom
              software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-6xl font-black text-[#003F73] mb-10"
            style={{
              textShadow:
                "0 2px 0 #cfe1f2, 0 4px 0 #b9d3e8, 0 10px 20px rgba(0,63,115,0.25)",
            }}
          >
            Our Story
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kangiten Softwares was founded with a vision to help businesses
            leverage modern technology, automation and artificial intelligence
            without the complexity that usually comes with digital
            transformation.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mt-8">
            We believe every business deserves access to premium digital
            solutions that drive growth, improve efficiency and create long-term
            success.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[#003F73] mb-10">
            Founder & CEO
          </h2>
          <motion.div
            whileHover={{ rotateY: 4, rotateX: -3, y: -6 }}
            transition={{ type: "spring", stiffness: 150 }}
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            className="bg-white rounded-[40px] border border-blue-100 shadow-[0_35px_90px_rgba(0,90,156,0.25),0_10px_30px_rgba(0,90,156,0.15)] p-8"
          >
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div
                className="relative h-[320px] rounded-[30px] overflow-hidden bg-blue-50 shadow-[inset_0_4px_12px_rgba(0,63,115,0.15),0_20px_40px_rgba(0,90,156,0.25)]"
                style={{ transform: "translateZ(40px)" }}
              >
                <Image
                  src="/founder.jpg"
                  alt="Kompelli Sri Anjaneyam - Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-2" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-4xl font-black text-[#003F73] mb-4">
                  Kompelli Sri Anjaneyam
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founder and Chief Executive Officer at Kangiten Softwares,
                  focused on software architecture, artificial intelligence,
                  automation systems and building scalable technology solutions
                  that help businesses grow faster.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co Founder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[#003F73] mb-10">
            Co-Founder & Head of Growth
          </h2>
          <motion.div
            whileHover={{ rotateY: -4, rotateX: -3, y: -6 }}
            transition={{ type: "spring", stiffness: 150 }}
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            className="bg-white rounded-[40px] border border-blue-100 shadow-[0_35px_90px_rgba(0,90,156,0.25),0_10px_30px_rgba(0,90,156,0.15)] p-8"
          >
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div
                className="relative h-[320px] rounded-[30px] overflow-hidden bg-blue-50 shadow-[inset_0_4px_12px_rgba(0,63,115,0.15),0_20px_40px_rgba(0,90,156,0.25)]"
                style={{ transform: "translateZ(40px)" }}
              >
                <Image
                  src="/cofounder.jpg"
                  alt="Sohan Singh Badavath - Co-Founder & Head of Growth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-2" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-4xl font-black text-[#003F73] mb-4">
                  Sohan Singh Badavath
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Co-Founder and Head of Growth at Kangiten Softwares, focused
                  on business strategy, client success, marketing and helping
                  businesses achieve sustainable long-term growth through
                  technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-black text-[#003F73]"
              style={{
                textShadow:
                  "0 2px 0 #cfe1f2, 0 4px 0 #b9d3e8, 0 10px 20px rgba(0,63,115,0.25)",
              }}
            >
              What We Build
            </h2>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ perspective: 1400 }}
          >
            {[
              "💻 Website Development",
              "📱 Mobile Applications",
              "🤖 AI Automation",
              "🎙 AI Voice Agents",
              "🎨 Graphic Design",
              "⚙ Custom Software",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  y: -14,
                  scale: 1.05,
                  rotateX: 8,
                  rotateY: -8,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-white rounded-[32px] p-8 shadow-[0_30px_80px_rgba(0,90,156,0.22),0_8px_20px_rgba(0,90,156,0.12)] text-center text-2xl font-bold text-[#003F73] border border-blue-100"
              >
                <span style={{ display: "inline-block", transform: "translateZ(30px)" }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-6xl font-black text-[#003F73] mb-10"
            style={{
              textShadow:
                "0 2px 0 #cfe1f2, 0 4px 0 #b9d3e8, 0 10px 20px rgba(0,63,115,0.25)",
            }}
          >
            Our Vision
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed">
            We envision a future where businesses of all sizes can leverage
            websites, automation and artificial intelligence to unlock new
            levels of growth, productivity and customer experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-6xl font-black text-[#003F73] mb-8"
            style={{
              textShadow:
                "0 2px 0 #cfe1f2, 0 4px 0 #b9d3e8, 0 10px 20px rgba(0,63,115,0.25)",
            }}
          >
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to transform your business with technology?
          </p>
          <motion.div
            whileHover={{ scale: 1.06, y: -4, rotateX: -8 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: "inline-block", transformStyle: "preserve-3d", perspective: 800 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#003F73] text-white px-10 py-5 rounded-2xl font-bold shadow-[0_20px_50px_rgba(0,63,115,0.5),0_8px_20px_rgba(0,63,115,0.35),inset_0_-4px_0_rgba(0,0,0,0.2)]"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}