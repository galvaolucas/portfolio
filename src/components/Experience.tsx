import { AnimatePresence, motion } from "framer-motion";
import { useExperience } from "@/hooks/useExperience";
import { WORK_EXPERIENCE } from "@/constants/constants";
import { twMerge } from "tailwind-merge";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Briefcase,
  CalendarClock,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export type IWorkExperienceKey =
  | "INSTACASA"
  | "CARTER_LABS"
  | "INFO_SISTEMAS"
  | "FIX_IT"
  | "FIX_IT_INTERN";

export const Experience = (): React.ReactElement => {
  const { experienceCard, setExperienceCard } = useExperience();
  const keys = Object.keys(WORK_EXPERIENCE);
  const { isMobile } = useIsMobile();

  const colors = {
    INSTACASA: "#708BF8",
    CARTER_LABS: "#8A2BE2",
    INFO_SISTEMAS: "#FBBB00",
    FIX_IT: "#9835D1",
    FIX_IT_INTERN: "#9835D1",
  };

  return (
    <>
      <div className="flex flex-col md:flex-row pt-8 md:pt-20 items-start justify-start md:justify-center gap-4 md:gap-16 w-full h-full">
        <div className="flex w-full md:w-fit h-fit md:h-full items-center justify-center text-6xl md:text-8xl font-anton text-isabelline text-center md:text-start">
          WORK <br /> EXPERIENCE
        </div>
        <div className="w-full md:w-180 h-132 md:h-150 text-feint-text flex flex-col gap-2 font-medium">
          <Panel>
            <AnimatePresence>
              <motion.div
                key={experienceCard}
                className="space-y-4 md:space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center justify-between">
                    <div className="font-semibold flex flex-row gap-2 items-center text-base md:text-lg">
                      <div
                        className="rounded-full w-2 md:w-4 h-2 md:h-4"
                        style={{ backgroundColor: colors[experienceCard] }}
                      ></div>
                      {WORK_EXPERIENCE[experienceCard].jobTitle}
                    </div>
                    <a
                      target="_blank"
                      href={WORK_EXPERIENCE[experienceCard].companyUrl}
                    >
                      <MoveUpRight className="w-5 md:w-6" style={{ color: colors[experienceCard] }} />
                    </a>
                  </div>
                  <div className="border border-t-0 border-b-[0.5px] border-gray-500"></div>
                </div>
                <div className="text-gray-500 text-xs md:text-sm flex flex-row gap-2 items-center">
                  <MapPin className="w-5 md:w-6"  style={{ color: colors[experienceCard] }} />
                  {WORK_EXPERIENCE[experienceCard].location}
                </div>
                <div className="text-gray-500 text-xs md:text-sm flex flex-row gap-2 items-center">
                  <CalendarClock className="w-5 md:w-6" style={{ color: colors[experienceCard] }} />
                  {WORK_EXPERIENCE[experienceCard].date}
                </div>
                <div className="text-gray-500 text-xs md:text-sm flex flex-row gap-2 items-start text-justify h-fit">
                  <div>
                    <Briefcase className="w-5 md:w-6" style={{ color: colors[experienceCard] }} />
                  </div>
                  <div className="overflow-y-scroll h-60">
                    {WORK_EXPERIENCE[experienceCard].description.join(" ")}
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-2 justify-center">
                  {WORK_EXPERIENCE[experienceCard].stack.map((item, index) => (
                    <Pill name={item} key={`pill_${index}`} />
                  ))}
                </div>
                <Arrows
                  experienceCard={experienceCard}
                  setExperienceCard={setExperienceCard}
                />
              </motion.div>
            </AnimatePresence>
          </Panel>
          <div className="hidden md:flex flex-row items-center justify-center gap-1 p-2 rounded-md bg-layer-transparent border border-border-default">
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
    <div className="py-0 md:py-2 px-0 md:px-4 text-[10px] text-xs rounded-full bg-transparent md:bg-pill-background text-pill-text">
      {name}
    </div>
  );
};

const Panel = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <div className="relative w-full min-h-full border rounded-md p-4 border-midnight md:border-border-default bg-layer-transparent/30">
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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isActive = identifier === selected;

  useEffect(() => {
    if (window?.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <motion.div
      className="flex relative w-full rounded-md text-white items-center justify-center p-2 cursor-pointer"
      onClick={() => setSelected(identifier)}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isActive && (
        <motion.div
          layoutId="tabsBackground"
          className="absolute inset-0 rounded-md z-0"
          style={{ backgroundColor: isMobile ? "transparent" : color }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <span
        className={twMerge(
          "relative z-10 transition-all ease-in-out font-medium text-sm md:text-base text-center md:text-start"
        )}
        style={{
          color:
            isActive && isMobile
              ? color
              : isActive && !isMobile
              ? "#FFFFFF"
              : "#586d8c",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
};

const Arrows = ({
  experienceCard,
  setExperienceCard,
}: {
  experienceCard: IWorkExperienceKey;
  setExperienceCard: (arg: IWorkExperienceKey) => void;
}): React.ReactElement => {
  const keys = Object.keys(WORK_EXPERIENCE) as IWorkExperienceKey[];
  const actualIndex = keys.indexOf(experienceCard);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isFirst, setIsFirst] = useState<boolean>(true);

  useEffect(() => {
    if (actualIndex + 1 === keys.length) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
    if (actualIndex === 0) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }
  }, [actualIndex]);

  const forward = () => {
    if (actualIndex + 1 < keys.length) {
      setExperienceCard(keys[actualIndex + 1]);
    }
  };

  const backward = () => {
    if (actualIndex - 1 >= 0) {
      setExperienceCard(keys[actualIndex - 1]);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full p-2">
      <div className="flex md:hidden flex-row items-center justify-between">
        <div
          onClick={backward}
          className={twMerge(
            "bg-pill-text text-midnight rounded-full",
            isFirst && "opacity-40"
          )}
        >
          <ArrowBigLeft width={32} height={32} />
        </div>
        <div
          onClick={forward}
          className={twMerge(
            "bg-pill-text text-midnight rounded-full",
            isLast && "opacity-40"
          )}
        >
          <ArrowBigRight width={32} height={32} />
        </div>
      </div>
    </div>
  );
};
