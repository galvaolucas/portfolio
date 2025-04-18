import { useEffect, useState } from "react";

export const useIsMobile = (): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window])

  return { isMobile }
}