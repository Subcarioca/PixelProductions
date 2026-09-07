"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cpu,
  LayoutTemplate,
  Terminal,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import PixelEmblem from "./PixelEmblem";

type TabTipo = "sites" | "webapps" | "ia";

export default function Hero() {
  const [tabAtiva, setTabAtiva] = useState<TabTipo>("sites");

  return (
    <section className="studio-brick-pattern relative overflow-hidden border-b border-linha pt-8 pb-16 lg:pb-24">
      {/* Luzes neon atmosféricas do estúdio */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-10 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-cyan/15 blur-[140px]" />
        <div className="absolute right-10 top-20 h-[500px] w-[500px] rounded-full bg-magenta/12 blur-[150px]" />
        <div className="absolute bottom-10 left-10 h-[380px] w-[380px] rounded-full bg-lima/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Barra superior de status do estúdio estilo terminal */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-sm border border-linha bg-navy-alto/60 px-4 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-3 font-mono text-xs text-nevoa/75">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lima opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lima"></span>
            </span>
            <span className="text-lima font-bold">PIXEL STUDIO LIVE</span>
            <span className="text-linha hidden sm:inline">|</span>
            <span className="text-nevoa/50 hidden sm:inline">PROJETOS ATIVOS & AGENDAMENTO 2026</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="text-cyan flex items-center gap-1.5">
              <span className="text-nevoa/40">$</span> core.vitals: <span className="font-bold text-lima">100/100</span>
            </span>
            <span className="text-nevoa/40 hidden md:inline">·</span>
            <span className="text-magenta hidden md:inline flex items-center gap-1">
              <Cpu className="h-3.5 w-3.5" /> GEMINI AI INTEGRATED
            </span>
          </div>
        </div>

        {/* Grade principal: Apresentação da Marca + Emblema Voxel 3D & Estação Dev */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Coluna Esquerda: Texto de Impacto e Proposta */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-sm border border-cyan/40 bg-cyan/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-cyan"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>ESTÚDIO DE TECNOLOGIA & DESIGN</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-balance mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl text-white"
            >
              Seu negócio merece mais que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-nevoa to-lima">
                um perfil no Instagram.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-nevoa/70"
            >
              Construímos <strong className="text-cyan font-medium">sites de alta conversão</strong>,{" "}
              <strong className="text-lima font-medium">webapps sob medida</strong> e{" "}
              <strong className="text-magenta font-medium">automações com I.A.</strong> Tecnologia
              moderna, carregamento instantâneo no celular e domínio próprio no seu nome.
            </motion.p>

            {/* Três Frentes Rápidas com ícones da identidade */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2.5 font-mono text-xs"
            >
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-cyan/30 bg-navy-alto/80 px-3 py-1.5 text-cyan">
                <LayoutTemplate className="h-3.5 w-3.5" /> SITES INSTITUCIONAIS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-lima/30 bg-navy-alto/80 px-3 py-1.5 text-lima">
                <Code2 className="h-3.5 w-3.5" /> WEBAPPS & SISTEMAS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-magenta/30 bg-navy-alto/80 px-3 py-1.5 text-magenta">
                <Cpu className="h-3.5 w-3.5" /> AGENTES & AUTOMAÇÃO I.A.
              </span>
            </motion.div>

            {/* Botões de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row"
            >
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-cyan px-8 py-4 font-display font-bold text-navy glow-cyan transition-all hover:bg-cyan/90 hover:-translate-y-0.5"
              >
                Pedir orçamento fechado
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-linha bg-navy-alto/50 px-7 py-4 font-display font-medium text-nevoa transition-all hover:border-cyan hover:text-cyan hover:bg-navy-alto"
              >
                Ver projetos entregues
                <ExternalLink className="h-4 w-4 text-nevoa/50" />
              </Link>
            </motion.div>

            {/* Garantias rápidas */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-nevoa/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-lima" /> Escopo e valor por escrito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan" /> Código e domínio 100% seus
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-magenta" /> Suporte humanizado
              </span>
            </div>
          </div>

          {/* Coluna Direita: O Emblema Voxel 3D com a Estação de Trabalho do Estúdio */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* O Emblema Voxel 3D oficial exatamente como na foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col items-center w-full max-w-[480px]"
            >
              <PixelEmblem size={440} showText={true} showReflection={true} />
            </motion.div>

            {/* Estação de Desenvolvimento / Simulador Interativo de Projetos */}
            <div className="mt-6 w-full overflow-hidden rounded-sm border border-linha bg-void/90 shadow-2xl backdrop-blur-xl">
              {/* Barra superior de monitor com abas */}
              <div className="flex items-center justify-between border-b border-linha bg-navy-alto/80 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-magenta/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amarelo/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lima/80" />
                  <span className="ml-2 font-mono text-[11px] text-nevoa/40">
                    pixel-studio // workstation
                  </span>
                </div>

                {/* Seletores de aba: Sites | Webapps | I.A. */}
                <div className="flex gap-1">
                  {(
                    [
                      { id: "sites", label: "01. Sites", cor: "text-cyan" },
                      { id: "webapps", label: "02. Webapps", cor: "text-lima" },
                      { id: "ia", label: "03. I.A.", cor: "text-magenta" },
                    ] as const
                  ).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTabAtiva(t.id)}
                      className={`rounded-xs px-2.5 py-1 font-mono text-xs transition-colors ${
                        tabAtiva === t.id
                          ? "bg-linha/80 text-white font-semibold"
                          : "text-nevoa/50 hover:text-nevoa"
                      }`}
                    >
                      <span className={t.cor}>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Conteúdo Dinâmico do Monitor da Estação */}
              <div className="p-4 sm:p-5 font-mono text-xs">
                <AnimatePresence mode="wait">
                  {tabAtiva === "sites" && (
                    <motion.div
                      key="sites"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-nevoa/45">
                        <span>{"// STACK: Next.js 16 + Tailwind CSS + SEO Local"}</span>
                        <span className="text-cyan">STATUS: READY_TO_DEPLOY</span>
                      </div>
                      <div className="rounded-sm border border-linha/80 bg-navy p-3 text-[13px] leading-relaxed">
                        <p className="text-nevoa/60">
                          <span className="text-magenta">const</span> site ={" "}
                          <span className="text-cyan">createProductionSite</span>({"{"}
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          dominio: <span className="text-amarelo">&quot;seunegocio.com.br&quot;</span>,
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          velocidadeMobile: <span className="text-lima">&quot;99+ Core Web Vitals&quot;</span>,
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          whatsappLead: <span className="text-cyan">true</span>,
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          indexacaoGoogle: <span className="text-magenta">autoGeneratedSchema()</span>,
                        </p>
                        <p className="text-nevoa/60">{"});"}</p>
                      </div>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-nevoa/40">
                        <span>Páginas institucionais ou landing pages de alta conversão</span>
                        <Link href="/servicos" className="text-cyan hover:underline">
                          Ver detalhes do pacote →
                        </Link>
                      </div>
                    </motion.div>
                  )}

                  {tabAtiva === "webapps" && (
                    <motion.div
                      key="webapps"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-nevoa/45">
                        <span>{"// OPERAÇÃO SOB MEDIDA: Agendamento, Painel e CRM"}</span>
                        <span className="text-lima">STATUS: LIVE_DATABASE</span>
                      </div>
                      <div className="rounded-sm border border-linha/80 bg-navy p-3 text-[13px] leading-relaxed">
                        <p className="text-nevoa/60">
                          <span className="text-magenta">interface</span>{" "}
                          <span className="text-lima">OperacaoEmpresa</span> {"{"}
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          pedidos: <span className="text-cyan">PainelDeGestaoEmTempoReal</span>;
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          catalogo: <span className="text-amarelo">SyncComEstoque</span>;
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          clienteArea: <span className="text-magenta">LoginSeguroSemSenha</span>;
                        </p>
                        <p className="text-nevoa/60">{"}"}</p>
                      </div>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-nevoa/40">
                        <span>Substitua planilhas confusas por um software próprio</span>
                        <Link href="/servicos" className="text-lima hover:underline">
                          Ver detalhes do pacote →
                        </Link>
                      </div>
                    </motion.div>
                  )}

                  {tabAtiva === "ia" && (
                    <motion.div
                      key="ia"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-nevoa/45">
                        <span>{"// AUTOMAÇÃO: Atendimento 24/7 com Gemini & WhatsApp"}</span>
                        <span className="text-magenta">STATUS: MODEL_CONNECTED</span>
                      </div>
                      <div className="rounded-sm border border-linha/80 bg-navy p-3 text-[13px] leading-relaxed">
                        <p className="text-nevoa/60">
                          <span className="text-magenta">const</span> agente ={" "}
                          <span className="text-magenta">new PixelAIAgent</span>({"{"}
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          treinamento: <span className="text-amarelo">&quot;Cardápio, FAQs e Políticas da sua empresa&quot;</span>,
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          canal: <span className="text-lima">&quot;WhatsApp Webhook Direct&quot;</span>,
                        </p>
                        <p className="pl-4 text-nevoa/80">
                          qualificarLead: <span className="text-cyan">async (msg) =&gt; fecharVenda(msg)</span>,
                        </p>
                        <p className="text-nevoa/60">{"});"}</p>
                      </div>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-nevoa/40">
                        <span>Zero mensagens sem resposta para o seu cliente</span>
                        <Link href="/servicos" className="text-magenta hover:underline">
                          Ver detalhes do pacote →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
