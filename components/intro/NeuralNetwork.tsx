"use client";

import { motion } from "framer-motion";

export default function NeuralNetwork() {
  const nodes = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden">

      {nodes.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + (i % 4),
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
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
        />
      ))}

    </div>
  );
}