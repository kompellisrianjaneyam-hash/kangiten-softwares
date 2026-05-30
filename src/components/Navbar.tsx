"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Image
              src="/kangiten-logo.png"
              alt="Kangiten Softwares"
              width={45}
              height={45}
            />

            <span className="text-lg md:text-xl font-bold text-blue-900">
              Kangiten Softwares
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-gray-700">
            <a href="#home" className="hover:text-blue-900">
              Home
            </a>

            <a href="#services" className="hover:text-blue-900">
              Services
            </a>

            <a href="#portfolio" className="hover:text-blue-900">
              Portfolio
            </a>

            <a href="#about" className="hover:text-blue-900">
              About
            </a>

            <a href="#contact" className="hover:text-blue-900">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-lg bg-blue-900 px-5 py-2 text-white hover:bg-blue-800"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="md:hidden text-3xl text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-4 text-center">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Services
            </a>

            <a
              href="#portfolio"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Portfolio
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-blue-900 px-5 py-3 text-white"
            >
              Get a Quote
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}