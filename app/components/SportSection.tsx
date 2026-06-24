import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";
import { sportArticles } from "../lib/data";

/** "Sport" grid of four cards; the third is flagged as a video. */
export default function SportSection() {
  return (
    <section className="border-t-2 border-rule pt-5">
      <SectionHeading title="Sport" href="#" withArrow />

      <div className="mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {sportArticles.map((article, i) => (
          <ArticleCard
            key={article.id}
            article={article}
            ratio="aspect-[16/11]"
            isVideo={i === 2}
            sizes="(max-width: 640px) 50vw, 23vw"
          />
        ))}
      </div>
    </section>
  );
}
