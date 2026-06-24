import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { lifestyleFeature } from "../lib/data";

/** Large dark "Lifestyle" feature banner: copy on a dark panel, image on the right. */
export default function LifestyleFeature() {
  const f = lifestyleFeature;
  return (
    <section className="border-t-2 border-rule pt-5">
      <SectionHeading title="Lifestyle" href="#" withArrow />

      <div className="mt-5 grid grid-cols-1 overflow-hidden bg-[#111] md:grid-cols-2">
        {/* Copy */}
        <div className="order-2 flex flex-col justify-center p-8 text-white md:order-1 md:p-10">
          <h3 className="font-display text-[28px] font-bold leading-tight sm:text-[34px]">
            <Link href={f.href} className="hover:text-subscribe">
              {f.title}
            </Link>
          </h3>
          <p className="mt-4 max-w-md font-serif text-[15px] leading-relaxed text-white/75">
            {f.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs font-bold uppercase">
              {f.author.charAt(0)}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
              By {f.author} · {f.readTime}
            </span>
          </div>
        </div>

        {/* Image */}
        <Link
          href={f.href}
          className="relative order-1 block min-h-[220px] md:order-2 md:min-h-[360px]"
        >
          <Image
            src={f.image}
            alt={f.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Link>
      </div>
    </section>
  );
}
