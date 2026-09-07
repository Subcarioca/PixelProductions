import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  LayoutTemplate,
  CheckCircle2,
} from "lucide-react";
import Hero from "@/components/Hero";
import PixelEmblem from "@/components/PixelEmblem";

const SERVICOS = [
  {
    tag: "01 // SITES",
    icone: LayoutTemplate,
    cor: "#22D3EE",
    corNome: "cyan",
    titulo: "Sites Institucionais & Landing Pages",
    texto:
      "Endereço próprio no seu domínio, carregamento instantâneo no celular e arquitetura 100% estruturada para o Google encontrar e indexar seu negócio.",
    entregas: [
      "Layout exclusivo no visual da sua marca",
      "Otimizado para mobile (Core Web Vitals 95+)",
      "Botão de WhatsApp e formulário de conversão",
      "Configuração de domínio e hospedagem de alta velocidade",
    ],
    badge: "ALTA CONVERSÃO",
  },
  {
    tag: "02 // WEBAPPS",
    icone: Code2,
    cor: "#A3E635",
    corNome: "lima",
    titulo: "Webapps & Sistemas Sob Medida",
    texto:
      "Sistemas pensados para a operação real da sua empresa: agendamento sem complicação, catálogo digital, painel de pedidos e área exclusiva do cliente.",
    entregas: [
      "Painel administrativo simples e seguro",
      "Banco de dados em tempo real",
      "Autenticação de clientes sem senhas difíceis",
      "Substituição de planilhas manuais por fluxos automáticos",
    ],
    badge: "OPERAÇÃO DIGITAL",
  },
  {
    tag: "03 // I.A.",
    icone: Cpu,
    cor: "#FF2D95",
    corNome: "magenta",
    titulo: "Automação & Agentes com I.A.",
    texto:
      "Atendimento automático inteligente no WhatsApp, qualificação de clientes em tempo real e rotinas que eliminam trabalho repetitivo da sua equipe.",
    entregas: [
      "Agente treinado com as informações da sua empresa",
      "Respostas 24 horas por dia sem deixar cliente esperando",
      "Integração direta com CRM, e-mail e planilhas",
      "Transição suave para atendimento humano quando necessário",
    ],
    badge: "INTELIGÊNCIA ARTIFICIAL",
  },
];

const PASSOS = [
  {
    n: "01",
    fase: "INIT",
    t: "Alinhamento de Escopo",
    d: "Conversamos para entender a realidade do seu negócio, quem é seu cliente e qual resultado você precisa alcançar.",
    tempo: "Dia 1",
  },
  {
    n: "02",
    fase: "SPECS",
    t: "Proposta Fechada",
    d: "Escopo técnico, cronograma de entrega e valor combinados por escrito antes de qualquer linha de código.",
    tempo: "Dia 2-3",
  },
  {
    n: "03",
    fase: "BUILD",
    t: "Design & Desenvolvimento",
    d: "Você acompanha e aprova o visual e a navegação. Tudo construído com código limpo, rápido e seguro.",
    tempo: "Etapa de Criação",
  },
  {
    n: "04",
    fase: "DEPLOY",
    t: "No Ar & Domínio Seu",
    d: "Configuramos seu domínio, colocamos no ar com certificado SSL e ensinamos você a gerenciar o que for seu.",
    tempo: "Entrega Final",
  },
];

const STACK_TECNOLOGICA = [
  { nome: "Next.js 16", papel: "Renderização ultrarrápida & SEO" },
  { nome: "TypeScript", papel: "Código robusto sem erros em produção" },
  { nome: "Tailwind CSS", papel: "Design fluido e responsivo no celular" },
  { nome: "Google Gemini I.A.", papel: "Modelos inteligentes de linguagem" },
  { nome: "Framer Motion", papel: "Microinterações suaves e elegantes" },
  { nome: "Cloud Architecture", papel: "Hospedagem estável com 99.9% uptime" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Faixa Marquee Técnica com Estilo Cyber */}
      <div className="overflow-hidden border-b border-linha bg-void/90 py-4.5 backdrop-blur-md">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 pr-8" aria-hidden={dup === 1}>
              {[
                "SITES INSTITUCIONAIS",
                "LANDING PAGES",
                "WEBAPPS SOB MEDIDA",
                "AUTOMAÇÃO COM I.A.",
                "INTEGRAÇÃO WHATSAPP",
                "SEO DE ALTA PERFORMANCE",
                "NEXT.JS 16 & TAILWIND",
                "CODIGO & DOMÍNIO DO CLIENTE",
              ].map((item, idx) => (
                <span
                  key={item}
                  className="flex items-center gap-8 whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.2em] text-nevoa/60"
                >
                  {item}
                  <span
                    className={
                      idx % 3 === 0
                        ? "text-cyan text-glow-cyan"
                        : idx % 3 === 1
                        ? "text-lima text-glow-lima"
                        : "text-magenta text-glow-magenta"
                    }
                  >
                    ▪
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Seção dos Três Pilares: Sites, Webapps, I.A. */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-lima">
              <span className="text-cyan">$</span> SOLUÇÕES DO ESTÚDIO
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Três frentes de tecnologia para acelerar sua empresa
            </h2>
          </div>
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan hover:underline"
          >
            Comparar pacotes e escopos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid de Serviços com Cartões Wireframe inspirados nos monitores da foto */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICOS.map((s) => (
            <div
              key={s.titulo}
              className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-linha bg-navy-alto/40 p-7 transition-all duration-300 hover:border-cyan/50 hover:bg-navy-alto/70 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]"
            >
              {/* Linha de acento neon no topo */}
              <div
                className="absolute left-0 top-0 h-[3px] w-full transition-all duration-300 group-hover:h-[4px]"
                style={{ background: s.cor, boxShadow: `0 0 16px ${s.cor}` }}
              />

              <div>
                {/* Header do Cartão estilo blueprint */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-nevoa/40">
                    {s.tag}
                  </span>
                  <span
                    className="rounded-xs px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: `${s.cor}18`, color: s.cor }}
                  >
                    {s.badge}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-sm"
                    style={{ background: `${s.cor}1f`, color: s.cor }}
                  >
                    <s.icone className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white leading-tight">
                    {s.titulo}
                  </h3>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-nevoa/65">{s.texto}</p>

                {/* Lista de Entregas com Ícones de Checagem */}
                <ul className="mt-6 space-y-2.5 border-t border-linha/60 pt-5">
                  {s.entregas.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-nevoa/80">
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        style={{ color: s.cor }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-linha/40 flex items-center justify-between">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                  style={{ color: s.cor }}
                >
                  Solicitar este projeto
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="font-mono text-[11px] text-nevoa/35">ESC. FECHADO</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Arsenal Tecnológico do Estúdio */}
      <section className="border-y border-linha bg-void/60 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">
                Tecnologia de ponta
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A mesma base de software utilizada pelas maiores empresas
              </h2>
            </div>
            <p className="font-mono text-xs text-nevoa/45 max-w-md">
              Não usamos criadores de sites lentos ou templates travados. Cada projeto é código limpo,
              responsivo e com performance máxima.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STACK_TECNOLOGICA.map((item) => (
              <div
                key={item.nome}
                className="rounded-sm border border-linha bg-navy p-4 transition-colors hover:border-cyan/40"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  <span className="font-mono text-xs font-bold text-white">{item.nome}</span>
                </div>
                <p className="mt-2 text-[11px] text-nevoa/50 leading-normal">{item.papel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Transparente: Como Trabalhamos */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-lima">
            Método de Entrega
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Do primeiro contato até o site no ar sem surpresas
          </h2>
          <p className="mt-4 text-base text-nevoa/65">
            Você sempre sabe a etapa em que o projeto está, quem está fazendo e quando vai para o ar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((p) => (
            <div
              key={p.n}
              className="group relative bg-navy p-8 transition-colors hover:bg-navy-alto/70"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-bold text-cyan/30 group-hover:text-cyan transition-colors">
                  {p.n}
                </span>
                <span className="rounded-xs border border-linha bg-navy-alto px-2 py-0.5 font-mono text-[10px] text-lima">
                  {p.fase}
                </span>
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-white">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nevoa/60">{p.d}</p>
              <div className="mt-6 flex items-center gap-2 font-mono text-[11px] text-nevoa/40">
                <span className="h-1 w-1 rounded-full bg-nevoa/40" />
                <span>{p.tempo}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada Final / Banner estilo Estação Dev com o Emblema Oficial */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
        <div className="studio-brick-pattern relative overflow-hidden rounded-sm border border-linha p-8 sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan/15 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-magenta/15 blur-[120px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-lima uppercase tracking-widest">
                <span>[ PRÓXIMO PASSO ]</span>
              </div>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Vamos colocar seu negócio no ar com tecnologia de verdade?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-nevoa/70">
                A primeira conversa é sem compromisso. Avaliamos o que você precisa e entregamos uma
                proposta fechada com escopo, prazo e investimento transparente.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contato"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-cyan px-8 py-4 font-display font-bold text-navy glow-cyan transition-all hover:bg-cyan/90 hover:-translate-y-0.5"
                >
                  Falar direto com a Pixel
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=5521993346860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-linha bg-navy-alto/60 px-7 py-4 font-display font-medium text-nevoa transition-colors hover:border-lima hover:text-lima"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-4 rounded-sm border border-linha/80 bg-navy/80 backdrop-blur-md shadow-2xl">
                <PixelEmblem size={220} showText={false} showReflection={false} />
                <p className="text-center font-mono text-xs font-bold text-cyan mt-2">
                  PIXEL PRODUCTIONS
                </p>
                <p className="text-center font-mono text-[10px] text-nevoa/40 mt-0.5">
                  RIO DE JANEIRO · BRASIL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
