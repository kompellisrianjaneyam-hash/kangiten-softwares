export default function Trust() {
  const highlights = [
    {
      title: "Modern Technology",
      description:
        "Built using modern frameworks, scalable architecture and future-ready technologies.",
    },
    {
      title: "Business Focused",
      description:
        "Every solution is designed to improve visibility, efficiency and customer engagement.",
    },
    {
      title: "End-to-End Support",
      description:
        "From planning and design to deployment and maintenance, we support the complete journey.",
    },
    {
      title: "Custom Solutions",
      description:
        "Every project is tailored to the unique goals and requirements of each client.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Helping Businesses Build Their Digital Presence
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            We build websites, mobile applications, AI solutions, automation
            systems and digital experiences designed to help businesses grow
            faster and operate more efficiently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-900">
              100%
            </h3>
            <p className="mt-2 text-gray-600">
              Client Focused
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-900">
              Fast
            </h3>
            <p className="mt-2 text-gray-600">
              Project Delivery
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-900">
              Modern
            </h3>
            <p className="mt-2 text-gray-600">
              Technologies
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-900">
              Custom
            </h3>
            <p className="mt-2 text-gray-600">
              Solutions
            </p>
          </div>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-blue-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}