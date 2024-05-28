"use client";

import Navbar from "./navbar";
import useMediaQuery from "@/lib/hooks/use-media-query";
import BurgerMenu from "@/components/layout/burger-menu";

export default function Nav() {
  const { isMobile} = useMediaQuery();

  return isMobile ? <BurgerMenu /> : <Navbar />;
}
