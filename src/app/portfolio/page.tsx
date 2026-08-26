import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Projetos entregues e conceitos autorais da Pixel Productions.",
};

const ENTREGUES = [
  {
    nome: "CariocaTech",
    segmento: "E-commerce B2B de computadores",
    ano: "2026",
    resumo:
      "Loja de setups e peças organizada por caso de uso, não por especificação técnica — o cliente escolhe pelo que sua empresa faz. Pagamento via Pix, boleto ou cartão, nota fiscal para CNPJ.",
    stack: "Next.js · Tailwind",
    url: "https://cariocatech.com",
    preview: "/portfolio/live-cariocatech.jpg",
  },
  {
    nome: "Ortus Pixel",
    segmento: "Portal de notícias nerd",
    ano: "2026",
    resumo:
      "Portal de notícias sobre cinema, séries e games, com ranking ao vivo por repercussão e cobertura publicada em tempo real.",
    stack: "Next.js · Tailwind",
    url: "https://ortuspixel.com",
    preview: "/portfolio/live-ortuspixel.jpg",
  },
];

const CONCEITOS = [
  { nome: "Barbearia", stack: "Next.js + GSAP", preview: "/portfolio/landing-barbearia.jpg" },
  { nome: "Odontologia", stack: "Astro + View Transitions", preview: "/portfolio/landing-odontologia.jpg" },
  { nome: "Veterinária", stack: "Nuxt 3 + Motion One", preview: "/portfolio/landing-veterinaria.jpg" },
  { nome: "Restaurante", stack: "SvelteKit + Lenis", preview: "/portfolio/landing-restaurante.jpg" },
  { nome: "Imobiliária", stack: "Next.js + Three.js", preview: "/portfolio/landing-imobiliaria.jpg" },
  { nome: "Estética Automotiva", stack: "Remix + Spline", preview: "/portfolio/landing-automotiva.jpg" },
  { nome: "Advocacia", stack: "Laravel + Livewire", preview: "/portfolio/landing-advocacia.jpg" },
];

const INSTITUCIONAIS = [
  {
    nome: "Odonto Aurora",
    segmento: "Clínica odontológica",
    paginas: "Início · A clínica · Tratamentos · Contato",
    preview: "/portfolio/inst-odonto.jpg",
  },
  {
    nome: "Vasconcelos & Braga",
    segmento: "Escritório de advocacia",
    paginas: "Início · O escritório · Atuação · Contato",
    preview: "/portfolio/inst-advocacia.jpg",
  },
  {
    nome: "Colégio Terra Nova",
    segmento: "Educação básica",
    paginas: "Início · A escola · Segmentos · Matrículas",
    preview: "/portfolio/inst-escola.jpg",
  },
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

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ENTREGUES.map((p) => (
            <article key={p.nome} className="overflow-hidden rounded-sm border border-linha">
              <div className="relative aspect-[16/10] w-full border-b border-linha bg-navy-alto">
                <Image
                  src={p.preview}
                  alt={`Prévia do site ${p.nome}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-navy-alto/40 p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold">{p.nome}</h3>
                  <span className="font-mono text-xs text-nevoa/40">{p.ano}</span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-nevoa/40">
                  {p.segmento}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-nevoa/65">{p.resumo}</p>
                <p className="mt-5 font-mono text-sm text-cyan">{p.stack}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 self-start font-mono text-sm text-lima"
                >
                  Visitar site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-linha bg-void">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-lima">
            Conceitos — landing pages
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-nevoa/55">
            Sete landing pages completas, uma por segmento, cada uma com direção
            de arte e tecnologia próprias. Marcas fictícias, criadas para
            demonstrar possibilidades.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONCEITOS.map((c) => (
              <div key={c.nome} className="group overflow-hidden rounded-sm border border-linha">
                <div className="relative aspect-[16/10] w-full border-b border-linha bg-void">
                  <Image
                    src={c.preview}
                    alt={`Prévia do conceito ${c.nome}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="bg-navy p-6">
                  <h3 className="font-display text-lg font-bold">{c.nome}</h3>
                  <p className="mt-2 font-mono text-sm text-nevoa/45">{c.stack}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-linha bg-void">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-lima">
            Conceitos — sites institucionais
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-nevoa/55">
            Diferente da landing page, o institucional tem navegação própria e
            várias páginas — para quem precisa explicar o negócio inteiro, não
            só converter numa ação. Marcas fictícias, quatro páginas cada.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {INSTITUCIONAIS.map((c) => (
              <div key={c.nome} className="group overflow-hidden rounded-sm border border-linha">
                <div className="relative aspect-[16/10] w-full border-b border-linha bg-void">
                  <Image
                    src={c.preview}
                    alt={`Prévia do site institucional ${c.nome}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-navy p-6">
                  <h3 className="font-display text-lg font-bold">{c.nome}</h3>
                  <p className="mt-2 text-sm text-nevoa/55">{c.segmento}</p>
                  <p className="mt-3 font-mono text-xs text-nevoa/40">{c.paginas}</p>
                </div>
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
