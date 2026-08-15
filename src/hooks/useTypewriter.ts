import { useEffect, useState } from "react";

type Options = {
  /** Milliseconds between characters. */
  speed?: number;
  /** Pause before the first character appears. */
  startDelay?: number;
  /** When false the full text is shown immediately (reduced motion, replays). */
  enabled?: boolean;
};

/**
 * Reveals `text` one character at a time.
 *
 * Uses a single interval with a real cleanup, so unmounting mid-animation — or
 * StrictMode's double effect invocation in development — cannot leave orphaned
 * timers appending duplicate characters.
 */
export const useTypewriter = (
  text: string,
  { speed = 90, startDelay = 250, enabled = true }: Options = {},
) => {
  const [count, setCount] = useState(() => (enabled ? 0 : text.length));

  useEffect(() => {
    if (!enabled) {
      setCount(text.length);
      return;
    }

    setCount(0);
    let interval: number | undefined;

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((previous) => {
          if (previous >= text.length) {
            window.clearInterval(interval);
            return previous;
          }
          return previous + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [text, speed, startDelay, enabled]);

  return { typed: text.slice(0, count), isDone: count >= text.length };
};

const SESSION_KEY = "hero-typed";

/**
 * True the first time the hero mounts in a browsing session — so returning from
 * the blog does not replay the intro, but a fresh visit does.
 */
export const useFirstVisitInSession = (): boolean => {
  const [isFirst] = useState(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return false;
      sessionStorage.setItem(SESSION_KEY, "1");
      return true;
    } catch {
      // Private mode / storage disabled: just play the animation.
      return true;
    }
  });

  return isFirst;
};
