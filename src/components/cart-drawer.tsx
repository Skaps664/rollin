"use client";

import { useEffect, useRef } from "react";
import { useCart } from "./cart";
import { ProductArt } from "./product-art";
import { formatPKR } from "@/lib/products";
import { site } from "@/lib/site";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, setQty, count } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  const orderHref = () => {
    const body = [
      "Hi Rollin Gear PK, I'd like to order:",
      "",
      ...lines.map(
        (l) => `• ${l.qty} × ${l.product.name}${l.size ? ` (${l.size})` : ""} — ${formatPKR(l.qty * l.product.price)}`,
      ),
      "",
      `Subtotal: ${formatPKR(subtotal)}`,
      "",
      "Name:",
      "City:",
      "Phone:",
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent("Shop order")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
      inert={!open}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Your bag"
        tabIndex={-1}
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col border-l border-line bg-ink-2 shadow-2xl outline-none transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-2xl tracking-wide uppercase">
            Your bag <span className="text-mute">({count})</span>
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="-mr-2 grid size-10 place-items-center text-mute transition-colors hover:text-bone"
            aria-label="Close bag"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-display text-3xl uppercase">Bag&apos;s empty</p>
            <p className="text-sm text-mute">Nothing strapped to the rack yet.</p>
          </div>
        ) : (
          <ul className="flex-1 divide-y divide-line overflow-y-auto overscroll-contain px-6">
            {lines.map((l) => (
              <li key={l.key} className="flex gap-4 py-5">
                <div className="size-20 shrink-0 overflow-hidden bg-ink-3">
                  <ProductArt kind={l.product.art} tone={l.product.tone} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <p className="truncate font-medium">{l.product.name}</p>
                    <p className="shrink-0 tabular-nums">{formatPKR(l.qty * l.product.price)}</p>
                  </div>
                  {l.size && <p className="text-sm text-mute">Size {l.size}</p>}
                  <div className="mt-auto flex items-center gap-1 pt-2">
                    <QtyButton label={`Decrease ${l.product.name}`} onClick={() => setQty(l.key, l.qty - 1)}>
                      −
                    </QtyButton>
                    <span className="w-8 text-center text-sm tabular-nums" aria-live="polite">
                      {l.qty}
                    </span>
                    <QtyButton label={`Increase ${l.product.name}`} onClick={() => setQty(l.key, l.qty + 1)}>
                      +
                    </QtyButton>
                    <button
                      type="button"
                      onClick={() => setQty(l.key, 0)}
                      className="ml-auto text-xs tracking-widest text-mute uppercase underline-offset-4 hover:text-bone hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t border-line px-6 py-6">
          <div className="flex items-baseline justify-between">
            <span className="text-sm tracking-widest text-mute uppercase">Subtotal</span>
            <span className="font-display text-2xl tabular-nums">{formatPKR(subtotal)}</span>
          </div>
          <p className="mt-1 text-xs text-mute">Delivery across Pakistan is confirmed when we reply to your order.</p>
          {lines.length > 0 ? (
            <a
              href={orderHref()}
              className="mt-5 flex h-12 items-center justify-center bg-olive font-semibold tracking-widest text-ink uppercase transition-colors hover:bg-bone"
            >
              Place order by email
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 flex h-12 w-full items-center justify-center border border-line font-semibold tracking-widest uppercase transition-colors hover:border-bone"
            >
              Keep browsing
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function QtyButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-8 place-items-center border border-line text-sm transition-colors hover:border-bone"
    >
      {children}
    </button>
  );
}
