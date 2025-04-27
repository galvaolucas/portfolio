import { useIsMobile } from "@/hooks/useIsMobile";
import ThemeSwitcher from "../ThemeSwitcher";
import logo from "@public/logos/logo-black.png";

export const BlogTopbar = (): React.ReactElement => {
  const { isMobile } = useIsMobile();
  return (
    <div className='h-16 border flex flex-row items-center justify-between bg-white px-4 py-2'>
      <div>
      <img
        src={logo}
        alt="logo_black"
        width={isMobile ? 40 : 50}
        height={isMobile ? 40 : 50}
      />
      </div>
      <ThemeSwitcher />
    </div>
  )
}
