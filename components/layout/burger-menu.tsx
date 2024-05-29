"use client";

import {memo, useCallback, useRef, useState} from 'react';
import Image from "next/image";
import {navConfig} from "@/components/layout/navbar";
import NavLink from "@/components/shared/link/nav-link";
import Link from "next/link";
import {useRouteChange} from "@/lib/hooks/use-route-change";
import {useClickOutside} from "@/lib/hooks/use-click-outside";

const BurgerMenu = memo(() => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleIsOpen = () => setOpen(prev => !prev);
  const closeMenu = useCallback(() => setOpen(false), [setOpen])

  useRouteChange(closeMenu);
  useClickOutside(ref, closeMenu)

  return (
    <div className={"fixed pt-4 top-0 w-full flex justify-between px-4 bg-transparent z-10"} ref={ref}>
      <Link href="/" className={`flex items-center font-display text-2xl`}>
        <p>MY WAY</p>
      </Link>

      <div className={"relative"}>
        <button className={""} onClick={toggleIsOpen}>
          <Image
            width={27}
            height={25}
            src={"/icons/burger-icon.svg"}
            alt={"Burger Icon"}
          />
        </button>
        {isOpen ? <div className={"absolute right-0 flex flex-col gap-2 bg-c-bg-1 p-4 rounded-2xl"}>
          {navConfig.map((l) => <NavLink href={l.href} title={l.title} key={l.href}/>)}
          <NavLink title={"Записаться онлайн"} href={"/booking"}/>
        </div> : null}
      </div>
    </div>
  );
});
BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;