"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, goals and challenges.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We create a clear roadmap and solution architecture.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our team builds your website, app or automation system.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Every feature is thoroughly tested for quality and performance.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Your solution goes live with secure deployment practices.",
  },
  {
    number: "06",
    title: "Growth",
    description:
      "We provide support, improvements and scaling strategies.",
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.3em] text-[#005A9C] font-semibold mb-4">
            Our Process
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#003F73]">
            How We Work
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A structured process that ensures successful project delivery.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 hidden lg:block -translate-x-1/2" />

          <div className="space-y-16">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`
                  flex
                  items-center
                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                  gap-10
                `}
              >

                <div className="flex-1">

                  <div
                    className="
                    bg-white
                    rounded-[32px]
                    p-8
                    shadow-[0_20px_60px_rgba(0,90,156,0.12)]
                    border
                    border-blue-100
                    "
                  >

                    <div className="text-[#005A9C] text-sm font-bold mb-2">
                      STEP {step.number}
                    </div>

                    <h3 className="text-3xl font-black text-[#003F73] mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-lg">
                      {step.description}
                    </p>

                  </div>

                </div>

                <div
                  className="
                  hidden
                  lg:flex
                  w-20
                  h-20
                  rounded-full
                  bg-[#003F73]
                  text-white
                  items-center
                  justify-center
                  font-black
                  text-xl
                  shadow-xl
                  "
                >
                  {step.number}
                </div>

                <div className="flex-1 hidden lg:block" />

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}