import { Post } from "@/types/types"
import { useLocation } from "react-router-dom";

export const PostCard = ({ post }: { post: Post }): React.ReactElement => {
  const date = new Date(post.publishedAt);
  const location = useLocation();

  return (
    <a className="relative bg-white w-80 h-80 rounded-lg overflow-hidden cursor-pointer" target="_blank" href={`${location.pathname}${post.slug.current}`}>
      <div className="h-[70%] transform transition-transform duration-300 ease-in-out hover:scale-110">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bg-white z-10 h-[40%] bottom-0 left-0 right-0 p-4">
        <div className="flex flex-col h-full gap-4 items-start justify-between">
        <h2 className="font-bold text-lg text-black">{post.title}</h2>
        <p className="text-gray-400 font-medium text-sm">{date.toLocaleDateString()}</p>
        </div>
      </div>
    </a>
  )
}
