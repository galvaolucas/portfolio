import { useState } from "react";

type IWorkExperienceKey =
  | 'instacasa'
  | 'carter-labs'
  | 'info-sistemas'
  | 'fix-it'
  | 'fix-it-intern';

interface IUseExperience {
  experienceCard: IWorkExperienceKey | null;
  setExperienceCard: (arg: IWorkExperienceKey | null) => void;
}

export const useExperience = (): IUseExperience => {
  const [experienceCard, setExperienceCard] = useState<IWorkExperienceKey | null>(null);

  return { experienceCard, setExperienceCard };
}