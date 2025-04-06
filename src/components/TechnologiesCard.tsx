import { TECH_LOGOS } from "@/constants/constants";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const TechnologiesCard = ({
  name,
  logo,
}: (typeof TECH_LOGOS)[number]): React.ReactElement => {
  return (
    <div 
      className={twMerge(`min-w-36 p-1 flex flex-row items-center justify-center text-white rounded-md gap-2`)}
      >
      <img alt={`logo_${name}`} src={logo} width={18} height={18} className="rounded-md" />
      {name}
    </div>
  );
};

export const TechnologiesList = (): React.ReactElement => {
  const sortedList = TECH_LOGOS.sort((a, b) => a.name.localeCompare(b.name));
  const list = [...sortedList, ...sortedList];
  return (
    <div className="absolute bottom-0 w-full overflow-hidden">
      <motion.div
        className="flex flex-row w-max gap-4"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
      >
        {list.map((t, index) => (
          <TechnologiesCard key={index} name={t.name} logo={t.logo} />
        ))}
      </motion.div>
    </div>
  );
};
