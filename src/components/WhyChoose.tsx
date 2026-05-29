export default function WhyChoose() {
  const reasons = [
    "Custom Solutions For Every Business",
    "Modern Technology Stack",
    "Scalable & Future Ready Architecture",
    "AI & Automation Expertise",
    "Transparent Communication",
    "Long-Term Support & Maintenance",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Why Choose Kangiten Softwares
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            We combine technology, design and business thinking to build
            solutions that help companies grow and operate more efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-2xl text-blue-900">✓</div>

              <h3 className="text-xl font-semibold text-blue-900">
                {reason}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}