"use client";

import Link from "next/link";

export default function Footer() {
return ( <footer className="bg-[#003F73] text-white">

```
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-4 gap-12">

      {/* Logo */}

      <div>

        <img
          src="/logo.png"
          alt="Kangiten"
          className="w-24 mb-6"
        />

        <h3 className="text-2xl font-black mb-3">
          KANGITEN SOFTWARES
        </h3>

        <p className="text-blue-100">
          Build. Automate. Grow.
        </p>

      </div>

      {/* Services */}

      <div>

        <h4 className="font-bold text-xl mb-4">
          Services
        </h4>

        <ul className="space-y-3 text-blue-100">

          <li>
            <Link href="/services/website-development">
              Website Development
            </Link>
          </li>

          <li>
            <Link href="/services/mobile-app-development">
              Mobile Apps
            </Link>
          </li>

          <li>
            <Link href="/services/ai-voice-agents">
              AI Voice Agents
            </Link>
          </li>

          <li>
            <Link href="/services/ai-automation">
              AI Automation
            </Link>
          </li>

          <li>
            <Link href="/services/custom-software-development">
              Custom Software
            </Link>
          </li>

        </ul>

      </div>

      {/* Company */}

      <div>

        <h4 className="font-bold text-xl mb-4">
          Company
        </h4>

        <ul className="space-y-3 text-blue-100">

          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>

          <li>
            <Link href="/solutions">
              Solutions
            </Link>
          </li>

          <li>
            <Link href="/contact">
              Book Consultation
            </Link>
          </li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h4 className="font-bold text-xl mb-4">
          Contact
        </h4>

        <ul className="space-y-3 text-blue-100">

          <li>
            📧 kangitensoftware@gmail.com
          </li>

          <li>
            📞 +91 81060 92063
          </li>

          <li>
            📍 Hyderabad, Telangana
          </li>

          <li>
            <a
              href="https://wa.me/916303450609"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </li>

        </ul>

      </div>

    </div>

    <div className="border-t border-blue-400 mt-16 pt-8 text-center text-blue-100">

      ©️ 2026 Kangiten Softwares. All Rights Reserved.

    </div>

  </div>

</footer>

);
}