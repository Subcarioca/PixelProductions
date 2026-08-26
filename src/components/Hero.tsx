"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CORES } from "@/lib/site";

/* Chuva de blocos neon — a identidade em movimento, sem imagem externa */
/* Posicionados fora da coluna de texto (à direita e nas bordas)
   para não competirem com o título nem cobrirem os botões. */
const BLOCOS = [
  { x: "68%", y: "14%", s: 26, d: 0 },
  { x: "80%", y: "40%", s: 18, d: 0.6 },
  { x: "90%", y: "22%", s: 14, d: 1.2 },
  { x: "74%", y: "66%", s: 22, d: 0.3 },
  { x: "93%", y: "56%", s: 30, d: 0.9 },
  { x: "63%", y: "86%", s: 16, d: 1.5 },
  { x: "85%", y: "82%", s: 18, d: 1.8 },
  { x: "5%", y: "90%", s: 12, d: 2.1 },
];

export default function Hero() {
  return (
    <section className="pixel-grid relative overflow-hidden border-b border-linha">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan/15 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-magenta/15 blur-[130px]" />
        {BLOCOS.map((b, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-[2px]"
            style={{
              left: b.x,
              top: b.y,
              width: b.s,
              height: b.s,
              background: CORES[i % CORES.length],
              boxShadow: `0 0 20px ${CORES[i % CORES.length]}`,
            }}
            animate={{ y: [0, -22, 0], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 5 + i * 0.4, delay: b.d, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-lima"
        >
          <span className="text-nevoa/40">$</span> pixel init --projeto
          <span className="animate-blink text-cyan">_</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Seu negócio merece mais que{" "}
          <span className="text-nevoa/55">um perfil no Instagram.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-nevoa/60"
        >
          Criamos sites, webapps e automações com I.A. para empresas que querem
          um endereço próprio na internet — rápido, bonito no celular e feito
          para aparecer no Google.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contato"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-cyan px-8 py-4 font-display font-bold text-navy transition-transform hover:-translate-y-0.5"
          >
            Pedir orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-sm border border-linha px-8 py-4 font-display font-medium text-nevoa/85 transition-colors hover:border-cyan/60 hover:text-cyan"
          >
            Ver trabalhos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
