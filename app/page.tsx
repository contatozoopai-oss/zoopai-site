export default function Home() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">


      {/* HERO */}
      <section className="relative overflow-hidden">


        {/* FUNDO */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#071a3a] to-[#020617]"></div>


        {/* GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600 opacity-20 blur-[180px] rounded-full animate-glow"></div>



        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">


          {/* TEXTO */}
          <div>


            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">
              Plataforma de Inteligência Artificial
            </div>


            <h1 className="text-5xl md:text-6xl font-bold mb-6">

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
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-lg font-semibold"
              >
                Ver soluções
              </a>


            </div>


          </div>



          {/* ROBO */}
          <div className="flex justify-center relative">


            <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px] rounded-full animate-glow"></div>


            <img
              src="/robot.png"
              alt="Robô ZoopAI"
              className="relative z-10 w-[420px] animate-float drop-shadow-[0_0_80px_rgba(37,99,235,0.8)]"
            />


          </div>


        </div>

      </section>





      {/* SOLUÇÕES */}
      <section id="solucoes" className="py-24 px-6">


        <div className="max-w-6xl mx-auto">


          <h2 className="text-3xl font-bold text-center mb-16">

            Soluções ZoopAI

          </h2>



          <div className="grid md:grid-cols-3 gap-8">


            {/* CARD */}
            <div className="bg-[#0b1c3d] border border-blue-500/20 rounded-xl p-6 hover:border-blue-500 transition hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">


              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Atendimento Automático
              </h3>


              <p className="text-blue-100/70">
                Atendimento automático 24 horas no WhatsApp, site e Instagram.
              </p>


            </div>



            {/* CARD */}
            <div className="bg-[#0b1c3d] border border-blue-500/20 rounded-xl p-6 hover:border-blue-500 transition hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">


              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Agente de Vendas
              </h3>


              <p className="text-blue-100/70">
                Converte visitantes automaticamente em clientes usando IA.
              </p>


            </div>



            {/* CARD */}
            <div className="bg-[#0b1c3d] border border-blue-500/20 rounded-xl p-6 hover:border-blue-500 transition hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">


              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Automação Empresarial
              </h3>


              <p className="text-blue-100/70">
                Automatize processos internos e aumente sua produtividade.
              </p>


            </div>


          </div>


        </div>


      </section>





      {/* DEPOIMENTOS */}
      <section className="py-24 px-6">


        <div className="max-w-6xl mx-auto">


          <h2 className="text-3xl font-bold text-center mb-16">

            Empresas que confiam na ZoopAI

          </h2>



          <div className="grid md:grid-cols-3 gap-8">


            {[
              {
                nome: "Carlos Mendes",
                cargo: "Dono de E-commerce",
                texto:
                  "Depois que a ZoopAI entrou no meu negócio, minhas vendas aumentaram e ganhei mais tempo livre.",
              },
              {
                nome: "Fernanda Alves",
                cargo: "Clínica Odontológica",
                texto:
                  "Atendimento automático perfeito. Meus clientes recebem respostas instantaneamente.",
              },
              {
                nome: "Ricardo Souza",
                cargo: "Agência de Marketing",
                texto:
                  "A ZoopAI revolucionou minha empresa. Tudo automatizado e eficiente.",
              },
              {
                nome: "Juliana Ribeiro",
                cargo: "Loja Online",
                texto:
                  "Melhor investimento que fiz. Atendimento profissional 24 horas.",
              },
              {
                nome: "Rafael Martins",
                cargo: "Empresário",
                texto:
                  "Parece que tenho uma equipe completa trabalhando para mim.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#0b1c3d] border border-blue-500/20 rounded-xl p-6 hover:border-blue-500 transition hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              >
                <p className="text-blue-100/80 mb-4">
                  "{item.texto}"
                </p>

                <div className="text-blue-400 font-semibold">
                  {item.nome}
                </div>

                <div className="text-blue-200/60 text-sm">
                  {item.cargo}
                </div>

              </div>
            ))}


          </div>


        </div>


      </section>





      {/* CTA FINAL */}
      <section className="py-24 text-center">


        <h2 className="text-4xl font-bold mb-6">
          Pronto para automatizar seu negócio?
        </h2>


        <p className="text-blue-100/70 mb-8">
          Comece agora com a ZoopAI.
        </p>


        <a
          href="https://wa.me/5567998560850?text=Olá,%20quero%20começar%20com%20a%20ZoopAI."
          target="_blank"
          className="btn-primary px-10 py-5 rounded-xl text-lg font-semibold"
        >
          Começar agora
        </a>


      </section>


    </main>
  );
}
