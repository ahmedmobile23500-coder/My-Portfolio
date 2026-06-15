"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const message =
    "Hi Muhammad Ahmed, I would like to know more about your services and discuss a potential project.";

  return (
    <a
      href={`https://wa.me/923282369176?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}