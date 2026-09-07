/* Monograma PP em blocos voxel — desenhado a partir da nova identidade visual.
   P esquerdo: Ciano elétrico e toques de púrpura/magenta.
   P direito: Laranja neon, ouro e lima. */

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

const COLS = 7;
const ROWS = 9;
const GAP_COLS = 1.2; // espaço entre os dois P

export default function PixelMark({ size = 32 }: { size?: number }) {
  const px = size / ROWS;
  const gap = px * 0.12;
  const rects: React.ReactElement[] = [];

  [0, 1].forEach((letra) => {
    const offsetX = letra * (COLS + GAP_COLS) * px;
    P.forEach((linha, r) => {
      [...linha].forEach((bit, c) => {
        if (bit !== "1") return;

        // Paleta baseada na identidade da foto:
        // Letra 0 (Esquerda): Ciano / Turquesa / Violeta no topo
        // Letra 1 (Direita): Laranja / Dourado / Lima
        let fill = "#22D3EE";
        if (letra === 0) {
          if (r < 2 && c > 3) fill = "#FF2D95";
          else if (r < 3 && c <= 2) fill = "#A855F7";
          else if (c === 0 && r > 6) fill = "#06B6D4";
          else fill = "#22D3EE";
        } else {
          if (r < 2) fill = "#A3E635";
          else if (r < 4) fill = "#FFD60A";
          else if (r < 7) fill = "#FF7A1A";
          else fill = "#FF2D95";
        }

        rects.push(
          <g key={`${letra}-${r}-${c}`}>
            <rect
              x={offsetX + c * px}
              y={r * px}
              width={px - gap}
              height={px - gap}
              fill={fill}
              rx={px * 0.1}
            />
          </g>
        );
      });
    });
  });

  const w = (COLS * 2 + GAP_COLS) * px;
  const h = ROWS * px;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden="true"
      className="shrink-0 drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]"
    >
      {rects}
    </svg>
  );
}

