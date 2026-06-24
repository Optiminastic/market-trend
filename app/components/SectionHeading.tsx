import Link from "next/link";
import { ArrowRight } from "./icons";

type SectionHeadingProps = {
  title: string;
  href?: string;
  /** When true the title shows a trailing arrow and the whole heading links. */
  withArrow?: boolean;
  /** Draw a thick rule above the heading (used by full-width sections). */
  topRule?: boolean;
};

/**
 * Section heading used by "Featured News", "Business →", "Lifestyle →" etc.
 * Serif display title with an optional arrow and an underline rule.
 */
export default function SectionHeading({
  title,
  href = "#",
  withArrow = false,
  topRule = false,
}: SectionHeadingProps) {
  const heading = (
    <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground sm:text-[28px]">
      {title}
      {withArrow && <ArrowRight width={22} height={22} className="mt-1" />}
    </h2>
  );

  return (
    <div className={topRule ? "border-t-2 border-rule pt-4" : ""}>
      {withArrow ? (
        <Link href={href} className="group inline-flex">
          <span className="transition-colors group-hover:text-accent">{heading}</span>
        </Link>
      ) : (
        heading
      )}
    </div>
  );
}
