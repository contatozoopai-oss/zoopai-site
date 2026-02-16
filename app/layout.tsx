import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "ZoopAI - Agentes de Inteligência Artificial",
  description: "Automatize seu atendimento e aumente suas vendas com IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">

        {/* HEADER */}
        <Header />

        {/* CONTEÚDO DO SITE */}
        {children}

      </body>
    </html>
  );
}
