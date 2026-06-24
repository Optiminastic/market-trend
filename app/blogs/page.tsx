import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import BlogsExplorer from "./BlogsExplorer";
import { blogPosts } from "../lib/data";

export const metadata: Metadata = {
  title: "Blogs — Market Trends",
  description:
    "Every Market Trends story in one place. Browse the latest posts and filter by category — markets, business, lifestyle, sport and more.",
};

export default function BlogsPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="The Blog"
        title="All Stories"
        description="The latest news, trending stories and popular topics — all in one place. Filter by category to find exactly what you're after."
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <BlogsExplorer posts={blogPosts} />
      </div>
    </main>
  );
}
