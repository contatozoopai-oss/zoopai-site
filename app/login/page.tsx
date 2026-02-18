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

        <ZoopWelcome />

        <button
          onClick={enter}
          style={button}
        >
          {loading ? "Conectando..." : "ACESSAR ZOOPAI"}
        </button>

      </div>

    </div>
  );

}

const container = {

  minHeight: "100vh",

  background:
    "radial-gradient(circle at center, #020412 0%, #000000 70%)",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

};

const center = {

  textAlign: "center" as const,

};

const button = {

  marginTop: "40px",

  padding: "16px 42px",

  fontSize: "15px",

  letterSpacing: "1px",

  background: "transparent",

  color: "#00f0ff",

  border: "1px solid #00f0ff",

  cursor: "pointer",

  transition: "all 0.3s ease",

};
