"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LabelTag } from "@/components/scrapbook/LabelTag";
import { getSupabaseClient, isCommentsEnabled } from "@/lib/supabase/client";
import type { FeatureCommentRow } from "@/lib/supabase/database";

const MAX_NAME = 80;
const MAX_BODY = 1000;

function formatAuthor(name: string | null): string {
  const trimmed = name?.trim();
  return trimmed ? trimmed : "Anonymous";
}

function formatWhen(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function FeatureComments() {
  const enabled = isCommentsEnabled();

  const [comments, setComments] = useState<FeatureCommentRow[]>([]);
  const [loadingList, setLoadingList] = useState(enabled);
  const [displayName, setDisplayName] = useState("");
  const [body, setBody] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadComments = useCallback(async () => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setLoadingList(false);
      return;
    }

    setLoadingList(true);
    const { data, error: fetchError } = await supabase
      .from("feature_comments")
      .select("id, display_name, body, approved, created_at")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError("Couldn’t load comments right now.");
      setComments([]);
    } else {
      setComments(data ?? []);
    }
    setLoadingList(false);
  }, []);

  useEffect(() => {
    if (enabled) void loadComments();
  }, [enabled, loadComments]);

  if (!enabled) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (honeypot.trim()) return;

    const trimmedBody = body.trim();
    const trimmedName = displayName.trim();

    if (!trimmedBody) {
      setError("Write something first :)");
      return;
    }
    if (trimmedBody.length > MAX_BODY) {
      setError(`Keep it under ${MAX_BODY} characters.`);
      return;
    }
    if (trimmedName.length > MAX_NAME) {
      setError(`Name can be at most ${MAX_NAME} characters.`);
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) return;

    setSubmitting(true);
    const { error: insertError } = await supabase.from("feature_comments").insert({
      display_name: trimmedName || null,
      body: trimmedBody,
      approved: false,
    });

    setSubmitting(false);

    if (insertError) {
      setError("Something went wrong — try again in a bit.");
      return;
    }

    setDisplayName("");
    setBody("");
    setSubmitted(true);
  }

  return (
    <div className="space-y-3 pt-2">
      <LabelTag color="pink" className="!px-5 !py-2 !text-lg">
        Leave a comment
      </LabelTag>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="matte-paper border-soft rounded-[var(--radius-soft)] bg-[var(--color-note-white)]/80 p-4 shadow-[2px_3px_0_rgba(0,0,0,0.05)] sm:p-5"
      >
        {submitted ? (
          <p className="font-hand text-sm leading-relaxed text-[var(--color-muted)]">
            Thanks! I&apos;ll post your comment after I take a quick look : D
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className="font-hand text-xs leading-relaxed text-[var(--color-muted)]">
              Optional name — leave blank to stay anonymous. Comments show up
              after I approve them.
            </p>

            <label className="block">
              <span className="sr-only">Your name (optional)</span>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your name (optional)"
                maxLength={MAX_NAME}
                autoComplete="name"
                className="w-full rounded-[var(--radius-soft-sm)] border border-[var(--color-border-soft)] bg-white/90 px-3 py-2 font-hand text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-note-pink)]/60"
              />
            </label>

            <label className="block">
              <span className="sr-only">Your comment</span>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Share a feature you love, one you’d change, or a thought…"
                maxLength={MAX_BODY}
                rows={4}
                required
                className="w-full resize-y rounded-[var(--radius-soft-sm)] border border-[var(--color-border-soft)] bg-white/90 px-3 py-2 font-hand text-sm leading-relaxed text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-note-pink)]/60"
              />
            </label>

            {/* Honeypot — hidden from people, bots often fill it */}
            <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
              <span>Website</span>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>

            {error && (
              <p className="font-hand text-sm text-[#b42318]" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="rounded-[var(--radius-pill)] border border-[var(--color-border-soft)] bg-[var(--color-note-pink)] px-5 py-2 font-display text-sm font-bold text-[var(--color-ink)] shadow-[2px_2px_0_rgba(0,0,0,0.06)] transition hover:bg-[var(--color-note-pink-deep)] disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Drop comment"}
            </button>
          </form>
        )}
      </motion.div>

      <div className="space-y-2">
        <p className="font-display text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]/80">
          From visitors
        </p>

        {loadingList ? (
          <p className="font-hand text-sm text-[var(--color-muted)]">Loading…</p>
        ) : comments.length === 0 ? (
          <p className="font-hand text-sm text-[var(--color-muted)]">
            No comments yet — be the first!
          </p>
        ) : (
          <ul className="space-y-2">
            {comments.map((c) => (
              <li
                key={c.id}
                className="matte-paper border-soft rounded-[var(--radius-soft-sm)] bg-[var(--color-note-yellow)]/40 px-4 py-3 shadow-[1px_2px_0_rgba(0,0,0,0.04)]"
              >
                <p className="font-display text-xs font-bold text-[var(--color-ink)]">
                  {formatAuthor(c.display_name)}
                  <span className="ml-2 font-hand font-normal text-[var(--color-muted)]">
                    · {formatWhen(c.created_at)}
                  </span>
                </p>
                <p className="mt-1.5 font-hand text-sm leading-relaxed text-[var(--color-muted)]">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
