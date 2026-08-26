import Link from "next/link";
import PixelMark from "./PixelMark";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-linha bg-void">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <PixelMark size={28} />
              <span className="font-display text-base font-bold">
                <span className="text-cyan">PIXEL</span> <span className="text-nevoa">PRODUCTIONS</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-nevoa/50">
              {SITE.descricao}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-lima">Navegação</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-nevoa/60 transition-colors hover:text-cyan">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-lima">Contato</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-nevoa/60">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-cyan">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan"
                >
                  {SITE.whatsapp}
                </a>
              </li>
              <li className="text-nevoa/40">{SITE.cidade}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-linha pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-nevoa/35">
            © {new Date().getFullYear()} {SITE.nome}
          </p>
          <p className="font-mono text-xs text-nevoa/35">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
