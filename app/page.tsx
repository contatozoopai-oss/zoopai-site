export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6">

      {/* HERO */}
      <section className="max-w-5xl mt-24">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Agentes de Inteligência Artificial
        </h1>

        <p className="text-xl text-zinc-400 mb-10">
          Automatize atendimento, aumente vendas e escale sua empresa com agentes IA profissionais.
        </p>

        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg text-lg transition"
        >
          Falar com especialista
        </a>

      </section>

      {/* SOLUÇÕES */}
      <section className="mt-32 max-w-6xl w-full">

        <h2 className="text-3xl font-bold mb-12">
          Soluções ZoopAI
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Atendimento Automático
            </h3>

            <p className="text-zinc-400">
              Atendimento 24 horas automático no WhatsApp, site e Instagram.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Agente de Vendas
            </h3>

            <p className="text-zinc-400">
              Converta visitantes em clientes automaticamente com IA.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Automação Empresarial
            </h3>

            <p className="text-zinc-400">
              Automatize processos internos e aumente produtividade.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
