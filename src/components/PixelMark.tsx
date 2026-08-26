/* Monograma PP em blocos — mesma construção do logo oficial,
   desenhado inline para ficar nítido em qualquer tamanho. */

const P = ["11110", "10001", "10001", "11110", "10000", "10000", "10000"];
const NEON = ["#22D3EE", "#A3E635", "#FF2D95", "#FF7A1A", "#FFD60A", "#A855F7", "#22C55E", "#FF3B30"];

export default function PixelMark({ size = 34 }: { size?: number }) {
  const px = size / 7;
  const gap = px * 0.12;
  const rects: React.ReactElement[] = [];

  [0, 1].forEach((letra) => {
    const offsetX = letra * 6 * px;
    P.forEach((linha, r) => {
      [...linha].forEach((bit, c) => {
        if (bit !== "1") return;
        rects.push(
          <rect
            key={`${letra}-${r}-${c}`}
            x={offsetX + c * px}
            y={r * px}
            width={px - gap}
            height={px - gap}
            fill={NEON[(c * 3 + r * 5 + letra * 2) % NEON.length]}
          />
        );
      });
    });
  });

  return (
    <svg
      width={11 * px}
      height={7 * px}
      viewBox={`0 0 ${11 * px} ${7 * px}`}
      aria-hidden="true"
      className="shrink-0"
    >
      {rects}
    </svg>
  );
}
