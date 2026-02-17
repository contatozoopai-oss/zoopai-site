"use client";

import React, { useEffect, useState } from "react";
import ZoopCore from "./ZoopCore";
import ZoopParticles from "./ZoopParticles";
import { supabase } from "../lib/supabase";

export default function Dashboard() {

  const [email, setEmail] = useState("CONECTANDO...");

  useEffect(() => {

    async function getUser() {

      try {

        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          setEmail("ERRO DE IDENTIDADE");
          return;
        }

        if (user?.email) {
          setEmail(user.email.toUpperCase());
        } else {
          setEmail("SEM IDENTIDADE");
        }

      } catch {
        setEmail("FALHA NA CONSCIÊNCIA");
      }

    }

    getUser();

  }, []);

  return (
    <>
      <div className="dashboard">

        {/* topo */}
        <div className="hud-top">

          <div className="logo">
            ZOOPAI
          </div>

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

          <div className="block">
            <div className="label">STATUS</div>
            <div className="value">ONLINE</div>
          </div>

          <div className="block">
            <div className="label">PROCESSAMENTO</div>
            <div className="value">NOMINAL</div>
          </div>

          <div className="block">
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
          font-family: Arial, sans-serif;
        }

        .hud-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          letter-spacing: 4px;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #00ff88;
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 10px #00ff88;
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

        .block {
          text-align: center;
        }

        .label {
          font-size: 11px;
          opacity: 0.6;
          letter-spacing: 2px;
        }

        .value {
          font-size: 14px;
          margin-top: 5px;
          letter-spacing: 1px;
        }

        @keyframes pulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

      `}</style>

    </>
  );
}
