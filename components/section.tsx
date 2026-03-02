export function Section({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-10">
      {eyebrow ? (
        <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/60">
          <span className="h-2 w-2 rounded-full bg-[color:var(--red)]" />
          {eyebrow}
        </div>
      ) : null}
      <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h1>
      {desc ? <p className="mt-3 max-w-2xl text-black/70">{desc}</p> : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
