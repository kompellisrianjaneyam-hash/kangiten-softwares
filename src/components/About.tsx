export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            About Kangiten Softwares
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Kangiten Softwares is a technology company focused on helping
            businesses grow through modern websites, mobile applications,
            AI solutions, automation systems, digital marketing and creative
            design services.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-gray-50 p-8 shadow-md">
            <h3 className="text-2xl font-bold text-blue-900">
              Kompelli Sri Anjaneyam
            </h3>

            <p className="mt-2 text-blue-700 font-medium">
              Founder & CTO
            </p>

            <p className="mt-4 text-gray-600">
              Focused on technology, product development, software
              architecture and building innovative digital solutions
              for businesses.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8 shadow-md">
            <h3 className="text-2xl font-bold text-blue-900">
              Sohan Singh Badavath
            </h3>

            <p className="mt-2 text-blue-700 font-medium">
              Co-Founder & Growth Lead
            </p>

            <p className="mt-4 text-gray-600">
              Focused on business growth, client relationships,
              strategy and helping businesses achieve their goals
              through technology.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl bg-blue-900 p-10 text-white">

          <h3 className="text-3xl font-bold">
            Our Mission
          </h3>

          <p className="mt-4 max-w-4xl text-blue-100">
            To help businesses of all sizes leverage technology,
            automation and artificial intelligence to grow faster,
            operate more efficiently and deliver better experiences
            to their customers.
          </p>

        </div>

      </div>
    </section>
  );
}