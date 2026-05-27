type WashiTapeProps = {
  variant?: "pink-dots" | "pink-stripe" | "yellow" | "white";
  color?: "pink" | "yellow";
  className?: string;
  rotation?: number;
};

export function WashiTape({
  variant,
  color = "pink",
  className = "",
  rotation = -4,
}: WashiTapeProps) {
  const resolved =
    variant ??
    (color === "yellow" ? "yellow" : "pink-dots");

  const styles: Record<string, Record<string, string | number>> = {
    "pink-dots": {
      backgroundColor: "var(--color-tape-pink)",
      backgroundImage:
        "radial-gradient(circle, rgba(255,255,255,0.55) 1.2px, transparent 1.2px)",
      backgroundSize: "6px 6px",
      opacity: 0.92,
    },
    "pink-stripe": {
      backgroundColor: "var(--color-tape-pink)",
      backgroundImage:
        "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(255,255,255,0.35) 4px, rgba(255,255,255,0.35) 8px)",
      opacity: 0.9,
    },
    yellow: {
      backgroundColor: "var(--color-tape-yellow)",
      backgroundImage:
        "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px)",
      opacity: 0.9,
    },
    white: {
      backgroundColor: "rgba(255,255,255,0.75)",
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
      opacity: 0.85,
      boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
    },
  };

  return (
    <span
      className={`absolute z-20 block h-7 w-16 rounded-md shadow-sm ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        ...styles[resolved],
      }}
      aria-hidden
    />
  );
}
