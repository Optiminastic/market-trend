import Link from "next/link";
import {
  FacebookIcon,
  XIcon,
  TwitterIcon,
  MailIcon,
} from "./icons";

const socials = [
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "X", Icon: XIcon, href: "#" },
  { label: "Twitter", Icon: TwitterIcon, href: "#" },
  { label: "Newsletter", Icon: MailIcon, href: "#" },
];

/** Top masthead: menu + socials on the left, serif logo centered, actions right. */
export default function Header() {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
      {/* Left: social icons */}
      <div className="flex items-center gap-3 text-foreground">
        {socials.map(({ label, Icon, href }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="text-foreground/80 hover:text-accent"
          >
            <Icon width={16} height={16} />
          </Link>
        ))}
      </div>

      {/* Center: logo */}
      <Link
        href="#"
        className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl"
      >
        Market Trends
      </Link>

      {/* Right: actions */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-sm bg-subscribe px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white hover:brightness-95"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
