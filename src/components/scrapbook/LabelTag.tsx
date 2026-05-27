type LabelTagProps = {
  children: React.ReactNode;
  color?: "pink" | "yellow";
  className?: string;
};

export function LabelTag({
  children,
  color = "pink",
  className = "",
}: LabelTagProps) {
  const bg =
    color === "pink"
      ? "bg-[var(--color-note-pink)] matte-pink"
      : "bg-[var(--color-note-yellow)] matte-yellow";

  return (
    <span
      className={`relative inline-block border-2 border-[var(--color-ink)] px-4 py-1.5 font-display text-sm font-bold shadow-[2px_2px_0_rgba(0,0,0,0.1)] ${bg} ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-1 border border-dashed border-white/60"
        aria-hidden
      />
      <span className="relative">{children}</span>
    </span>
  );
}
