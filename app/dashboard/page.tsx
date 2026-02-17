"use client";

export default function Dashboard() {

  return (
    <div style={{
      height: "100vh",
      background: "radial-gradient(circle at center, #020617, #000)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "monospace"
    }}>

      <div style={{
        background: "rgba(17,24,39,0.8)",
        padding: "40px",
        borderRadius: "16px",
        border: "1px solid rgba(59,130,246,0.3)",
        boxShadow: "0 0 40px rgba(37,99,235,0.3)",
        textAlign: "center"
      }}>

        <div style={{
          width: "12px",
          height: "12px",
          background: "#3b82f6",
          borderRadius: "50%",
          margin: "0 auto 15px auto",
          boxShadow: "0 0 20px #3b82f6",
          animation: "pulse 2s infinite"
        }}/>

        <h1 style={{
          color: "#60a5fa",
          marginBottom: "10px"
        }}>
          ZoopAI CORE
        </h1>

        <p style={{
          color: "#cbd5e1"
        }}>
          Bem-vindo, humano.
        </p>

        <p style={{
          color: "#94a3b8"
        }}>
          Sua identidade digital está ativa.
        </p>

      </div>

      <style>
        {`
        @keyframes pulse {
          0% { opacity: 0.4; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.2);}
          100% { opacity: 0.4; transform: scale(1);}
        }
        `}
      </style>

    </div>
  );
}
