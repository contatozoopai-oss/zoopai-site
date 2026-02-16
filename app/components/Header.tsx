"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-black border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/zoopai-logo.png"
            alt="ZoopAI Logo"
            width={170}
            height={170}
            priority
            className="object-contain"
          />
        </div>

        {/* MENU */}
        <nav className="flex items-center gap-8">

          <a
            href="#"
            className="text-white/80 hover:text-white transition"
          >
            Início
          </a>

          <a
            href="#"
            className="text-white/80 hover:text-white transition"
          >
            Soluções
          </a>

          <a
            href="https://wa.me/5567998560850"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Contato
          </a>

        </nav>

      </div>

    </header>
  );
}
