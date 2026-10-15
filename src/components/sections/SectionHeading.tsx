/** Plain black section title, styled like the Geek Out heading at 80% of its size. */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[1.8rem] font-bold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[2.4rem]">
      {children}
    </h2>
  );
}
