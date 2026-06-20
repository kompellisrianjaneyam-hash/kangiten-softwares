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
      top-4
      left-0
      right-0
      z-50
      px-4
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        bg-white/70
        backdrop-blur-2xl

        border
        border-white/40

        shadow-[0_20px_50px_rgba(0,90,156,0.12)]

        rounded-3xl
        "
      >
        <div className="px-6">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Kangiten"
                className="h-12 w-auto"
              />

              <div>
                <div
                  className="
                  font-black
                  text-[#003F73]
                  tracking-wide
                  "
                >
                  KANGITEN
                </div>

                <div
                  className="
                  text-xs
                  text-[#005A9C]
                  font-medium
                  "
                >
                  SOFTWARES
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}

            <nav
              className="
              hidden
              md:flex
              items-center
              gap-8
              "
            >
              <Link
                href="/"
                className="
                text-[#003F73]
                font-semibold
                hover:text-[#005A9C]
                transition-all
                "
              >
                Home
              </Link>

              <Link
                href="/services"
                className="
                text-[#003F73]
                font-semibold
                hover:text-[#005A9C]
                transition-all
                "
              >
                Services
              </Link>

              <Link
                href="/solutions"
                className="
                text-[#003F73]
                font-semibold
                hover:text-[#005A9C]
                transition-all
                "
              >
                Solutions
              </Link>

              <Link
                href="/about"
                className="
                text-[#003F73]
                font-semibold
                hover:text-[#005A9C]
                transition-all
                "
              >
                About
              </Link>

              <Link
                href="/contact"
                className="
                text-[#003F73]
                font-semibold
                hover:text-[#005A9C]
                transition-all
                "
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Button */}

            <Link
              href="/contact"
              className="
              hidden
              md:block

              bg-[#003F73]
              text-white

              px-6
              py-3

              rounded-2xl
              font-bold

              shadow-lg

              hover:bg-[#005A9C]
              hover:scale-105

              transition-all
              "
            >
              Book Consultation
            </Link>

            {/* Mobile Button */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
              md:hidden
              text-3xl
              text-[#003F73]
              "
            >
              {mobileOpen ? "✕" : "☰"}
            </button>

          </div>

          {/* Mobile Menu */}

          {mobileOpen && (
            <div
              className="
              md:hidden

              pb-6
              pt-2

              border-t
              border-blue-100
              "
            >
              <div className="flex flex-col gap-5">

                <Link
                  href="/"
                  onClick={closeMenu}
                  className="
                  text-[#003F73]
                  font-semibold
                  "
                >
                  Home
                </Link>

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="
                  text-[#003F73]
                  font-semibold
                  "
                >
                  Services
                </Link>

                <Link
                  href="/solutions"
                  onClick={closeMenu}
                  className="
                  text-[#003F73]
                  font-semibold
                  "
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="
                  text-[#003F73]
                  font-semibold
                  "
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="
                  text-[#003F73]
                  font-semibold
                  "
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="
                  mt-2

                  bg-[#003F73]
                  text-white

                  px-6
                  py-3

                  rounded-2xl
                  font-bold
                  text-center
                  "
                >
                  Book Consultation
                </Link>

              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}