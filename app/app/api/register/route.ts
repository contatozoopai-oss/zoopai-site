import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // validação básica
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // inserir no Supabase
    const { error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        { error: "Erro ao salvar usuário" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Usuário criado com sucesso",
    });

  } catch (error) {
    console.error("Server error:", error);

    return NextResponse.json(
      { error: "Erro ao criar conta" },
      { status: 500 }
    );
  }
}
