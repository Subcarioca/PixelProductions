"use client";

import { useEffect, useRef, useState } from "react";

/* Vídeo de apresentação: roda sozinho, sem som, e só enquanto está
   visível na tela — assim o navegador não carrega os doze de uma vez.
   O poster (JPG) sustenta o card até o vídeo estar pronto. */
export default function PreviewVideo({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visivel, setVisivel] = useState(false);
  const [falhou, setFalhou] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entrada]) => setVisivel(entrada.isIntersecting),
      { rootMargin: "200px", threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Só depois do React aplicar o src é que dá para chamar play() */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (visivel) {
      el.play().catch(() => {
        /* autoplay bloqueado: o poster continua no lugar */
      });
    } else {
      el.pause();
    }
  }, [visivel]);

  if (falhou) {
    // se o vídeo não puder tocar, o poster sustenta o card sozinho
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={poster} alt={alt} className="h-full w-full object-cover object-top" />
    );
  }

  return (
    <video
      ref={ref}
      src={visivel ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      onCanPlay={(e) => {
        if (visivel) e.currentTarget.play().catch(() => {});
      }}
      onError={() => setFalhou(true)}
      className="h-full w-full object-cover object-top"
    />
  );
}
