import { client } from "@/lib/sanity/client";
import { useEffect, useState } from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useParams } from "react-router-dom";
import { Post as PostType } from "@/types/types";
import { BlogTopbar } from "./BlogTopbar";
import { Layout } from "../custom/Layout";
import type { TypedObject } from "@portabletext/types";
import { useQuery } from "@tanstack/react-query";
import { LoadingDots } from "../custom/LoadingDots";

export const Post = () => {
  const { slug } = useParams();

  const fetchPost = async () => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        subtitle,
        genre,
        publishedAt,
        "imageUrl": image.asset->url,
        body
      }`;
    const params = { slug };
    return await client.fetch(query, params);
  };

  const { isLoading, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: fetchPost,
  });

  if (isLoading) {
    return (
      <Layout>
        <BlogTopbar />
        <div className="w-full mt-60 flex items-center justify-center">
          <LoadingDots />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BlogTopbar />
      <div className="flex flex-col px-64 py-16 gap-4">
        <div className="flex flex-row gap-4 items-center">
          <div className="p-2 bg-white font-medium rounded-full w-fit text-xs">
            {data?.genre?.toUpperCase()}
          </div>
          <div className="text-sm text-gray-400">
            {new Date(data?.publishedAt ?? "")?.toLocaleDateString()}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold dark:text-white">{data?.title}</h1>
          <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">
            {data?.subtitle}
          </span>
        </div>
        <div className="py-8">
          <img className="rounded-lg" src={data?.imageUrl} alt={data?.title} />
        </div>
        <div className="leading-7 font-medium text-gray-700 dark:text-white text-justify">
          <Body body={data?.body} />
        </div>
      </div>
    </Layout>
  );
};

const Body = ({
  body,
}: {
  body: TypedObject[] | undefined;
}): React.ReactElement | null => {
  if (!body) return null;

  console.log(body);

  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-2xl font-bold my-2">{children}</h1>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 my-2">
          {children}
        </h3>
      ),
      h5: ({ children }) => (
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-8">{children}</h5>
      ),
    },
    list: ({ children, value }) => {
      if (value._type === "@list") {
        return <ul className="list-disc ml-6 space-y-1">{children}</ul>;
      }
      return <ol className="list-decimal ml-6 space-y-1">{children}</ol>;
    },
  };

  return <PortableText value={body} components={components} />;
};
