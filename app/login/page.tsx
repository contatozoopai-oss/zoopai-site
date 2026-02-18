"use client";

import ZoopCore from "../dashboard/ZoopCore";
import ZoopWelcome from "./ZoopWelcome";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function enter() {

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: "contato.zoopai@gmail.com",
      password: "SUA_SENHA_AQUI"
    });

    if (!error) {

      router.push("/dashboard");

    }

    setLoading(false);

  }

  return (
    <div style={container}>

      <div style={center}>

        <ZoopCore />

        <div style={{ marginTop: 40 }}>
          <ZoopWelcome />
        </div>

        <button
          onClick={enter}
          style={button}
        >
          {loading ? "Conectando..." : "ENTRAR NA CONSCIÊNCIA"}
        </button>

      </div>

    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "radial-gradient(circle, #020412, #000000)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const center = {
  textAlign: "center" as const,
};

const button = {
  marginTop: "30px",
  padding: "15px 30px",
  background: "#00f0ff",
  border: "none",
  cursor: "pointer",
};
