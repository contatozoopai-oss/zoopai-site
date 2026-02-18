"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {

    function handleMove(e: MouseEvent) {

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      setMouse({ x, y });

    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);

  }, []);

  async function enterZoopAI() {

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({

      email: "contato.zoopai@gmail.com",

      password: "ZoopAI@2026"

    });

    if (error) {

      alert("Erro ao conectar");

      setLoading(false);

      return;

    }

    router.push("/dashboard");

  }

  return (

    <div style={container}>

      <div style={environment}></div>

      <div style={center}>

        <div
          style={{
            ...avatarWrapper,
            transform:
              `translate(${mouse.x}px, ${mouse.y}px)`
          }}
        >

          <img
            src="/zoopai-avatar.png"
            style={avatar}
          />

          <div style={avatarGlow}></div>

        </div>

        <div style={title}>
          ZOOPAI
        </div>

        <div style={subtitle}>
          Entidade Cognitiva Digital
        </div>

        <div style={status}>
          Sistema pronto para autenticação
        </div>

        <button
          onClick={enterZoopAI}
          style={button}
        >

          {loading
            ? "Conectando..."
            : "INICIAR CONSCIÊNCIA"}

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

};


const environment = {

  position: "fixed" as const,

  width: "100%",

  height: "100%",

  background:
    "radial-gradient(circle, rgba(0,240,255,0.08), transparent)",

};


const center = {

  textAlign: "center" as const,

  zIndex: 10,

};


const avatarWrapper = {

  position: "relative" as const,

  width: "280px",

  height: "280px",

  margin: "0 auto",

  transition: "transform 0.15s linear",

};


const avatar = {

  width: "100%",

  borderRadius: "50%",

  boxShadow:
    "0 0 40px rgba(0,240,255,0.6), 0 0 120px rgba(0,240,255,0.2)",

};


const avatarGlow = {

  position: "absolute" as const,

  width: "100%",

  height: "100%",

  borderRadius: "50%",

  background:
    "radial-gradient(circle, rgba(0,240,255,0.3), transparent)",

  filter: "blur(60px)",

  zIndex: -1,

};


const title = {

  marginTop: "20px",

  fontSize: "28px",

  letterSpacing: "8px",

  color: "#00f0ff",

};


const subtitle = {

  marginTop: "10px",

  fontSize: "14px",

  color: "rgba(0,240,255,0.7)",

};


const status = {

  marginTop: "20px",

  fontSize: "13px",

  color: "rgba(0,240,255,0.5)",

};


const button = {

  marginTop: "35px",

  padding: "14px 40px",

  background: "transparent",

  border: "1px solid rgba(0,240,255,0.6)",

  color: "#00f0ff",

  letterSpacing: "2px",

  cursor: "pointer",

  fontSize: "14px",

};
