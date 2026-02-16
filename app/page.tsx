export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden text-white">

        {/* FUNDO FUTURISTA */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#031a3a] to-[#020617]"></div>

        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[900px] h-[900px]
                        bg-blue-600 opacity-20 blur-[180px]
                        rounded-full animate-glow">
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>

            <div className="inline-block mb-6 px-4 py-1 rounded-full
                            bg-blue-500/10 border border-blue-400/20
                            text-blue-300 text-sm font-medium">
              Plataforma de Inteligência Artificial
            </div>


            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

              Automatize seu atendimento com{" "}

              <span className="text-gradient">
                Agentes de IA
              </span>

            </h1>


            <p className="text-lg text-blue-100/80 mb-8 max-w-xl">

              A ZoopAI cria agentes inteligentes que atendem clientes,
              respondem mensagens e aumentam suas vendas automaticamente,
              24 horas por dia.

            </p>


            <div className="flex gap-4 flex-wrap">

              <a
                href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
                target="_blank"
                className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold"
              >
                Falar com especialista
              </a>


              <a
                href="#solucoes"
                className="px-8 py-4 rounded-lg text-lg font-semibold
                           border border-blue-400/30
                           text-blue-300
                           hover:border-blue-300
                           hover:bg-blue-500/10
                           transition">
                Ver soluções
              </a>

            </div>

          </div>


          {/* ROBO */}
          <div className="flex justify-center relative">

            <div className="absolute
                            w-[500px] h-[500px]
                            bg-blue-500 opacity-30 blur-[160px]
                            rounded-full animate-glow">
            </div>


            <img
              src="/robot.png"
              alt="Robô ZoopAI"
              className="relative z-10 w-[420px]
                         animate-float
                         drop-shadow-[0_0_80px_rgba(37,99,235,0.9)]"
            />

          </div>

        </div>

      </section>



      {/* SOLUÇÕES */}
      <section
        id="solucoes"
        className="relative bg-gradient-to-b from-[#020617] via-[#031a3a] to-[#020617] text-white py-24 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-16 text-center text-white">

            Soluções ZoopAI

          </h2>


          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white/5 backdrop-blur-xl
                            border border-blue-400/20
                            rounded-xl p-6
                            hover:border-blue-400/50
                            hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]
                            transition">

              <h3 className="text-xl font-semibold mb-3 text-blue-300">

                Atendimento Automático

              </h3>

              <p className="text-blue-100/70">

                Atendimento 24 horas automático no WhatsApp, site e Instagram.

              </p>

            </div>



            {/* CARD 2 */}
            <div className="bg-white/5 backdrop-blur-xl
                            border border-blue-400/20
                            rounded-xl p-6
                            hover:border-blue-400/50
                            hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]
                            transition">

              <h3 className="text-xl font-semibold mb-3 text-blue-300">

                Agente de Vendas

              </h3>

              <p className="text-blue-100/70">

                Converta visitantes em clientes automaticamente com IA.

              </p>

            </div>



            {/* CARD 3 */}
            <div className="bg-white/5 backdrop-blur-xl
                            border border-blue-400/20
                            rounded-xl p-6
                            hover:border-blue-400/50
                            hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]
                            transition">

              <h3 className="text-xl font-semibold mb-3 text-blue-300">

                Automação Empresarial

              </h3>

              <p className="text-blue-100/70">

                Automatize processos internos e aumente a produtividade.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
