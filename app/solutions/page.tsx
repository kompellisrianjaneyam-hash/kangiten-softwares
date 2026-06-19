"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const solutions = [
{
title: "🚀 Business Growth Package",
link: "/solutions/business-growth",
desc: "Everything needed to generate more leads and grow online.",
items: [
"Premium Website",
"SEO Setup",
"Lead Capture System",
"WhatsApp Integration",
"Analytics Dashboard",
],
},
{
title: "🤖 AI Business Package",
link: "/solutions/ai-business",
desc: "AI-powered automation and customer engagement.",
items: [
"AI Chat Assistant",
"AI Voice Agent",
"Lead Qualification",
"Customer Support",
"Appointment Booking",
],
},
{
title: "📱 Startup Launch Package",
link: "/solutions/startup-launch",
desc: "Launch your startup with a complete tech stack.",
items: [
"Website",
"Mobile App",
"Branding",
"Automation",
"Growth Strategy",
],
},
{
title: "⚙️ Business Automation Package",
link: "/solutions/business-automation",
desc: "Automate repetitive business processes.",
items: [
"CRM Setup",
"Workflow Automation",
"Lead Tracking",
"Email Automation",
"Reporting Systems",
],
},
{
title: "💎 Enterprise Custom Solution",
link: "/solutions/enterprise-custom",
desc: "Tailor-made software and AI systems.",
items: [
"Custom Software",
"Dashboards",
"AI Integration",
"Automation Systems",
"Dedicated Support",
],
},
];

export default function SolutionsPage() {
return ( <main className="bg-white overflow-hidden"> <section className="relative py-32">

```
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30" />

    <div className="relative z-10 max-w-7xl mx-auto px-6">

      <div className="text-center mb-24">

        <p className="uppercase tracking-[0.4em] text-[#005A9C] font-bold mb-6">
          BUSINESS SOLUTIONS
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-[#003F73] mb-8">
          Complete Solutions
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete business packages designed to help companies
          grow faster using websites, AI and automation.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {solutions.map((solution) => (
          <motion.div
            key={solution.title}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
            bg-white
            rounded-[40px]
            border
            border-blue-100
            shadow-[0_25px_80px_rgba(0,90,156,0.12)]
            p-10
            "
          >
            <h2 className="text-3xl font-black text-[#003F73] mb-4">
              {solution.title}
            </h2>

            <p className="text-gray-600 mb-8">
              {solution.desc}
            </p>

            <div className="space-y-3 mb-8">

              {solution.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="text-green-500">
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}

            </div>

            <Link
              href={solution.link}
              className="
              inline-block
              bg-[#003F73]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
              "
            >
              View Package
            </Link>

          </motion.div>
        ))}

      </div>

    </div>

  </section>
</main>

);
}