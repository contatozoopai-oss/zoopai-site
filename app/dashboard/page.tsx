"use client";

import { useEffect, useState } from "react";
import ZoopCore from "./ZoopCore";
import ZoopParticles from "./ZoopParticles";
import { supabase } from "../lib/supabase";

export default function Dashboard() {

  const [email, setEmail] = useState<string>("CONECTANDO...");

  useEffect(() => {

    const load = async () => {

      try {

        const result = await supabase.auth.getUser();

        if (result?.data?.user?.email) {
          setEmail(result.data.user.email.toUpperCase());
        } else {
          setEmail("SEM IDENTIDADE");
        }

      } catch (e) {

        setEmail("ERRO");

      }

    };

    load();

  }, []);

  return (
    <div style={container}>

      {/* topo */}
      <div style={top}>

        <div>ZOOPAI</div>

        <div style={status}>
          <div style={dot}></div>
          CONSCIÊNCIA ATIVA
        </div>

      </div>


      {/* núcleo */}
      <div style={coreArea}>

        <ZoopParticles />

        <ZoopCore />

      </div>


      {/* base */}
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


/* styles */

const container: React.CSSProperties = {
  minHeight: "100vh",
  background: "radial-gradient(circle at center, #020412, #000000)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px",
  color: "#00f0ff",
  fontFamily: "Arial",
};

const top: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

const status: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

const dot: React.CSSProperties = {
  width: "10px",
  height: "10px",
  background: "#00ff88",
  borderRadius: "50%",
};

const coreArea: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const bottom: React.CSSProperties = {
  display: "flex",
  gap: "60px",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px",
  opacity: 0.6,
};

const valueStyle: React.CSSProperties = {
  fontSize: "14px",
  marginTop: "5px",
};
