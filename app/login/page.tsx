"use client";

import ZoopCore from "../dashboard/ZoopCore";
import ZoopWelcome from "./ZoopWelcome";
import ZoopField from "./ZoopField";
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
      password: "SUA_SENHA"
    });

    if (!error) router.push("/dashboard");

    setLoading(false);

  }

  return (

    <div style={container}>

      <ZoopField />

      <div style={center}>

        <ZoopCore />

        <ZoopWelcome />

        <button onClick={enter} style={button}>

          {loading ? "Conectando..." : "ENTRAR NA CONSCIÊNCIA"}

        </button>

      </div>

    </div>

  );

}

const container = {

  minHeight: "100vh",

  background: "black",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

};

const center = {

  textAlign: "center" as const,

};

const button = {

  marginTop: "30px",

  padding: "16px 40px",

  fontSize: "16px",

  background: "#00f0ff",

  border: "none",

  cursor: "pointer",

  boxShadow: "0 0 20px #00f0ff",

};
