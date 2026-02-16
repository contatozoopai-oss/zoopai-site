export default function Home() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">


      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* FUNDO GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a1a3a] to-[#020617]"></div>

        {/* GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600 opacity-20 blur-[180px] rounded-full animate-glow"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">


          {/* TEXTO */}
          <div>

            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
              Plataforma de Inteligência Artificial
            </div>


            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

              Automatize seu atendimento com{" "}

              <span className="text-gradient">
                Agentes de IA
              </span>

            </h1>


            <p className="text-blue-100/70 text-lg mb-8">

              A ZoopAI cria agentes inteligentes que atendem clientes,
              respondem mensagens e aumentam suas vendas automaticamente,
              24 horas por dia.

            </p>


            <div className="flex gap-4 flex-wrap">


              <a
                href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
                target="_blank"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Falar com especialista
              </a>


              <a
                href="#solucoes"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition"
              >
                Ver soluções
              </a>


            </div>

          </div>



          {/* ROBO */}
          <div className="flex justify-center relative">

            <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full animate-glow"></div>

            <img
              src="/robot.png"
              alt="Robô ZoopAI"
              className="relative z-10 w-[420px] animate-float drop-shadow-[0_0_80px_rgba(37,99,235,0.8)]"
            />

          </div>


        </div>

      </section>





      {/* SOLUÇÕES */}
      <section
        id="solucoes"
        className="relative py-24 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-16">

            Soluções ZoopAI

          </h2>



          <div className="grid md:grid-cols-3 gap-8">


            {/* CARD */}
            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Atendimento Automático
              </h3>

              <p className="text-blue-100/70">
                Atendimento 24 horas automático no WhatsApp, site e Instagram.
              </p>

            </div>



            {/* CARD */}
            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Agente de Vendas
              </h3>

              <p className="text-blue-100/70">
                Convertendo visitantes automaticamente em clientes com IA.
              </p>

            </div>



            {/* CARD */}
            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Automação Empresarial
              </h3>

              <p className="text-blue-100/70">
                Automatize processos internos e aumente a produtividade.
              </p>

            </div>


          </div>

        </div>

      </section>





      {/* DEPOIMENTOS */}
      <section className="relative py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-16">

            Empresas que confiam na ZoopAI

          </h2>



          <div className="grid md:grid-cols-3 gap-8">


            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <p className="text-blue-100/80 mb-4">
                "Depois que a ZoopAI entrou no meu negócio,
                tenho mais tempo e minhas vendas aumentaram."
              </p>

              <div className="text-blue-400 font-semibold">
                Carlos Mendes
              </div>

              <div className="text-blue-300/60 text-sm">
                Dono de E-commerce
              </div>

            </div>



            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <p className="text-blue-100/80 mb-4">
                "Atendimento automático 24h.
                Meus clientes recebem resposta instantânea."
              </p>

              <div className="text-blue-400 font-semibold">
                Fernanda Alves
              </div>

              <div className="text-blue-300/60 text-sm">
                Clínica Odontológica
              </div>

            </div>



            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <p className="text-blue-100/80 mb-4">
                "A ZoopAI revolucionou minha empresa.
                Tudo automatizado."
              </p>

              <div className="text-blue-400 font-semibold">
                Ricardo Souza
              </div>

              <div className="text-blue-300/60 text-sm">
                Agência de Marketing
              </div>

            </div>



            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <p className="text-blue-100/80 mb-4">
                "Melhor investimento que fiz.
                Atendimento profissional."
              </p>

              <div className="text-blue-400 font-semibold">
                Juliana Ribeiro
              </div>

              <div className="text-blue-300/60 text-sm">
                Loja Online
              </div>

            </div>



            <div className="card-futuristic bg-white/5 backdrop-blur p-6">

              <p className="text-blue-100/80 mb-4">
                "Parece que tenho uma equipe 24h trabalhando."
              </p>

              <div className="text-blue-400 font-semibold">
                Rafael Martins
              </div>

              <div className="text-blue-300/60 text-sm">
                Empresário
              </div>

            </div>


          </div>

        </div>

      </section>





      {/* CTA FINAL */}
      <section className="py-24 text-center relative">

        <div className="absolute inset-0 bg-blue-600 opacity-10 blur-[140px]"></div>

        <div className="relative z-10">

          <h2 className="text-4xl font-bold mb-6">

            Pronto para automatizar seu negócio?

          </h2>

          <p className="text-blue-100/70 mb-8">

            Comece hoje com a ZoopAI.

          </p>


          <a
            href="https://wa.me/5567998560850?text=Olá,%20quero%20começar%20com%20a%20ZoopAI."
            target="_blank"
            className="btn-primary px-10 py-5 rounded-xl text-lg font-semibold"
          >
            Começar agora
          </a>

        </div>

      </section>



    </main>
  );
}
