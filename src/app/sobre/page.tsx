import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PixelEmblem from "@/components/PixelEmblem";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Quem é a Pixel Productions: um estúdio de sites, webapps e I.A. que fala a língua do cliente.",
};

const PRINCIPIOS = [
  {
    cor: "#22D3EE",
    t: "Preço fechado antes de começar",
    d: "Você aprova escopo, prazo e valor por escrito. Não existe surpresa no meio do caminho nem cobrança extra por algo que estava combinado.",
  },
  {
    cor: "#A3E635",
    t: "O site é seu, não nosso",
    d: "Código, domínio e contas ficam no seu nome. Se um dia quiser trocar de fornecedor, você leva tudo — sem refém de plataforma.",
  },
  {
    cor: "#FF2D95",
    t: "Sem jargão",
    d: "Explicamos o que estamos fazendo em português. Você não precisa entender de tecnologia para tomar boas decisões sobre o próprio negócio.",
  },
  {
    cor: "#FF7A1A",
    t: "Feito para o celular primeiro",
    d: "A maioria dos seus clientes vai abrir o site no telefone. É lá que a gente testa antes de considerar qualquer coisa pronta.",
  },
];

export default function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        titulo="Um estúdio pequeno, com atenção grande"
        texto="A Pixel Productions nasceu para atender negócios que precisam de presença digital de verdade — e que cansaram de template genérico."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-nevoa/65">
            <p>
              A maior parte dos negócios locais vive dentro de uma rede social.
              Funciona — até o alcance cair, a conta ser bloqueada ou o cliente
              não conseguir achar o horário de funcionamento.
            </p>
            <p>
              A gente resolve isso construindo o que é seu: um endereço próprio,
              rápido, que aparece no Google e não depende de algoritmo nenhum
              para existir.
            </p>
            <p>
              Trabalhamos com tecnologia atual — a mesma base usada por empresas
              grandes — porque site lento e quebrado no celular custa cliente. E
              porque um negócio sério merece parecer sério na internet.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-center p-6 rounded-sm border border-linha bg-navy-alto/60">
              <PixelEmblem size={240} showText={false} showReflection={false} />
            </div>

            <div className="rounded-sm border border-linha bg-navy-alto/40 p-8">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-lima">Como trabalhamos</h2>
              <dl className="mt-6 flex flex-col gap-5">
                {[
                  ["Atendimento", "Direto com quem faz o projeto"],
                  ["Formato", "Remoto, para todo o Brasil"],
                  ["Entrega", "Site publicado e domínio configurado"],
                  ["Depois", "Suporte e manutenção opcionais"],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-linha pb-5 last:border-0 last:pb-0">
                    <dt className="font-mono text-xs uppercase tracking-wider text-nevoa/40">{k}</dt>
                    <dd className="mt-1.5 text-[15px] text-nevoa/80">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-linha bg-void">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            No que a gente não abre mão
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {PRINCIPIOS.map((p) => (
              <div key={p.t}>
                <span className="block h-1 w-12 rounded-sm" style={{ background: p.cor }} />
                <h3 className="font-display mt-5 text-xl font-bold">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-nevoa/55">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-linha p-10 sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Vamos conversar sobre o seu projeto?
            </h2>
            <p className="mt-3 text-nevoa/55">Sem compromisso, sem enrolação.</p>
          </div>
          <Link
            href="/contato"
            className="group inline-flex shrink-0 items-center gap-2 rounded-sm bg-cyan px-8 py-4 font-display font-bold text-navy transition-transform hover:-translate-y-0.5"
          >
            Falar com a Pixel
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
