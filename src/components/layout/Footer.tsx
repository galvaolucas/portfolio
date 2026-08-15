import { GitFork, Star } from "lucide-react";
import { LINKS, SITE } from "@/data/site";
import { useRepoStats } from "@/hooks/useRepoStats";
import { ExternalLink } from "@/components/ui/link";

export const Footer = (): React.ReactElement => {
  const { data } = useRepoStats();
  const repoUrl = `${LINKS.github}/${LINKS.repo.name}`;

  return (
    <footer className="border-t border-line px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-xs text-ink-subtle sm:flex-row">
        <p>
          Designed and built by {SITE.name} · © {new Date().getFullYear()}
        </p>

        <ExternalLink
          href={repoUrl}
          target="_blank"
          className="flex items-center gap-4 font-mono hover:text-ink-muted"
        >
          <span className="flex items-center gap-1.5">
            <Star size={13} aria-hidden />
            {data?.stars ?? "—"}
            <span className="sr-only">stars</span>
          </span>
          <span className="flex items-center gap-1.5">
            <GitFork size={13} aria-hidden />
            {data?.forks ?? "—"}
            <span className="sr-only">forks</span>
          </span>
        </ExternalLink>
      </div>
    </footer>
  );
};
