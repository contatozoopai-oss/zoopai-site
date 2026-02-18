"use client";

export default function ZoopField() {

  return (
    <div style={field}>

      <div style={glow}></div>

    </div>
  );

}

const field = {

  position: "fixed" as const,

  width: "100%",

  height: "100%",

  background:

    "radial-gradient(circle at center, rgba(0,240,255,0.08), transparent 60%)",

  pointerEvents: "none" as const,

};

const glow = {

  position: "absolute" as const,

  width: "600px",

  height: "600px",

  top: "50%",

  left: "50%",

  transform: "translate(-50%, -50%)",

  background:

    "radial-gradient(circle, rgba(0,240,255,0.2), transparent)",

  filter: "blur(100px)",

};
