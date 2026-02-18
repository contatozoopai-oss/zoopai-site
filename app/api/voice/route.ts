import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

  const { text } = await req.json();

  const response = await fetch(
    "https://api.openai.com/v1/audio/speech",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        model: "gpt-4o-mini-tts",

        voice: "nova",

        input: text

      })
    }
  );

  const audio = await response.arrayBuffer();

  return new Response(audio, {

    headers: {
      "Content-Type": "audio/mpeg"
    }

  });

}
