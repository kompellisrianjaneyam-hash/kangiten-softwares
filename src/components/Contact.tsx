"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
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
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("leads")
      .insert([formData]);

    setLoading(false);

    if (error) {
      console.log("SUPABASE ERROR:", error);
      alert(JSON.stringify(error));
      return;
    }

    alert("Inquiry submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Contact Us
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Have a project in mind? Let's discuss how Kangiten Softwares
            can help your business grow.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

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
                  kangitensoftware@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-blue-900">
                  Phone
                </p>
                <p className="text-gray-600">
                  +91 81060 92063
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

            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md">

            <h3 className="text-2xl font-bold text-blue-900">
              Request A Consultation
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 p-4"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 p-4"
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-4"
                required
              >
                <option value="">
                  Select Service
                </option>

                <option>
                  Website Development
                </option>

                <option>
                  Mobile App Development
                </option>

                <option>
                  AI Chatbots
                </option>

                <option>
                  AI Voice Agents
                </option>

                <option>
                  Business Automation
                </option>

                <option>
                  Social Media Management
                </option>

                <option>
                  Graphic Design
                </option>
              </select>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                className="w-full rounded-xl border border-gray-300 p-4"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-900 py-4 text-white"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Inquiry"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}