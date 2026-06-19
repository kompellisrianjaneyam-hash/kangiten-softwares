"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916303450609"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-8
      z-[999]
      w-16
      h-16
      rounded-full
      bg-[#25D366]
      flex
      items-center
      justify-center
      shadow-[0_20px_60px_rgba(37,211,102,0.45)]
      hover:scale-110
      hover:-translate-y-1
      transition-all
      duration-300
      animate-pulse
      "
      aria-label="WhatsApp"
    >
      <FaWhatsapp
        size={36}
        className="text-white"
      />
    </a>
  );
}