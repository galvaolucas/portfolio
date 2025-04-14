import { getGithubRepos } from "@/api";
import { useEffect, useState } from "react";

export const Projects = (): React.ReactElement => {
  const [repos, setRepos] = useState<any[]>([]); 

  const getPersonalRepos = async () => {
    const data = await getGithubRepos();
    setRepos(data);
  }

  console.log(repos)

  useEffect(() => {
    void getPersonalRepos()
  }, [])

  return (
    <div>Projects</div>
  )
}