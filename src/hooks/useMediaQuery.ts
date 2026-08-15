import { useSyncExternalStore } from "react";

/**
 * Subscribes to a CSS media query and re-renders on change.
 *
 * `useSyncExternalStore` rather than `useState` + `useEffect` so the first
 * render already reports the correct value — no flash of the wrong layout.
 */
export const useMediaQuery = (query: string): boolean => {
  const subscribe = (onChange: () => void) => {
    const list = window.matchMedia(query);
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  };

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
};

/** Matches Tailwind's `md` breakpoint. */
export const useIsMobile = (): boolean => useMediaQuery("(max-width: 767px)");

export const usePrefersReducedMotion = (): boolean =>
  useMediaQuery("(prefers-reduced-motion: reduce)");
