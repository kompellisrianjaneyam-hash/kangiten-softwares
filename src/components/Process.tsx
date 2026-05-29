export default function Process() {
  const steps = [
    {
      title: "Discovery",
      description:
        "Understanding your business goals, challenges and requirements.",
    },
    {
      title: "Planning",
      description:
        "Creating a roadmap, architecture and execution strategy.",
    },
    {
      title: "Design",
      description:
        "Designing user-friendly interfaces and experiences.",
    },
    {
      title: "Development",
      description:
        "Building scalable websites, apps and automation systems.",
    },
    {
      title: "Launch",
      description:
        "Testing, deployment and continuous support after launch.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Our Process
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            A structured approach that helps us deliver reliable and
            scalable digital solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">

          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-6 text-center shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-blue-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}