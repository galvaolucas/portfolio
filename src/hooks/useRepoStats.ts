import { useQuery } from "@tanstack/react-query";
import { getRepoStats } from "@/api/github";
import { LINKS } from "@/data/site";
import type { RepoStats } from "@/types";

const ONE_HOUR = 1000 * 60 * 60;

/**
 * Star/fork counts for the repo backing this site. Unauthenticated GitHub calls
 * are rate limited per IP, so this caches hard and retries once.
 */
export const useRepoStats = () => {
  const { owner, name } = LINKS.repo;

  return useQuery<RepoStats>({
    queryKey: ["repo-stats", owner, name],
    queryFn: () => getRepoStats(owner, name),
    staleTime: ONE_HOUR,
    gcTime: ONE_HOUR,
    retry: 1,
  });
};
