export type Post = {
  _id: string;
  title: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  slug: string;
  content: string;
  publishedAt: string;
};

export type PostCardProps = {
  post: Post;
};
