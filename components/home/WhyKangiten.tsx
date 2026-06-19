"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Solutions",
    description:
      "Modern AI automation, voice agents and intelligent workflows.",
  },
  {
    title: "Custom Built",
    description:
      "Every solution is tailored to your business goals and processes.",
  },
  {
    title: "Fast Delivery",
    description:
      "Rapid development cycles without compromising quality.",
  },
  {
    title: "Long-Term Support",
    description:
      "Ongoing updates, maintenance and technical assistance.",
  },
];

export default function WhyKangiten() {
  return (
    <section className="py-32 bg-[#f8fbff]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#005A9C] font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#003F73]">
            Why Kangiten?
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We combine software development, AI automation and modern digital
            solutions to help businesses grow faster.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-[40px]
            bg-white
            p-12
            shadow-[0_20px_60px_rgba(0,90,156,0.12)]
            "
          >

            <h3 className="text-4xl font-black text-[#003F73] mb-8">
              Helping Businesses
              <br />
              Build, Automate & Grow
            </h3>

            <div className="grid grid-cols-2 gap-6">

              <StatCard number="24/7" label="Support" />
              <StatCard number="AI" label="Powered" />
              <StatCard number="100%" label="Custom" />
              <StatCard number="Fast" label="Delivery" />

            </div>

          </motion.div>

          <div className="grid gap-6">

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border
                border-blue-100
                "
              >
                <h4 className="text-2xl font-bold text-[#003F73] mb-3">
                  {feature.title}
                </h4>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div
      className="
      bg-blue-50
      rounded-3xl
      p-6
      text-center
      "
    >
      <div className="text-4xl font-black text-[#003F73]">
        {number}
      </div>

      <div className="text-gray-600 mt-2">
        {label}
      </div>
    </div>
  );
}