"use client";

import {
  motion,
  type Variants,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type PricingPlanName = "Starter" | "Growth" | "Business";

type PricingPlan = {
  name: PricingPlanName;
  price: number;
  range: string;
  description: string;
};

type CalculatorValues = {
  totalMinutes: number;
  humanCost: number;
  aiCost: number;
  monthlySavings: number;
  annualSavings: number;
  hoursSaved: number;
  costPerCall: number;
  recommendedPlan: PricingPlanName;
  roi: number;
  pricePerMinute: number;
};

type SliderFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  prefix?: string;
  onChange: (value: number) => void;
  formatter?: (value: number) => string;
};

type ResultCardProps = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  tone?: "blue" | "green" | "dark";
  decimals?: number;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: 6,
    range: "0-5,000 minutes",
    description: "Built for lean teams starting with AI voice automation.",
  },
  {
    name: "Growth",
    price: 5.25,
    range: "5,001-25,000 minutes",
    description: "For growing businesses handling steady call volume.",
  },
  {
    name: "Business",
    price: 4.75,
    range: "25,001-100,000 minutes",
    description: "Optimized pricing for high-volume customer operations.",
  },
];

const industries = [
  "Real Estate",
  "Healthcare",
  "Education",
  "E-Commerce",
  "Finance",
  "Travel",
  "Restaurants",
  "Automotive",
  "Legal",
  "Marketing Agency",
  "SaaS",
  "Other",
];

const comparisonRows = [
  {
    feature: "Availability",
    human: "Limited shifts",
    ai: "24x7 always available",
  },
  {
    feature: "Scalability",
    human: "Requires more hiring",
    ai: "Scales instantly with demand",
  },
  {
    feature: "Hiring",
    human: "Recruitment and onboarding",
    ai: "Ready after setup",
  },
  {
    feature: "Training",
    human: "Continuous training needed",
    ai: "Centralized knowledge updates",
  },
  {
    feature: "Missed Calls",
    human: "Possible during peak hours",
    ai: "Handles simultaneous calls",
  },
  {
    feature: "Response Time",
    human: "Depends on queue and staff",
    ai: "Instant response",
  },
  {
    feature: "Working Hours",
    human: "Fixed business hours",
    ai: "Works day and night",
  },
  {
    feature: "Maintenance",
    human: "Management overhead",
    ai: "Software-managed workflow",
  },
  {
    feature: "Monthly Cost",
    human: "Salary and overhead",
    ai: "Usage-based pricing",
  },
  {
    feature: "Support",
    human: "Availability dependent",
    ai: "Consistent call handling",
  },
  {
    feature: "Expansion",
    human: "Slow and costly",
    ai: "Fast rollout across teams",
  },
  {
    feature: "Languages",
    human: "Limited by staff skills",
    ai: "Multilingual conversations",
  },
];

const benefits = [
  "24x7 Availability",
  "Never Miss a Lead",
  "Appointment Booking",
  "CRM Integration",
  "Multilingual",
  "WhatsApp Integration",
  "Analytics Dashboard",
  "Human Handoff",
  "Call Recording",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 26,
    mass: 0.8,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [springValue]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "",
  prefix = "",
  onChange,
  formatter,
}: SliderFieldProps) {
  const percentage = useMemo(() => {
    return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  }, [max, min, value]);

  const displayValue = formatter
    ? formatter(value)
    : `${prefix}${formatNumber(value)}${suffix}`;

  return (
    <div className="rounded-[28px] border border-white/80 bg-white/75 p-5 shadow-[0_18px_55px_rgba(0,90,156,0.08)] backdrop-blur-2xl">
      <div className="mb-5">
        <label className="block text-sm font-semibold text-slate-500">
          {label}
        </label>
        <div className="mt-1 text-2xl font-black text-[#003F73]">
          {displayValue}
        </div>
      </div>

      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-3 w-full cursor-pointer appearance-none rounded-full outline-none [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[6px] [&::-moz-range-thumb]:border-[#005A9C] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-[0_10px_28px_rgba(0,90,156,0.28),0_0_0_8px_rgba(126,200,255,0.18)] [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[6px] [&::-webkit-slider-thumb]:border-[#005A9C] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_10px_28px_rgba(0,90,156,0.28),0_0_0_8px_rgba(126,200,255,0.18)]"
        style={{
          background: `linear-gradient(90deg, #005A9C ${percentage}%, rgba(126, 200, 255, 0.28) ${percentage}%)`,
        }}
      />

      <div className="mt-3 flex justify-between text-xs font-semibold text-slate-400">
        <span>
          {prefix}
          {formatNumber(min)}
          {suffix}
        </span>
        <span>
          {prefix}
          {formatNumber(max)}
          {suffix}
        </span>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  prefix,
  suffix,
  tone = "blue",
  decimals = 0,
}: ResultCardProps) {
  const valueClass =
    tone === "green"
      ? "text-green-600"
      : tone === "dark"
        ? "text-white"
        : "text-[#003F73]";

  const cardClass =
    tone === "dark"
      ? "border-[#003F73] bg-[#003F73] text-white"
      : "border-white/80 bg-white/75";

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-[30px] border p-6 shadow-[0_25px_80px_rgba(0,90,156,0.10)] backdrop-blur-2xl ${cardClass}`}
    >
      <p
        className={`text-sm font-semibold ${
          tone === "dark" ? "text-white/70" : "text-slate-500"
        }`}
      >
        {label}
      </p>
      <div className={`mt-3 text-3xl font-black md:text-4xl ${valueClass}`}>
        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
      </div>
    </motion.div>
  );
}

export default function VoiceROICalculator() {
  const [industry, setIndustry] = useState("Real Estate");
  const [monthlyCalls, setMonthlyCalls] = useState(1000);
  const [avgDuration, setAvgDuration] = useState(3);
  const [employees, setEmployees] = useState(2);
  const [salary, setSalary] = useState(25000);
  const [workingHours, setWorkingHours] = useState(8);
  const [workingDays, setWorkingDays] = useState(26);

  const calculator: CalculatorValues = useMemo(() => {
    const totalMinutes = monthlyCalls * avgDuration;

    let pricePerMinute = 6;
    let recommendedPlan: PricingPlanName = "Starter";

    if (totalMinutes > 5000 && totalMinutes <= 25000) {
      pricePerMinute = 5.25;
      recommendedPlan = "Growth";
    }

    if (totalMinutes > 25000) {
      pricePerMinute = 4.75;
      recommendedPlan = "Business";
    }

    const humanCost = employees * salary;
    const aiCost = Math.round(totalMinutes * pricePerMinute);
    const monthlySavings = Math.max(humanCost - aiCost, 0);
    const annualSavings = monthlySavings * 12;
    const hoursSaved = Math.round(totalMinutes / 60);
    const costPerCall = monthlyCalls > 0 ? aiCost / monthlyCalls : 0;
    const roi = aiCost > 0 ? Math.round((monthlySavings / aiCost) * 100) : 0;

    return {
      totalMinutes,
      humanCost,
      aiCost,
      monthlySavings,
      annualSavings,
      hoursSaved,
      costPerCall,
      recommendedPlan,
      roi,
      pricePerMinute,
    };
  }, [avgDuration, employees, monthlyCalls, salary]);

  const workingCapacity = useMemo(() => {
    return employees * workingHours * workingDays;
  }, [employees, workingHours, workingDays]);

  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,200,255,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,90,156,0.12),transparent_32%)]" />
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7EC8FF] to-transparent" />
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#7EC8FF]/25 blur-[130px]" />
        <div className="absolute -right-24 top-[520px] h-[420px] w-[420px] rounded-full bg-[#005A9C]/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center rounded-full border border-[#7EC8FF]/45 bg-white/70 px-5 py-2 text-sm font-bold uppercase tracking-[0.28em] text-[#005A9C] shadow-[0_18px_60px_rgba(0,90,156,0.10)] backdrop-blur-2xl"
          >
            Kangiten Softwares
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-black tracking-tight text-[#003F73] md:text-6xl lg:text-7xl"
          >
            Kangiten AI Voice Agent Cost & Savings Calculator
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            Estimate how much your business can save by replacing repetitive
            customer calls with intelligent AI voice agents built for modern
            support, sales and operations teams.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[34px] border border-white/80 bg-white/70 p-8 shadow-[0_30px_90px_rgba(0,90,156,0.12)] backdrop-blur-2xl"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7EC8FF] to-transparent opacity-80" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7EC8FF]/25 blur-3xl transition duration-500 group-hover:bg-[#7EC8FF]/40" />

              <p className="text-2xl font-black text-[#003F73]">
                {plan.name}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-black text-[#005A9C]">
                  ₹{plan.price}
                </span>
                <span className="pb-2 text-base font-semibold text-slate-500">
                  /min
                </span>
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#005A9C]">
                {plan.range}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-20 overflow-hidden rounded-[42px] border border-white/80 bg-white/65 p-6 shadow-[0_40px_140px_rgba(0,90,156,0.14)] backdrop-blur-3xl md:p-10"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#005A9C]">
                ROI Calculator
              </p>
              <h2 className="mt-4 text-3xl font-black text-[#003F73] md:text-5xl">
                Model your monthly AI savings.
              </h2>
            </div>

            <div className="rounded-[26px] border border-[#7EC8FF]/35 bg-white/70 px-6 py-4 shadow-[0_18px_55px_rgba(0,90,156,0.08)] backdrop-blur-2xl">
              <label
                htmlFor="industry"
                className="text-sm font-semibold text-slate-500"
              >
                Selected industry
              </label>
              <select
                id="industry"
                value={industry}
                onChange={(event) => setIndustry(event.target.value)}
                className="mt-2 w-full min-w-0 rounded-2xl border border-[#7EC8FF]/45 bg-white px-4 py-3 font-bold text-[#003F73] outline-none transition focus:border-[#005A9C] focus:ring-4 focus:ring-[#7EC8FF]/20 sm:min-w-64"
              >
                {industries.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <SliderField
              label="Monthly Calls"
              min={100}
              max={50000}
              step={100}
              value={monthlyCalls}
              suffix=" calls"
              onChange={setMonthlyCalls}
              formatter={(value) => `${formatNumber(value)} calls`}
            />

            <SliderField
              label="Average Call Duration"
              min={1}
              max={20}
              value={avgDuration}
              suffix=" min"
              onChange={setAvgDuration}
              formatter={(value) => `${value} minutes`}
            />

            <SliderField
              label="Employees"
              min={1}
              max={100}
              value={employees}
              suffix=" employees"
              onChange={setEmployees}
              formatter={(value) => `${value} employees`}
            />

            <SliderField
              label="Salary"
              min={10000}
              max={100000}
              step={1000}
              value={salary}
              prefix="₹"
              onChange={setSalary}
              formatter={(value) => `₹${formatCurrency(value)}`}
            />

            <SliderField
              label="Business Hours"
              min={4}
              max={24}
              value={workingHours}
              suffix=" hrs"
              onChange={setWorkingHours}
              formatter={(value) => `${value} hours/day`}
            />

            <SliderField
              label="Working Days"
              min={5}
              max={31}
              value={workingDays}
              suffix=" days"
              onChange={setWorkingDays}
              formatter={(value) => `${value} days/month`}
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[24px] bg-[#003F73] p-5 text-white shadow-[0_20px_70px_rgba(0,63,115,0.24)]">
              <p className="text-sm text-white/70">Total Minutes</p>
              <p className="mt-2 text-2xl font-black">
                {formatNumber(calculator.totalMinutes)}
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_55px_rgba(0,90,156,0.08)]">
              <p className="text-sm text-slate-500">Cost Per Call</p>
              <p className="mt-2 text-2xl font-black text-[#003F73]">
                ₹{calculator.costPerCall.toFixed(2)}
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_55px_rgba(0,90,156,0.08)]">
              <p className="text-sm text-slate-500">Team Capacity</p>
              <p className="mt-2 text-2xl font-black text-[#003F73]">
                {formatNumber(workingCapacity)} hrs
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_55px_rgba(0,90,156,0.08)]">
              <p className="text-sm text-slate-500">Recommended Plan</p>
              <p className="mt-2 text-2xl font-black text-[#005A9C]">
                {calculator.recommendedPlan}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-20"
        >
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#005A9C]">
              Results
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#003F73] md:text-5xl">
              Savings that update instantly.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ResultCard
              label="Current Human Cost"
              value={calculator.humanCost}
              prefix="₹"
            />
            <ResultCard
              label="AI Cost"
              value={calculator.aiCost}
              prefix="₹"
            />
            <ResultCard
              label="Monthly Savings"
              value={calculator.monthlySavings}
              prefix="₹"
              tone="green"
            />
            <ResultCard
              label="Annual Savings"
              value={calculator.annualSavings}
              prefix="₹"
              tone="green"
            />
            <ResultCard label="ROI" value={calculator.roi} suffix="%" />
            <ResultCard label="Hours Saved" value={calculator.hoursSaved} />
            <ResultCard
              label="Total Minutes"
              value={calculator.totalMinutes}
            />
            <ResultCard
              label="Cost Per Call"
              value={calculator.costPerCall}
              prefix="₹"
              decimals={2}
            />

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-[30px] border border-[#003F73] bg-[#003F73] p-6 text-white shadow-[0_25px_80px_rgba(0,63,115,0.22)]"
            >
              <p className="text-sm font-semibold text-white/70">
                Recommended Plan
              </p>
              <div className="mt-3 text-4xl font-black">
                {calculator.recommendedPlan}
              </div>
              <p className="mt-3 text-sm font-semibold text-white/70">
                ₹{calculator.pricePerMinute}/min
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-20 overflow-hidden rounded-[40px] border border-white/80 bg-white/70 shadow-[0_35px_120px_rgba(0,90,156,0.12)] backdrop-blur-3xl"
        >
          <div className="border-b border-[#7EC8FF]/25 p-8 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#005A9C]">
              Comparison
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#003F73] md:text-5xl">
              Human Team vs Kangiten AI
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-[#F8FCFF] text-left">
                  <th className="px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                    Category
                  </th>
                  <th className="px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                    Human Team
                  </th>
                  <th className="px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#005A9C]">
                    Kangiten AI
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-t border-[#7EC8FF]/20 transition hover:bg-[#F8FCFF]"
                  >
                    <td className="px-8 py-5 font-black text-[#003F73]">
                      {row.feature}
                    </td>
                    <td className="px-8 py-5 text-slate-600">{row.human}</td>
                    <td className="px-8 py-5 font-semibold text-[#005A9C]">
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-20"
        >
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#005A9C]">
              Benefits
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#003F73] md:text-5xl">
              Built for serious customer conversations.
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-[28px] border border-white/80 bg-white/70 p-6 shadow-[0_22px_70px_rgba(0,90,156,0.10)] backdrop-blur-2xl"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-[#003F73] shadow-[0_14px_35px_rgba(0,63,115,0.22)]" />
                <h3 className="text-xl font-black text-[#003F73]">
                  {benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}