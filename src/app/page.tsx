import Link from "next/link";
import { ArrowRight, Code2, Cpu, LayoutTemplate } from "lucide-react";
import Hero from "@/components/Hero";

const SERVICOS = [
  {
    icone: LayoutTemplate,
    cor: "#22D3EE",
    titulo: "Sites",
    texto:
      "Institucionais e landing pages. Endereço próprio, rápido no celular e estruturado para o Google encontrar.",
  },
  {
    icone: Code2,
    cor: "#A3E635",
    titulo: "Webapps",
    texto:
      "Sistemas sob medida: agendamento, catálogo, painel de pedidos, área do cliente. O que sua operação precisa.",
  },
  {
    icone: Cpu,
    cor: "#FF2D95",
    titulo: "I.A.",
    texto:
      "Atendimento automatizado, geração de conteúdo e integrações que tiram tarefa repetitiva da sua equipe.",
  },
];

const PASSOS = [
  { n: "01", t: "Conversa", d: "Entendemos seu negócio, seu cliente e o que o site precisa resolver." },
  { n: "02", t: "Proposta", d: "Escopo, prazo e valor fechados por escrito antes de qualquer linha de código." },
  { n: "03", t: "Design", d: "Você aprova o visual antes da programação começar. Sem surpresa no final." },
  { n: "04", t: "No ar", d: "Publicamos, configuramos o domínio e ensinamos você a mexer no que for seu." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Faixa em movimento */}
      <div className="overflow-hidden border-b border-linha bg-void py-5">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10 pr-10" aria-hidden={dup === 1}>
              {["Sites institucionais", "Landing pages", "Webapps", "Automação com I.A.", "SEO", "Manutenção"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-nevoa/45">
                    {item}
                    <span className="text-lima">▪</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Serviços */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-lima">O que fazemos</p>
        <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Três frentes, um objetivo: seu negócio funcionando melhor na internet.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICOS.map((s) => (
            <div
              key={s.titulo}
              className="group rounded-sm border border-linha bg-navy-alto/40 p-8 transition-colors hover:border-cyan/40"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-sm"
                style={{ background: `${s.cor}1f`, color: s.cor }}
              >
                <s.icone className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="font-display mt-6 text-xl font-bold">{s.titulo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-nevoa/55">{s.texto}</p>
            </div>
          ))}
        </div>

        <Link
          href="/servicos"
          className="group mt-10 inline-flex items-center gap-2 font-mono text-sm text-cyan"
        >
          Ver todos os serviços
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      {/* Processo */}
      <section className="border-y border-linha bg-void">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-lima">Como funciona</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Do primeiro contato ao site no ar
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((p) => (
              <div key={p.n} className="bg-navy p-7">
                <span className="font-mono text-2xl font-bold text-cyan/40">{p.n}</span>
                <h3 className="font-display mt-4 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-nevoa/55">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="pixel-grid relative overflow-hidden rounded-sm border border-linha p-10 sm:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lima/15 blur-[110px]" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Conta pra gente o que você precisa.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-nevoa/60">
              A primeira conversa é sem compromisso — e você sai dela sabendo o
              escopo, o prazo e o valor.
            </p>
            <Link
              href="/contato"
              className="group mt-9 inline-flex items-center gap-2 rounded-sm bg-cyan px-8 py-4 font-display font-bold text-navy transition-transform hover:-translate-y-0.5"
            >
              Falar com a Pixel
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
