"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "AI Voice Agents",
    description:
      "24/7 AI receptionists that answer calls, qualify leads and book appointments automatically.",
  },
  {
    title: "Business Websites",
    description:
      "Modern, fast and premium websites designed to convert visitors into customers.",
  },
  {
    title: "Mobile Applications",
    description:
      "Android and iOS applications built for scale and user engagement.",
  },
  {
    title: "AI Automation Systems",
    description:
      "Automate repetitive tasks, lead management, support and workflows using AI.",
  },
  {
    title: "Custom Software",
    description:
      "Tailored business software built specifically for your operations and goals.",
  },
  {
    title: "Digital Growth Systems",
    description:
      "Complete marketing, social media and lead generation solutions.",
  },
];

export default function FeaturedSolutions() {
  return (
    <section className="py-32 bg-[#f8fbff]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#005A9C] font-semibold mb-4">
            Featured Solutions
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#003F73]">
            What We Build
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful digital solutions designed to help businesses grow,
            automate operations and improve customer experience.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                group
                bg-white
                rounded-[32px]
                p-8
                shadow-[0_20px_60px_rgba(0,90,156,0.12)]
                border
                border-blue-100
                overflow-hidden
                relative
              "
            >

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative">

                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#003F73]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                  mb-6
                  "
                >
                  K
                </div>

                <h3 className="text-2xl font-black text-[#003F73] mb-4">
                  {solution.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}