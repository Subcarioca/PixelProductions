"use client";

import React from "react";

interface PixelEmblemProps {
  size?: number;
  showText?: boolean;
  showReflection?: boolean;
  className?: string;
  animate?: boolean;
}

/* 
  Isometric 3D Voxel definition
  Isometric Projection parameters:
  origin: (cx, cy)
  A cube at grid position (gx, gy, gz):
  isoX = (gx - gy) * cos(30 deg) * s
  isoY = (gx + gy) * sin(30 deg) * s - gz * s
*/

interface Voxel {
  gx: number;
  gy: number;
  gz: number;
  color: "cyan" | "cyan-light" | "purple" | "magenta" | "orange" | "gold" | "lime" | "amber";
  glow?: boolean;
}

// Left 'P' voxel voxels (placed on an isometric grid)
// We define voxels forming the P: vertical stem (2 wide), top loop (3 tall, 3 wide), and center hole
const LEFT_P_VOXELS: Voxel[] = [
  // Stem: 2 columns, height gz from 0 to 7
  // Left col (gx=0, gy=0)
  { gx: 0, gy: 0, gz: 0, color: "cyan" },
  { gx: 0, gy: 0, gz: 1, color: "cyan" },
  { gx: 0, gy: 0, gz: 2, color: "cyan" },
  { gx: 0, gy: 0, gz: 3, color: "cyan" },
  { gx: 0, gy: 0, gz: 4, color: "cyan" },
  { gx: 0, gy: 0, gz: 5, color: "purple" },
  { gx: 0, gy: 0, gz: 6, color: "purple" },
  { gx: 0, gy: 0, gz: 7, color: "magenta", glow: true },

  // Second col of stem (gx=1, gy=0)
  { gx: 1, gy: 0, gz: 0, color: "cyan" },
  { gx: 1, gy: 0, gz: 1, color: "cyan" },
  { gx: 1, gy: 0, gz: 2, color: "cyan" },
  { gx: 1, gy: 0, gz: 3, color: "cyan" },
  { gx: 1, gy: 0, gz: 4, color: "cyan" },
  { gx: 1, gy: 0, gz: 5, color: "cyan-light" },
  { gx: 1, gy: 0, gz: 6, color: "purple" },
  { gx: 1, gy: 0, gz: 7, color: "purple" },

  // Top horizontal bar of loop (gz=7, gx=2,3)
  { gx: 2, gy: 0, gz: 7, color: "magenta" },
  { gx: 3, gy: 0, gz: 7, color: "gold", glow: true },

  // Top row below (gz=6, gx=2,3)
  { gx: 2, gy: 0, gz: 6, color: "cyan-light" },
  { gx: 3, gy: 0, gz: 6, color: "cyan" },

  // Outer vertical right bar of loop (gx=3, gz=4,5)
  { gx: 3, gy: 0, gz: 5, color: "cyan" },
  { gx: 3, gy: 0, gz: 4, color: "cyan" },
  { gx: 2, gy: 0, gz: 4, color: "cyan" },

  // Middle bar returning to stem (gz=3, gx=2,3)
  { gx: 2, gy: 0, gz: 3, color: "cyan-light" },
  { gx: 3, gy: 0, gz: 3, color: "cyan" },

  // Detached floating voxels (as in the photo)
  { gx: -1.2, gy: 0.5, gz: 7.2, color: "orange", glow: true },
  { gx: 0.8, gy: -0.6, gz: 8.3, color: "magenta", glow: true },
  { gx: 1.5, gy: -0.8, gz: 0.5, color: "gold", glow: true },
  { gx: -0.8, gy: -0.4, gz: 1.2, color: "cyan", glow: true },
];

// Right 'P' voxels (offset by gx + 4.6)
const RIGHT_P_VOXELS: Voxel[] = [
  // Stem col 1 (gx=4.6, gy=0)
  { gx: 4.6, gy: 0, gz: 0, color: "purple" },
  { gx: 4.6, gy: 0, gz: 1, color: "magenta" },
  { gx: 4.6, gy: 0, gz: 2, color: "orange" },
  { gx: 4.6, gy: 0, gz: 3, color: "orange" },
  { gx: 4.6, gy: 0, gz: 4, color: "orange" },
  { gx: 4.6, gy: 0, gz: 5, color: "gold" },
  { gx: 4.6, gy: 0, gz: 6, color: "lime" },
  { gx: 4.6, gy: 0, gz: 7, color: "lime", glow: true },

  // Stem col 2 (gx=5.6, gy=0)
  { gx: 5.6, gy: 0, gz: 0, color: "magenta" },
  { gx: 5.6, gy: 0, gz: 1, color: "orange" },
  { gx: 5.6, gy: 0, gz: 2, color: "orange" },
  { gx: 5.6, gy: 0, gz: 3, color: "orange" },
  { gx: 5.6, gy: 0, gz: 4, color: "gold" },
  { gx: 5.6, gy: 0, gz: 5, color: "gold" },
  { gx: 5.6, gy: 0, gz: 6, color: "lime" },
  { gx: 5.6, gy: 0, gz: 7, color: "lime" },

  // Top horizontal bar of loop (gz=7, gx=6.6, 7.6)
  { gx: 6.6, gy: 0, gz: 7, color: "lime" },
  { gx: 7.6, gy: 0, gz: 7, color: "lime", glow: true },

  // Below top bar (gz=6)
  { gx: 6.6, gy: 0, gz: 6, color: "gold" },
  { gx: 7.6, gy: 0, gz: 6, color: "gold" },

  // Outer right bar of loop (gx=7.6, gz=4,5)
  { gx: 7.6, gy: 0, gz: 5, color: "orange" },
  { gx: 7.6, gy: 0, gz: 4, color: "orange" },
  { gx: 6.6, gy: 0, gz: 4, color: "orange" },

  // Middle bar returning to stem (gz=3)
  { gx: 6.6, gy: 0, gz: 3, color: "orange" },
  { gx: 7.6, gy: 0, gz: 3, color: "orange" },

  // Floating voxels
  { gx: 6.2, gy: -0.7, gz: -0.4, color: "purple", glow: true },
  { gx: 8.2, gy: 0.4, gz: 2.8, color: "gold", glow: true },
  { gx: 5.8, gy: -0.6, gz: 8.4, color: "lime", glow: true },
];

// Color palette for isometric cube faces
const VOXEL_PALETTE: Record<
  Voxel["color"],
  { top: string; front: string; side: string; glow: string }
> = {
  cyan: {
    top: "#67e8f9",
    front: "#06b6d4",
    side: "#0891b2",
    glow: "#22d3ee",
  },
  "cyan-light": {
    top: "#a5f3fc",
    front: "#22d3ee",
    side: "#06b6d4",
    glow: "#00f0ff",
  },
  purple: {
    top: "#d8b4fe",
    front: "#a855f7",
    side: "#7e22ce",
    glow: "#c084fc",
  },
  magenta: {
    top: "#f472b6",
    front: "#ec4899",
    side: "#be185d",
    glow: "#ff2d95",
  },
  orange: {
    top: "#fdba74",
    front: "#f97316",
    side: "#c2410c",
    glow: "#ff7a1a",
  },
  gold: {
    top: "#fef08a",
    front: "#eab308",
    side: "#ca8a04",
    glow: "#ffd60a",
  },
  lime: {
    top: "#bef264",
    front: "#84cc16",
    side: "#4d7c0f",
    glow: "#a3e635",
  },
  amber: {
    top: "#fde68a",
    front: "#f59e0b",
    side: "#b45309",
    glow: "#fbbf24",
  },
};

export default function PixelEmblem({
  size = 400,
  showText = true,
  showReflection = true,
  className = "",
  animate = true,
}: PixelEmblemProps) {
  // SVG viewBox coordinates: 600 x 600
  const vbWidth = 600;
  const vbHeight = showText ? (showReflection ? 740 : 640) : 560;

  // Center for the 3D voxel emblem
  const cx = 300;
  const cy = 250;

  // Isometric cube projection geometry
  const s = 19.5; // cube size scale
  const angle = Math.PI / 6; // 30 degrees
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  // Function to project grid (gx, gy, gz) to 2D screen coordinate
  // Center grid around gx ≈ 3.8
  const project = (gx: number, gy: number, gz: number) => {
    const centeredGx = gx - 3.8;
    const px = cx + (centeredGx - gy) * cosA * s;
    const py = cy + (centeredGx + gy) * sinA * s * 0.5 - gz * s;
    return { px, py };
  };

  // Combine and sort voxels by depth for painter's algorithm
  const allVoxels = [...LEFT_P_VOXELS, ...RIGHT_P_VOXELS].sort((a, b) => {
    // Depth key: gz ascending (bottom to top), gx ascending, gy ascending
    const depthA = a.gz * 100 - (a.gx - a.gy) * 10;
    const depthB = b.gz * 100 - (b.gx - b.gy) * 10;
    return depthA - depthB;
  });

  // Calculate circular dotted ring points
  const ringRadius = 208;
  const ringCenter = { x: 300, y: 228 };
  const totalDots = 64;
  const ringDots: { x: number; y: number; color: string; angle: number }[] = [];

  for (let i = 0; i < totalDots; i++) {
    const a = (i / totalDots) * Math.PI * 2 - Math.PI / 2;
    const rx = ringCenter.x + Math.cos(a) * ringRadius;
    const ry = ringCenter.y + Math.sin(a) * (ringRadius * 0.96); // slight ellipse
    // Determine gradient color based on angle
    const norm = (i / totalDots);
    let col = "#22d3ee";
    if (norm < 0.2) col = "#22d3ee"; // Top-left: cyan
    else if (norm < 0.45) col = "#a3e635"; // Top-right: lime
    else if (norm < 0.65) col = "#ff7a1a"; // Right-bottom: orange
    else if (norm < 0.85) col = "#ff2d95"; // Bottom-left: magenta
    else col = "#a855f7"; // Left: purple

    ringDots.push({ x: rx, y: ry, color: col, angle: a });
  }

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}
      style={{ width: size, maxWidth: "100%" }}
    >
      <svg
        viewBox={`0 0 ${vbWidth} ${vbHeight}`}
        width="100%"
        height="100%"
        className="overflow-visible"
        aria-label="Pixel Productions — Voxel Identity"
      >
        <defs>
          {/* Intense neon glows */}
          <filter id="neon-bloom" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="deep-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" result="blur1" />
            <feGaussianBlur stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="text-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial ambient background light behind the emblem */}
          <radialGradient id="emblem-backdrop" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#0d1f4d" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#050b18" stopOpacity="0" />
          </radialGradient>

          {/* Reflection vertical linear fade */}
          <linearGradient id="reflection-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>

          <mask id="reflection-mask">
            <rect
              x="0"
              y="530"
              width={vbWidth}
              height="200"
              fill="url(#reflection-fade)"
            />
          </mask>
        </defs>

        {/* Ambient background bloom */}
        <circle cx="300" cy="228" r="230" fill="url(#emblem-backdrop)" />

        {/* Outer Circular Pixel Ring with Neon Glow */}
        <g filter="url(#neon-bloom)">
          {ringDots.map((dot, idx) => {
            // Render square pixel bead
            const beadSize = idx % 3 === 0 ? 6.5 : 5;
            return (
              <rect
                key={`ring-${idx}`}
                x={dot.x - beadSize / 2}
                y={dot.y - beadSize / 2}
                width={beadSize}
                height={beadSize}
                fill={dot.color}
                opacity={idx % 4 === 0 ? 0.95 : 0.8}
                rx="1"
              />
            );
          })}
        </g>

        {/* 4 Satellite Cyber Badges anchored along the ring */}
        {/* 1. Left Satellite: Neural Network AI Node Icon */}
        <g transform="translate(68, 222)" filter="url(#neon-bloom)">
          {/* Circular bounding outline */}
          <circle cx="20" cy="20" r="18" fill="#071430" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Neural nodes & connections */}
          <line x1="12" y1="20" x2="20" y2="12" stroke="#a3e635" strokeWidth="1.4" />
          <line x1="12" y1="20" x2="20" y2="28" stroke="#a3e635" strokeWidth="1.4" />
          <line x1="20" y1="12" x2="28" y2="20" stroke="#22d3ee" strokeWidth="1.4" />
          <line x1="20" y1="28" x2="28" y2="20" stroke="#22d3ee" strokeWidth="1.4" />
          <circle cx="12" cy="20" r="3" fill="#a3e635" />
          <circle cx="20" cy="12" r="3" fill="#22d3ee" />
          <circle cx="20" cy="28" r="3" fill="#22d3ee" />
          <circle cx="28" cy="20" r="3.5" fill="#a3e635" />
        </g>

        {/* 2. Top-Right Satellite: Circuit Gear / Tech Cog Icon */}
        <g transform="translate(476, 104)" filter="url(#neon-bloom)">
          <circle cx="18" cy="18" r="16" fill="#071430" stroke="#ff7a1a" strokeWidth="1.5" />
          {/* Gear teeth */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect
              key={`gear-${deg}`}
              x="16"
              y="2"
              width="4"
              height="5"
              fill="#ffd60a"
              rx="0.5"
              transform={`rotate(${deg} 18deg 18deg)`}
            />
          ))}
          <circle cx="18" cy="18" r="9" fill="#0b1b3a" stroke="#ffd60a" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="4" fill="#ff7a1a" />
        </g>

        {/* 3. Right Satellite: Browser UI Wireframe Window Icon */}
        <g transform="translate(488, 206)" filter="url(#neon-bloom)">
          <rect x="0" y="0" width="36" height="26" rx="2" fill="#071430" stroke="#ff2d95" strokeWidth="1.6" />
          {/* Window header dots */}
          <circle cx="5" cy="5" r="1.5" fill="#ff2d95" />
          <circle cx="10" cy="5" r="1.5" fill="#ffd60a" />
          <circle cx="15" cy="5" r="1.5" fill="#a3e635" />
          <line x1="0" y1="9" x2="36" y2="9" stroke="#ff2d95" strokeWidth="1" />
          {/* Content layout wireframe */}
          <rect x="5" y="13" width="10" height="9" fill="none" stroke="#22d3ee" strokeWidth="1" />
          <line x1="19" y1="14" x2="31" y2="14" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" />
          <line x1="19" y1="18" x2="28" y2="18" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* 4. Bottom-Right (inside ring): 2x2 Square Pixel Chip Grid */}
        <g transform="translate(418, 318)" filter="url(#neon-bloom)">
          <rect x="0" y="0" width="8" height="8" rx="1.5" fill="#a3e635" />
          <rect x="11" y="0" width="8" height="8" rx="1.5" fill="#a3e635" />
          <rect x="0" y="11" width="8" height="8" rx="1.5" fill="#a3e635" />
          <rect x="11" y="11" width="8" height="8" rx="1.5" fill="#a3e635" />
        </g>

        {/* 3D Voxel PP Cubes */}
        <g id="voxel-pp-group" filter="url(#deep-glow)">
          {allVoxels.map((v, i) => {
            const { px, py } = project(v.gx, v.gy, v.gz);
            const palette = VOXEL_PALETTE[v.color];

            // Isometric cube facets calculation
            // dx and dy for 30 degree projection
            const dx = cosA * (s * 0.92);
            const dy = sinA * (s * 0.46);
            const h = s * 0.94; // vertical height of cube

            // Face 1: Top Face (Rhombus)
            // (px, py - h), (px + dx, py - h + dy), (px, py - h + 2*dy), (px - dx, py - h + dy)
            const topPoints = `${px},${py - h} ${px + dx},${py - h + dy} ${px},${py - h + 2 * dy} ${px - dx},${py - h + dy}`;

            // Face 2: Left Face
            // (px - dx, py - h + dy), (px, py - h + 2*dy), (px, py + 2*dy), (px - dx, py + dy)
            const leftPoints = `${px - dx},${py - h + dy} ${px},${py - h + 2 * dy} ${px},${py + dy} ${px - dx},${py}`;

            // Face 3: Right Face
            // (px, py - h + 2*dy), (px + dx, py - h + dy), (px + dx, py + dy), (px, py + 2*dy)
            const rightPoints = `${px},${py - h + 2 * dy} ${px + dx},${py - h + dy} ${px + dx},${py} ${px},${py + dy}`;

            return (
              <g key={`voxel-${i}`} className={animate && v.glow ? "transition-transform" : ""}>
                {/* Left Face */}
                <polygon
                  points={leftPoints}
                  fill={palette.front}
                  stroke="#050d24"
                  strokeWidth="0.8"
                />
                {/* Right Face */}
                <polygon
                  points={rightPoints}
                  fill={palette.side}
                  stroke="#050d24"
                  strokeWidth="0.8"
                />
                {/* Top Face (Brightest Highlight) */}
                <polygon
                  points={topPoints}
                  fill={palette.top}
                  stroke="#050d24"
                  strokeWidth="0.8"
                />
                {/* Neon Edge Highlight if glowing */}
                {v.glow && (
                  <circle
                    cx={px}
                    cy={py - h + dy}
                    r="2.5"
                    fill="#ffffff"
                    opacity="0.85"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* Typographic Lockup matching the image */}
        {showText && (
          <g id="brand-typography">
            {/* "PIXEL" in large glowing cyan pixel letters */}
            <g filter="url(#neon-bloom)">
              <text
                x="300"
                y="464"
                textAnchor="middle"
                fill="#22d3ee"
                style={{
                  fontFamily: "var(--font-display), monospace, sans-serif",
                  fontWeight: 900,
                  fontSize: 54,
                  letterSpacing: "0.14em",
                }}
              >
                PIXEL
              </text>
            </g>

            {/* "PRODUCTIONS" in glowing mint/cyan-green pixel font */}
            <g filter="url(#text-glow)">
              <text
                x="300"
                y="514"
                textAnchor="middle"
                fill="#5eead4"
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontWeight: 800,
                  fontSize: 32,
                  letterSpacing: "0.22em",
                }}
              >
                PRODUCTIONS
              </text>
            </g>

            {/* "SITES • WEBAPPS • I.A." in neon lime with dot separators */}
            <g filter="url(#text-glow)">
              <text
                x="300"
                y="554"
                textAnchor="middle"
                fill="#a3e635"
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontWeight: 700,
                  fontSize: 19,
                  letterSpacing: "0.28em",
                }}
              >
                SITES <tspan fill="#22d3ee">▪</tspan> WEBAPPS <tspan fill="#ffd60a">▪</tspan> I.A.
              </text>
            </g>

            {/* Mirror Floor Reflection (as in user's battle station photo!) */}
            {showReflection && (
              <g mask="url(#reflection-mask)" opacity="0.4">
                <g transform="translate(0, 1140) scale(1, -1)">
                  {/* Flipped "SITES • WEBAPPS • I.A." */}
                  <text
                    x="300"
                    y="554"
                    textAnchor="middle"
                    fill="#a3e635"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontWeight: 700,
                      fontSize: 19,
                      letterSpacing: "0.28em",
                    }}
                  >
                    SITES ▪ WEBAPPS ▪ I.A.
                  </text>

                  {/* Flipped "PRODUCTIONS" */}
                  <text
                    x="300"
                    y="514"
                    textAnchor="middle"
                    fill="#5eead4"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontWeight: 800,
                      fontSize: 32,
                      letterSpacing: "0.22em",
                    }}
                  >
                    PRODUCTIONS
                  </text>
                </g>
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
