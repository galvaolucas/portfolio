import { client } from "@/lib/sanity/client";
import { useEffect, useState } from "react";
import { Layout } from "../ui/Layout";
import { BlogTopbar } from "./BlogTopbar";
import { PostCard } from "./PostCard";
import { Post } from "@/types/types";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, "imageUrl": image.asset->url, slug, publishedAt}`;

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await client.fetch(POSTS_QUERY);
      setPosts(posts);
    };

    void fetchPosts();
  }, []);

  return (
    <Layout>
      <BlogTopbar />
      <div className="flex flex-row gap-8 p-8">
      {
        posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      }
      </div>
    </Layout>
  );
};
