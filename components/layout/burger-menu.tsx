"use client";

import {memo, useReducer} from 'react';
import Image from "next/image";
import {navConfig} from "@/components/layout/navbar";
import NavLink from "@/components/shared/link/nav-link";
import Link from "next/link";

const BurgerMenu = memo(() => {
    const [isOpen, toggleIsOpen] = useReducer((state) => {
        return !state;
    }, false);

    return (
        <div className={"fixed pt-4 top-0 w-full flex justify-between px-4 bg-transparent z-10"}>
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
                    {navConfig.map((l) => <NavLink href={l.href} title={l.title} key={l.href} />)}
                    <NavLink title={"Записаться онлайн"} href={"/booking"} />
                </div> : null}
            </div>
        </div>
    );
});
BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;