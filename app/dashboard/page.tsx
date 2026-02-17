"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>

      {/* CAMPO DE FUNDO */}
      <div style={styles.backgroundGlow} />

      {/* NÚCLEO */}
      <div style={styles.coreWrapper}>

        <div
          style={{
            ...styles.coreOuter,
            transform: `scale(${1 + pulse * 0.002})`,
          }}
        />

        <div
          style={{
            ...styles.coreMiddle,
            transform: `scale(${1 + pulse * 0.0015})`,
          }}
        />

        <div style={styles.coreInner} />

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
          Todos os sistemas estão operacionais.
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
    fontFamily: "system-ui, sans-serif",
    overflow: "hidden",
  },

  backgroundGlow: {
    position: "absolute",
    width: "900px",
    height: "900px",
    background: "radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)",
    filter: "blur(120px)",
  },

  coreWrapper: {
    position: "relative",
    width: "220px",
    height: "220px",
    marginBottom: "50px",
  },

  coreOuter: {
    position: "absolute",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)",
    filter: "blur(20px)",
  },

  coreMiddle: {
    position: "absolute",
    width: "160px",
    height: "160px",
    top: "30px",
    left: "30px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.7), transparent 70%)",
    filter: "blur(10px)",
  },

  coreInner: {
    position: "absolute",
    width: "80px",
    height: "80px",
    top: "70px",
    left: "70px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #60a5fa, #2563eb)",
    boxShadow: "0 0 40px rgba(37,99,235,0.9)",
  },

  panel: {
    background: "rgba(2,6,23,0.6)",
    border: "1px solid rgba(37,99,235,0.4)",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    backdropFilter: "blur(20px)",
    boxShadow: "0 0 40px rgba(37,99,235,0.2)",
    width: "420px",
  },

  label: {
    color: "#60a5fa",
    letterSpacing: "4px",
    fontSize: "12px",
    marginBottom: "12px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "16px",
  },

  text: {
    color: "#94a3b8",
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },

  status: {
    color: "#22c55e",
    fontSize: "13px",
    letterSpacing: "3px",
  },

};
