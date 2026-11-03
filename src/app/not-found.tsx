import { Button, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-4 py-32 sm:px-6 lg:px-8">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-3 font-display text-7xl leading-[0.9] uppercase sm:text-9xl">
        Wrong turn.
      </h1>
      <p className="mt-5 text-lg text-mute">This road doesn&apos;t go anywhere. Let&apos;s head back.</p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </section>
  );
}
