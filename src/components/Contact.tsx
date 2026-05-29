export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Contact Us
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Have a project in mind? Let's discuss how Kangiten Softwares
            can help your business grow with technology.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}

          <div className="rounded-3xl bg-white p-8 shadow-md">

            <h3 className="text-2xl font-bold text-blue-900">
              Get In Touch
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="font-semibold text-blue-900">
                  Email
                </p>

                <p className="text-gray-600">
                  kangitensoftwares@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-blue-900">
                  Location
                </p>

                <p className="text-gray-600">
                  Hyderabad, Telangana, India
                </p>
              </div>

              <div>
                <p className="font-semibold text-blue-900">
                  Instagram
                </p>

                <p className="text-gray-600">
                  @kangitensoftwares
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-8 shadow-md">

            <h3 className="text-2xl font-bold text-blue-900">
              Request A Consultation
            </h3>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-900"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-900"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-900"
              />

              <select
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-900"
              >
                <option>Select Service</option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>AI Chatbots</option>
                <option>AI Voice Agents</option>
                <option>Business Automation</option>
                <option>Social Media Management</option>
                <option>Graphic Design</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-900"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-900 px-6 py-4 text-white hover:bg-blue-800"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}