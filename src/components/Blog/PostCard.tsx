import { Link } from "react-router-dom";
import type { Post } from "@/types";

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const PostCard = ({ post }: { post: Post }): React.ReactElement => (
  <article>
    {/*
      A router `Link`, not an `<a href={location.pathname + slug}>`: the old
      version depended on the current path carrying a trailing slash and
      produced `/blogmy-post` when it did not. `to` is resolved against the
      router basename, so the deploy path is applied exactly once.
    */}
    <Link
      to={`/blog/${post.slug.current}`}
      className="group flex flex-col gap-5 border-b border-paper-line py-7 sm:flex-row sm:items-start sm:gap-7"
    >
      {post.imageUrl && (
        <div className="w-full shrink-0 overflow-hidden rounded-lg bg-paper-raised sm:h-28 sm:w-44">
          <img
            src={post.imageUrl}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-28"
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-paper-subtle uppercase">
          <span className="text-paper-accent">{post.genre}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </p>

        <h2 className="mt-2 text-lg font-semibold tracking-tight text-balance text-paper-ink transition-colors group-hover:text-paper-accent sm:text-xl">
          {post.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-paper-muted text-pretty">
          {post.subtitle}
        </p>
      </div>
    </Link>
  </article>
);
