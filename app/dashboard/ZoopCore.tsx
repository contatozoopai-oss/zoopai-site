"use client";

import React from "react";

export default function ZoopCore() {
  return (
    <>
      <div className="zoopcore-container">

        <div className="zoopcore-aura"></div>

        <div className="zoopcore-core">
          <div className="zoopcore-inner"></div>
        </div>

        <div className="zoopcore-ring ring1"></div>
        <div className="zoopcore-ring ring2"></div>
        <div className="zoopcore-ring ring3"></div>

        <div className="zoopcore-text">
          ZOOPAI CORE ONLINE
        </div>

      </div>

      <style>{`
        .zoopcore-container {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zoopcore-core {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, #00f0ff, #0066ff, #001133);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: zoopcore-pulse 3s infinite ease-in-out;
          box-shadow: 0 0 20px #00f0ff, 0 0 40px #0066ff;
        }

        .zoopcore-inner {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, #00f0ff);
          animation: zoopcore-spin 6s linear infinite;
        }

        .zoopcore-aura {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,240,255,0.25), transparent);
          animation: zoopcore-aura 4s infinite ease-in-out;
        }

        .zoopcore-ring {
          position: absolute;
          border: 1px solid rgba(0,240,255,0.4);
          border-radius: 50%;
        }

        .ring1 {
          width: 160px;
          height: 160px;
          animation: zoopcore-rotate 12s linear infinite;
        }

        .ring2 {
          width: 200px;
          height: 200px;
          animation: zoopcore-rotate-reverse 18s linear infinite;
        }

        .ring3 {
          width: 240px;
          height: 240px;
          animation: zoopcore-rotate 24s linear infinite;
        }

        .zoopcore-text {
          position: absolute;
          bottom: -40px;
          font-size: 13px;
          letter-spacing: 3px;
          color: #00f0ff;
          font-family: Arial, sans-serif;
        }

        @keyframes zoopcore-pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes zoopcore-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes zoopcore-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes zoopcore-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes zoopcore-aura {
          0%,100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.9; }
        }
      `}</style>
    </>
  );
}
