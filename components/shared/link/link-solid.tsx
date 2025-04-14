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
      className={cn(`flex items-center justify-center bg-white/95 px-7 py-1.5 border rounded-2xl z-10 text-black border-black
      hover:bg-white hover:text-white hover:border-white hover:bg-gray-800/10`,
        isActive && activeClassName)}
      href={href}
    >
      {text}
    </Link>
  );
});
LinkSolid.displayName = "LinkSolid";

export default LinkSolid;