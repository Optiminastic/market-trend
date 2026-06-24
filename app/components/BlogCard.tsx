import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../lib/data";
import CategoryLabel from "./CategoryLabel";
import { CommentIcon } from "./icons";

/** Reusable blog list card: image, category, title, excerpt and meta. */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-border bg-background transition-shadow hover:shadow-md">
      <Link href={post.href} className="relative block overflow-hidden">
        <div className="relative aspect-[16/10] w-full bg-border">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <CategoryLabel href={post.href}>{post.category}</CategoryLabel>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-foreground">
          <Link href={post.href} className="hover:text-accent">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 font-serif text-[14px] leading-relaxed text-foreground/70">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <span>
            By <span className="font-medium text-foreground/80">{post.author}</span>{" "}
            · {post.date}
          </span>
          <span className="flex items-center gap-1">
            <CommentIcon width={13} height={13} />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}
