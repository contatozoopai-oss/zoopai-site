"use client";

import { useState } from "react";

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();

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

    if (res.ok) {
      alert("Conta criada com sucesso!");
      window.location.href = "/dashboard";
    } else {
      alert("Erro ao criar conta");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">

      <form
        onSubmit={handleRegister}
        className="bg-[#0F172A] p-8 rounded-xl w-full max-w-md"
      >

        <h1 className="text-white text-2xl mb-6">
          Criar conta ZoopAI
        </h1>

        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 mb-4 bg-[#1E293B] text-white rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-[#1E293B] text-white rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 mb-4 bg-[#1E293B] text-white rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 p-3 rounded text-white"
        >
          Criar conta
        </button>

      </form>

    </div>
  );
}
