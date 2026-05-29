export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Some of the digital products and platforms we have worked on.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900">
              Gear Clocks Website
            </h3>

            <p className="mt-4 text-gray-600">
              E-commerce style website designed for showcasing and selling
              premium wall clocks online.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900">
              QuickBite Mobile App
            </h3>

            <p className="mt-4 text-gray-600">
              Food delivery mobile application built using Flutter and modern
              backend technologies.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900">
              Kangiten Software Solutions
            </h3>

            <p className="mt-4 text-gray-600">
              AI, automation, web and mobile solutions currently under
              development for future clients.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}