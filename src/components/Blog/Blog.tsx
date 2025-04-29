import { client } from "@/lib/sanity/client";
import { Layout } from "../custom/Layout";
import { BlogTopbar } from "./BlogTopbar";
import { PostCard } from "./PostCard";
import { Post } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { PostSkeleton } from "./Skeletons/PostSkeleton";
import { Input } from "../ui/input";
import { useMemo, useState } from "react";
import { debounce } from "lodash";
import { Search } from "lucide-react";

const POSTS_QUERY = (filter: string) => `
  *[
    _type == "post" &&
    defined(slug.current)
    ${filter ? `&& [title, genre] match "*${filter}*"`: ''}
    ]
  | order(publishedAt desc)[0...12]
  {
    _id, title, genre, "imageUrl": image.asset->url, slug, publishedAt
  }
`;

export const Blog = () => {
  const [filter, setFilter] = useState<string>('');

  const fetchPosts = async (searchTerm: string): Promise<Post[] | undefined> => {
      try {
        return await client.fetch(POSTS_QUERY(searchTerm));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

  const { isLoading, data } = useQuery({ queryKey: ['posts', filter], queryFn: async () => await fetchPosts(filter) })

  if (isLoading) return (
    <Layout>
      <BlogTopbar />
      <TopContent setFilter={setFilter} />
      <div className="grid grid-cols-2 gap-8 gap-x-8 px-60 py-12">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </Layout>
  );

  return (
    <Layout>
      <BlogTopbar />
      <TopContent setFilter={setFilter} />
      <div className="grid grid-cols-2 gap-x-8 px-60 py-12">
      {
        data?.map((post: Post) => (
          <PostCard key={post._id} post={post} />
        ))
      }
      </div>
    </Layout>
  );
};

const TopContent = ({ setFilter }: { setFilter: (filter: string) => void }): React.ReactElement => {
  const debouncedSetFilter = useMemo(
    () => debounce((value: string) => {
      setFilter(value);
    }, 300),
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetFilter(e.target.value);
  }

  return (
    <div className="flex w-full h-14 flex-row items-center justify-between bg-white px-60">
      <div></div>
      <div className="relative flex flex-row gap-2">
        <div className="absolute left-2 top-[8px]">
          <Search className="text-black" width={20} height={20} />
        </div>
        <Input placeholder="Search by tag or title" className="text-black w-60 shadow-sm border-1 border-gray-200 focus:border-gray-400 focus:ring-transparent focus:shadow-none pl-8" onChange={onChange} />
      </div>
    </div>
  )
}
