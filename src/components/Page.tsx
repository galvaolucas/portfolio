import { useEffect } from "react";
import { Nav } from "./layout/Nav";
import { Footer } from "./layout/Footer";
import { Section } from "./layout/Section";
import { Hero } from "./home/Hero";
import { Experience } from "./home/Experience";
import { Stack } from "./home/Stack";
import { Contact } from "./home/Contact";

/**
 * The browser resolves a `#work` fragment before React has rendered anything,
 * so a shared deep link lands at the top. Re-run the scroll once mounted.
 */
const useHashScrollOnMount = () => {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const frame = requestAnimationFrame(() => {
      // Instant, not smooth: on a deep link the reader should arrive already
      // there, not watch the page scroll past everything above it.
      document
        .getElementById(id)
        ?.scrollIntoView({ block: "start", behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
};

export const Page = (): React.ReactElement => {
  useHashScrollOnMount();

  return (
    <>
      <Nav />

      <main>
        <Hero />

        <Section
          id="work"
          title="Work"
          description="Five years across product startups — building things from scratch or improving legacy systems."
        >
          <Experience />
        </Section>

        <Section
          id="stack"
          title="Stack"
          description="Tools I reach for daily, and the ones I reach for occasionally."
        >
          <Stack />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  );
};
