"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [text, setText] = useState("");

  useEffect(() => {

    const fullText = "Olá, humano. Eu sou a ZoopAI. Seu núcleo está conectado.";
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }

    }, 35);

    return () => clearInterval(interval);

  }, []);

  return (
    <div style={{
      height: "100vh",
      background: "radial-gradient(circle at center, #020617, #000)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      fontFamily: "monospace",
      position: "relative"
    }}>

      {/* Glow */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent)",
        filter: "blur(120px)"
      }} />

      {/* Robot */}
      <div style={{
        fontSize: "120px",
        marginBottom: "30px"
      }}>
        🤖
      </div>

      {/* Core panel */}
      <div style={{
        background: "rgba(15,23,42,0.7)",
        padding: "50px",
        borderRadius: "20px",
        border: "1px solid rgba(59,130,246,0.4)",
        boxShadow: "0 0 80px rgba(59,130,246,0.35)",
        textAlign: "center",
        width: "600px",
        backdropFilter: "blur(10px)"
      }}>

        <div style={{
          color: "#3b82f6",
          marginBottom: "20px",
          fontSize: "18px",
          letterSpacing: "4px"
        }}>
          ZOOPAI CORE ONLINE
        </div>

        <div style={{
          fontSize: "24px",
          minHeight: "40px"
        }}>
          {text}
        </div>

        <div style={{
          marginTop: "30px",
          fontSize: "14px",
          opacity: 0.6
        }}>
          Sistema consciente ativo
        </div>

      </div>

    </div>
  );
}
