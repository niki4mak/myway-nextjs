import {memo} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

interface INavItem {
  href: string;
  title: string;
}

const NavLink = memo<INavItem>(({
  href,
  title
                                }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  const activeClassName = "underline underline-offset-4";

  return (
    <Link
      href={href}
      className={cn("text-black hover:text-opacity-50 transition-all", isActive && activeClassName)}
    >
      {title}
    </Link>
  );
});
NavLink.displayName = "NavLink";

export default NavLink;