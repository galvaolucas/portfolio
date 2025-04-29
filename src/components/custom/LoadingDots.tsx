import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const LoadingDots = () => {
  return (
    <div className="flex flex-row gap-2">
      <Dot delay={0} />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
      <Dot delay={0.6} />
      <Dot delay={0.8} />
    </div>
  );
};

const Dot = ({
  color,
  y = 100,
  delay = 0,
}: {
  color?: string;
  y?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      className={twMerge("bg-purple-400 w-4 h-4 rounded-full", color)}
      initial={{ y: 0 }}
      animate={{ y }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    />
  );
};
