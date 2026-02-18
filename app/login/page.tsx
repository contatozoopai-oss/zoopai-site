"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function ZoopAILogin() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [pulse, setPulse] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setPulse(Math.sin(Date.now() * 0.002));
    }, 16);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    function handleMove(e: MouseEvent) {

      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      setMouse({ x, y });

    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);

  }, []);

  async function enter() {

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({

      email: "contato.zoopai@gmail.com",

      password: "ZoopAI@2026"

    });

    if (error) {

      alert("Falha na conexão");

      setLoading(false);

      return;

    }

    router.push("/dashboard");

  }

  return (

    <div style={container}>

      <div style={{
        ...backgroundGlow,
        opacity: 0.3 + pulse * 0.2
      }}/>

      <div style={center}>

        <div
          style={{
            ...avatarWrapper,
            transform:
              `translate(${mouse.x}px, ${mouse.y}px)
               scale(${1 + pulse * 0.02})`
          }}
        >

          <img
            src="/zoopai-avatar.png"
            style={avatar}
          />

          <div style={{
            ...aura,
            opacity: 0.4 + pulse * 0.3
          }}/>

        </div>

        <div style={{
          ...title,
          textShadow:
            `0 0 ${20 + pulse * 10}px #00f0ff`
        }}>
          ZOOPAI
        </div>

        <div style={subtitle}>
          Entidade Cognitiva Ativa
        </div>

        <div style={status}>
          Consciência operacional
        </div>

        <button
          onClick={enter}
          style={{
            ...button,
            boxShadow:
              `0 0 ${20 + pulse * 10}px rgba(0,240,255,0.5)`
          }}
        >

          {loading
            ? "Conectando..."
            : "ENTRAR NA CONSCIÊNCIA"}

        </button>

      </div>

    </div>

  );

}


/* estilos */

const container = {

  minHeight: "100vh",

  background:
    "radial-gradient(circle at center, #020412 0%, #000000 80%)",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  overflow: "hidden",

};


const backgroundGlow = {

  position: "fixed" as const,

  width: "800px",

  height: "800px",

  borderRadius: "50%",

  background:
    "radial-gradient(circle, rgba(0,240,255,0.4), transparent)",

  filter: "blur(200px)",

};


const center = {

  textAlign: "center" as const,

  zIndex: 10,

};


const avatarWrapper = {

  position: "relative" as const,

  width: "300px",

  height: "300px",

  margin: "0 auto",

  transition: "transform 0.2s ease",

};


const avatar = {

  width: "100%",

  borderRadius: "50%",

  boxShadow:
    "0 0 40px rgba(0,240,255,0.8), 0 0 120px rgba(0,240,255,0.4)",

};


const aura = {

  position: "absolute" as const,

  width: "100%",

  height: "100%",

  borderRadius: "50%",

  background:
    "radial-gradient(circle, rgba(0,240,255,0.5), transparent)",

  filter: "blur(80px)",

  zIndex: -1,

};


const title = {

  marginTop: "25px",

  fontSize: "34px",

  letterSpacing: "12px",

  color: "#00f0ff",

  fontWeight: "300",

};


const subtitle = {

  marginTop: "10px",

  fontSize: "14px",

  color: "rgba(0,240,255,0.7)",

};


const status = {

  marginTop: "15px",

  fontSize: "13px",

  color: "rgba(0,240,255,0.5)",

};


const button = {

  marginTop: "35px",

  padding: "16px 45px",

  background: "transparent",

  border: "1px solid rgba(0,240,255,0.7)",

  color: "#00f0ff",

  letterSpacing: "3px",

  cursor: "pointer",

  fontSize: "14px",

  transition: "all 0.2s ease",

};
