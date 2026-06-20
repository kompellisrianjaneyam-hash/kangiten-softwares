"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const services = [
  "Website Development",
  "Mobile App Development",
  "AI Automation",
  "AI Voice Agents",
  "Custom Software",
  "Graphic Design",
  "Social Media Management",
  "Business Automation",
];

const metrics = [
  { value: "8+", label: "Core Services" },
  { value: "AI", label: "Automation Ready" },
  { value: "24/7", label: "Smart Systems" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-white px-4 py-20 text-slate-950 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_12%_10%,rgba(126,200,255,0.36),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(0,90,156,0.2),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f4faff_48%,#ffffff_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(0,90,156,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,90,156,0.055)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      <div className="absolute left-1/2 top-12 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7EC8FF]/25 blur-3xl sm:h-[32rem] sm:w-[32rem]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-bold tracking-[0.18em] text-[#003F73] shadow-[0_18px_55px_rgba(0,90,156,0.14)] backdrop-blur-xl lg:mx-0"
          >
            <span className="h-2 w-2 rounded-full bg-[#7EC8FF] shadow-[0_0_18px_rgba(126,200,255,0.95)]" />
            BUILD • AUTOMATE • GROW
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Premium Websites.
            <span className="block text-[#005A9C]">Custom Software.</span>
            <span className="block">AI Automation.</span>
            <span className="mt-3 block bg-gradient-to-r from-[#003F73] via-[#005A9C] to-[#7EC8FF] bg-clip-text text-transparent">
              Built To Scale.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl lg:mx-0"
          >
            Kangiten Softwares builds premium websites, mobile applications, AI
            automation systems and custom software solutions designed to help
            businesses scale faster and operate smarter.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#005A9C] px-7 py-4 text-base font-bold text-white shadow-[0_22px_55px_rgba(0,90,156,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#003F73] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7EC8FF]/55 sm:w-auto"
            >
              Book Free Consultation
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-[#005A9C]/15 bg-white/60 px-7 py-4 text-base font-bold text-[#003F73] shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#005A9C]/30 hover:bg-white/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7EC8FF]/45 sm:w-auto"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-3 border-t border-[#005A9C]/10 pt-6"
            aria-label="Kangiten Softwares trust indicators"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center lg:text-left">
                <p className="text-2xl font-black text-[#005A9C]">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className="relative mx-auto w-full max-w-2xl lg:max-w-none"
          aria-label="Kangiten Softwares premium dashboard"
        >
          <div className="absolute -left-4 top-10 h-44 w-44 rounded-full bg-[#7EC8FF]/35 blur-3xl" />
          <div className="absolute -right-4 bottom-8 h-56 w-56 rounded-full bg-[#005A9C]/20 blur-3xl" />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-8 z-20 hidden rounded-2xl border border-white/40 bg-white/60 px-4 py-3 shadow-[0_24px_65px_rgba(0,63,115,0.16)] backdrop-blur-2xl sm:block"
          >
            <p className="text-xl font-black text-[#003F73]">24/7</p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              AI Agents
            </p>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-32 z-20 hidden rounded-2xl border border-white/40 bg-white/60 px-4 py-3 shadow-[0_24px_65px_rgba(0,63,115,0.16)] backdrop-blur-2xl sm:block"
          >
            <p className="text-xl font-black text-[#003F73]">3x</p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Faster Scale
            </p>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-8 z-20 hidden rounded-2xl border border-white/40 bg-white/60 px-4 py-3 shadow-[0_24px_65px_rgba(0,63,115,0.16)] backdrop-blur-2xl sm:block"
          >
            <p className="text-xl font-black text-[#003F73]">360°</p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Growth Stack
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/50 p-4 shadow-[0_36px_110px_rgba(0,63,115,0.22)] backdrop-blur-2xl sm:p-5">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="rounded-[1.55rem] border border-white/40 bg-white/60 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_70px_rgba(0,90,156,0.12)] backdrop-blur-xl sm:p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-[#003F73]">
                    Kangiten Growth OS
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Software, automation and digital growth in one system.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/40 bg-white/50 px-3 py-2 shadow-sm backdrop-blur-xl">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#7EC8FF]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#005A9C]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#003F73]" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.22 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative min-h-28 overflow-hidden rounded-2xl border border-white/40 bg-white/50 p-4 shadow-[0_16px_45px_rgba(0,63,115,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_22px_60px_rgba(0,63,115,0.16)]"
                  >
                    <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-[#7EC8FF]/25 blur-2xl transition group-hover:bg-[#7EC8FF]/35" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#005A9C]/10 text-[#005A9C] ring-1 ring-[#005A9C]/10">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-5 w-5"
                            fill="none"
                          >
                            <path
                              d="M5 12.5 9.2 16.7 19 6.9"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <span className="rounded-full bg-[#7EC8FF]/18 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#003F73]">
                          Active
                        </span>
                      </div>

                      <h2 className="mt-5 text-base font-black leading-tight text-slate-950">
                        {service}
                      </h2>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-r from-[#003F73] via-[#005A9C] to-[#0b7bc4] p-4 text-white shadow-[0_20px_60px_rgba(0,90,156,0.25)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-black">
                      Production-ready delivery
                    </p>
                    <p className="mt-1 text-xs font-medium text-white/75">
                      Strategy, design, development and automation built to
                      scale.
                    </p>
                  </div>

                  <div className="inline-flex w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-black backdrop-blur-xl">
                    Scale Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}