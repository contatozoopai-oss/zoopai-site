export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 text-black overflow-hidden">

        {/* BACKGROUND GLOW GRANDE */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500 opacity-10 blur-[180px] rounded-full pointer-events-none"></div>

        {/* GRID HERO */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">


          {/* TEXTO */}
          <div>

            {/* Badge */}
            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold shadow-sm">
              Plataforma de Inteligência Artificial
            </div>


            {/* Titulo */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

              Automatize seu atendimento com{" "}

              <span className="text-blue-600 relative">

                Agentes de IA

                {/* linha glow */}
                <span className="absolute left-0 bottom-0 w-full h-[8px] bg-blue-400 opacity-20 blur-md"></span>

              </span>

            </h1>


            {/* Subtitulo */}
            <p className="text-lg text-zinc-600 mb-10 max-w-xl">
              A ZoopAI cria agentes inteligentes que atendem clientes,
              respondem mensagens e aumentam suas vendas automaticamente,
              24 horas por dia.
            </p>


            {/* Botões */}
            <div className="flex gap-4 flex-wrap">

              {/* BOTAO PRINCIPAL */}
              <a
                href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
                target="_blank"
                className="
                  bg-blue-600 
                  hover:bg-blue-700 
                  text-white 
                  font-semibold 
                  px-8 
                  py-4 
                  rounded-lg 
                  text-lg 
                  transition 
                  shadow-xl 
                  hover:shadow-blue-500/50
                  hover:scale-[1.03]
                "
              >
                Falar com especialista
              </a>


              {/* BOTAO SECUNDARIO */}
              <a
                href="#solucoes"
                className="
                  border border-blue-600 
                  text-blue-600 
                  hover:bg-blue-50 
                  font-semibold 
                  px-8 
                  py-4 
                  rounded-lg 
                  text-lg 
                  transition
                  hover:scale-[1.03]
                "
              >
                Ver soluções
              </a>

            </div>

          </div>


          {/* ROBO */}
          <div className="relative flex justify-center items-center">


            {/* GLOW ATRAS */}
            <div className="
              absolute
              w-[500px]
              h-[500px]
              bg-blue-500
              opacity-20
              blur-[140px]
              rounded-full
              animate-glow
            "></div>


            {/* ROBOT */}
            <img
              src="/robot.png"
              alt="Robô ZoopAI"
              className="
                relative
                z-10
                w-[420px]
                animate-float
                drop-shadow-[0_0_60px_rgba(37,99,235,0.6)]
                hover:scale-[1.03]
                transition
                duration-500
              "
            />


            {/* REFLEXO HORIZONTAL */}
            <div className="
              absolute
              bottom-[-40px]
              w-[280px]
              h-[60px]
              bg-blue-500
              opacity-10
              blur-[40px]
              rounded-full
            "></div>


          </div>

        </div>

      </section>



      {/* SOLUCOES */}
      <section
        id="solucoes"
        className="
          bg-zinc-50
          text-black
          py-24
          px-6
        "
      >

        <div className="max-w-6xl mx-auto">


          <h2 className="text-3xl font-bold mb-16 text-center">
            Soluções ZoopAI
          </h2>



          <div className="grid md:grid-cols-3 gap-8">


            {/* CARD */}
            <div className="
              bg-white
              p-8
              rounded-xl
              border
              hover:border-blue-500
              transition
              shadow-sm
              hover:shadow-lg
              hover:shadow-blue-500/10
              hover:-translate-y-1
            ">

              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Atendimento Automático
              </h3>

              <p className="text-zinc-600">
                Atendimento 24 horas automático no WhatsApp,
                site e Instagram.
              </p>

            </div>



            {/* CARD */}
            <div className="
              bg-white
              p-8
              rounded-xl
              border
              hover:border-blue-500
              transition
              shadow-sm
              hover:shadow-lg
              hover:shadow-blue-500/10
              hover:-translate-y-1
            ">

              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Agente de Vendas
              </h3>

              <p className="text-zinc-600">
                Convercendo visitantes automaticamente em clientes com IA.
              </p>

            </div>



            {/* CARD */}
            <div className="
              bg-white
              p-8
              rounded-xl
              border
              hover:border-blue-500
              transition
              shadow-sm
              hover:shadow-lg
              hover:shadow-blue-500/10
              hover:-translate-y-1
            ">

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
