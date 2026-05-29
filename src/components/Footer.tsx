export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold">
              Kangiten Softwares
            </h3>

            <p className="mt-4 text-blue-100">
              Helping businesses grow through websites,
              mobile applications, AI solutions, automation,
              social media management and graphic design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Services
            </h4>

            <ul className="mt-4 space-y-2 text-blue-100">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>AI Chatbots</li>
              <li>AI Voice Agents</li>
              <li>Business Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Contact
            </h4>

            <ul className="mt-4 space-y-2 text-blue-100">
              <li>Hyderabad, Telangana</li>
              <li>kangitensoftwares@gmail.com</li>
              <li>6303450609</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Social
            </h4>

            <ul className="mt-4 space-y-2 text-blue-100">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>WhatsApp</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-blue-200">
          © {new Date().getFullYear()} Kangiten Softwares. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}