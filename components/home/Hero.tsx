"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-white px-4 py-20 text-slate-950 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_14%_12%,rgba(126,200,255,0.38),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(0,90,156,0.22),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f4faff_48%,#ffffff_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(0,90,156,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,90,156,0.055)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7EC8FF]/25 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-[#005A9C]/10 blur-3xl" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-6xl text-center"
      >
        <div className="absolute -left-10 top-12 hidden h-36 w-36 rounded-full border border-white/40 bg-white/40 shadow-[0_28px_80px_rgba(0,90,156,0.14)] backdrop-blur-2xl lg:block" />
        <div className="absolute -right-8 top-28 hidden h-24 w-24 rounded-3xl border border-white/40 bg-white/50 shadow-[0_28px_80px_rgba(0,63,115,0.14)] backdrop-blur-xl lg:block" />

        <motion.div
          variants={fadeUp}
          className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-bold tracking-[0.18em] text-[#003F73] shadow-[0_18px_55px_rgba(0,90,156,0.14)] backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-[#7EC8FF] shadow-[0_0_18px_rgba(126,200,255,0.95)]" />
          BUILD • AUTOMATE • GROW
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto rounded-[2rem] border border-white/40 bg-white/50 px-4 py-8 shadow-[0_36px_110px_rgba(0,63,115,0.18)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        >
          <h1
            id="hero-heading"
            className="mx-auto max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Premium Websites.
            <span className="block text-[#005A9C]">Custom Software.</span>
            <span className="block">AI Automation.</span>
            <span className="mt-3 block bg-gradient-to-r from-[#003F73] via-[#005A9C] to-[#7EC8FF] bg-clip-text text-transparent">
              Built To Scale.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
            Kangiten Softwares builds premium websites, mobile applications, AI
            automation systems and custom software solutions designed to help
            businesses scale faster and operate smarter.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#005A9C] px-7 py-4 text-base font-bold text-white shadow-[0_22px_55px_rgba(0,90,156,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#003F73] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7EC8FF]/55 sm:w-auto"
            >
              Book Free Consultation
            </a>
            <a
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-[#005A9C]/15 bg-white/60 px-7 py-4 text-base font-bold text-[#003F73] shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#005A9C]/30 hover:bg-white/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7EC8FF]/45 sm:w-auto"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          aria-label="Kangiten Softwares trust indicators"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/40 bg-white/60 px-5 py-4 text-center shadow-[0_18px_55px_rgba(0,63,115,0.12)] backdrop-blur-xl"
            >
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
    </section>
  );
}