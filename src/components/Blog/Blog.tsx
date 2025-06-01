import { client } from "@/lib/sanity/client";
import { Layout } from "../custom/Layout";
import { BlogTopbar } from "./BlogTopbar";
import { PostCard } from "./PostCard";
import { Post } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { PostSkeleton } from "./Skeletons/PostSkeleton";
import { useState } from "react";

const POSTS_QUERY = (filter: string) => `
  *[
    _type == "post" &&
    defined(slug.current)
    ${filter ? `&& [title, genre] match "*${filter}*"` : ""}
    ]
  | order(publishedAt desc)[0...12]
  {
    _id, title, subtitle, genre, "imageUrl": image.asset->url, slug, publishedAt
  }
`;

export const Blog = () => {
  const [filter, setFilter] = useState<string>("");

  const fetchPosts = async (
    searchTerm: string,
  ): Promise<Post[] | undefined> => {
    try {
      return await client.fetch(POSTS_QUERY(searchTerm));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["posts", filter],
    queryFn: async () => await fetchPosts(filter),
  });

  if (isLoading)
    return (
      <Layout>
        <BlogTopbar setFilter={setFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-8 px-6 md:px-60 py-6 md:py-12">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      </Layout>
    );

  return (
    <Layout>
      <BlogTopbar setFilter={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-60 py-6 md:py-12">
        {data?.map((post: Post) => <PostCard key={post._id} post={post} />)}
      </div>
    </Layout>
  );
};
