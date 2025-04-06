import { TopBar } from "../TopBar";

export const Layout = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <div className="w-screen h-screen py-8 px-16 bg-gradient-to-b from-[#1a1a1a] to-[#101010]">
      <div className="flex flex-col h-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
};
