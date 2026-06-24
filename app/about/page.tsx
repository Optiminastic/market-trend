import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About — Market Trends",
  description:
    "Market Trends is an independent blog covering the latest market news, trending stories and the popular topics shaping business, lifestyle and sport.",
};

const values = [
  {
    title: "What we cover",
    body: "Markets and business, plus the lifestyle, sport, opinion and travel stories that move alongside them — the trends people are actually talking about.",
  },
  {
    title: "Why we exist",
    body: "To cut through the noise. We publish clear, useful takes on what's trending so you can understand the story in minutes, not hours.",
  },
  {
    title: "How we work",
    body: "A small, independent team that reads widely, checks the facts and writes plainly. No jargon, no hype — just the signal worth your time.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="About Us"
        title="About Market Trends"
        description="Market Trends is an independent blog about what's moving in the markets and the wider world — the latest news, trending stories and the popular topics worth following."
      />

      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <p className="font-serif text-lg leading-relaxed text-foreground/85">
          We started Market Trends with a simple idea: the things shaping our
          money, our work and our daily lives are all connected. Markets move
          business, business moves lifestyle, and trends ripple across sport,
          travel and culture. We follow those threads and write them up in a way
          anyone can read.
        </p>
        <p className="mt-5 font-serif text-lg leading-relaxed text-foreground/85">
          Every week we publish fresh stories on what&apos;s trending and
          popular — short enough to read over coffee, sharp enough to be worth
          it. Whether you&apos;re an investor, a curious reader or just here for
          the headlines, there&apos;s something for you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h2 className="font-display text-xl font-bold text-foreground">
                {v.title}
              </h2>
              <p className="mt-2 font-serif text-[15px] leading-relaxed text-foreground/70">
                {v.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t-2 border-rule pt-8 text-center">
          <h2 className="font-display text-2xl font-bold">Start reading</h2>
          <p className="mt-2 font-serif text-[15px] text-foreground/70">
            Browse every story and filter by the topics you care about.
          </p>
          <Link
            href="/blogs"
            className="mt-5 inline-block rounded-sm bg-subscribe px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white hover:brightness-95"
          >
            Explore the blog
          </Link>
        </div>
      </div>
    </main>
  );
}
