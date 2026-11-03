import type { Metadata } from "next";
import { ShopGrid } from "@/components/shop-grid";
import { Eyebrow, Zebra } from "@/components/ui";

export const metadata: Metadata = {
  title: "Shop",
  description: "Rider-made apparel, caps, stickers and accessories from Rollin Gear PK.",
};

const perks = [
  { k: "Ships", v: "Across Pakistan" },
  { k: "Made", v: "In small batches" },
  { k: "Orders", v: "Confirmed by email" },
];

export default function ShopPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <Zebra side="right" className="absolute inset-y-0 right-0 hidden w-[28vw] opacity-90 md:block" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 lg:px-8 lg:pt-24">
          <Eyebrow>The garage shop</Eyebrow>
          <h1 className="mt-3 font-display text-7xl leading-[0.88] uppercase sm:text-9xl">
            Gear up.
            <br />
            <span className="text-olive">Roll out.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-mute">
            Merch built for the same streets I ride. Every order helps keep the bike — and the channel — running.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
            {perks.map((p) => (
              <div key={p.k}>
                <dt className="text-xs tracking-[0.25em] text-mute uppercase">{p.k}</dt>
                <dd className="mt-1 font-medium">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <ShopGrid />
      </section>
    </>
  );
}
