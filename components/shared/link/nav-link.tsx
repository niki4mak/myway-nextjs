import {memo} from "react";
import Link from "next/link";

interface INavItem {
  href: string;
  title: string;
}

const NavLink = memo<INavItem>(({
  href,
  title
                                }) => {
  return (
    <Link href={href} className={"text-c-text-light hover:text-c-primary"}>
      {title}
    </Link>
  );
});
NavLink.displayName = "NavLink";

export default NavLink;