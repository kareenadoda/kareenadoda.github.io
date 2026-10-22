import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecruiterPage, getRecruiterPages } from "@/lib/recruiter-pages";
import { HomeView } from "@/components/HomeView";

// Only the slugs in the private content file exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getRecruiterPages().map((page) => ({ slug: page.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getRecruiterPage((await params).slug);
  return {
    title: page ? `Kareena × ${page.company}` : "Kareena Vijay Doda",
    description: "A note from Kareena.",
    // Keep these out of search engines and link previews' caches.
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
    // Don't leak this page's URL to sites it links out to.
    referrer: "no-referrer",
  };
}

export default async function Page({ params }: Props) {
  const page = getRecruiterPage((await params).slug);
  if (!page) notFound();
  return <HomeView company={page} />;
}
