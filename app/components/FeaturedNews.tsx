import Image from "next/image";
import Link from "next/link";
import {
  featured,
  featuredCaption,
  featuredSubCards,
} from "../lib/data";
import CategoryLabel from "./CategoryLabel";
import ArticleCard from "./ArticleCard";
import { CommentIcon } from "./icons";

/** "Featured News" block: lead story plus a three-card sub row. */
export default function FeaturedNews() {
  return (
    <section>
      <h2 className="border-b border-foreground pb-3 font-display text-2xl font-bold sm:text-[28px]">
        Featured News
      </h2>

      {/* Lead story */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.25fr]">
        <div className="flex flex-col">
          <CategoryLabel href={featured.href}>{featured.category}</CategoryLabel>
          <h3 className="mt-2 font-display text-[26px] font-bold leading-tight text-foreground sm:text-[30px]">
            <Link href={featured.href} className="hover:text-accent">
              {featured.title}
            </Link>
          </h3>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted">
            <span>{featured.date}</span>
            <span className="flex items-center gap-1">
              <CommentIcon width={14} height={14} />
              {featured.comments}
            </span>
          </div>
          <p className="mt-3 font-serif text-[15px] leading-relaxed text-foreground/80">
            {featured.excerpt}
          </p>
        </div>

        <figure className="flex flex-col">
          <Link href={featured.href} className="relative block overflow-hidden">
            <div className="relative aspect-[4/3] w-full bg-border">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                preload
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Link>
          <figcaption className="mt-2 font-serif text-xs italic leading-relaxed text-muted">
            {featuredCaption}
          </figcaption>
        </figure>
      </div>

      {/* Sub row */}
      <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3">
        {featuredSubCards.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            ratio="aspect-[16/10]"
            sizes="(max-width: 640px) 100vw, 22vw"
          />
        ))}
      </div>
    </section>
  );
}
