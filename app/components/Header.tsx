import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">

          <Image
            src="/zoopai-logo.png"
            alt="ZoopAI"
            width={170}
            height={170}
            className="object-contain hover:scale-105 transition"
            priority
          />

        </div>


        {/* MENU */}
        <nav className="hidden md:flex items-center gap-10 text-zinc-300 font-medium">

          <a
            href="#"
            className="hover:text-white transition"
          >
            Início
          </a>

          <a
            href="#solucoes"
            className="hover:text-white transition"
          >
            Soluções
          </a>

          <a
            href="https://wa.me/5567991234567"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg transition font-semibold"
          >
            Contato
          </a>

        </nav>

      </div>

    </header>
  );
}

