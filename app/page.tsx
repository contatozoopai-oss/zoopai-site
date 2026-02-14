import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">

      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-8 py-6">

        {/* LOGO ESQUERDA */}
        <div className="flex items-center">

          <Image
            src="/zoopai-logo.png"
            alt="ZoopAI Logo"
            width={170}
            height={170}
            priority
          />

        </div>

        {/* BOTÃO DIREITA */}
        <a
          href="https://wa.me/5567991234567"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          WhatsApp
        </a>

      </header>


      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Agentes de Inteligência Artificial
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10">
          Automatize atendimento, aumente vendas e escale sua empresa com agentes IA profissionais.
        </p>

        <a
          href="https://wa.me/5567991234567"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl text-lg transition"
        >
          Falar com especialista
        </a>

      </section>


      {/* AGENTES */}
      <section className="px-6 pb-32">

        <h2 className="text-3xl font-bold text-center mb-12">
          Soluções ZoopAI
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-400 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Atendimento Automático
            </h3>
            <p className="text-zinc-400">
              Atendimento 24h automático com inteligência artificial.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-400 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Agente de Vendas
            </h3>
            <p className="text-zinc-400">
              Converta visitantes em clientes automaticamente.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-400 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Automação Empresarial
            </h3>
            <p className="text-zinc-400">
              Automatize processos e aumente a produtividade.
            </p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center pb-10 text-zinc-500">
        © {new Date().getFullYear()} ZoopAI — Todos os direitos reservados
      </footer>

    </main>
  );
}
