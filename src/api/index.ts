export const getGithubRepos = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/galvaolucas/repos"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
  }
}

export const getPortfolioRepoData = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/galvaolucas/portfolio"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
  }
}