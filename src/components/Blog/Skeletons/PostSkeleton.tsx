import { Skeleton } from "@/components/ui/skeleton";

export const PostSkeleton = (): React.ReactElement => {
  return (
    <div className="flex flex-col flex-grow">
      <Skeleton className="h-120 rounded-lg bg-gray-400" />
    </div>
  );
};
