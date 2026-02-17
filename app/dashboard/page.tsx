"use client";

import React from "react";
import ZoopCore from "./ZoopCore";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">

        <ZoopCore />

      </div>

      <style>{`
        .dashboard {
          min-height: 100vh;
          background: radial-gradient(circle at center, #020412, #000000);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
