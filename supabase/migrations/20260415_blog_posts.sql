-- investkorea 블로그 글 저장용 테이블
-- 하나의 글은 여러 로케일(ko/en/zh/ja)을 가질 수 있으므로 (slug, locale) 조합을 unique로.
-- 파일시스템 기반 .md 의존을 제거해, Vercel 빌드 없이 새 글을 추가/수정할 수 있게 한다.

create table if not exists investkorea_blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  locale text not null check (locale in ('ko','en','zh','ja')),
  title text not null,
  category text,
  excerpt text,
  image text,
  content text not null,
  post_date date not null default (current_date),
  published boolean not null default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (slug, locale)
);

create index if not exists investkorea_blog_posts_slug_idx on investkorea_blog_posts (slug);
create index if not exists investkorea_blog_posts_locale_idx on investkorea_blog_posts (locale);
create index if not exists investkorea_blog_posts_date_idx on investkorea_blog_posts (post_date desc);
create index if not exists investkorea_blog_posts_published_idx on investkorea_blog_posts (published);

-- updated_at 자동 갱신
create or replace function investkorea_blog_posts_touch()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_investkorea_blog_posts_touch on investkorea_blog_posts;
create trigger trg_investkorea_blog_posts_touch
  before update on investkorea_blog_posts
  for each row execute function investkorea_blog_posts_touch();
