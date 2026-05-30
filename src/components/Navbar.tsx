import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/kangiten-logo.png"
            alt="Kangiten Softwares"
            width={50}
            height={50}
          />

          <span className="text-xl font-bold text-blue-900">
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

        <a
          href="#contact"
          className="rounded-lg bg-blue-900 px-5 py-2 text-white hover:bg-blue-800"
        >
          Get a Quote
        </a>

      </div>
    </nav>
  );
}