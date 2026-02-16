"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <Image
            src="/zoopai-logo.png"
            alt="ZoopAI"
            width={160}
            height={160}
            priority
            className="object-contain"
          />

        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8">

          <a
            href="#"
            className="text-white/80 hover:text-white transition"
          >
            Início
          </a>

          <a
            href="#solucoes"
            className="text-white/80 hover:text-white transition"
          >
            Soluções
          </a>

          <a
            href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg transition"
          >
            Falar com especialista
          </a>

        </nav>

      </div>

    </header>
  );
}
