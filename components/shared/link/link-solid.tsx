"use client"

import {memo} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

interface LinkSolidProps {
  text: string;
  href: string;
}

const LinkSolid = memo<LinkSolidProps>(({
                                              text,
                                              href
                                            }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  const activeClassName = "bg-transparent text-c-primary border border-c-primary";

  return (
    <Link
      className={cn(`flex items-center justify-center bg-c-primary px-6 py-1 rounded-2xl z-10 text-c-text-dark border-b-[3px] border-b-c-primary
      hover:bg-c-primary-darken hover:text-c-text-light`,
        isActive && activeClassName)}
      href={href}
    >
      {text}
    </Link>
  );
});
LinkSolid.displayName = "LinkSolid";

export default LinkSolid;