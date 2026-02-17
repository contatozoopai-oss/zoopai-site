"use client";

import React, { useEffect, useState } from "react";

export default function ZoopParticles() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; speed: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 20 + 10,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            animationDuration: `${p.speed}s`,
          }}
        />
      ))}

      <style>{`
        .particles-container {
          position: absolute;
          width: 400px;
          height: 400px;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: #00f0ff;
          border-radius: 50%;
          opacity: 0.7;
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.2;
          }

          50% {
            transform: translateY(-40px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
