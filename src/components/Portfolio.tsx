export default function Portfolio() {
  const completedProjects = [
    {
      name: "GearClocks Website",
      description:
        "Premium clock business website featuring product showcases, modern branding, responsive design and lead generation capabilities.",
      technologies: "Next.js • Tailwind CSS • Supabase",
    },
    {
      name: "SriAnjaneya Website",
      description:
        "Professional personal website built with responsive design, modern UI principles and SEO-friendly architecture.",
      technologies: "Next.js • Tailwind CSS",
    },
    {
      name: "QuickBite App Prototype",
      description:
        "Food ordering application prototype focused on user experience, intuitive navigation and scalable architecture.",
      technologies: "Flutter • Firebase",
    },
  ];

  const workingProjects = [
    {
      name: "AI Business Automation Platform",
      description:
        "Helping businesses automate repetitive workflows, lead management and operational tasks through intelligent automation.",
      technologies: "AI • Automation • Cloud Infrastructure",
    },
    {
      name: "AI Voice Agents",
      description:
        "AI-powered voice assistants capable of handling calls, bookings, customer support and business inquiries 24/7.",
      technologies: "OpenAI • Voice AI • Automation",
    },
    {
      name: "AI Customer Support Agent",
      description:
        "A conversational AI solution designed to answer customer questions, qualify leads and improve response times.",
      technologies: "OpenAI • AI Chat Systems • Automation",
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Our Portfolio
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg text-gray-600">
            We believe great software is built on trust, innovation and
            attention to detail. Our portfolio showcases solutions designed
            to help businesses establish a stronger digital presence,
            improve efficiency and create lasting value.
          </p>
        </div>

        <div className="mt-16">

          <h3 className="mb-8 text-3xl font-bold text-blue-900">
            Completed Projects
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Completed
                </span>

                <h4 className="mt-5 text-2xl font-bold text-blue-900">
                  {project.name}
                </h4>

                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>

                <p className="mt-5 text-sm font-medium text-blue-700">
                  {project.technologies}
                </p>
              </div>
            ))}

          </div>

          <h3 className="mb-8 mt-20 text-3xl font-bold text-blue-900">
            Currently Working On
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {workingProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                  In Progress
                </span>

                <h4 className="mt-5 text-2xl font-bold text-blue-900">
                  {project.name}
                </h4>

                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>

                <p className="mt-5 text-sm font-medium text-blue-700">
                  {project.technologies}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}