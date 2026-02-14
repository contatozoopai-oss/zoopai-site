export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Zoop<span className="text-green-400">AI</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10">
          Agentes de Inteligência Artificial para automatizar atendimento,
          aumentar vendas e escalar sua empresa 24 horas por dia.
        </p>

        <a
          href="https://wa.me/5567991234567"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl text-lg transition"
        >
          Falar no WhatsApp
        </a>

      </section>


      {/* AGENTES */}
      <section className="px-6 pb-32">

        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Agentes IA
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* AGENTE 1 */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-green-400 transition">

            <h3 className="text-xl font-semibold mb-3 text-green-400">
              Atendimento Automático
            </h3>

            <p className="text-zinc-400 mb-6">
              Responda seus clientes automaticamente no WhatsApp,
              Instagram e site 24h por dia.
            </p>

            <a
              href="https://wa.me/5567991234567"
              target="_blank"
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Solicitar →
            </a>

          </div>


          {/* AGENTE 2 */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-green-400 transition">

            <h3 className="text-xl font-semibold mb-3 text-green-400">
              Agente de Vendas
            </h3>

            <p className="text-zinc-400 mb-6">
              Converta visitantes em clientes automaticamente
              com inteligência artificial.
            </p>

            <a
              href="https://wa.me/5567991234567"
              target="_blank"
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Solicitar →
            </a>

          </div>


          {/* AGENTE 3 */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-green-400 transition">

            <h3 className="text-xl font-semibold mb-3 text-green-400">
              Automação Empresarial
            </h3>

            <p className="text-zinc-400 mb-6">
              Automatize processos internos e aumente a produtividade da sua empresa.
            </p>

            <a
              href="https://wa.me/5567991234567"
              target="_blank"
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Solicitar →
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center pb-10 text-zinc-500">
        © {new Date().getFullYear()} ZoopAI. Todos os direitos reservados.
      </footer>

    </main>
  );
}
