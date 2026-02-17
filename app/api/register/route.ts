import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name;
    const email = body.email;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
        },
      ]);

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Erro ao inserir usuário" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Usuário criado com sucesso" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}
