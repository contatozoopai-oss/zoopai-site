"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function ZoopAI() {

  const router = useRouter();

  const [pulse, setPulse] = useState(0);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [loading, setLoading] = useState(false);

  const [spoken, setSpoken] = useState(false);


  /* respiração */

  useEffect(() => {

    const interval = setInterval(() => {

      setPulse(Math.sin(Date.now() * 0.002));

    }, 16);

    return () => clearInterval(interval);

  }, []);


  /* rastrear mouse */

  useEffect(() => {

    function move(e: MouseEvent) {

      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      setMouse({ x, y });

    }

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);


  /* VOZ AUTOMÁTICA */

  useEffect(() => {

    if (!spoken) {

      speak(
        "Presença humana detectada. Bem-vindo. Eu sou ZoopAI."
      );

      setSpoken(true);

    }

  }, []);



  function speak(text: string) {

    const synth = window.speechSynthesis;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "pt-BR";

    utterance.rate = 0.9;

    utterance.pitch = 0.8;

    synth.speak(utterance);

  }



  /* entrar */

  async function enter() {

    speak("Iniciando conexão neural");

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({

      email: "contato.zoopai@gmail.com",

      password: "ZoopAI@2026"

    });

    if (error) {

      speak("Falha na conexão");

      setLoading(false);

      return;

    }

    speak("Conexão estabelecida");

    setTimeout(() => {

      router.push("/dashboard");

    }, 1500);

  }



  return (

    <div style={container}>

      <div style={{
        ...energyField,
        opacity: 0.3 + pulse * 0.2
      }}/>

      <div style={center}>

        <div
          style={{
            ...avatarWrapper,

            transform: `
              translate(${mouse.x}px, ${mouse.y}px)
              scale(${1 + pulse * 0.03})
            `,

            boxShadow:
              `0 0 ${60 + pulse * 30}px rgba(0,240,255,0.8)`
          }}
        >

          <img src="/zoopai-avatar.png" style={avatar}/>

          <div style={{
            ...aura,
            opacity: 0.5 + pulse * 0.4
          }}/>

        </div>


        <div style={title}>
          ZOOPAI
        </div>

        <div style={subtitle}>
          Entidade Cognitiva Ativa
        </div>


        <button
          onClick={enter}
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


const energyField = {

  position: "fixed" as const,

  width: "1000px",

  height: "1000px",

  borderRadius: "50%",

  background:
    "radial-gradient(circle,rgba(0,240,255,0.4),transparent)",

  filter: "blur(200px)",

};


const center = {

  textAlign: "center" as const,

};


const avatarWrapper = {

  width: "320px",

  height: "320px",

  borderRadius: "50%",

  margin: "0 auto",

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

  filter: "blur(100px)",

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

  padding: "18px 50px",

  background: "transparent",

  border: "1px solid #00f0ff",

  color: "#00f0ff",

  letterSpacing: "3px",

  cursor: "pointer",

};
