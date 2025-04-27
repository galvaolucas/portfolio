import { WORK_EXPERIENCE } from "@/constants/constants";
import { useState } from "react";

export type IWorkExperienceKey = keyof typeof WORK_EXPERIENCE

interface IUseExperience {
  experienceCard: IWorkExperienceKey;
  setExperienceCard: (arg: IWorkExperienceKey) => void;
}

export const useExperience = (): IUseExperience => {
  const [experienceCard, setExperienceCard] = useState<IWorkExperienceKey>('INSTACASA');

  return { experienceCard, setExperienceCard };
}