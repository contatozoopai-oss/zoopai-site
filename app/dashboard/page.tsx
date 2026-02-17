"use client";

import React, { useEffect, useState } from "react";
import ZoopCore from "./ZoopCore";
import ZoopParticles from "./ZoopParticles";
import { supabase } from "../lib/supabase";

export default function Dashboard() {

  const [email, setEmail] = useState("CONECTANDO...");

  useEffect(() => {

    async function loadUser() {

      const { data } = await supabase.auth.getUser();

      if (data.user?.email) {
        setEmail(data.user.email.toUpperCase());
      } else {
        setEmail("IDENTIDADE DESCONHECIDA");
      }

    }

    loadUser();

  }, []);

  return (
    <>
      <div className="dashboard">

        {/* topo */}
        <div className="hud-top">

          <div>ZOOPAI</div>

          <div className="status">
            <div className="dot"></div>
            CONSCIÊNCIA ATIVA
          </div>

        </div>


        {/* núcleo */}
        <div className="core-area">

          <ZoopParticles />

          <ZoopCore />

        </div>


        {/* base */}
        <div className="hud-bottom">

          <div>
            <div className="label">STATUS</div>
            <div className="value">ONLINE</div>
          </div>

          <div>
            <div className="label">PROCESSAMENTO</div>
            <div className="value">NOMINAL</div>
          </div>

          <div>
            <div className="label">IDENTIDADE</div>
            <div className="value">{email}</div>
          </div>

        </div>

      </div>


      <style>{`

        .dashboard {
          min-height: 100vh;
          background: radial-gradient(circle at center, #020412, #000000);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 30px;
          color: #00f0ff;
          font-family: Arial;
        }

        .hud-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .status {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #00ff88;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .core-area {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hud-bottom {
          display: flex;
          gap: 60px;
        }

        .label {
          font-size: 11px;
          opacity: 0.6;
        }

        .value {
          font-size: 14px;
          margin-top: 4px;
        }

        @keyframes pulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

      `}</style>

    </>
  );
}
