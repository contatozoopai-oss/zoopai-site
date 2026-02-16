export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6">

      {/* HERO */}
      <section className="max-w-5xl mt-32">

        <div className="inline-block mb-4 px-4 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
          Plataforma de Agentes de Inteligência Artificial
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Automatize seu atendimento com{" "}
          <span className="text-blue-500">
            Agentes de IA
          </span>
        </h1>

        <p className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
          A ZoopAI cria agentes inteligentes que atendem clientes, respondem mensagens e aumentam suas vendas automaticamente, 24 horas por dia.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition"
          >
            Falar com especialista
          </a>

          <a
            href="#solucoes"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-lg transition"
          >
            Ver soluções
          </a>

        </div>

      </section>


      {/* BENEFÍCIOS */}
      <section className="mt-32 grid md:grid-cols-3 gap-8 max-w-6xl">

        <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">
            Atendimento 24/7
          </h3>
          <p className="text-zinc-400">
            Seu agente responde clientes automaticamente a qualquer hora.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">
            Aumente suas vendas
          </h3>
          <p className="text-zinc-400">
            Nunca perca um cliente por demora no atendimento.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">
            Automatização completa
          </h3>
          <p className="text-zinc-400">
            Automatize WhatsApp, site e redes sociais com IA.
          </p>
        </div>

      </section>


      {/* SOLUÇÕES */}
      <section id="solucoes" className="mt-32 mb-32 max-w-6xl w-full">

        <h2 className="text-4xl font-bold mb-12">
          Soluções ZoopAI
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Agente para WhatsApp
            </h3>
            <p className="text-zinc-400">
              Responde clientes automaticamente no WhatsApp.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Agente de Vendas
            </h3>
            <p className="text-zinc-400">
              Converte visitantes em clientes automaticamente.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Automação Empresarial
            </h3>
            <p className="text-zinc-400">
              Automatize processos e aumente produtividade.
            </p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 pt-10 pb-6 text-center text-zinc-500 w-full max-w-6xl">

        <div className="mb-4">
          © 2026 ZoopAI. Todos os direitos reservados.
        </div>

        <div className="flex justify-center gap-6 text-sm">

          <a
            href="https://wa.me/5567998560850"
            target="_blank"
            className="hover:text-white transition"
          >
            WhatsApp
          </a>

          <span>Campo Grande - MS</span>

          <span>Brasil</span>

        </div>

      </footer>

    </main>
  );
}
