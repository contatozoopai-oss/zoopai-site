"use client"

export function speakZoop(text: string) {
  if (typeof window === "undefined") return

  const synth = window.speechSynthesis

  function speakNow() {
    const utter = new SpeechSynthesisUtterance(text)

    utter.lang = "pt-BR"

    // voz masculina estilo IA avançada
    utter.rate = 0.88
    utter.pitch = 0.75
    utter.volume = 1

    const voices = synth.getVoices()

    // prioridade para vozes masculinas naturais
    const preferred =
      voices.find(v => v.name.includes("Google português do Brasil")) ||
      voices.find(v => v.name.includes("Microsoft Antonio")) ||
      voices.find(v => v.name.includes("Daniel")) ||
      voices.find(v => v.lang === "pt-BR") ||
      voices[0]

    if (preferred) utter.voice = preferred

    synth.cancel()
    synth.speak(utter)
  }

  if (synth.getVoices().length === 0) {
    synth.onvoiceschanged = speakNow
  } else {
    speakNow()
  }
}
