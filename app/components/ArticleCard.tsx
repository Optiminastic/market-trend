import Image from "next/image";
import Link from "next/link";
import type { Article } from "../lib/data";
import CategoryLabel from "./CategoryLabel";
import { PlayIcon } from "./icons";

type ArticleCardProps = {
  article: Article;
  /** Aspect ratio of the image box (defaults to a wide news thumbnail). */
  ratio?: string;
  /** Title text size class. */
  titleClassName?: string;
  /** Show a play badge over the image (video stories). */
  isVideo?: boolean;
  /** Render the image with priority preloading (above-the-fold cards). */
  preload?: boolean;
  sizes?: string;
};

/**
 * Reusable image-over-title card used by the featured sub-row,
 * Business carousel and Sport grid.
 */
export default function ArticleCard({
  article,
  ratio = "aspect-[7/5]",
  titleClassName = "text-[15px]",
  isVideo = false,
  preload = false,
  sizes = "(max-width: 768px) 50vw, 25vw",
}: ArticleCardProps) {
  return (
    <article className="group flex flex-col">
      <Link href={article.href} className="relative block overflow-hidden">
        <div className={`relative ${ratio} w-full bg-border`}>
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes={sizes}
            preload={preload}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {isVideo && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white">
              <PlayIcon width={20} height={20} className="ml-0.5" />
            </span>
          </span>
        )}
      </Link>

      <div className="mt-3">
        <CategoryLabel>{article.category}</CategoryLabel>
        <h3
          className={`mt-1 font-serif font-semibold leading-snug text-foreground ${titleClassName}`}
        >
          <Link href={article.href} className="hover:text-accent">
            {article.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}
