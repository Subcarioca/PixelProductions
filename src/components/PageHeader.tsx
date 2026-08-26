export default function PageHeader({
  eyebrow,
  titulo,
  texto,
}: {
  eyebrow: string;
  titulo: string;
  texto?: string;
}) {
  return (
    <section className="pixel-grid relative overflow-hidden border-b border-linha">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-lima">{eyebrow}</p>
        <h1 className="font-display text-balance mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {titulo}
        </h1>
        {texto && (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-nevoa/60">{texto}</p>
        )}
      </div>
    </section>
  );
}
