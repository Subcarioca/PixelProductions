"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const TIPOS = ["Landing page", "Site institucional", "Webapp / I.A.", "Ainda não sei"];

export default function ContatoForm() {
  const [tipo, setTipo] = useState(TIPOS[0]);
  const [enviado, setEnviado] = useState(false);

  /* Sem back-end ainda: abre o cliente de e-mail com tudo preenchido.
     Para receber no site, ligue a um serviço de formulário e troque este handler. */
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const corpo = [
      `Nome: ${dados.get("nome")}`,
      `Contato: ${dados.get("contato")}`,
      `Negócio: ${dados.get("negocio")}`,
      `Tipo de projeto: ${tipo}`,
      "",
      `${dados.get("mensagem")}`,
    ].join("\n");

    window.location.href = `mailto:?subject=${encodeURIComponent(
      "Orçamento — Pixel Productions"
    )}&body=${encodeURIComponent(corpo)}`;
    setEnviado(true);
  }

  const campo =
    "w-full rounded-sm border border-linha bg-navy-alto/50 px-4 py-3 text-[15px] text-nevoa placeholder:text-nevoa/30 outline-none transition-colors focus:border-cyan";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="font-mono text-xs uppercase tracking-wider text-nevoa/50">
            Seu nome
          </label>
          <input id="nome" name="nome" required className={`${campo} mt-2`} placeholder="Como te chamamos" />
        </div>
        <div>
          <label htmlFor="contato" className="font-mono text-xs uppercase tracking-wider text-nevoa/50">
            E-mail ou WhatsApp
          </label>
          <input id="contato" name="contato" required className={`${campo} mt-2`} placeholder="Para retornarmos" />
        </div>
      </div>

      <div>
        <label htmlFor="negocio" className="font-mono text-xs uppercase tracking-wider text-nevoa/50">
          Seu negócio
        </label>
        <input id="negocio" name="negocio" className={`${campo} mt-2`} placeholder="Nome e segmento" />
      </div>

      <fieldset>
        <legend className="font-mono text-xs uppercase tracking-wider text-nevoa/50">
          Tipo de projeto
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TIPOS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTipo(t)}
              aria-pressed={tipo === t}
              className={`rounded-sm border px-4 py-2.5 font-mono text-sm transition-colors ${
                tipo === t
                  ? "border-cyan bg-cyan/10 text-cyan"
                  : "border-linha text-nevoa/55 hover:border-nevoa/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="mensagem" className="font-mono text-xs uppercase tracking-wider text-nevoa/50">
          O que você precisa
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          className={`${campo} mt-2 resize-y`}
          placeholder="Conte o que o site precisa resolver, se já tem logo e fotos, e se há prazo."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 self-start rounded-sm bg-cyan px-8 py-4 font-display font-bold text-navy transition-transform hover:-translate-y-0.5"
      >
        Enviar pedido
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {enviado && (
        <p role="status" className="font-mono text-sm text-lima">
          Abrimos seu e-mail com a mensagem pronta — é só enviar.
        </p>
      )}
    </form>
  );
}
