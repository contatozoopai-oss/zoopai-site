import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name;
    const email = body.email;
    const password = body.password;

    if (!name || !email || !password) {
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
          password
        }
      ]);

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        { error: "Erro ao salvar no banco" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (err) {
    console.error("API error:", err);

    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
