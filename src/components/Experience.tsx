import { motion, AnimatePresence } from "framer-motion";
import { useExperience } from "@/hooks/useExperience";
import { WORK_EXPERIENCE } from "@/constants/constants";
import { twMerge } from "tailwind-merge";
import { Briefcase, CalendarClock } from "lucide-react";
import { Stack } from "./Stack";

export type IWorkExperienceKey =
  | "INSTACASA"
  | "CARTER_LABS"
  | "INFO_SISTEMAS"
  | "FIX_IT"
  | "FIX_IT_INTERN";

export const Experience = (): React.ReactElement => {
  const { experienceCard, setExperienceCard } = useExperience();
  const keys = Object.keys(WORK_EXPERIENCE);

  const colors = {
    INSTACASA: "#708BF8",
    CARTER_LABS: "#d0e",
    INFO_SISTEMAS: "#f08",
    FIX_IT: "#91f",
    FIX_IT_INTERN: "#1e75f7",
  };

  return (
    <>
      <div className="flex flex-row pt-20 items-start justify-center gap-16 w-full h-full">
        <div className="text-8xl font-anton text-isabelline">
          WORK <br /> EXPERIENCE
        </div>
        <div className="w-180 h-150 text-feint-text flex flex-col gap-2 font-medium">
          <Panel>
            <div className="space-y-8">
              <div className="flex flex-col gap-1">
                <div className="font-semibold flex flex-row gap-2 items-center text-lg">
                  <div
                    className="rounded-full w-4 h-4"
                    style={{ backgroundColor: colors[experienceCard] }}
                  ></div>
                  {WORK_EXPERIENCE[experienceCard].jobTitle}
                </div>
                <div className="border border-t-0 border-b-[0.5px] border-gray-500"></div>
              </div>

              <div className="text-gray-500 text-sm flex flex-row gap-2 items-start">
                <CalendarClock style={{ color: colors[experienceCard] }} />
                {WORK_EXPERIENCE[experienceCard].date}
              </div>
              <div className="text-gray-500 text-sm flex flex-row gap-2 items-start text-justify">
                <div>
                  <Briefcase style={{ color: colors[experienceCard] }} />
                </div>
                {WORK_EXPERIENCE[experienceCard].description.join(" ")}
              </div>
              <div className="flex flex-row flex-wrap gap-2 justify-center">
                {WORK_EXPERIENCE[experienceCard].stack.map((item, index) => (
                  <Pill name={item} key={`pill_${index}`} />
                ))}
              </div>
            </div>
          </Panel>
          <div className="flex flex-row items-center justify-center gap-1 p-2 rounded-md bg-layer-transparent border border-border-default">
            {Object.values(WORK_EXPERIENCE).map((item, index) => (
              <Tabs
                key={`tab_${index}`}
                name={item.company}
                color={Object.values(colors)[index]}
                identifier={keys[index] as IWorkExperienceKey}
                selected={experienceCard as IWorkExperienceKey}
                setSelected={setExperienceCard}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Pill = ({ name }: { name: string }): React.ReactElement => {
  return (
    <div className="py-2 px-4 text-xs rounded-full bg-pill-background text-pill-text">
      {name}
    </div>
  )
}

const Panel = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <div className="w-full h-full border rounded-md p-4 border-border-default bg-layer-transparent/30">
      {children}
    </div>
  );
};

const Tabs = ({
  name,
  color,
  identifier,
  selected,
  setSelected,
}: {
  name: string;
  color: string;
  identifier: IWorkExperienceKey;
  selected: IWorkExperienceKey;
  setSelected: (arg: IWorkExperienceKey) => void;
}): React.ReactElement => {
  const isActive = identifier === selected;

  return (
    <motion.div
      className="relative w-full rounded-md text-white flex items-center justify-center p-2 cursor-pointer overflow-hidden"
      onClick={() => setSelected(identifier)}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isActive && (
        <motion.div
          layoutId="tabsBackground"
          className="absolute inset-0 rounded-md z-0"
          style={{ backgroundColor: color }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <span
        className={twMerge(
          "relative z-10 transition-all ease-in-out font-medium",
          isActive ? "text-white" : "text-feint-text"
        )}
      >
        {name}
      </span>
    </motion.div>
  );
};
