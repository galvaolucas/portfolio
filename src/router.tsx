import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LoadingDots } from "./components/custom/LoadingDots";

/**
 * The blog pulls in the Sanity client and the Portable Text renderer, neither of
 * which the landing page needs — so it ships as its own chunk.
 */
const Blog = lazy(async () => ({
  default: (await import("./components/Blog/Blog")).Blog,
}));
const Post = lazy(async () => ({
  default: (await import("./components/Blog/Post")).Post,
}));

const withSuspense = (element: React.ReactNode): React.ReactElement => (
  <Suspense
    fallback={
      <div className="flex min-h-screen items-center justify-center">
        <LoadingDots />
      </div>
    }
  >
    {element}
  </Suspense>
);

/**
 * Paths are relative to Vite's `base`, so the deploy path lives in exactly one
 * place (vite.config.ts) instead of being repeated in every route.
 */
export const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/blog", element: withSuspense(<Blog />) },
    { path: "/blog/:slug", element: withSuspense(<Post />) },
  ],
  { basename: import.meta.env.BASE_URL },
);
