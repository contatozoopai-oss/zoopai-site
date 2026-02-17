"use client";

import { useState, useEffect } from "react";

export default function RegisterPage() {
  const [text, setText] = useState("");
  const fullText =
    "Olá, humano.\nEu sou a ZoopAI.\nVou criar sua identidade digital.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full p-10">

        {/* Lado esquerdo */}
        <div className="flex flex-col justify-center">

          <div className="text-blue-400 text-sm mb-2">
            ● ZoopAI ONLINE
          </div>

          <h1 className="text-3xl font-bold whitespace-pre-line leading-relaxed">
            {text}
          </h1>

          <div className="mt-6 text-blue-300 text-sm opacity-70">
            Sistema de criação de identidade iniciado...
          </div>

        </div>

        {/* Lado direito */}
        <div className="bg-[#0f172a] border border-blue-500/30 rounded-xl p-8 shadow-2xl">

          <h2 className="text-xl mb-6 text-blue-400">
            Criar identidade
          </h2>

          <form className="space-y-4">

            <input
              placeholder="Nome"
              className="w-full bg-[#020617] border border-blue-500/20 p-3 rounded-lg outline-none focus:border-blue-400"
            />

            <input
              placeholder="Email"
              className="w-full bg-[#020617] border border-blue-500/20 p-3 rounded-lg outline-none focus:border-blue-400"
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full bg-[#020617] border border-blue-500/20 p-3 rounded-lg outline-none focus:border-blue-400"
            />

            <button
              className="w-full bg-blue-600 hover:bg-blue-500 transition p-3 rounded-lg font-semibold"
            >
              Criar identidade
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
