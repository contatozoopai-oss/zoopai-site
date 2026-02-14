import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "ZoopAI",
  description: "Agentes de Inteligência Artificial para automatizar e escalar empresas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">

        <Header />

        <main className="pt-32">
          {children}
        </main>

      </body>
    </html>
  );
}
