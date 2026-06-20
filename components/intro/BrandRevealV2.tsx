
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BrandRevealV2() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop) return;

    const seen = sessionStorage.getItem("kangiten_intro");

    if (!seen) {
      setShow(true);

      const timer = setTimeout(() => {
        sessionStorage.setItem("kangiten_intro", "true");
        setShow(false);
      }, 3200);

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
            transition: {
              duration: 0.8,
            },
          }}
          className="
          fixed
          inset-0
          z-[99999]
          bg-white
          flex
          items-center
          justify-center
          overflow-hidden
          "
        >
          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#7EC8FF]
            blur-[120px]
            "
          />

          {/* Logo */}

          <div className="relative flex flex-col items-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="relative"
            >
              {/* K */}

              <div
                className="
                relative
                text-[140px]
                font-black
                text-[#005A9C]
                leading-none
                "
              >
                K

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                  }}
                  className="
                  absolute
                  top-3
                  right-[-10px]
                  text-[50px]
                  text-[#005A9C]
                  "
                >
                  ↗️
                </motion.div>
              </div>
            </motion.div>

            {/* Brand Name */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
              className="text-center mt-4"
            >
              <h1
                className="
                text-5xl
                font-black
                tracking-widest
                text-[#005A9C]
                "
              >
                KANGITEN
              </h1>

              <p
                className="
                mt-2
                text-[#005A9C]
                tracking-[0.5em]
                text-sm
                font-semibold
                "
              >
                SOFTWARES
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}