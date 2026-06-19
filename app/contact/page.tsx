
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    business_name: "",
    service: "",
    project_details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("leads")
      .insert([formData]);

    setLoading(false);

    if (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    setSuccess(true);

    setFormData({
      full_name: "",
      email: "",
      phone: "",
      business_name: "",
      service: "",
      project_details: "",
    });
  };

  return (
    <main className="min-h-screen bg-white py-32">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#005A9C] font-semibold mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-6xl md:text-7xl font-black text-[#003F73] mb-6">
            Book A Free Consultation
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project and we'll help you choose
            the best solution for your business.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            border
            border-blue-100
            shadow-[0_25px_80px_rgba(0,90,156,0.12)]
            "
          >

            <h2 className="text-3xl font-black text-[#003F73] mb-8">
              Project Details
            </h2>

            {success && (
              <div
                className="
                mb-6
                bg-green-50
                border
                border-green-200
                text-green-700
                p-4
                rounded-2xl
                "
              >
                Consultation request submitted successfully.
                We will contact you soon.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-blue-100 rounded-2xl p-4"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-blue-100 rounded-2xl p-4"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-blue-100 rounded-2xl p-4"
              />

              <input
                type="text"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="Business Name"
                className="w-full border border-blue-100 rounded-2xl p-4"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-blue-100 rounded-2xl p-4"
              >
                <option value="">
                  Select Service
                </option>

                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>AI Voice Agents</option>
                <option>AI Automation</option>
                <option>Graphic Design</option>
                <option>Social Media Management</option>
                <option>Custom Software Development</option>
              </select>

              <textarea
                rows={5}
                name="project_details"
                value={formData.project_details}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full border border-blue-100 rounded-2xl p-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-[#003F73]
                text-white
                py-4
                rounded-2xl
                font-bold
                hover:scale-[1.02]
                transition-all
                disabled:opacity-50
                "
              >
                {loading
                  ? "Submitting..."
                  : "Book Free Consultation"}
              </button>

            </form>

          </div>

          <div
            className="
            bg-gradient-to-br
            from-[#003F73]
            to-[#005A9C]
            text-white
            rounded-[32px]
            p-10
            "
          >

            <h2 className="text-4xl font-black mb-8">
              Let's Build Something Amazing
            </h2>

            <div className="space-y-8 text-lg">

              <div>
                📧 kangitensoftware@gmail.com
              </div>

              <div>
                📞 +91 81060 92063
              </div>

              <div>
                📍 Hyderabad, Telangana
              </div>

              <div>
                ⏰ Available 24/7
                <br />
                Free Consultation & Support
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}