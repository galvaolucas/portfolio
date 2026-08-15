/** Mirrors the shape of a PostCard row so the list does not jump on load. */
export const PostSkeleton = (): React.ReactElement => (
  <div
    aria-hidden
    className="flex animate-pulse flex-col gap-5 border-b border-paper-line py-7 sm:flex-row sm:items-start sm:gap-7"
  >
    <div className="h-44 w-full shrink-0 rounded-lg bg-paper-line sm:h-28 sm:w-44" />
    <div className="min-w-0 flex-1 space-y-3 pt-1">
      <div className="h-2.5 w-40 rounded bg-paper-line" />
      <div className="h-4 w-3/4 rounded bg-paper-line" />
      <div className="h-3 w-full rounded bg-paper-line" />
      <div className="h-3 w-2/3 rounded bg-paper-line" />
    </div>
  </div>
);
