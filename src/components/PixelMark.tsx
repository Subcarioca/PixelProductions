/* Monograma PP em blocos — desenhado a partir do logo oficial.
   P encorpado, 7 colunas x 9 linhas, haste de 2 blocos. */

const P = [
  "1111110",
  "1111111",
  "1100011",
  "1100011",
  "1111111",
  "1111110",
  "1100000",
  "1100000",
  "1100000",
];

const NEON = ["#22D3EE", "#A3E635", "#FF2D95", "#FF7A1A", "#FFD60A", "#A855F7", "#22C55E", "#FF3B30"];

const COLS = 7;
const ROWS = 9;
const GAP_COLS = 1; // espaço entre os dois P

export default function PixelMark({ size = 34 }: { size?: number }) {
  const px = size / ROWS;
  const gap = px * 0.14;
  const rects: React.ReactElement[] = [];

  [0, 1].forEach((letra) => {
    const offsetX = letra * (COLS + GAP_COLS) * px;
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

  const w = (COLS * 2 + GAP_COLS) * px;
  const h = ROWS * px;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" className="shrink-0">
      {rects}
    </svg>
  );
}
