import Link from "next/link";
import { cacheLife } from "next/cache";
import { nav, site } from "@/lib/site";

async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p translate="no" className="font-display text-5xl leading-none uppercase">
            Rollin Gear <span className="text-olive">PK</span>
          </p>
          <p className="mt-4 max-w-sm text-mute">{site.description}</p>
        </div>
        <div>
          <h2 className="text-xs tracking-[0.25em] text-mute uppercase">Explore</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-olive">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-[0.25em] text-mute uppercase">Follow {site.handle}</h2>
          <ul className="mt-4 space-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-olive">
                  {s.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-5 text-xs tracking-widest text-mute uppercase sm:px-6 lg:px-8">
          <p>
            © <Year /> {site.name}
          </p>
          <p>Ride safe. Wear the gear.</p>
        </div>
      </div>
    </footer>
  );
}
