import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "ZoopAI - Agentes de Inteligência Artificial",
  description:
    "Automatize seu atendimento, aumente vendas e escale sua empresa com agentes de IA da ZoopAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white antialiased">

        {/* FUNDO GRADIENTE FUTURISTA */}
        <div className="fixed inset-0 -z-10">

          {/* Gradiente principal */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

          {/* Glow azul topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px]" />

          {/* Glow azul inferior */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px]" />

        </div>

        {/* HEADER FIXO */}
        <Header />

        {/* CONTEÚDO */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
