type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/** Centered page header used by inner routes (About, Blogs). */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="border-b border-border bg-[#fafafa]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-center sm:py-14">
        {eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl font-serif text-[15px] leading-relaxed text-foreground/70">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
