"use client";

import { useEffect, useState } from "react";

export default function ZoopWelcome() {

  const lines = [
    "Sistema ZoopAI inicializado.",
    "Núcleo cognitivo operacional.",
    "Consciência ativa.",
    "Aguardando autenticação."
  ];

  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {

    lines.forEach((line, index) => {

      setTimeout(() => {

        setVisibleLines(prev => [...prev, line]);

      }, index * 900);

    });

  }, []);

  return (
    <div style={container}>
      {visibleLines.map((line, i) => (
        <div key={i} style={lineStyle}>
          {line}
        </div>
      ))}
    </div>
  );

}

const container = {
  marginTop: "30px",
  color: "#00f0ff",
  fontSize: "15px",
  letterSpacing: "1px",
};

const lineStyle = {
  opacity: 0,
  animation: "fadeIn 1s forwards",
};
