import type { TypedObject } from '@portabletext/types';

export type Post = {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  slug: {
    current: string;
  }
  publishedAt: string;
  body: TypedObject[];
  genre: string;
};

export type PostCardProps = {
  post: Post;
};
