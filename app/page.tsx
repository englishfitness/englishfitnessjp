import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* FEATURES SECTION */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Personal Training",
            desc: "Clear programming and coaching built around your goals.",
          },
          {
            title: "English Confidence",
            desc: "Natural conversation during training with supportive corrections.",
          },
          {
            title: "Real Progress",
            desc: "Consistent sessions. Measurable improvements. Real momentum.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="glass rounded-3xl border border-black/10 p-8 shadow-sm text-center"
          >
            <div className="mb-4 mx-auto h-1 w-14 rounded-full bg-[color:var(--red)]" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-black/70">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ✅ BOOK NOW IMAGE CTA now goes to /book */}
      <section className="flex justify-center">
        <Link href="/book" className="group" aria-label="Book a session">
          <img
            src="/brand/booknow.png"
            alt="Book Now"
            className="w-[360px] max-w-full transition duration-200 group-hover:scale-105"
          />
        </Link>
      </section>
    </div>
  );
}