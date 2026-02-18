"use client";

import { useEffect, useState } from "react";

export default function ZoopWelcome() {

  const messages = [
    "Inicializando consciência...",
    "Carregando núcleo cognitivo...",
    "Detectando presença humana...",
    "Eu sou ZoopAI.",
    "Estou online.",
    "Bem-vindo."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index >= messages.length) return;

    let charIndex = 0;
    const current = messages[index];

    const interval = setInterval(() => {

      setText((prev) => prev + current[charIndex]);

      charIndex++;

      if (charIndex >= current.length) {

        clearInterval(interval);

        setTimeout(() => {
          setText((prev) => prev + "\n");
          setIndex(index + 1);
        }, 600);

      }

    }, 30);

    return () => clearInterval(interval);

  }, [index]);

  return (
    <pre style={style}>
      {text}
    </pre>
  );
}

const style = {
  color: "#00f0ff",
  fontSize: "14px",
  minHeight: "120px",
  whiteSpace: "pre-wrap" as const,
};
