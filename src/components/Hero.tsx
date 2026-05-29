import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-900 shadow-sm">
          Websites • Mobile Apps • AI • Automation
        </div>

        <Image
          src="/kangiten-logo.png"
          alt="Kangiten Softwares"
          width={160}
          height={160}
          priority
          className="mt-8"
        />

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-blue-900 md:text-7xl">
          Transform Your Business With
          <span className="block text-blue-700">
            Websites, Apps & AI Solutions
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-gray-600 md:text-xl">
          Kangiten Softwares helps businesses grow through custom websites,
          mobile applications, AI chatbots, voice agents, automation systems,
          social media management and graphic design solutions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-blue-900 px-8 py-4 text-white shadow-lg hover:bg-blue-800">
            Get Free Consultation
          </button>

          <button className="rounded-xl border border-blue-900 px-8 py-4 text-blue-900 hover:bg-blue-50">
            View Services
          </button>

        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-700">

          <div>✓ Website Development</div>

          <div>✓ Mobile App Development</div>

          <div>✓ AI Chatbots</div>

          <div>✓ Business Automation</div>

        </div>

      </div>
    </section>
  );
}