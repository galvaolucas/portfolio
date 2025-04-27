import { Post } from "@/types/types"

export const PostCard = ({ post }: { post: Post }): React.ReactElement => {
  return (
    <div>
      <img src={post.image.asset._ref} alt={post.title} />
      <h2 className="post-card-title">{post.title}</h2>
      <p className="post-card-description">{post.publishedAt}</p>
    </div>
  )
}
