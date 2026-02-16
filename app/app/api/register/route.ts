import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;

    const query = `
      INSERT INTO users (name, email, password)
      VALUES ('${name}', '${email}', '${password}')
    `;

    const res = await fetch(process.env.DATABASE_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/sql",
      },
      body: query,
    });

    if (!res.ok) {
      throw new Error("Erro ao inserir no banco");
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao criar conta" },
      { status: 500 }
    );
  }
}
