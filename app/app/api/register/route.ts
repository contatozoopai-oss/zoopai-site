import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { name, email, password } = body;

    const res = await fetch(process.env.DATABASE_URL!, {
      method: "POST"
    });

    // conexão com Supabase via SQL REST
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ('${name}', '${email}', '${password}')
    `;

    const db = await fetch(
      "https://acquafedfabjqxvszwfs.supabase.co/rest/v1/rpc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": process.env.SUPABASE_ANON_KEY!,
          "Authorization": `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          query,
        }),
      }
    );

    if (!db.ok) {
      throw new Error("Erro ao salvar");
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    return NextResponse.json(
      { error: "Erro no cadastro" },
      { status: 500 }
    );

  }

}
