import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { LatestVideos, LatestVideosSkeleton } from "@/components/latest-videos";
import { ProductCard } from "@/components/product-card";
import { Button, Eyebrow, Zebra } from "@/components/ui";
import bike from "../../public/brand/bike.png";

const pillars = [
  { title: "The rides", text: "City runs, long hauls and the roads in between — filmed from the saddle." },
  { title: "The gear", text: "Helmets, jackets, gloves and boots. What's worth the money and what isn't." },
  { title: "The upgrades", text: "Every mod, fix and part swap on the bike, step by step." },
  { title: "The occasional fall", text: "It happens. Lessons learned the hard way so you don't have to." },
];

export default function Home() {
  return (
    <>
      {/* HERO — mirrors the channel banner */}
      <section className="relative -mt-16 flex min-h-[92dvh] items-center pt-16">
        <div className="grid w-full items-center gap-y-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <Zebra side="left" className="hidden h-[22rem] lg:block" />

          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 lg:flex-row lg:gap-0 lg:px-6">
            <Image
              src={bike}
              alt="Illustrated green café-racer motorcycle"
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              style={{ maskImage: "linear-gradient(to right, black 88%, transparent)" }}
              className="animate-roll-in order-2 w-full max-w-md lg:order-1 lg:-mr-6 lg:w-[34vw] lg:max-w-[30rem]"
            />
            <div className="animate-rise order-1 text-center lg:order-2 lg:text-left">
              <Eyebrow>{site.tagline} @</Eyebrow>
              <h1 translate="no" className="mt-2 font-display text-[clamp(2.75rem,12.5vw,6rem)] leading-[0.86] uppercase lg:text-[clamp(4.5rem,7.4vw,8.5rem)] lg:whitespace-nowrap">
                Rollin Gear <span className="text-olive">PK</span>
              </h1>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm tracking-[0.15em] uppercase lg:justify-between">
                <span className="text-mute">Follow me on</span>
                <a href={site.youtube.url} target="_blank" rel="noreferrer" className="hover:text-olive">
                  {site.handle}
                </a>
                <a
                  href={site.youtube.subscribeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-bone px-4 py-2 font-semibold text-ink transition-colors hover:bg-olive"
                >
                  <span className="size-2 rounded-full bg-[#e5372b]" aria-hidden="true" />
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          <Zebra side="right" className="hidden h-[22rem] lg:block" />
          <Zebra side="left" className="h-20 lg:hidden" />
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-line bg-olive py-3 text-ink" aria-hidden="true">
        <div className="flex w-max animate-[ticker_40s_linear_infinite] font-display hover:[animation-play-state:paused] motion-reduce:animate-none text-2xl uppercase">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10 pr-10">
              {["Two wheels", "One rider", "Zero chill", "Rides", "Gear", "Upgrades", "Made in Pakistan"].map((w) => (
                <span key={w} className="flex items-center gap-10">
                  {w} <span className="text-base">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* VIDEOS */}
      <section id="videos" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>On the channel</Eyebrow>
            <h2 className="mt-3 font-display text-5xl leading-none uppercase sm:text-7xl">Latest rides</h2>
          </div>
          <Button href={site.youtube.url} variant="ghost" external>
            All videos <span aria-hidden="true">↗</span>
          </Button>
        </div>
        <Suspense fallback={<LatestVideosSkeleton />}>
          <LatestVideos />
        </Suspense>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-8 lg:py-32">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-3 font-display text-6xl leading-[0.9] uppercase sm:text-8xl">
              Two wheels.
              <br />
              One rider.
              <br />
              <span className="text-olive">Zero chill.</span>
            </h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-pretty sm:text-2xl">
              I&apos;m documenting my biking journey from {site.location}: the rides, the gear, the upgrades, and the
              occasional fall.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-mute text-pretty">
              We start with my current bike, and we&apos;ll see how far — and how broken — it gets. No sponsored
              hype, no studio polish. Just the street, the machine and whatever happens next. Come roll with me.
            </p>
            <ol className="mt-14 divide-y divide-line border-y border-line">
              {pillars.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
                  <span className="font-display text-3xl text-olive tabular-nums">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl tracking-wide uppercase">{p.title}</h3>
                    <p className="mt-1 text-mute">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SHOP TEASER */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The shop</Eyebrow>
              <h2 className="mt-3 font-display text-5xl leading-none uppercase sm:text-7xl">Wear the journey</h2>
            </div>
            <Link
              href="/shop"
              className="text-sm tracking-[0.2em] uppercase underline decoration-olive decoration-2 underline-offset-8 hover:text-olive"
            >
              Shop all gear →
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="grid items-stretch lg:grid-cols-[1fr_auto_1fr]">
          <Zebra side="left" className="h-24 lg:h-auto" />
          <div className="px-4 py-20 text-center sm:px-10 lg:px-20">
            <p className="font-display text-6xl leading-[0.9] uppercase sm:text-8xl">
              Come roll
              <br />
              with me
            </p>
            <p className="mx-auto mt-5 max-w-md text-mute">New rides, bike talk and gear stories. Hit subscribe and let&apos;s go.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={site.youtube.subscribeUrl} external>
                Subscribe
              </Button>
              <Button href="/contact" variant="ghost">
                Get in touch
              </Button>
            </div>
          </div>
          <Zebra side="right" className="hidden lg:block" />
        </div>
      </section>
    </>
  );
}
