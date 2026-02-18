"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {

    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {

      setMessage("Email ou senha inválidos");

    } else {

      router.push("/dashboard");

    }

  }

  return (
    <div style={container}>

      <div style={box}>

        <h1 style={title}>ZOOPAI LOGIN</h1>

        <form onSubmit={handleLogin} style={form}>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            style={input}
          />

          <button style={button}>
            Entrar
          </button>

        </form>

        <div style={errorStyle}>{message}</div>

      </div>

    </div>
  );
}


/* styles */

const container = {
  minHeight: "100vh",
  background: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const box = {
  background: "#050a18",
  padding: "40px",
  borderRadius: "10px",
};

const title = {
  color: "#00f0ff",
  marginBottom: "20px",
};

const form = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "10px",
};

const input = {
  padding: "10px",
  background: "black",
  border: "1px solid #00f0ff",
  color: "#00f0ff",
};

const button = {
  padding: "10px",
  background: "#00f0ff",
  border: "none",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  marginTop: "10px",
};
