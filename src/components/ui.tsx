import Link from "next/link";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs tracking-[0.3em] text-olive uppercase sm:text-sm ${className}`}>{children}</p>;
}

type BtnProps = { href: string; children: React.ReactNode; variant?: "solid" | "ghost"; external?: boolean };

export function Button({ href, children, variant = "solid", external }: BtnProps) {
  const cls =
    variant === "solid"
      ? "bg-bone text-ink hover:bg-olive"
      : "border border-bone/30 text-bone hover:border-bone hover:bg-bone hover:text-ink";
  const classes = `inline-flex h-12 items-center gap-2 px-6 text-sm font-semibold tracking-[0.2em] uppercase transition-colors ${cls}`;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** Zebra print block cut from the channel banner. */
export function Zebra({ side = "left", className = "" }: { side?: "left" | "right"; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(/brand/zebra-${side}.png)` }}
    />
  );
}
