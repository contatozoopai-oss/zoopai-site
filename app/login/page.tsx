"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { playZoopVoice } from "../../lib/playZoopVoice";

export default function ZoopAI() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [pulse, setPulse] = useState(0);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });


  /* animação respiração */

  useEffect(() => {

    const interval = setInterval(() => {

      setPulse(Math.sin(Date.now() * 0.002));

    }, 16);

    return () => clearInterval(interval);

  }, []);


  /* seguir mouse */

  useEffect(() => {

    function move(e: MouseEvent) {

      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      setMouse({ x, y });

    }

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);



  /* iniciar conexão */

  async function iniciar() {

    await playZoopVoice(
      "Bem vindo. Eu sou ZoopAI. Iniciando conexão com sua consciência."
    );

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({

      email: "contato.zoopai@gmail.com",

      password: "ZoopAI@2026"

    });

    if (error) {

      await playZoopVoice(
        "Falha na autenticação. Verifique suas credenciais."
      );

      setLoading(false);

      return;

    }

    await playZoopVoice(
      "Conexão estabelecida. Seja bem vindo."
    );

    setTimeout(() => {

      router.push("/dashboard");

    }, 2000);

  }



  return (

    <div style={container}>

      {/* aura energética */}

      <div
        style={{
          ...energy,
          opacity: 0.3 + pulse * 0.3,
          pointerEvents: "none"
        }}
      />


      <div style={center}>

        {/* avatar */}

        <div
          style={{
            ...avatarWrapper,

            transform: `
              translate(${mouse.x}px, ${mouse.y}px)
              scale(${1 + pulse * 0.03})
            `
          }}
        >

          <img
            src="/zoopai-avatar.png"
            style={avatar}
          />

        </div>


        <div style={title}>
          ZOOPAI
        </div>


        <div style={subtitle}>
          Entidade Cognitiva Feminina Ativa
        </div>


        <button
          onClick={iniciar}
          style={button}
        >

          {loading
            ? "Conectando..."
            : "INICIAR CONEXÃO"}

        </button>


      </div>

    </div>

  );

}



/* estilos */

const container = {

  minHeight: "100vh",

  background:
    "radial-gradient(circle,#020a14,#000)",

  display: "flex",

  justifyContent: "center",

  alignItems: "center",

};


const energy = {

  position: "fixed" as const,

  width: "1000px",

  height: "1000px",

  borderRadius: "50%",

  background:
    "radial-gradient(circle,rgba(0,240,255,0.5),transparent)",

  filter: "blur(200px)",

};


const center = {

  textAlign: "center" as const,

  zIndex: 10,

};


const avatarWrapper = {

  width: "320px",

  height: "320px",

  margin: "0 auto",

};


const avatar = {

  width: "100%",

  borderRadius: "50%",

  boxShadow:
    "0 0 60px rgba(0,240,255,0.8)",

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


const button = {

  marginTop: "40px",

  padding: "18px 60px",

  background: "transparent",

  border: "1px solid #00f0ff",

  color: "#00f0ff",

  letterSpacing: "3px",

  cursor: "pointer",

  fontSize: "16px",

};
