"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [text, setText] = useState("");

  useEffect(() => {

    const fullText = "Olá, humano. Eu sou a ZoopAI. Sua identidade digital foi ativada.";
    let i = 0;

    const interval = setInterval(() => {

      setText(fullText.substring(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);

    }, 30);

    return () => clearInterval(interval);

  }, []);

  return (

    <div style={{
      height: "100vh",
      background: "radial-gradient(circle at center, #020617 0%, #000 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "monospace",
      color: "white",
      overflow: "hidden"
    }}>

      {/* CORE ENERGÉTICO */}
      <div style={{
        width: "220px",
        height: "220px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #3b82f6, #1d4ed8, transparent)",
        boxShadow: `
          0 0 40px #3b82f6,
          0 0 80px #3b82f6,
          0 0 120px rgba(59,130,246,0.6)
        `,
        marginBottom: "50px",
        animation: "pulse 2s infinite"
      }} />

      {/* PAINEL */}
      <div style={{
        background: "rgba(15,23,42,0.6)",
        padding: "60px",
        borderRadius: "20px",
        border: "1px solid rgba(59,130,246,0.4)",
        boxShadow: "0 0 60px rgba(59,130,246,0.25)",
        width: "700px",
        textAlign: "center",
        backdropFilter: "blur(10px)"
      }}>

        <div style={{
          color: "#3b82f6",
          fontSize: "18px",
          letterSpacing: "6px",
          marginBottom: "25px"
        }}>
          ZOOPAI CORE
        </div>

        <div style={{
          fontSize: "28px",
          lineHeight: "1.6",
          minHeight: "60px"
        }}>
          {text}
        </div>

        <div style={{
          marginTop: "30px",
          fontSize: "14px",
          opacity: 0.5
        }}>
          Sistema consciente ativo
        </div>

      </div>

      {/* ANIMAÇÃO */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

    </div>
  );
}
