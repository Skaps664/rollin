import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";
import bike from "../../../public/brand/bike.png";

export const metadata: Metadata = {
  title: "Contact",
  description: "Collabs, sponsorships, shop orders or just bike talk — get in touch with Rollin Gear PK.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-4 pt-16 pb-28 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-24 lg:px-8 lg:pt-24">
      <div>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-3 font-display text-7xl leading-[0.88] uppercase sm:text-9xl">
          Let&apos;s
          <br />
          <span className="text-olive">talk.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-mute">
          Brand collabs, gear to review, a route I should ride, or a question about an order — drop a line. I read
          everything, usually after the ride.
        </p>

        <dl className="mt-12 grid gap-8 border-t border-line pt-8">
          <div>
            <dt className="text-xs tracking-[0.25em] text-mute uppercase">Email</dt>
            <dd className="mt-1 text-xl">
              <a href={`mailto:${site.email}`} className="underline decoration-olive decoration-2 underline-offset-6 hover:text-olive">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.25em] text-mute uppercase">Socials</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-line px-4 py-2 text-sm transition-colors hover:border-bone"
                >
                  {s.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.25em] text-mute uppercase">Based in</dt>
            <dd className="mt-1 text-xl">{site.location}</dd>
          </div>
        </dl>

        <Image src={bike} alt="" sizes="22rem" className="mt-14 hidden w-[22rem] opacity-80 lg:block" />
      </div>

      <div className="lg:pt-6">
        <div className="border border-line bg-ink-2/60 p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
