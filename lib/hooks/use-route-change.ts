import {usePathname, useSearchParams} from "next/navigation";
import {useEffect} from "react";

export const useRouteChange = (onRouteChange: VoidFunction) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This effect will run on every route change
    onRouteChange();
  }, [pathname, searchParams, onRouteChange]);
};