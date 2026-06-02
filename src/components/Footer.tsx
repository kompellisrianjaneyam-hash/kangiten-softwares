export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold">
              Kangiten Software
            </h3>

            <p className="mt-4 text-blue-100">
              Helping businesses grow through websites,
              mobile applications, AI solutions, automation,
              social media management and graphic design.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              Services
            </h4>

            <ul className="mt-4 space-y-2 text-blue-100">
              <li>
                <a href="/services">
                  Website Development
                </a>
              </li>

              <li>
                <a href="/services">
                  Mobile App Development
                </a>
              </li>

              <li>
                <a href="/services">
                  AI Chatbots
                </a>
              </li>

              <li>
                <a href="/services">
                  AI Voice Agents
                </a>
              </li>

              <li>
                <a href="/services">
                  Business Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <ul className="mt-4 space-y-2 text-blue-100">
              <li>
                Hyderabad, Telangana
              </li>

              <li>
                <a href="mailto:kangitensoftware@gmail.com">
                  kangitensoftware@gmail.com
                </a>
              </li>

              <li>
                <a href="tel:+918106092063">
                  +91 81060 92063
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">
              Social
            </h4>

            <ul className="mt-4 space-y-2 text-blue-100">

              <li>
                <a
                  href="https://www.instagram.com/kangitensoftwares"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/kangiten-softwares-478010413/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/918106092063"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-blue-200">
          © {new Date().getFullYear()} Kangiten Software. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}