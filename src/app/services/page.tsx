export default function ServicesPage() {
  const services = [
    {
      title: "Website Development",
      description:
        "Professional websites built to establish your online presence, generate leads and grow your business.",
      features: [
        "Business Websites",
        "E-Commerce Stores",
        "Landing Pages",
        "Portfolio Websites",
        "SEO Optimization",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Custom mobile applications designed for performance, scalability and exceptional user experience.",
      features: [
        "Android Applications",
        "iOS Applications",
        "Admin Dashboards",
        "API Integrations",
        "Scalable Architecture",
      ],
    },
    {
      title: "AI Chatbots",
      description:
        "Intelligent AI assistants that automate communication and improve customer engagement.",
      features: [
        "Customer Support",
        "Lead Qualification",
        "Website Integration",
        "24/7 Availability",
        "Automated Responses",
      ],
    },
    {
      title: "AI Voice Agents",
      description:
        "Voice-powered AI systems capable of handling calls and customer interactions automatically.",
      features: [
        "Appointment Booking",
        "Customer Calls",
        "Voice Support",
        "Business Inquiries",
        "Call Automation",
      ],
    },
    {
      title: "Business Automation",
      description:
        "Reduce manual work and increase efficiency through intelligent automation systems.",
      features: [
        "Workflow Automation",
        "Lead Management",
        "CRM Integration",
        "Process Optimization",
        "Operational Efficiency",
      ],
    },
    {
      title: "Social Media Management",
      description:
        "Build a stronger brand presence through strategic social media management.",
      features: [
        "Content Creation",
        "Account Management",
        "Growth Strategies",
        "Audience Engagement",
        "Brand Development",
      ],
    },
    {
      title: "Graphic Design",
      description:
        "Professional visual designs that strengthen your brand identity.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Social Media Creatives",
        "Marketing Materials",
        "Business Graphics",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg text-gray-600">
            At Kangiten Softwares, we help businesses establish a powerful
            digital presence through software development, artificial
            intelligence, automation, design and growth-focused solutions.
          </p>
        </div>

        <div className="mt-20 space-y-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-10 shadow-md"
            >
              <h2 className="text-3xl font-bold text-blue-900">
                {service.title}
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                {service.description}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="rounded-xl bg-blue-50 p-4 text-blue-900 font-medium"
                  >
                    ✓ {feature}
                  </div>
                ))}

              </div>

              <div className="mt-8">
                <a
                  href="/#contact"
                  className="rounded-xl bg-blue-900 px-6 py-3 text-white hover:bg-blue-800"
                >
                  Get A Quote
                </a>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-blue-900 p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Why Businesses Choose Kangiten Softwares
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg text-blue-100">
            We focus on delivering reliable, scalable and growth-oriented
            solutions. Every project is built with quality, performance and
            long-term business value in mind.
          </p>

        </div>

      </div>
    </main>
  );
}