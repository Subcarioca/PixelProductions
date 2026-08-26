import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Projetos entregues e conceitos autorais da Pixel Productions.",
};

const ENTREGUES = [
  {
    nome: "Craque do Pão",
    segmento: "Padaria, confeitaria e restaurante",
    ano: "2026",
    resumo:
      "Landing page para uma padaria tradicional do Rio com duas unidades. Fotos reais dos produtos, integração direta com WhatsApp e iFood de cada loja.",
    stack: "Next.js · Tailwind · Framer Motion",
    url: "https://craquedopao.vercel.app",
    de: "#FF7A1A",
    para: "#FFD60A",
  },
  {
    nome: "Casas Thereza",
    segmento: "Produtos naturais do Nordeste",
    ano: "2026",
    resumo:
      "Página de conversão para uma loja de grãos, ervas, temperos e bacalhau. Foco total em levar o visitante ao pedido pelo WhatsApp.",
    stack: "Next.js · Tailwind · Framer Motion",
    url: null,
    de: "#A3E635",
    para: "#22D3EE",
  },
];

const CONCEITOS = [
  { nome: "Barbearia", stack: "Next.js + GSAP", cor: "#FFD60A" },
  { nome: "Odontologia", stack: "Astro + View Transitions", cor: "#22D3EE" },
  { nome: "Veterinária", stack: "Nuxt 3 + Motion One", cor: "#A3E635" },
  { nome: "Restaurante", stack: "SvelteKit + Lenis", cor: "#FF7A1A" },
  { nome: "Imobiliária", stack: "Next.js + Three.js", cor: "#A855F7" },
  { nome: "Estética Automotiva", stack: "Remix + Spline", cor: "#FF2D95" },
  { nome: "Advocacia", stack: "Laravel + Livewire", cor: "#22C55E" },
];

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfólio"
        titulo="Trabalhos entregues e conceitos"
        texto="Projetos no ar para clientes reais, e uma coleção de conceitos autorais que mostram o que conseguimos fazer em cada segmento."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-lima">No ar</h2>

        <div className="mt-8 flex flex-col gap-6">
          {ENTREGUES.map((p) => (
            <article
              key={p.nome}
              className="grid grid-cols-1 overflow-hidden rounded-sm border border-linha md:grid-cols-[1fr_1.2fr]"
            >
              <div
                className="relative min-h-56 p-8"
                style={{ background: `linear-gradient(150deg, ${p.de}, ${p.para})` }}
              >
                <div className="absolute inset-0 bg-navy/55" />
                <div className="relative flex h-full flex-col justify-end">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">{p.ano}</p>
                  <h3 className="font-display mt-2 text-3xl font-bold text-white">{p.nome}</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-navy-alto/40 p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-nevoa/40">
                  {p.segmento}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-nevoa/65">{p.resumo}</p>
                <p className="mt-5 font-mono text-sm text-cyan">{p.stack}</p>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 self-start font-mono text-sm text-lima"
                  >
                    Visitar site
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <p className="mt-6 font-mono text-sm text-nevoa/35">Aguardando publicação do cliente</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-linha bg-void">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-lima">Conceitos autorais</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-nevoa/55">
            Sete landing pages completas, uma por segmento, cada uma com direção
            de arte e tecnologia próprias. Marcas fictícias, criadas para
            demonstrar possibilidades.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-3">
            {CONCEITOS.map((c) => (
              <div key={c.nome} className="group bg-navy p-7 transition-colors hover:bg-navy-alto">
                <span className="block h-1 w-10 rounded-sm" style={{ background: c.cor }} />
                <h3 className="font-display mt-5 text-lg font-bold">{c.nome}</h3>
                <p className="mt-2 font-mono text-sm text-nevoa/45">{c.stack}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contato"
            className="group mt-10 inline-flex items-center gap-2 font-mono text-sm text-cyan"
          >
            Quero um assim para o meu negócio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
