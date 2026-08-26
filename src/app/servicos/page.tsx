import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Sites institucionais, landing pages, webapps sob medida e automações com inteligência artificial.",
};

const PACOTES = [
  {
    cor: "#22D3EE",
    nome: "Landing Page",
    resumo: "Uma página, um objetivo: converter quem chega em cliente.",
    ideal: "Campanhas, link da bio, lançamento de produto ou serviço.",
    itens: [
      "Página única com design exclusivo",
      "Otimizada para celular",
      "Botão de WhatsApp integrado",
      "Formulário de contato",
      "Publicação e domínio configurados",
    ],
  },
  {
    cor: "#A3E635",
    nome: "Site Institucional",
    resumo: "Várias páginas para quem precisa explicar o negócio inteiro.",
    ideal: "Clínicas, escritórios, escolas, empresas com mais de um serviço.",
    itens: [
      "Home, Sobre, Serviços, Contato e mais",
      "Estrutura pensada para SEO",
      "Painel para você editar textos",
      "Integração com Google Meu Negócio",
      "Blog opcional",
    ],
    destaque: true,
  },
  {
    cor: "#FF2D95",
    nome: "Webapp & I.A.",
    resumo: "Sistema sob medida para a operação do seu negócio.",
    ideal: "Agendamento, catálogo, painel de pedidos, área do cliente.",
    itens: [
      "Levantamento de requisitos",
      "Área administrativa",
      "Automação de tarefas repetitivas",
      "Atendimento com I.A. (opcional)",
      "Treinamento da equipe",
    ],
  },
];

const EXTRAS = [
  { t: "Manutenção mensal", d: "Atualizações, backup, monitoramento e pequenos ajustes de conteúdo." },
  { t: "SEO e conteúdo", d: "Pesquisa de palavras-chave, textos otimizados e acompanhamento de posição." },
  { t: "Identidade visual", d: "Logo, paleta e aplicação da marca, quando o negócio ainda não tem." },
  { t: "Migração", d: "Trazemos seu site atual para uma base moderna, sem perder o que já funciona." },
];

export default function Servicos() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        titulo="O que a gente constrói"
        texto="Escolha pelo problema que você quer resolver, não pela tecnologia. A parte técnica é com a gente."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PACOTES.map((p) => (
            <div
              key={p.nome}
              className={`flex flex-col rounded-sm border bg-navy-alto/40 p-8 ${
                p.destaque ? "border-lima/50" : "border-linha"
              }`}
            >
              {p.destaque && (
                <span className="mb-5 self-start rounded-sm bg-lima px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy">
                  Mais pedido
                </span>
              )}
              <span className="h-1 w-12 rounded-sm" style={{ background: p.cor }} />
              <h2 className="font-display mt-5 text-2xl font-bold">{p.nome}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-nevoa/60">{p.resumo}</p>

              <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-nevoa/35">
                Ideal para
              </p>
              <p className="mt-2 text-sm leading-relaxed text-nevoa/55">{p.ideal}</p>

              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {p.itens.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-nevoa/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: p.cor }} strokeWidth={2.4} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contato"
                className="group mt-8 inline-flex items-center gap-2 font-mono text-sm"
                style={{ color: p.cor }}
              >
                Pedir orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-sm text-nevoa/40">
          Valores sob orçamento — dependem do escopo, do número de páginas e das
          integrações. Você recebe a proposta fechada antes de começarmos.
        </p>
      </section>

      <section className="border-t border-linha bg-void">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Também cuidamos de
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-linha bg-linha sm:grid-cols-2">
            {EXTRAS.map((e) => (
              <div key={e.t} className="bg-navy p-7">
                <h3 className="font-display text-lg font-bold text-cyan">{e.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-nevoa/55">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
