import { BlogTopbar } from "./BlogTopbar";

/**
 * Shell for every blog route. Sizing lives here rather than on each page so the
 * header, the list and an article all share one measure.
 */
export const BlogLayout = ({
  children,
  setFilter,
}: {
  children: React.ReactNode;
  setFilter?: (value: string) => void;
}): React.ReactElement => (
  <div className="min-h-screen bg-paper text-paper-ink">
    <BlogTopbar setFilter={setFilter} />
    <main className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
      {children}
    </main>
  </div>
);
