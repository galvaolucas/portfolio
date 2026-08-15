import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity/client";
import type { Post } from "@/types";
import { BlogLayout } from "./BlogLayout";
import { PostCard } from "./PostCard";
import { PostSkeleton } from "./Skeletons/PostSkeleton";

/**
 * The search term is bound as a GROQ parameter rather than interpolated into
 * the query string — a quote in the input would otherwise break the query.
 */
const POSTS_QUERY = `
  *[
    _type == "post" &&
    defined(slug.current) &&
    ($pattern == "*" || [title, genre] match $pattern)
  ]
  | order(publishedAt desc)[0...12]
  {
    _id, title, subtitle, genre, "imageUrl": image.asset->url, slug, publishedAt
  }
`;

export const Blog = () => {
  const [filter, setFilter] = useState("");

  const { isPending, isError, data } = useQuery<Post[]>({
    queryKey: ["posts", filter],
    // No try/catch: a thrown error is what tells React Query to surface `isError`.
    queryFn: () => client.fetch(POSTS_QUERY, { pattern: `*${filter}*` }),
  });

  return (
    <BlogLayout setFilter={setFilter}>
      <header className="border-b border-paper-line pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-paper-ink sm:text-4xl">
          Writing
        </h1>
        <p className="mt-3 max-w-lg leading-relaxed text-paper-muted text-pretty">
          Notes on building software — what worked, what did not, and the
          occasional opinion I am willing to defend.
        </p>
      </header>

      {isPending ? (
        <div>
          {Array.from({ length: 3 }, (_, index) => (
            <PostSkeleton key={index} />
          ))}
        </div>
      ) : isError ? (
        <Notice
          title="Could not load the posts"
          body="Something went wrong reaching the CMS. Try refreshing in a moment."
        />
      ) : data.length === 0 ? (
        <Notice
          title="Nothing here yet"
          body={
            filter
              ? `No posts match “${filter}”.`
              : "No posts have been published so far."
          }
        />
      ) : (
        <div>
          {data.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </BlogLayout>
  );
};

const Notice = ({
  title,
  body,
}: {
  title: string;
  body: string;
}): React.ReactElement => (
  <div className="py-20 text-center">
    <p className="font-semibold text-paper-ink">{title}</p>
    <p className="mt-2 text-sm text-paper-muted">{body}</p>
  </div>
);
