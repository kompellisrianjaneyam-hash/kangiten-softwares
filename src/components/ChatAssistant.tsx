"use client";

import { useState } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! Welcome to Kangiten Software. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const getResponse = (message: string) => {
    const text = message.toLowerCase();

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hello! Welcome to Kangiten Software. We provide Website Development, Mobile App Development, AI Chatbots, AI Voice Agents, Business Automation, Social Media Management and Graphic Design services. How can I help you today?";
    }

    if (
      text.includes("service") ||
      text.includes("services") ||
      text.includes("what do you do")
    ) {
      return "We provide Website Development, Mobile App Development, AI Chatbots, AI Voice Agents, Business Automation, Social Media Management and Graphic Design. For a free consultation, contact us on WhatsApp or call +91 81060 92063.";
    }

    if (
      text.includes("website") ||
      text.includes("web development")
    ) {
      return "We build professional business websites, landing pages, portfolio websites and custom web solutions. To discuss your project and receive a quotation, contact us on WhatsApp or call +91 81060 92063.";
    }

    if (
      text.includes("mobile") ||
      text.includes("app") ||
      text.includes("android") ||
      text.includes("ios")
    ) {
      return "We develop custom Android and iOS applications with modern UI and scalable architecture. To discuss your app idea and receive pricing, contact us on WhatsApp or call +91 81060 92063.";
    }

    if (
      text.includes("chatbot") ||
      text.includes("ai chatbot")
    ) {
      return "Our AI Chatbots can automate customer support, qualify leads and improve customer engagement. Contact us on WhatsApp for a free consultation.";
    }

    if (
      text.includes("voice") ||
      text.includes("voice agent")
    ) {
      return "Our AI Voice Agents can handle calls, bookings and customer interactions automatically. Contact us on WhatsApp for a detailed discussion.";
    }

    if (text.includes("automation")) {
      return "We build business automation systems that save time, reduce manual work and improve efficiency. Contact us on WhatsApp to discuss your requirements.";
    }

    if (text.includes("social media")) {
      return "We provide social media management, content creation and growth strategies. Contact us to discuss your brand and marketing goals.";
    }

    if (
      text.includes("graphic") ||
      text.includes("design") ||
      text.includes("logo")
    ) {
      return "We create professional logos, branding materials and marketing graphics. Contact us through WhatsApp for a custom design quote.";
    }

    if (
      text.includes("price") ||
      text.includes("pricing") ||
      text.includes("cost") ||
      text.includes("quote")
    ) {
      return "Pricing depends on your requirements. Contact us through the Contact Form, WhatsApp or Phone for a free quotation.";
    }

    if (
      text.includes("timeline") ||
      text.includes("how long") ||
      text.includes("time")
    ) {
      return "Most websites take 1–3 weeks. Larger applications and AI solutions may require additional time depending on complexity.";
    }

    if (
      text.includes("contact") ||
      text.includes("phone")
    ) {
      return "You can contact Kangiten Software through Phone: +91 81060 92063, Email: kangitensoftware@gmail.com, Instagram: @kangitensoftwares or the WhatsApp button on this website.";
    }

    if (text.includes("email")) {
      return "Our email address is kangitensoftware@gmail.com.";
    }

    if (text.includes("instagram")) {
      return "Follow us on Instagram @kangitensoftwares.";
    }

    if (text.includes("whatsapp")) {
      return "Use the WhatsApp button at the bottom-right corner of the website.";
    }

    if (
      text.includes("location") ||
      text.includes("where are you")
    ) {
      return "Kangiten Software is based in Hyderabad, Telangana, India.";
    }

    return "Thank you for your message. Please use the Contact Form, WhatsApp button or call +91 81060 92063 for a detailed discussion.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    const botMessage: Message = {
      sender: "bot",
      text: getResponse(input),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  return (
    <>
      {!open && (
        <div className="fixed bottom-44 right-6 z-50 max-w-[220px] rounded-2xl border bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-xl">
          👋 Need help? Chat with us!
        </div>
      )}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-2xl text-white shadow-xl hover:bg-blue-800"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-44 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

          <div className="flex items-center justify-between bg-blue-900 p-4 text-white">

            <h3 className="font-semibold">
              Kangiten Assistant
            </h3>

            <button
              onClick={() => setOpen(false)}
              className="text-xl font-bold hover:text-gray-300"
            >
              ✕
            </button>

          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] rounded-2xl p-3 ${
                  message.sender === "user"
                    ? "ml-auto bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t p-3">

            <div className="mb-3 flex flex-wrap gap-2">

              <button
                onClick={() => setInput("What services do you offer?")}
                className="rounded-lg bg-gray-100 px-3 py-1 text-sm"
              >
                Services
              </button>

              <button
                onClick={() => setInput("How much does a website cost?")}
                className="rounded-lg bg-gray-100 px-3 py-1 text-sm"
              >
                Pricing
              </button>

              <button
                onClick={() => setInput("Tell me about AI Chatbots")}
                className="rounded-lg bg-gray-100 px-3 py-1 text-sm"
              >
                AI Chatbots
              </button>

              <button
                onClick={() => setInput("How can I contact you?")}
                className="rounded-lg bg-gray-100 px-3 py-1 text-sm"
              >
                Contact
              </button>

            </div>

            <div className="flex gap-2">

              <input
                type="text"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-xl border border-gray-300 px-3 py-2 outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button
                onClick={sendMessage}
                className="rounded-xl bg-blue-900 px-4 py-2 text-white"
              >
                Send
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}