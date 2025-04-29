import { Post } from "@/types/types"
import { useLocation } from "react-router-dom";

export const PostCard = ({ post }: { post: Post }): React.ReactElement => {
  const date = new Date(post.publishedAt);
  const location = useLocation();

  return (
    <a className="relative bg-white h-120 rounded-lg overflow-hidden cursor-pointer shadow-lg" target="_self" href={`${location.pathname}${post.slug.current}`}>
      <div className="h-[60%] transform transition-transform duration-300 ease-in-out hover:scale-110">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute right-0 left-0 z-10 bg-white h-[40%] p-4">
        <div className="flex flex-col h-full gap-4 items-start justify-between">
          <div>
            <span className="font-bold text-md text-gray-400">{post.genre.toUpperCase()}</span>
            <h2 className="font-bold text-2xl text-black">{post.title}</h2>
          </div>
          <p className="text-gray-400 font-semibold text-md">{date.toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </a>
  )
}
