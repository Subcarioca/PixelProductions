import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContatoForm from "@/components/ContatoForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Peça um orçamento para seu site, webapp ou automação com I.A.",
};

export default function Contato() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        titulo="Conta pra gente o que você precisa"
        texto="Responda em um minuto e retornamos com as próximas perguntas — ou já com uma proposta, se o escopo estiver claro."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
          <ContatoForm />

          <aside className="flex flex-col gap-8">
            <div className="rounded-sm border border-linha bg-navy-alto/40 p-8">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-lima">
                Falar direto
              </h2>
              <ul className="mt-6 flex flex-col gap-5">
                <li className="flex gap-4">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan" strokeWidth={1.8} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-nevoa/40">WhatsApp</p>
                    <a
                      href={SITE.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[15px] text-nevoa/85 transition-colors hover:text-cyan"
                    >
                      {SITE.whatsapp}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan" strokeWidth={1.8} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-nevoa/40">E-mail</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 block text-[15px] text-nevoa/85 transition-colors hover:text-cyan"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan" strokeWidth={1.8} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-nevoa/40">Onde estamos</p>
                    <p className="mt-1 text-[15px] text-nevoa/85">{SITE.cidade}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-linha p-8">
              <h2 className="font-display text-lg font-bold">O que ajuda saber de cara</h2>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-nevoa/55">
                <li>· Qual é o seu negócio e quem é seu cliente</li>
                <li>· Se você já tem site, logo ou fotos</li>
                <li>· Se tem prazo ou data específica</li>
                <li>· Qual faixa de investimento você considera</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
