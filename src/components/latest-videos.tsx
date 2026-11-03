import { getLatestVideos } from "@/lib/youtube";
import { site } from "@/lib/site";
import { VideoPlayer } from "./video-player";
import { Button } from "./ui";

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });

export async function LatestVideos() {
  const videos = await getLatestVideos(7);

  if (videos.length === 0) {
    return (
      <div className="relative overflow-hidden border border-line bg-ink-2 px-6 py-16 sm:px-12">
        <div className="max-w-xl">
          <p className="font-display text-4xl leading-none uppercase sm:text-5xl">First ride is warming up.</p>
          <p className="mt-4 text-mute">
            New rides, bike talk and gear stories land on YouTube first. Subscribe and they&apos;ll show up here
            automatically.
          </p>
          <div className="mt-8">
            <Button href={site.youtube.subscribeUrl} external>
              Subscribe on YouTube
            </Button>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/bike.png"
          alt=""
          width={670}
          height={480}
          className="pointer-events-none absolute -right-16 -bottom-10 hidden w-[26rem] opacity-25 grayscale md:block"
        />
      </div>
    );
  }

  const [featured, ...rest] = videos;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
      <article>
        <VideoPlayer id={featured.id} title={featured.title} priority />
        <p className="mt-4 text-xs tracking-[0.25em] text-olive uppercase">
          Latest · <time dateTime={featured.published}>{fmt.format(new Date(featured.published))}</time>
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-balance">{featured.title}</h3>
      </article>
      {rest.length > 0 && (
        <ul className="grid content-start gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {rest.slice(0, 3).map((v) => (
            <li key={v.id} className="grid gap-3 lg:grid-cols-[11rem_1fr] lg:items-start">
              <VideoPlayer id={v.id} title={v.title} />
              <div>
                <h3 className="line-clamp-2 font-medium">{v.title}</h3>
                <time dateTime={v.published} className="mt-1 block text-sm text-mute">
                  {fmt.format(new Date(v.published))}
                </time>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LatestVideosSkeleton() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]" aria-busy="true" aria-label="Loading videos">
      <div className="aspect-video animate-pulse bg-ink-3" />
      <div className="grid content-start gap-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-24 animate-pulse bg-ink-3" />
        ))}
      </div>
    </div>
  );
}
