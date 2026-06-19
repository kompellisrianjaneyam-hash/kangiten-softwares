"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
{
title: "Website Development",
link: "/services/website-development",
},
{
title: "Mobile App Development",
link: "/services/mobile-app-development",
},
{
title: "AI Voice Agents",
link: "/services/ai-voice-agents",
},
{
title: "AI Automation",
link: "/services/ai-automation",
},
{
title: "Business Automation",
link: "/solutions/business-automation",
},
{
title: "Custom Software Development",
link: "/services/custom-software-development",
},
{
title: "Graphic Design",
link: "/services/graphic-design",
},
{
title: "Social Media Management",
link: "/services/social-media-management",
},
];

export default function Services() {
return ( <section className="relative py-32 overflow-hidden bg-white">

```
  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />

  <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.3em] text-[#005A9C] font-semibold mb-4">
        Our Expertise
      </p>

      <h2 className="text-5xl md:text-6xl font-black text-[#003F73]">
        Services That
        <br />
        Drive Growth
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {services.map((service, index) => (
        <Link
          key={service.title}
          href={service.link}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
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
              y: -15,
              rotateX: 8,
              rotateY: 8,
              scale: 1.04,
            }}
            className="
            group
            relative
            h-[260px]
            rounded-[32px]
            bg-white/70
            backdrop-blur-xl
            border
            border-blue-100
            shadow-[0_20px_60px_rgba(0,90,156,0.12)]
            overflow-hidden
            cursor-pointer
            "
          >

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative h-full p-8 flex flex-col justify-between">

              <div className="w-16 h-16 rounded-2xl bg-[#003F73] text-white flex items-center justify-center text-2xl shadow-xl">
                K
              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#003F73] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Modern solutions designed to help businesses scale faster,
                  automate operations and generate more revenue.
                </p>

              </div>

            </div>

          </motion.div>
        </Link>
      ))}

    </div>

  </div>

</section>

);
}