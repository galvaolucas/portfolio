import { Code } from "lucide-react";
import { motion } from "framer-motion";
import { WORK_EXPERIENCE } from "@/constants/constants";
import { useExperience } from "@/hooks/useExperience";
import { twMerge } from "tailwind-merge";
import { BaseLayout } from "./ui/BaseLayout";

interface ITimelineItemProps {
  jobTitle: string;
  company: string;
  companyUrl: string;
  date: string;
  location: string;
  description: string[];
  hovered: IWorkExperienceKey | null;
  setHovered: (arg: IWorkExperienceKey | null) => void;
  identifier: IWorkExperienceKey;
}

export type IWorkExperienceKey =
  | "instacasa"
  | "carter-labs"
  | "info-sistemas"
  | "fix-it"
  | "fix-it-intern";

export const Experience = (): React.ReactElement => {
  const { experienceCard, setExperienceCard } = useExperience();
  return (
    <BaseLayout>
      <motion.div
        className="flex flex-col gap-4 pt-8"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      >
        <TimelineItem
          identifier={WORK_EXPERIENCE.INSTACASA.key as IWorkExperienceKey}
          jobTitle={WORK_EXPERIENCE.INSTACASA.jobTitle}
          company={WORK_EXPERIENCE.INSTACASA.company}
          companyUrl={WORK_EXPERIENCE.INSTACASA.companyUrl}
          date={WORK_EXPERIENCE.INSTACASA.date}
          location={WORK_EXPERIENCE.INSTACASA.location}
          description={WORK_EXPERIENCE.INSTACASA.description}
          hovered={experienceCard}
          setHovered={setExperienceCard}
        />
        <TimelineItem
          identifier={WORK_EXPERIENCE.CARTER_LABS.key as IWorkExperienceKey}
          jobTitle={WORK_EXPERIENCE.CARTER_LABS.jobTitle}
          company={WORK_EXPERIENCE.CARTER_LABS.company}
          companyUrl={WORK_EXPERIENCE.CARTER_LABS.companyUrl}
          date={WORK_EXPERIENCE.CARTER_LABS.date}
          location={WORK_EXPERIENCE.CARTER_LABS.location}
          description={WORK_EXPERIENCE.CARTER_LABS.description}
          hovered={experienceCard}
          setHovered={setExperienceCard}
        />
        <TimelineItem
          identifier={WORK_EXPERIENCE.INFO_SISTEMAS.key as IWorkExperienceKey}
          jobTitle={WORK_EXPERIENCE.INFO_SISTEMAS.jobTitle}
          company={WORK_EXPERIENCE.INFO_SISTEMAS.company}
          companyUrl={WORK_EXPERIENCE.INFO_SISTEMAS.companyUrl}
          date={WORK_EXPERIENCE.INFO_SISTEMAS.date}
          location={WORK_EXPERIENCE.INFO_SISTEMAS.location}
          description={WORK_EXPERIENCE.INFO_SISTEMAS.description}
          hovered={experienceCard}
          setHovered={setExperienceCard}
        />
        <TimelineItem
          identifier={WORK_EXPERIENCE.FIX_IT.key as IWorkExperienceKey}
          jobTitle={WORK_EXPERIENCE.FIX_IT.jobTitle}
          company={WORK_EXPERIENCE.FIX_IT.company}
          companyUrl={WORK_EXPERIENCE.FIX_IT.companyUrl}
          date={WORK_EXPERIENCE.FIX_IT.date}
          location={WORK_EXPERIENCE.FIX_IT.location}
          description={WORK_EXPERIENCE.FIX_IT.description}
          hovered={experienceCard}
          setHovered={setExperienceCard}
        />
        <TimelineItem
          identifier={WORK_EXPERIENCE.FIX_IT_INTERN.key as IWorkExperienceKey}
          jobTitle={WORK_EXPERIENCE.FIX_IT_INTERN.jobTitle}
          company={WORK_EXPERIENCE.FIX_IT_INTERN.company}
          companyUrl={WORK_EXPERIENCE.FIX_IT_INTERN.companyUrl}
          date={WORK_EXPERIENCE.FIX_IT_INTERN.date}
          location={WORK_EXPERIENCE.FIX_IT_INTERN.location}
          description={WORK_EXPERIENCE.FIX_IT_INTERN.description}
          hovered={experienceCard}
          setHovered={setExperienceCard}
        />
      </motion.div>
    </BaseLayout>
  );
};

const TimelineItem = ({
  jobTitle,
  company,
  date,
  location,
  description,
  companyUrl,
  identifier,
  hovered,
  setHovered,
}: ITimelineItemProps): React.ReactElement => {
  const isHovered = hovered === identifier;

  return (
    <div
      onMouseEnter={() => setHovered(identifier)}
      onMouseLeave={() => setHovered(null)}
      className={twMerge(
        "flex flex-col gap-2 p-4 rounded-md cursor-pointer transition-colors duration-300 ease-in-out bg-gradient-to-r from-[#1a1a1a] to-purple-950",
        isHovered && "bg-purple-500/10 border-purple-500"
      )}
    >
      <div className="flex flex-row items-start gap-4">
        <Code />
        <div>
          <h3 className="text-md font-semibold text-purple-400">{jobTitle}</h3>
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-300 text-sm hover:text-purple-400 transition-colors"
          >
            {company}
          </a>
          <p className="text-xs text-slate-500 italic">
            {date}, {location}
          </p>
        </div>
      </div>

      <div
        className={twMerge(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isHovered ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        )}
      >
        <ul className="list-disc text-sm flex flex-col gap-2 leading-6 text-slate-300 p-4 text-justify">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};