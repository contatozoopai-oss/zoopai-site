export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-white text-black overflow-hidden">

        {/* GLOW FUNDO */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500 opacity-10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* TEXTO */}
          <div>

            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              Plataforma de Inteligência Artificial
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Automatize seu atendimento com{" "}
              <span className="text-blue-600">
                Agentes de IA
              </span>
            </h1>

            <p className="text-lg text-zinc-600 mb-8">
              A ZoopAI cria agentes inteligentes que atendem clientes,
              respondem mensagens e aumentam suas vendas automaticamente,
              24 horas por dia.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-xl hover:shadow-blue-500/40"
              >
                Falar com especialista
              </a>

              <a
                href="#solucoes"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg text-lg transition"
              >
                Ver soluções
              </a>

            </div>

          </div>


          {/* ROBO */}
          <div className="flex justify-center relative">

            <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[100px] rounded-full"></div>

            <img
              src="/robot.png"
              alt="Robô ZoopAI"
              className="relative z-10 w-[420px] drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            />

          </div>

        </div>

      </section>


      {/* SOLUCOES */}
      <section
        id="solucoes"
        className="bg-zinc-50 text-black py-20 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Soluções ZoopAI
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl border hover:border-blue-500 transition shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Atendimento Automático
              </h3>

              <p className="text-zinc-600">
                Atendimento 24 horas automático no WhatsApp, site e Instagram.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border hover:border-blue-500 transition shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Agente de Vendas
              </h3>

              <p className="text-zinc-600">
                Converta visitantes em clientes automaticamente com IA.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border hover:border-blue-500 transition shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Automação Empresarial
              </h3>

              <p className="text-zinc-600">
                Automatize processos internos e aumente produtividade.
              </p>
            </div>

          </div>

        </div>

      </section>


    </main>
  );
}
