export async function playZoopVoice(text: string) {

  try {

    const res = await fetch("/api/voice", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ text })

    });

    if (!res.ok) {

      console.error("Erro ao gerar voz");

      return;

    }

    const blob = await res.blob();

    const url = URL.createObjectURL(blob);

    const audio = new Audio(url);

    audio.volume = 1;

    await audio.play();

  }

  catch (err) {

    console.error("Erro ZoopVoice:", err);

  }

}
