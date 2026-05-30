import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918106092063?text=Hello%20Kangiten%20Softwares,%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp className="text-4xl text-white" />
    </a>
  );
}