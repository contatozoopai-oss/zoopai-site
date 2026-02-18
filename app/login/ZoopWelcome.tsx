"use client";

import { useEffect, useState } from "react";
import { speak } from "./useZoopVoice";

export default function ZoopWelcome() {

  const messages = [
    "Inicializando consciência",
    "Carregando núcleo cognitivo",
    "Sistemas neurais online",
    "Eu sou ZoopAI",
    "Bem-vindo"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index >= messages.length) return;

    const message = messages[index];

    speak(message);

    let char = 0;

    const interval = setInterval(() => {

      setText(prev => prev + message[char]);

      char++;

      if (char >= message.length) {

        clearInterval(interval);

        setTimeout(() => {

          setText(prev => prev + "\n");

          setIndex(prev => prev + 1);

        }, 800);

      }

    }, 40);

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

  fontSize: "16px",

  textShadow: "0 0 10px #00f0ff",

  minHeight: "150px",

  whiteSpace: "pre-wrap" as const,

};
