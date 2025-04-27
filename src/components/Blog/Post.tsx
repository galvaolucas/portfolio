import { client } from "@/lib/sanity/client";
import { SanityDocument } from "@sanity/client";
import { useEffect, useState } from "react";
import { PortableText } from '@portabletext/react';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, body, publishedAt}`;

export const Post = () => {
  const [posts, setPosts] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await client.fetch(POSTS_QUERY);
      setPosts(posts);
    };

    void fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to my blog!</p>
      <PortableText value={posts?.[0]?.body} />
    </div>
  );
};
