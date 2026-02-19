export function speakZoop(message: string) {
  if (typeof window === "undefined") return

  const synth = window.speechSynthesis

  const utterance = new SpeechSynthesisUtterance(message)

  utterance.lang = "pt-BR"

  utterance.rate = 0.9
  utterance.pitch = 1.1
  utterance.volume = 1

  const voices = synth.getVoices()

  const femaleVoice =
    voices.find(v => v.name.includes("Google português")) ||
    voices.find(v => v.name.includes("Female")) ||
    voices.find(v => v.lang === "pt-BR")

  if (femaleVoice) {
    utterance.voice = femaleVoice
  }

  synth.cancel()
  synth.speak(utterance)
}
