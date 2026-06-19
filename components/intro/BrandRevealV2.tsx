
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function BrandRevealV2() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("kangiten_intro");

    if (!seen) {
      setShow(true);

      const timer = setTimeout(() => {
        sessionStorage.setItem("kangiten_intro", "true");
        setShow(false);
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: {
              duration: 1,
            },
          }}
          className="
          fixed
          inset-0
          z-[99999]
          overflow-hidden
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-white
          via-[#F8FCFF]
          to-[#EAF7FF]
          "
        >
          {/* Background Glow */}

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            w-[900px]
            h-[900px]
            rounded-full
            bg-[#7EC8FF]
            blur-[180px]
            "
          />

          {/* Outer Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            w-[340px]
            h-[340px]
            rounded-full
            border
            border-[#005A9C]/20
            "
          />

          {/* Inner Ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            w-[280px]
            h-[280px]
            rounded-full
            border
            border-[#7EC8FF]/40
            "
          />

          {/* Logo */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="relative z-20"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotateY: [-5, 5, -5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div
                className="
                absolute
                inset-0
                bg-[#7EC8FF]
                blur-[100px]
                opacity-60
                scale-110
                "
              />

              <Image
                src="/logo.png"
                alt="Kangiten Softwares"
                width={260}
                height={260}
                priority
                className="relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* Text */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="
            absolute
            bottom-28
            text-center
            "
          >
            <h1
              className="
              text-5xl
              md:text-7xl
              font-black
              tracking-widest
              text-[#005A9C]
              "
            >
              KANGITEN
            </h1>

            <p
              className="
              mt-3
              text-[#005A9C]
              tracking-[0.5em]
              font-semibold
              "
            >
              SOFTWARES
            </p>
          </motion.div>

          {/* Particles */}

          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -80, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
              }}
              className="
              absolute
              w-2
              h-2
              rounded-full
              bg-[#7EC8FF]
              "
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}