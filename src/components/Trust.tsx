export default function Trust() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-blue-900">
          Helping Businesses Build Their Digital Presence
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-gray-600">
          We create websites, mobile apps, AI solutions, automation systems,
          social media strategies and creative designs that help businesses
          grow faster and serve customers better.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-900">
              Modern Technology
            </h3>

            <p className="mt-4 text-gray-600">
              Built using modern frameworks, scalable architecture,
              cloud platforms and future-ready technologies.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-900">
              Business Focused
            </h3>

            <p className="mt-4 text-gray-600">
              Every solution is designed to increase business visibility,
              efficiency, customer engagement and growth.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-900">
              End-to-End Support
            </h3>

            <p className="mt-4 text-gray-600">
              From planning and design to deployment and maintenance,
              we help businesses throughout the complete journey.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}