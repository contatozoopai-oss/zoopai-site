"use client";

import { useEffect, useState } from "react";

export default function ZoopAvatar() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    function handleMove(e: MouseEvent) {

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      setPosition({ x, y });

    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);

  }, []);

  return (

    <div style={container}>

      <div
        style={{
          ...avatarWrapper,
          transform: `translate(${position.x}px, ${position.y}px) scale(1.02)`
        }}
      >

        <img
          src="/zoopai-avatar.png"
          style={image}
        />

        <div style={glow}></div>

      </div>

    </div>

  );

}

const container = {

  display: "flex",

  justifyContent: "center",

  marginBottom: "30px",

};

const avatarWrapper = {

  position: "relative" as const,

  width: "300px",

  height: "300px",

  transition: "transform 0.2s ease-out",

};

const image = {

  width: "100%",

  borderRadius: "50%",

  boxShadow:

    "0 0 40px rgba(0,240,255,0.5), 0 0 120px rgba(0,240,255,0.2)",

  animation: "breath 4s ease-in-out infinite",

};

const glow = {

  position: "absolute" as const,

  width: "100%",

  height: "100%",

  borderRadius: "50%",

  background:

    "radial-gradient(circle, rgba(0,240,255,0.25), transparent)",

  filter: "blur(60px)",

  zIndex: -1,

};
