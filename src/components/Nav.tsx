"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PixelMark from "./PixelMark";
import { NAV } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setAberto(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/85 backdrop-blur-md border-b border-linha" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Pixel Productions — início">
          <div className="relative">
            <PixelMark size={32} />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight sm:text-lg">
              <span className="text-cyan text-glow-cyan">PIXEL</span>{" "}
              <span className="text-white">PRODUCTIONS</span>
            </span>
            <span className="hidden sm:block font-mono text-[10px] tracking-[0.2em] text-lima font-semibold">
              SITES ▪ WEBAPPS ▪ I.A.
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const ativo = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-mono text-sm transition-all ${
                    ativo
                      ? "text-cyan font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                      : "text-nevoa/65 hover:text-cyan"
                  }`}
                >
                  {ativo && <span className="text-lima mr-1 font-bold">/</span>}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-nevoa/40">
            <span className="h-1.5 w-1.5 rounded-full bg-lima animate-pulse" />
            <span>DISPONÍVEL</span>
          </div>
          <Link
            href="/contato"
            className="rounded-sm bg-cyan px-5 py-2.5 font-display text-sm font-bold text-navy glow-cyan transition-all hover:bg-cyan/90 hover:-translate-y-0.5"
          >
            Pedir orçamento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          <span className={`h-0.5 w-6 bg-cyan transition-transform ${aberto ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-cyan transition-opacity ${aberto ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-cyan transition-transform ${aberto ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {aberto && (
        <div className="border-t border-linha bg-navy md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 font-mono text-base text-nevoa/80 hover:text-cyan"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contato"
                className="block rounded-sm bg-cyan px-5 py-3 text-center font-display font-bold text-navy"
              >
                Pedir orçamento
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
