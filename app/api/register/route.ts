const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Erro ao criar conta");
      return;
    }

    alert("Conta criada com sucesso!");

  } catch (error) {
    console.error(error);
    alert("Erro de conexão com servidor");
  }
};
