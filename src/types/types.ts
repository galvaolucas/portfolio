import type { TypedObject } from '@portabletext/types';

export type Post = {
  _id: string;
  title: string;
  imageUrl: string;
  slug: {
    current: string;
  }
  publishedAt: string;
  body: TypedObject;
};

export type PostCardProps = {
  post: Post;
};
