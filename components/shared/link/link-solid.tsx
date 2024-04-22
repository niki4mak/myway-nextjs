"use client"

import {memo} from "react";
import Link from "next/link";

interface LinkSolidProps {
  text: string;
  href: string;
}

const LinkSolid = memo<LinkSolidProps>(({
                                              text,
                                              href
                                            }) => {
  return (
    <Link
      className={"flex items-center justify-center bg-c-primary px-6 py-1 rounded-2xl z-10 text-c-text-dark"}
      href={href}
    >
      {text}
    </Link>
  );
});
LinkSolid.displayName = "LinkSolid";

export default LinkSolid;