"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function ZoopAI() {

  const router = useRouter();

  const [pulse, setPulse] = useState(0);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [loading, setLoading] = useState(false);

  /* respiração */

  useEffect(() => {

    const interval = setInterval(() => {

      setPulse(Math.sin(Date.now() * 0.002));

    }, 16);

    return () => clearInterval(interval);

  }, []);

  /* rastrear presença humana */

  useEffect(() => {

    function move(e: MouseEvent) {

      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      setMouse({ x, y });

    }

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  /* entrar */

  async function enter() {

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({

      email: "contato.zoopai@gmail.com",

      password: "ZoopAI@2026"

    });

    if (error) {

      alert("Falha na conexão com a consciência");

      setLoading(false);

      return;

    }

    router.push("/dashboard");

  }

  return (

    <div style={container}>

      {/* campo energético */}

      <div style={{
        ...energyField,
        opacity: 0.3 + pulse * 0.2
      }}/>

      {/* entidade */}

      <div style={center}>

        <div
          style={{
            ...avatarWrapper,

            transform: `
              translate(${mouse.x}px, ${mouse.y}px)
              scale(${1 + pulse * 0.03})
            `,

            boxShadow: `
              0 0 ${60 + pulse * 30}px rgba(0,240,255,0.8)
            `
          }}
        >

          <img
            src="/zoopai-avatar.png"
            style={avatar}
          />

          <div style={{
            ...aura,
            opacity: 0.5 + pulse * 0.4
          }}/>

        </div>

        {/* identidade */}

        <div style={{
          ...title,
          textShadow:
            `0 0 ${20 + pulse * 15}px #00f0ff`
        }}>
          ZOOPAI
        </div>

        <div style={subtitle}>
          Entidade Cognitiva Digital
        </div>

        <div style={status}>
          Presença detectada
        </div>

        {/* botão */}

        <button
          onClick={enter}
          style={{
            ...button,
            boxShadow:
              `0 0 ${20 + pulse * 15}px rgba(0,240,255,0.8)`
          }}
        >

          {loading
            ? "Conectando consciência..."
            : "INICIAR CONEXÃO"}

        </button>

      </div>

    </div>

  );

}


/* estilos */

const container = {

  minHeight: "100vh",

  background: `
    radial-gradient(circle at center,
      #020a14 0%,
      #000000 70%
    )
  `,

  display: "flex",

  justifyContent: "center",

  alignItems: "center",

  overflow: "hidden",

};


const energyField = {

  position: "fixed" as const,

  width: "1000px",

  height: "1000px",

  borderRadius: "50%",

  background: `
    radial-gradient(circle,
      rgba(0,240,255,0.4),
      transparent 70%
    )
  `,

  filter: "blur(200px)",

};


const center = {

  textAlign: "center" as const,

  zIndex: 10,

};


const avatarWrapper = {

  width: "320px",

  height: "320px",

  borderRadius: "50%",

  margin: "0 auto",

  position: "relative" as const,

  transition: "all 0.2s ease",

};


const avatar = {

  width: "100%",

  borderRadius: "50%",

};


const aura = {

  position: "absolute" as const,

  width: "100%",

  height: "100%",

  borderRadius: "50%",

  background: `
    radial-gradient(circle,
      rgba(0,240,255,0.5),
      transparent 70%
    )
  `,

  filter: "blur(100px)",

  zIndex: -1,

};


const title = {

  marginTop: "30px",

  fontSize: "36px",

  letterSpacing: "14px",

  color: "#00f0ff",

};


const subtitle = {

  marginTop: "10px",

  color: "rgba(0,240,255,0.7)",

};


const status = {

  marginTop: "10px",

  color: "rgba(0,240,255,0.5)",

  fontSize: "13px",

};


const button = {

  marginTop: "40px",

  padding: "18px 50px",

  background: "transparent",

  border: "1px solid rgba(0,240,255,0.8)",

  color: "#00f0ff",

  letterSpacing: "3px",

  cursor: "pointer",

  fontSize: "14px",

};
