"use client";

import { useRef } from "react";
import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";
import { businessArticles } from "../lib/data";
import { ChevronLeft, ChevronRight } from "./icons";

/** Horizontally scrolling "Business" carousel with prev/next controls. */
export default function BusinessCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="border-t-2 border-rule pt-5">
      <SectionHeading title="Business" href="#" withArrow />

      <div className="relative mt-5">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
        >
          {businessArticles.map((article) => (
            <div
              key={article.id}
              className="w-[45%] shrink-0 snap-start sm:w-[30%] lg:w-[18.5%]"
            >
              <ArticleCard
                article={article}
                ratio="aspect-[16/11]"
                titleClassName="text-sm"
                sizes="(max-width: 640px) 45vw, 19vw"
              />
            </div>
          ))}
        </div>

        <CarouselButton side="left" onClick={() => scrollBy(-1)} />
        <CarouselButton side="right" onClick={() => scrollBy(1)} />
      </div>
    </section>
  );
}

function CarouselButton({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`absolute top-[28%] z-10 flex h-9 w-9 items-center justify-center bg-black/45 text-white transition-colors hover:bg-black/70 ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      <Icon width={20} height={20} />
    </button>
  );
}
