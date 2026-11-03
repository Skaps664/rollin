import { cacheLife } from "next/cache";
import { site } from "./site";

export type Video = {
  id: string;
  title: string;
  published: string; // ISO date
};

/**
 * Videos to show if the channel feed is empty or unreachable.
 * Add `{ id: "VIDEO_ID", title: "...", published: "2026-01-01" }` entries to pin them.
 */
const fallbackVideos: Video[] = [];

function decode(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

/** Latest uploads from the channel's public RSS feed — no API key needed. */
export async function getLatestVideos(limit = 7): Promise<Video[]> {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${site.youtube.channelId}`,
    );
    if (!res.ok) return fallbackVideos.slice(0, limit);
    const xml = await res.text();
    const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .map(([, entry]) => ({
        id: entry.match(/<yt:videoId>([^<]+)/)?.[1] ?? "",
        title: decode(entry.match(/<title>([^<]+)/)?.[1] ?? ""),
        published: entry.match(/<published>([^<]+)/)?.[1] ?? "",
      }))
      // Skip Shorts-style vertical uploads? Keep everything; filter here if wanted.
      .filter((v) => v.id);
    return (videos.length ? videos : fallbackVideos).slice(0, limit);
  } catch {
    return fallbackVideos.slice(0, limit);
  }
}
