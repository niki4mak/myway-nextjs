"use client";

import Link from "next/link";
import NavLink from "@/components/shared/link/nav-link";
import LinkSolid from "@/components/shared/link/link-solid";

interface INavItem {
  href: string;
  title: string;
}

export const navConfig: INavItem[] = [
  {
    href: "/home",
    title: "Главная",
  },
  {
    href: "/masters",
    title: "Мастера",
  },
  {
    href: "/works",
    title: "Работы",
  },
  {
    href: "/services",
    title: "Услуги",
  },
  {
    href: "/about",
    title: "О нас",
  },
]

export default function NavBar() {
  return (
    <>
      <div
        className={"top-0 w-full flex bg-white z-10 py-5 h-[100px]  fixed"}
      >
        <div className="mx-5 flex h-16 items-center justify-between w-full">

          <div>
            <Link href="/" className={`flex items-center font-display text-2xl w-[200px] justify-center
            hover:text-3xl transition-all`}>
              <p>MY WAY</p>
            </Link>
          </div>

          <div className="flex justify-between gap-7 mx-5">
            <div className={"flex gap-10 border border-black p-2 rounded-2xl px-10"}>
              {navConfig.map(l => <NavLink href={l.href} title={l.title} key={l.href} />)}
            </div>

            <LinkSolid text={"Запись"} href={"/booking"} />
          </div>

        </div>
      </div>
    </>
  );
}
