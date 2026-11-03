/**
 * Central place for brand details. Edit these and the whole site updates.
 */
export const site = {
  name: "Rollin Gear PK",
  handle: "@rollingearpk",
  tagline: "Documenting the street journey",
  description:
    "Two wheels, one rider, zero chill. Documenting a biking journey from Pakistan: the rides, the gear, the upgrades, and the occasional fall.",
  location: "Pakistan",
  // TODO: replace with your real inbox — used by the contact form and shop orders.
  email: "hello@rollingearpk.com",
  youtube: {
    channelId: "UClrrg1AXRVbpk6Lt-YiLAyA",
    url: "https://www.youtube.com/@rollingearpk",
    subscribeUrl: "https://www.youtube.com/@rollingearpk?sub_confirmation=1",
  },
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@rollingearpk" },
    { label: "Instagram", href: "https://www.instagram.com/rollingearpk" },
    { label: "TikTok", href: "https://www.tiktok.com/@rollingearpk" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Videos", href: "/#videos" },
  { label: "About", href: "/#about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
] as const;
