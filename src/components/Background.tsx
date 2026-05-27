import { ScatteredDoodles } from "@/components/scrapbook/Doodles";
import { PaperOverlay } from "@/components/scrapbook/PaperOverlay";

export function Background() {
  return (
    <>
      <div className="striped-bg fixed inset-0 -z-10" aria-hidden />
      <PaperOverlay />
      <ScatteredDoodles />
    </>
  );
}
