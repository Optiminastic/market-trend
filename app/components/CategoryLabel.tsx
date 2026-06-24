import Link from "next/link";

type CategoryLabelProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

/** Small uppercase blue category label used across cards. */
export default function CategoryLabel({
  children,
  href = "#",
  className = "",
}: CategoryLabelProps) {
  return (
    <Link
      href={href}
      className={`inline-block text-[11px] font-semibold uppercase tracking-wide text-accent hover:text-accent-hover ${className}`}
    >
      {children}
    </Link>
  );
}
