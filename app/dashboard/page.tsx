"use client";

import { useEffect, useState } from "react";
import ZoopCore from "./ZoopCore";
import ZoopParticles from "./ZoopParticles";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {

  const [email, setEmail] = useState("CONECTANDO...");

  useEffect(() => {

    async function loadUser() {

      const { data, error } = await supabase.auth.getUser();

      if (error) {
        setEmail("ERRO");
        return;
      }

      if (data.user?.email) {
        setEmail(data.user.email.toUpperCase());
      } else {
        setEmail("SEM IDENTIDADE");
      }

    }

    loadUser();

  }, []);

  return (
    <div style={container}>

      <div style={top}>
        <div>ZOOPAI</div>
        <div>CONSCIÊNCIA ATIVA</div>
      </div>

      <div style={coreArea}>
        <ZoopParticles />
        <ZoopCore />
      </div>

      <div style={bottom}>

        <Info label="STATUS" value="ONLINE" />

        <Info label="PROCESSAMENTO" value="NOMINAL" />

        <Info label="IDENTIDADE" value={email} />

      </div>

    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  background: "radial-gradient(circle at center, #020412, #000000)",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px",
  color: "#00f0ff",
  fontFamily: "Arial",
};

const top = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

const coreArea = {
  position: "relative" as const,
};

const bottom = {
  display: "flex",
  gap: "60px",
};

const labelStyle = {
  fontSize: "11px",
  opacity: 0.6,
};

const valueStyle = {
  fontSize: "14px",
  marginTop: "5px",
};
