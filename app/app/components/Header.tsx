"use client";

import Image from "next/image";

export default function Header() {
  const whatsappLink = "https://wa.me/5567998560850";

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-black">
      
      {/* LOGO */}
      <div className="flex items-center">
        <Image
          src="/zoopai-logo.png"
          alt="ZoopAI Logo"
          width={170}
          height={170}
          priority
        />
      </div>

      {/* BOTÃO WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        WhatsApp
      </a>

    </header>
  );
}
