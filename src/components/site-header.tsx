"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { useCart } from "./cart";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || menu ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" translate="no" className="font-display text-2xl leading-none tracking-wide uppercase" onClick={() => setMenu(false)}>
          Rollin Gear <span className="text-olive">PK</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative text-sm tracking-[0.18em] text-mute uppercase transition-colors hover:text-bone aria-[current=page]:text-bone aria-[current=page]:after:absolute aria-[current=page]:after:-bottom-1.5 aria-[current=page]:after:left-0 aria-[current=page]:after:h-0.5 aria-[current=page]:after:w-full aria-[current=page]:after:bg-olive"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative grid size-11 place-items-center text-bone transition-colors hover:text-olive"
            aria-label={`Open bag, ${count} item${count === 1 ? "" : "s"}`}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2" strokeLinejoin="round" />
            </svg>
            {count > 0 && (
              <span className="absolute top-1.5 right-1 grid min-w-4.5 place-items-center rounded-full bg-olive px-1 text-[10px] font-bold text-ink tabular-nums">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="grid size-11 place-items-center md:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu((m) => !m)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menu && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenu(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block py-3 font-display text-4xl uppercase text-mute aria-[current=page]:text-bone"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
