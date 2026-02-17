"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {

    e.preventDefault();

    setLoading(true);
    setMessage("Transmitindo dados para o núcleo ZoopAI...");

    try {

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Falha na criação");
      }

      setMessage("Identidade criada. Redirecionando...");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } catch (error: any) {

      setMessage("Erro: " + error.message);

    } finally {

      setLoading(false);

    }

  }

  return (
    <div style={{
      height: "100vh",
      background: "radial-gradient(circle at center, #020617, #000)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "monospace"
    }}>

      <form
        onSubmit={handleRegister}
        style={{
          background: "rgba(17,24,39,0.85)",
          padding: "40px",
          borderRadius: "16px",
          width: "340px",
          border: "1px solid rgba(59,130,246,0.3)",
          boxShadow: "0 0 40px rgba(37,99,235,0.3)"
        }}
      >

        <div style={{
          width: "12px",
          height: "12px",
          background: "#3b82f6",
          borderRadius: "50%",
          marginBottom: "20px",
          boxShadow: "0 0 20px #3b82f6",
          animation: "pulse 2s infinite"
        }}/>

        <h2 style={{
          color: "#60a5fa",
          marginBottom: "10px"
        }}>
          ZoopAI Identity Protocol
        </h2>

        <p style={{
          fontSize: "13px",
          color: "#94a3b8",
          marginBottom: "20px"
        }}>
          “Olá, humano. Vou criar sua identidade digital.”
        </p>

        <input
          type="text"
          placeholder="Nome humano"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email neural"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Chave de acesso"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? "Criando identidade..." : "Criar identidade"}
        </button>

        {message && (
          <p style={{
            marginTop: "15px",
            fontSize: "12px",
            color: "#60a5fa"
          }}>
            {message}
          </p>
        )}

      </form>

      <style>
        {`
        @keyframes pulse {
          0% { opacity: 0.4; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.3);}
          100% { opacity: 0.4; transform: scale(1);}
        }
        `}
      </style>

    </div>
  );

}

const inputStyle = {
  width: "100%",
  marginBottom: "12px",
  padding: "12px",
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "8px",
  color: "white",
  outline: "none"
};

const buttonStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "12px",
  background: "#2563eb",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};
