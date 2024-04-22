"use client";

import Link from "next/link";
import NavLink from "@/components/shared/link/nav-link";
import LinkSolid from "@/components/shared/link/link-solid";

interface INavItem {
  href: string;
  title: string;
}

const navConfig: INavItem[] = [
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
        className={"fixed top-0 w-full flex justify-center bg-transparent z-10"}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <p>MY WAY</p>
          </Link>

          <div className={"flex gap-20"}>
            {navConfig.map(l => <NavLink href={l.href} title={l.title} key={l.href} />)}
          </div>

          <LinkSolid text={"Записаться онлайн"} href={"/booking"} />
        </div>
      </div>
    </>
  );
}
