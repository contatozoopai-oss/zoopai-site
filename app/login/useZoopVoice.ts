"use client"

export function speakZoop(text: string) {
  if (typeof window === "undefined") return

  const synth = window.speechSynthesis

  const utter = new SpeechSynthesisUtterance(text)

  utter.lang = "pt-BR"
  utter.rate = 0.88
  utter.pitch = 0.55   // grave
  utter.volume = 1

  function loadVoicesAndSpeak() {
    const voices = synth.getVoices()

    if (!voices.length) {
      setTimeout(loadVoicesAndSpeak, 200)
      return
    }

    // tenta pegar voz masculina real
    const maleVoice =
      voices.find(v => v.name.toLowerCase().includes("antonio")) ||
      voices.find(v => v.name.toLowerCase().includes("daniel")) ||
      voices.find(v => v.name.toLowerCase().includes("google")) ||
      voices.find(v => v.lang === "pt-BR")

    if (maleVoice) {
      utter.voice = maleVoice
      console.log("Voz usada:", maleVoice.name)
    }

    synth.cancel()
    synth.speak(utter)
  }

  loadVoicesAndSpeak()
}
