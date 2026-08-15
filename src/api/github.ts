import type { RepoStats } from "@/types";

type GithubRepoResponse = {
  stargazers_count: number;
  forks_count: number;
};

/**
 * Throws on a failed response so React Query can retry and surface the error,
 * instead of resolving to `undefined` and letting callers read fields off it.
 */
export const getRepoStats = async (
  owner: string,
  repo: string,
): Promise<RepoStats> => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

  if (!response.ok) {
    throw new Error(
      `GitHub API responded ${response.status} for ${owner}/${repo}`,
    );
  }

  const data = (await response.json()) as GithubRepoResponse;
  return { stars: data.stargazers_count, forks: data.forks_count };
};
