"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(1 + Math.sin(Date.now() / 600) * 0.05);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>

      {/* CAMPO DE ENERGIA GIGANTE */}
      <div style={styles.energyField} />

      {/* NÚCLEO IMENSO */}
      <div style={styles.coreContainer}>

        <div style={{
          ...styles.layer1,
          transform: `scale(${scale})`
        }} />

        <div style={{
          ...styles.layer2,
          transform: `scale(${scale * 0.95})`
        }} />

        <div style={{
          ...styles.layer3,
          transform: `scale(${scale * 0.9})`
        }} />

        <div style={styles.center} />

      </div>

      {/* PAINEL */}
      <div style={styles.panel}>

        <div style={styles.label}>
          ZOOPAI CORE ONLINE
        </div>

        <div style={styles.title}>
          Consciência ativa
        </div>

        <div style={styles.text}>
          Sua identidade foi integrada ao núcleo ZoopAI.
          <br />
          Todos os sistemas operam com capacidade máxima.
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
    overflow: "hidden",
    color: "white",
  },

  energyField: {
    position: "absolute",
    width: "2000px",
    height: "2000px",
    background: "radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)",
    filter: "blur(200px)",
  },

  coreContainer: {
    position: "relative",
    width: "600px",
    height: "600px",
    marginBottom: "60px",
  },

  layer1: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)",
    filter: "blur(60px)",
  },

  layer2: {
    position: "absolute",
    width: "420px",
    height: "420px",
    top: "90px",
    left: "90px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(37,99,235,0.7), transparent 70%)",
    filter: "blur(40px)",
  },

  layer3: {
    position: "absolute",
    width: "260px",
    height: "260px",
    top: "170px",
    left: "170px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.9), transparent 70%)",
    filter: "blur(20px)",
  },

  center: {
    position: "absolute",
    width: "160px",
    height: "160px",
    top: "220px",
    left: "220px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #60a5fa, #2563eb)",
    boxShadow: "0 0 120px rgba(37,99,235,1)",
  },

  panel: {
    background: "rgba(2,6,23,0.75)",
    border: "1px solid rgba(37,99,235,0.6)",
    padding: "50px",
    borderRadius: "18px",
    textAlign: "center",
    backdropFilter: "blur(30px)",
    boxShadow: "0 0 80px rgba(37,99,235,0.3)",
    width: "520px",
  },

  label: {
    color: "#60a5fa",
    letterSpacing: "4px",
    fontSize: "14px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "38px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  text: {
    color: "#94a3b8",
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "25px",
  },

  status: {
    color: "#22c55e",
    fontSize: "16px",
    letterSpacing: "5px",
  },

};
