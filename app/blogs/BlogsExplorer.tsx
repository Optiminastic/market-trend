"use client";

import { useMemo, useState } from "react";
import { blogCategories, type BlogPost } from "../lib/data";
import BlogCard from "../components/BlogCard";

/** Client-side category filtering for the Blogs listing. */
export default function BlogsExplorer({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>("All");

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: posts.length };
    for (const post of posts) {
      map[post.category] = (map[post.category] ?? 0) + 1;
    }
    return map;
  }, [posts]);

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  );

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-8">
        {blogCategories.map((category) => {
          const count = counts[category] ?? 0;
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-border text-foreground/70 hover:border-accent hover:text-accent"
              }`}
            >
              {category}
              <span className={isActive ? "text-white/80" : "text-muted"}>
                {" "}
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Results */}
      <p className="mt-8 text-center text-[13px] text-muted">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "story" : "stories"}
        {active !== "All" && (
          <>
            {" "}in <span className="font-semibold text-foreground">{active}</span>
          </>
        )}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center font-serif text-lg text-muted">
          No stories in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
