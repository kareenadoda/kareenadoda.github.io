export function PaperOverlay() {
  return (
    <>
      {/* Matte vignette — soft paper depth, not glossy */}
      <div
        className="pointer-events-none fixed inset-0 -z-[8]"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, rgba(255,255,255,0.35) 0%, transparent 55%),
            radial-gradient(ellipse 100% 60% at 50% 100%, rgba(0,0,0,0.04) 0%, transparent 50%)
          `,
        }}
      />
      {/* Fine paper grain */}
      <div
        className="pointer-events-none fixed inset-0 -z-[7] opacity-[0.35] mix-blend-multiply"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
    </>
  );
}
