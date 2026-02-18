"use client";

export function speak(text: string) {

  if (typeof window === "undefined") return;

  const synth = window.speechSynthesis;

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "pt-BR";

  utterance.rate = 0.9;

  utterance.pitch = 0.7;

  utterance.volume = 1;

  synth.cancel();

  synth.speak(utterance);

}
