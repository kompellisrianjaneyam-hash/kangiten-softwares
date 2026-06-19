
"use client";

import { useState } from "react";

type Message = {
  sender: "bot" | "user";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text:
        "Hi 👋 I'm Kangiten AI Assistant.\n\nI can help with Website Development, Mobile Apps, AI Voice Agents, AI Automation, Graphic Design, Social Media Management and Custom Software Development.\n\nHow can I help you today?",
    },
  ]);

  const getBotReply = (message: string) => {
    const msg = message.toLowerCase();

    if (msg.includes("website")) {
      return "We build premium business websites, e-commerce platforms and custom web applications designed to generate leads and grow businesses.";
    }

    if (msg.includes("mobile") || msg.includes("app")) {
      return "We develop Android and iOS applications tailored to your business requirements.";
    }

    if (msg.includes("voice")) {
      return "Our AI Voice Agents can answer calls, qualify leads, schedule appointments and provide support 24/7.";
    }

    if (msg.includes("automation")) {
      return "We help businesses automate repetitive tasks, customer support and internal workflows using AI.";
    }

    if (
      msg.includes("price") ||
      msg.includes("pricing") ||
      msg.includes("cost")
    ) {
      return "Every project is unique. We'd be happy to understand your requirements and provide a custom quote through a free consultation.";
    }

    return "Thanks for your question. I'd be happy to help. For detailed guidance tailored to your project, we recommend booking a free consultation through our Contact page.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const reply = getBotReply(input);

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input,
      },
      {
        sender: "bot",
        text: reply,
      },
    ]);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
        fixed
        bottom-28
        right-6
        z-[999]
        bg-[#003F73]
        text-white
        px-6
        py-4
        rounded-full
        shadow-2xl
        hover:scale-105
        transition-all
        font-semibold
        "
      >
        💬 Ask Kangiten AI
      </button>

      {open && (
        <div
          className="
          fixed
          bottom-24
          right-6
          w-[380px]
          h-[550px]
          bg-white
          rounded-3xl
          shadow-[0_30px_80px_rgba(0,90,156,0.25)]
          border
          border-blue-100
          z-[999]
          flex
          flex-col
          overflow-hidden
          "
        >
          <div className="bg-[#003F73] text-white p-5 flex justify-between items-center">
            <div className="font-bold">
              Kangiten AI Assistant
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-xl"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "bot"
                    ? "bg-blue-50 p-3 rounded-2xl whitespace-pre-line"
                    : "bg-gray-100 p-3 rounded-2xl text-right"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="
                flex-1
                border
                border-blue-200
                rounded-xl
                px-4
                py-3
                "
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button
                onClick={sendMessage}
                className="
                bg-[#003F73]
                text-white
                px-5
                rounded-xl
                "
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