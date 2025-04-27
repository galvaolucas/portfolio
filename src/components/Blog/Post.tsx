import { client } from "@/lib/sanity/client";
import { useEffect, useState } from "react";
import { PortableText } from '@portabletext/react';
import { useParams } from "react-router-dom";
import { Post as PostType } from "@/types/types";

export const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<PostType>();

  console.log('slug', post)

  useEffect(() => {
      async function fetchPost() {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          body
        }`;
        const params = { slug };
        const data = await client.fetch(query, params);
        setPost(data);
      }

      fetchPost();
    }, [slug]);

  return (
    <div>
      <h1>Blog</h1>
      {post?.body && <PortableText value={post?.body} />}
    </div>
  );
};
