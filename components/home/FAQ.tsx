"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does Kangiten Softwares provide?",
    answer:
      "We provide Website Development, Mobile App Development, AI Voice Agents, AI Automation, Custom Software Development, Graphic Design and Social Media Management.",
  },
  {
    question: "Can you build custom software for my business?",
    answer:
      "Yes. We develop custom software solutions tailored specifically to your business requirements, workflows and goals.",
  },
  {
    question: "Do AI Voice Agents support Telugu?",
    answer:
      "Yes. Our AI Voice Agents can support Telugu, English and multiple other languages depending on your business needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on complexity. Websites typically take 1–4 weeks while custom software projects may take several weeks or months.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. We provide ongoing maintenance, updates and technical support after project completion.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply contact us through our website or book a free consultation to discuss your project requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#005A9C] font-semibold mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#003F73]">
            Got Questions?
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Everything you need to know before working with us.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
              bg-white
              border
              border-blue-100
              rounded-3xl
              shadow-lg
              overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="
                w-full
                text-left
                px-8
                py-6
                flex
                justify-between
                items-center
                "
              >

                <span className="font-bold text-[#003F73] text-lg">
                  {faq.question}
                </span>

                <span className="text-[#005A9C] text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}