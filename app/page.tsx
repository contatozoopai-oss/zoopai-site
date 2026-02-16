import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-center px-6 bg-white text-black">

        {/* HERO */}
        <section className="max-w-6xl mt-32 mb-20 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="text-left">

            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-medium">
              Plataforma de Inteligência Artificial
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Automatize seu atendimento com{" "}
              <span className="text-blue-600">
                Agentes de IA
              </span>
            </h1>

            <p className="text-xl text-zinc-600 mb-8">
              A ZoopAI cria agentes inteligentes que atendem clientes, respondem mensagens e aumentam suas vendas automaticamente.
            </p>

            <div className="flex gap-4">

              <a
                href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
              >
                Falar com especialista
              </a>

              <a
                href="#solucoes"
                className="border border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
              >
                Ver soluções
              </a>

            </div>

          </div>


          {/* IMAGEM ROBÔ */}
          <div className="flex justify-center">

            <Image
              src="/robot.png"
              alt="Agente IA ZoopAI"
              width={500}
              height={500}
              className="drop-shadow-xl"
            />

          </div>

        </section>



        {/* SOLUÇÕES */}
        <section id="solucoes" className="max-w-6xl w-full mb-32">

          <h2 className="text-4xl font-bold mb-12">
            Soluções ZoopAI
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Atendimento automático
              </h3>

              <p className="text-zinc-600">
                Responda clientes automaticamente no WhatsApp 24 horas por dia.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Agente de vendas
              </h3>

              <p className="text-zinc-600">
                Converta visitantes em clientes automaticamente.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Automação empresarial
              </h3>

              <p className="text-zinc-600">
                Automatize processos e aumente produtividade.
              </p>
            </div>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="border-t border-zinc-200 pt-10 pb-6 text-zinc-500 w-full">

          © 2026 ZoopAI — Inteligência Artificial para Empresas

        </footer>


      </main>



      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg font-semibold transition"
      >
        WhatsApp
      </a>

    </>
  );
}
