
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/80
      backdrop-blur-xl
      border-b
      border-blue-100
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Kangiten"
              className="h-12 w-auto"
            />

            <div>
              <div className="font-black text-[#003F73]">
                KANGITEN
              </div>

              <div className="text-xs text-[#005A9C]">
                SOFTWARES
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="text-[#003F73] font-semibold hover:text-[#005A9C] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-[#003F73] font-semibold hover:text-[#005A9C] transition-colors"
            >
              Services
            </Link>

            <Link
              href="/solutions"
              className="text-[#003F73] font-semibold hover:text-[#005A9C] transition-colors"
            >
              Solutions
            </Link>

            <Link
              href="/about"
              className="text-[#003F73] font-semibold hover:text-[#005A9C] transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-[#003F73] font-semibold hover:text-[#005A9C] transition-colors"
            >
              Contact
            </Link>

          </nav>

          <Link
            href="/contact"
            className="
            hidden
            md:block
            px-6
            py-3
            rounded-xl
            bg-[#003F73]
            text-white
            font-bold
            hover:bg-[#005A9C]
            transition-all
            "
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-3xl text-[#003F73]"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div
            className="
            md:hidden
            py-6
            border-t
            border-blue-100
            "
          >
            <div className="flex flex-col gap-5">

              <Link
                href="/"
                onClick={closeMenu}
                className="font-semibold text-[#003F73]"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="font-semibold text-[#003F73]"
              >
                Services
              </Link>

              <Link
                href="/solutions"
                onClick={closeMenu}
                className="font-semibold text-[#003F73]"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="font-semibold text-[#003F73]"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="font-semibold text-[#003F73]"
              >
                Contact
              </Link>

            </div>
          </div>
        )}

      </div>
    </header>
  );
}