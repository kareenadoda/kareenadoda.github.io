-- Run in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.feature_comments (
  id uuid primary key default gen_random_uuid(),
  display_name text check (display_name is null or char_length(trim(display_name)) between 1 and 80),
  body text not null check (char_length(trim(body)) between 1 and 1000),
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists feature_comments_approved_created_idx
  on public.feature_comments (approved, created_at desc);

alter table public.feature_comments enable row level security;

drop policy if exists "Public read approved comments" on public.feature_comments;
create policy "Public read approved comments"
  on public.feature_comments
  for select
  to anon, authenticated
  using (approved = true);

drop policy if exists "Public insert pending comments" on public.feature_comments;
create policy "Public insert pending comments"
  on public.feature_comments
  for insert
  to anon, authenticated
  with check (approved = false);
