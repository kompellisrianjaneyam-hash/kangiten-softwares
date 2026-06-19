"use client";

import { useEffect, useState } from "react";
import ThreeScene from "./ThreeScene";

export default function BrandRevealV3() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F8FCFF]">
      <ThreeScene />

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="w-64 h-1 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#7EC8FF] animate-pulse"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}