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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setAberto(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/85 backdrop-blur-md border-b border-linha" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Pixel Productions — início">
          <PixelMark size={30} />
          <span className="font-display text-base font-bold tracking-tight sm:text-lg">
            <span className="text-cyan">PIXEL</span>{" "}
            <span className="text-nevoa">PRODUCTIONS</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const ativo = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-mono text-sm transition-colors ${
                    ativo ? "text-cyan" : "text-nevoa/65 hover:text-nevoa"
                  }`}
                >
                  {ativo && <span className="text-lima">/</span>}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contato"
          className="hidden rounded-sm bg-cyan px-5 py-2.5 font-display text-sm font-bold text-navy transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Pedir orçamento
        </Link>

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
