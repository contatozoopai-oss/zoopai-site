"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(1 + Math.sin(Date.now() / 500) * 0.03);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>

      {/* CAMPO DE ENERGIA */}
      <div style={styles.energyField} />

      {/* NÚCLEO */}
      <div style={styles.coreContainer}>

        <div
          style={{
            ...styles.coreLayer1,
            transform: `scale(${scale})`
          }}
        />

        <div
          style={{
            ...styles.coreLayer2,
            transform: `scale(${scale * 0.95})`
          }}
        />

        <div
          style={{
            ...styles.coreLayer3,
            transform: `scale(${scale * 0.9})`
          }}
        />

        <div style={styles.coreCenter} />

      </div>

      {/* PAINEL */}
      <div style={styles.panel}>

        <div style={styles.label}>
          ZOOPAI CORE
        </div>

        <div style={styles.title}>
          Consciência ativa
        </div>

        <div style={styles.text}>
          Sua identidade foi integrada ao núcleo ZoopAI.
          <br />
          Todos os sistemas operam em sincronização total.
        </div>

        <div style={styles.status}>
          ● ONLINE
        </div>

      </div>

    </div>
  );
}

const styles: any = {

  container: {
    height: "100vh",
    background: "radial-gradient(circle at center, #020617 0%, #000 70%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    overflow: "hidden",
  },

  energyField: {
    position: "absolute",
    width: "1200px",
    height: "1200px",
    background: "radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)",
    filter: "blur(120px)",
  },

  coreContainer: {
    position: "relative",
    width: "320px",
    height: "320px",
    marginBottom: "60px",
  },

  coreLayer1: {
    position: "absolute",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)",
    filter: "blur(25px)",
  },

  coreLayer2: {
    position: "absolute",
    width: "240px",
    height: "240px",
    top: "40px",
    left: "40px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.7), transparent 70%)",
    filter: "blur(20px)",
  },

  coreLayer3: {
    position: "absolute",
    width: "160px",
    height: "160px",
    top: "80px",
    left: "80px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.9), transparent 70%)",
    filter: "blur(10px)",
  },

  coreCenter: {
    position: "absolute",
    width: "90px",
    height: "90px",
    top: "115px",
    left: "115px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #60a5fa, #2563eb)",
    boxShadow: "0 0 60px rgba(37,99,235,1)",
  },

  panel: {
    background: "rgba(2,6,23,0.7)",
    border: "1px solid rgba(37,99,235,0.5)",
    padding: "45px",
    borderRadius: "16px",
    textAlign: "center",
    backdropFilter: "blur(30px)",
    boxShadow: "0 0 60px rgba(37,99,235,0.3)",
    width: "480px",
  },

  label: {
    color: "#60a5fa",
    letterSpacing: "4px",
    fontSize: "13px",
    marginBottom: "15px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "18px",
  },

  text: {
    color: "#94a3b8",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "25px",
  },

  status: {
    color: "#22c55e",
    fontSize: "14px",
    letterSpacing: "4px",
  },

};
