"use client";

import { useState, useEffect } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const messages = [
    "Olá, humano.",
    "Eu sou a ZoopAI.",
    "Vou criar sua identidade digital."
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (messageIndex >= messages.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + messages[messageIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 35);

    if (charIndex >= messages[messageIndex].length) {
      setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setMessageIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, messageIndex]);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao criar conta");
      }

      alert("Identidade criada com sucesso.");

      setName("");
      setEmail("");
      setPassword("");

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "radial-gradient(circle at center, #020617, #020617, #000)",
      color: "white",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* núcleo energia fundo */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        background: "rgba(37,99,235,0.15)",
        borderRadius: "50%",
        filter: "blur(120px)",
        animation: "pulse 4s infinite"
      }} />

      {/* card */}
      <form
        onSubmit={handleRegister}
        style={{
          background: "rgba(17,24,39,0.8)",
          backdropFilter: "blur(20px)",
          padding: "35px",
          borderRadius: "14px",
          width: "340px",
          border: "1px solid rgba(59,130,246,0.3)",
          boxShadow: "0 0 40px rgba(37,99,235,0.25)",
          position: "relative",
          zIndex: 10
        }}
      >

        {/* núcleo ZoopAI */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "15px"
        }}>
          <div style={{
            width: "10px",
            height: "10px",
            background: "#3b82f6",
            borderRadius: "50%",
            boxShadow: "0 0 15px #3b82f6",
            animation: "pulse 2s infinite"
          }} />
          <span style={{
            fontSize: "12px",
            color: "#3b82f6",
            letterSpacing: "2px"
          }}>
            ZOOPAI CORE ACTIVE
          </span>
        </div>

        {/* mensagem IA */}
        <pre style={{
          fontSize: "14px",
          color: "#60a5fa",
          minHeight: "60px",
          marginBottom: "20px",
          fontFamily: "monospace"
        }}>
          {displayedText}
        </pre>

        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Senha segura"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "18px",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "0 0 20px #2563eb",
            cursor: "pointer"
          }}
        >
          {loading
            ? "Sincronizando com núcleo..."
            : "Criar identidade"}
        </button>

      </form>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.4; transform: scale(1);}
            50% { opacity: 1; transform: scale(1.15);}
            100% { opacity: 0.4; transform: scale(1);}
          }
        `}
      </style>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "12px",
  background: "rgba(2,6,23,0.6)",
  border: "1px solid rgba(59,130,246,0.3)",
  borderRadius: "8px",
  color: "white",
  outline: "none"
} as const;
