"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/data";
import { ChevronDown } from "./icons";

/** Primary navigation bar with centered links and an active underline. */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-y border-border">
      <ul className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-3 text-[13px] font-medium">
        {navLinks.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`flex items-center gap-1 border-b-2 pb-0.5 transition-colors ${
                  active
                    ? "border-accent text-foreground"
                    : "border-transparent text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="mt-0.5" />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
