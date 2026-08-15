import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { client } from "@/lib/sanity/client";
import { readingTime } from "@/lib/portableText";
import type { Post as TPost } from "@/types";
import { BlogLayout } from "./BlogLayout";
import { LoadingDots } from "../custom/LoadingDots";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, subtitle, genre, publishedAt, "imageUrl": image.asset->url, body
}`;

export const Post = () => {
  const { slug } = useParams();

  const { isPending, isError, data } = useQuery<TPost | null>({
    queryKey: ["post", slug],
    queryFn: () => client.fetch(POST_QUERY, { slug }),
  });

  if (isPending) {
    return (
      <BlogLayout>
        <div className="flex justify-center py-32">
          <LoadingDots />
        </div>
      </BlogLayout>
    );
  }

  // A bad slug otherwise renders an article with every field blank.
  if (isError || !data) {
    return (
      <BlogLayout>
        <div className="py-24 text-center">
          <p className="font-semibold text-paper-ink">
            {isError ? "Could not load this post" : "Post not found"}
          </p>
          <p className="mt-2 text-sm text-paper-muted">
            {isError
              ? "Something went wrong reaching the CMS."
              : "This post may have been moved or unpublished."}
          </p>
          <BackLink className="mt-8" />
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <BackLink className="mb-10" />

      <article>
        <header>
          <p className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-wide text-paper-subtle uppercase">
            <span className="text-paper-accent">{data.genre}</span>
            <span aria-hidden>·</span>
            <time dateTime={data.publishedAt}>
              {new Date(data.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{readingTime(data.body)} min read</span>
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-paper-ink sm:text-4xl">
            {data.title}
          </h1>

          {data.subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-paper-muted text-pretty">
              {data.subtitle}
            </p>
          )}
        </header>

        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt=""
            aria-hidden
            className="my-10 w-full rounded-xl border border-paper-line object-cover"
          />
        )}

        <div className="text-[15px] leading-[1.75] text-paper-muted sm:text-base">
          <PortableText value={data.body} components={components} />
        </div>
      </article>

      <footer className="mt-16 border-t border-paper-line pt-8">
        <BackLink />
      </footer>
    </BlogLayout>
  );
};

const BackLink = ({ className }: { className?: string }): React.ReactElement => (
  <Link
    to="/blog"
    className={`inline-flex items-center gap-2 text-sm text-paper-muted transition-colors hover:text-paper-ink ${className ?? ""}`}
  >
    <ArrowLeft size={15} aria-hidden />
    All posts
  </Link>
);

/**
 * Covers every style Sanity can emit, not just the ones current posts happen to
 * use — previously `normal` and `h2` had no styling at all, so body paragraphs
 * rendered with no spacing between them.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="my-5">{children}</p>,
    h1: ({ children }) => (
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-paper-ink">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-paper-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-xl font-semibold tracking-tight text-paper-ink">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-2 text-lg font-semibold text-paper-ink">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-paper-accent pl-5 text-paper-ink italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-5 marker:text-paper-subtle">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-5 marker:text-paper-subtle">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-paper-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded border border-paper-line bg-paper-raised px-1.5 py-0.5 font-mono text-[0.85em] text-paper-ink">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = (value as { href?: string } | undefined)?.href ?? "#";
      const isExternal = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-paper-accent underline decoration-paper-accent/40 underline-offset-2 transition-colors hover:decoration-paper-accent"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const url = (value as { asset?: { url?: string } })?.asset?.url;
      if (!url) return null;
      return (
        <img
          src={url}
          alt=""
          aria-hidden
          loading="lazy"
          className="my-8 w-full rounded-lg border border-paper-line"
        />
      );
    },
  },
};
