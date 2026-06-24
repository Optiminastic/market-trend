import Image from "next/image";
import Link from "next/link";
import { topics, trending } from "../lib/data";

/** Right-hand sidebar with "Topic" cards and a "Trending" list. */
export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-8">
      {/* Topic */}
      <div>
        <h2 className="border-b border-foreground pb-3 font-display text-2xl font-bold">
          Topic
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {topics.map((topic) => (
            <Link key={topic.id} href={topic.href} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-border">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  sizes="(max-width: 1024px) 40vw, 120px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 font-serif text-[13px] leading-snug text-foreground group-hover:text-accent">
                {topic.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div>
        <h2 className="border-b border-foreground pb-3 font-display text-2xl font-bold">
          Trending
        </h2>
        <ul className="mt-2">
          {trending.map((item) => (
            <li key={item.id} className="border-b border-border py-3 last:border-b-0">
              <Link
                href={item.href}
                className="font-serif text-[17px] font-medium leading-snug text-foreground hover:text-accent"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
