import { TECH_STACK } from "@/constants/constants";

export const Stack = (): React.ReactElement => {
  return (
    <div className="w-full flex flex-row items-center justify-between gap-20 px-36">
      <Pills />
      <div className="text-8xl font-anton text-isabelline">
        TECH <br /> STACK
      </div>
    </div>
  );
};

const Pills = (): React.ReactElement => {
  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {TECH_STACK.map((e, index) => {
        return (
          <Pill
            iconSrc={e.logo}
            label={e.name}
            color={e.color}
            key={index}
            link={e.link}
          />
        );
      })}
    </div>
  );
};

const Pill = ({
  iconSrc,
  label,
  color,
  link,
}: {
  iconSrc: string;
  label: string;
  color: string;
  link: string;
}) => {
  return (
    <a
      className="flex flex-row gap-2 px-4 py-2 rounded-full bg-white font-semibold cursor-pointer hover:scale-110 transition-all ease-in-out"
      href={link}
      target="_blank"
      style={{ color }}
    >
      <img alt={`${label}_logo`} src={iconSrc} width={20} height={20} />
      {label}
    </a>
  );
};
