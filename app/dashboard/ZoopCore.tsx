"use client";

export default function ZoopCore() {
  return (
    <div style={container}>

      <div style={aura}></div>

      <div style={core}>
        <div style={inner}></div>
      </div>

      <div style={ring1}></div>
      <div style={ring2}></div>
      <div style={ring3}></div>

      <div style={text}>
        ZOOPAI CORE ONLINE
      </div>

      <style>{animations}</style>

    </div>
  );
}

const container: React.CSSProperties = {
  position: "relative",
  width: "260px",
  height: "260px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const core: React.CSSProperties = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  background: "radial-gradient(circle, #00f0ff, #0066ff, #001133)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "pulse 3s infinite ease-in-out",
  boxShadow:
    "0 0 20px #00f0ff, 0 0 40px #0066ff, inset 0 0 20px rgba(255,255,255,0.3)",
};

const inner: React.CSSProperties = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "radial-gradient(circle, #ffffff, #00f0ff)",
  animation: "spin 6s linear infinite",
};

const aura: React.CSSProperties = {
  position: "absolute",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(0,240,255,0.25), transparent)",
  animation: "auraPulse 4s infinite ease-in-out",
};

const ringBase: React.CSSProperties = {
  position: "absolute",
  border: "1px solid rgba(0,240,255,0.4)",
  borderRadius: "50%",
};

const ring1: React.CSSProperties = {
  ...ringBase,
  width: "160px",
  height: "160px",
  animation: "rotate 12s linear infinite",
};

const ring2: React.CSSProperties = {
  ...ringBase,
  width: "200px",
  height: "200px",
  animation: "rotateReverse 18s linear infinite",
};

const ring3: React.CSSProperties = {
  ...ringBase,
  width: "240px",
  height: "240px",
  animation: "rotate 24s linear infinite",
};

const text: React.CSSProperties = {
  position: "absolute",
  bottom: "-45px",
  fontSize: "13px",
  letterSpacing: "3px",
  color: "#00f0ff",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
};

const animations = `
@keyframes pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotateReverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes auraPulse {
  0%,100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.2); opacity: 0.9; }
}
`;
