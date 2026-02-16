"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);



  return (

    <main className="relative overflow-hidden bg-futuristic">

      {/* GLOW REATIVO AO MOUSE */}
      <div
        className="pointer-events-none fixed w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 bg-blue-500 transition-all duration-300"
        style={{
          left: mouse.x - 300,
          top: mouse.y - 300,
        }}
      ></div>



      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* PARTÍCULAS */}
        <div className="absolute inset-0 pointer-events-none">

          {[...Array(20)].map((_, i) => (

            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
              }}
            />

          ))}

        </div>



        {/* CONTEÚDO */}
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* TEXTO */}
          <div>

            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium animate-glow">
              Plataforma de Inteligência Artificial
            </div>



            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">

              Automatize seu atendimento com{" "}

              <span className="text-gradient">
                Agentes de IA
              </span>

            </h1>



            <p className="text-lg text-zinc-600 mb-10 max-w-xl">

              A ZoopAI cria agentes inteligentes que atendem clientes,
              respondem mensagens e aumentam suas vendas automaticamente,
              24 horas por dia.

            </p>



            <div className="flex gap-4 flex-wrap">

              <a
                href="https://wa.me/5567998560850?text=Olá,%20quero%20automatizar%20meu%20atendimento%20com%20um%20Agente%20de%20IA%20da%20ZoopAI."
                target="_blank"
                className="btn-primary px-8 py-4 text-lg"
              >
                Falar com especialista
              </a>



              <a
                href="#solucoes"
                className="btn-secondary px-8 py-4 text-lg"
              >
                Ver soluções
              </a>

            </div>

          </div>



          {/* ROBÔ */}
          <div className="flex justify-center relative">

            {/* GLOW */}
            <div className="absolute w-[450px] h-[450px] bg-blue-500 opacity-20 blur-[120px] rounded-full animate-glow"></div>



            <img
              src="/robot.png"
              alt="Robô ZoopAI"
              className="
                relative
                w-[440px]
                robot-glow
                animate-float
                transition-all
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>

      </section>



      {/* SOLUÇÕES */}
      <section
        id="solucoes"
        className="py-24 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">

            Soluções ZoopAI

          </h2>



          <div className="grid md:grid-cols-3 gap-8">

            <div className="card-futuristic p-8">

              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Atendimento Automático
              </h3>

              <p className="text-zinc-600">
                Atendimento 24h automático no WhatsApp, site e Instagram.
              </p>

            </div>



            <div className="card-futuristic p-8">

              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Agente de Vendas
              </h3>

              <p className="text-zinc-600">
                Converta visitantes em clientes automaticamente com IA.
              </p>

            </div>



            <div className="card-futuristic p-8">

              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Automação Empresarial
              </h3>

              <p className="text-zinc-600">
                Automatize processos e aumente produtividade.
              </p>

            </div>

          </div>

        </div>

      </section>



    </main>

  );

}
