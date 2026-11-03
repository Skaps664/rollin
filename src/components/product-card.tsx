"use client";

import { useState } from "react";
import { formatPKR, type Product } from "@/lib/products";
import { ProductArt } from "./product-art";
import { useCart } from "./cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes?.[1]);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-ink-2 ring-1 ring-line ring-inset">
        <div className="size-full p-6 transition-transform duration-500 group-hover:scale-[1.04]">
          <ProductArt kind={product.art} tone={product.tone} />
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-olive px-2 py-1 text-[10px] font-bold tracking-[0.2em] text-ink uppercase">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-medium">{product.name}</h3>
        <p className="shrink-0 tabular-nums">{formatPKR(product.price)}</p>
      </div>
      <p className="mt-1 text-sm text-mute">{product.blurb}</p>

      {product.sizes && (
        <fieldset className="mt-4">
          <legend className="sr-only">Size for {product.name}</legend>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <label
                key={s}
                className="grid h-9 min-w-10 cursor-pointer place-items-center border border-line px-2 text-xs transition-colors hover:border-bone has-checked:border-olive has-checked:bg-olive has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-olive"
              >
                <input
                  type="radio"
                  name={`size-${product.id}`}
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                  className="sr-only"
                />
                {s}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <button
        type="button"
        onClick={() => add(product.id, size)}
        className="mt-4 h-11 border border-bone/30 text-sm font-semibold tracking-[0.2em] uppercase transition-colors hover:border-olive hover:bg-olive hover:text-ink"
      >
        Add to bag
      </button>
    </article>
  );
}
