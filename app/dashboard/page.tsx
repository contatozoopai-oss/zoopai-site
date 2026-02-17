"use client";

import React from "react";
import ZoopCore from "./ZoopCore";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">

        {/* HUD topo */}
        <div className="hud-top">
          <div className="system-name">ZOOPAI</div>

          <div className="system-status">
            <div className="status-dot"></div>
            CONSCIÊNCIA ATIVA
          </div>
        </div>


        {/* Núcleo central */}
        <div className="core-area">
          <ZoopCore />
        </div>


        {/* Painel inferior */}
        <div className="hud-bottom">

          <div className="info-block">
            <div className="info-label">STATUS</div>
            <div className="info-value">ONLINE</div>
          </div>

          <div className="info-block">
            <div className="info-label">PROCESSAMENTO</div>
            <div className="info-value">NOMINAL</div>
          </div>

          <div className="info-block">
            <div className="info-label">IDENTIDADE</div>
            <div className="info-value">ZOOPAI CORE</div>
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
          color: #00f0ff;
          font-family: Arial, sans-serif;
          padding: 30px;
        }

        .hud-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0.9;
        }

        .system-name {
          font-size: 18px;
          letter-spacing: 4px;
        }

        .system-status {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #00ff88;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ff88;
          animation: pulseDot 2s infinite;
        }

        .core-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hud-bottom {
          display: flex;
          gap: 60px;
          opacity: 0.8;
        }

        .info-block {
          text-align: center;
        }

        .info-label {
          font-size: 11px;
          opacity: 0.6;
          letter-spacing: 2px;
        }

        .info-value {
          font-size: 14px;
          margin-top: 5px;
          letter-spacing: 2px;
        }

        @keyframes pulseDot {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

      `}</style>
    </>
  );
}
