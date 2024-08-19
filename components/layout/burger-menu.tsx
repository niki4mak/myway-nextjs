"use client";

import {memo, useCallback, useRef, useState} from 'react';
import Image from "next/image";
import {navConfig} from "@/components/layout/navbar";
import NavLink from "@/components/shared/link/nav-link";
import Link from "next/link";
import {useRouteChange} from "@/lib/hooks/use-route-change";
import {useClickOutside} from "@/lib/hooks/use-click-outside";
import {clsx} from "clsx";

const BurgerMenu = memo(() => {
  const [isOpen, setOpen] = useState(false);

  const toggleIsOpen = () => setOpen(prev => !prev);
  const closeMenu = useCallback(() => setOpen(false), [setOpen])

  return (
    <div className={"fixed pt-4 top-0 w-full flex justify-between px-4 bg-transparent z-10"}>
      <Link href="/" className={`flex items-center font-display text-2xl`}>
        <p>MY WAY</p>
      </Link>

      <div className={"z-10"}>
        <button className={""} onClick={toggleIsOpen}>
          <Image
            width={27}
            height={25}
            src={"/icons/burger-icon.svg"}
            alt={"Burger Icon"}
          />
        </button>
        <SideDrawer isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </div>
  );
});
BurgerMenu.displayName = "BurgerMenu";

interface SideDrawerProps {
    isOpen: boolean;
    closeMenu: () => void;
}

const SideDrawer = memo<SideDrawerProps>(({
    isOpen,
                                              closeMenu,
                                          }) => {
    const ref = useRef(null);

    const containerClasses = "absolute top-0 right-[-70dvw] rounded-bl-2xl rounded-l-2xl" +
        " h-screen w-[70dvw] bg-c-bg-2 p-4 flex flex-col gap-4 transition-all";
    const openClasses = "!right-0";

    useRouteChange(closeMenu);
    useClickOutside(ref, closeMenu)

    return (
        <>
            {isOpen ?
                (
                    <div className={"absolute top-0 left-0 w-screen h-screen backdrop-blur-md"} />
                ) : null}
            <div className={clsx(containerClasses, isOpen && openClasses)} ref={ref}>
                <div className={"self-end"}>
                    <button onClick={closeMenu}>
                        <Image
                            width={66}
                            height={8}
                            src={"/icons/close.svg"}
                            alt={"Burger Icon"}
                        />
                    </button>
                </div>
                <div className={"flex flex-col gap-2"}>
                    {navConfig.map((l) => <NavLink href={l.href} title={l.title} key={l.href}/>)}
                    <NavLink title={"Записаться онлайн"} href={"/booking"}/>
                </div>
            </div>
        </>
    );
});

export default BurgerMenu;