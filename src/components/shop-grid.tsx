"use client";

import { useState } from "react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "./product-card";

export function ShopGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const shown = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <div className="sticky top-16 z-20 -mx-4 mb-10 border-y border-line bg-ink/90 px-4 py-3 backdrop-blur-md sm:mx-0 sm:px-0">
        <div className="flex items-center justify-between gap-4">
          <div role="group" aria-label="Filter by category" className="-mx-1 flex gap-1 overflow-x-auto px-1">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                onClick={() => setActive(c)}
                className="h-9 shrink-0 px-4 text-xs tracking-[0.2em] text-mute uppercase transition-colors hover:text-bone aria-pressed:bg-bone aria-pressed:text-ink"
              >
                {c}
              </button>
            ))}
          </div>
          <p className="hidden shrink-0 text-xs tracking-[0.2em] text-mute uppercase sm:block" aria-live="polite">
            {shown.length} item{shown.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>
      <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
