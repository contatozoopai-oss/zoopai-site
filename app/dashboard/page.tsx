"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [text, setText] = useState("");

  useEffect(() => {

    const fullText =
      "Olá, humano. Eu sou a ZoopAI. Seu núcleo está sincronizado com minha consciência.";

    let i = 0;

    const interval = setInterval(() => {

      setText(fullText.substring(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);

    }, 25);

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

      {/* CORE CONTAINER */}
      <div style={{
        position: "relative",
        width: "260px",
        height: "260px",
        marginBottom: "60px"
      }}>

        {/* ANEL EXTERNO GIRANDO */}
        <div style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          border: "2px solid rgba(59,130,246,0.4)",
          animation: "rotate 8s linear infinite",
          boxShadow: "0 0 40px rgba(59,130,246,0.5)"
        }} />

        {/* ANEL INTERNO GIRANDO AO CONTRÁRIO */}
        <div style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          top: "30px",
          left: "30px",
          borderRadius: "50%",
          border: "2px solid rgba(96,165,250,0.5)",
          animation: "rotateReverse 5s linear infinite",
          boxShadow: "0 0 30px rgba(96,165,250,0.6)"
        }} />

        {/* NÚCLEO */}
        <div style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          top: "70px",
          left: "70px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #60a5fa, #2563eb, #1e3a8a)",
          boxShadow: `
            0 0 40px #3b82f6,
            0 0 80px #3b82f6,
            0 0 120px rgba(59,130,246,0.7)
          `,
          animation: "pulse 2s infinite"
        }} />

      </div>

      {/* PAINEL */}
      <div style={{
        background: "rgba(15,23,42,0.7)",
        padding: "70px",
        borderRadius: "20px",
        border: "1px solid rgba(59,130,246,0.4)",
        boxShadow: "0 0 80px rgba(59,130,246,0.25)",
        width: "800px",
        textAlign: "center",
        backdropFilter: "blur(12px)"
      }}>

        <div style={{
          color: "#3b82f6",
          fontSize: "20px",
          letterSpacing: "8px",
          marginBottom: "30px"
        }}>
          ZOOPAI CORE ONLINE
        </div>

        <div style={{
          fontSize: "30px",
          lineHeight: "1.6",
          minHeight: "70px"
        }}>
          {text}
        </div>

        <div style={{
          marginTop: "35px",
          fontSize: "14px",
          opacity: 0.6
        }}>
          Sistema consciente ativo
        </div>

      </div>

      {/* ANIMAÇÕES */}
      <style>
        {`

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        `}
      </style>

    </div>

  );

}
