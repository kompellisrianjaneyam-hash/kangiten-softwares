import {
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaMicrophoneAlt,
  FaCogs,
  FaBullhorn,
  FaPalette,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive and SEO-friendly websites built to grow your business online.",
      icon: <FaGlobe className="text-3xl text-blue-900" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Custom Android and iOS applications designed for performance and scalability.",
      icon: <FaMobileAlt className="text-3xl text-blue-900" />,
    },
    {
      title: "AI Chatbots",
      description:
        "Intelligent chatbots that automate customer support, lead generation and engagement.",
      icon: <FaRobot className="text-3xl text-blue-900" />,
    },
    {
      title: "AI Voice Agents",
      description:
        "Voice-powered AI assistants capable of handling calls, bookings and customer interactions.",
      icon: <FaMicrophoneAlt className="text-3xl text-blue-900" />,
    },
    {
      title: "Business Automation",
      description:
        "Automate repetitive business processes and improve efficiency with smart workflows.",
      icon: <FaCogs className="text-3xl text-blue-900" />,
    },
    {
      title: "Social Media Management",
      description:
        "Content creation, growth strategies and social media management for modern brands.",
      icon: <FaBullhorn className="text-3xl text-blue-900" />,
    },
    {
      title: "Graphic Design",
      description:
        "Professional logos, branding, social media creatives and marketing materials.",
      icon: <FaPalette className="text-3xl text-blue-900" />,
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Our Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            We help businesses establish a strong digital presence through
            technology, design, automation and marketing solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-blue-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>

              <a
                href="/services"
                className="mt-6 inline-block font-semibold text-blue-900 transition-colors hover:text-blue-700"
              >
                Learn More →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}