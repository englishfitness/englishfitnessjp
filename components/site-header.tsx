import Link from "next/link";

const nav = [
  { href: "/trainer", label: "Trainer" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/events", label: "Events" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-6">
        <div />

        {/* Bigger Responsive Logo */}
        <Link href="/" className="justify-self-center flex items-center">
          <img
            src="/brand/logo.png"
            alt="English Fitness"
            className="h-auto w-[190px] md:w-[210px] lg:w-[235px] xl:w-[255px]"
          />
        </Link>

        {/* Bigger Responsive Book Now */}
        <div className="justify-self-end">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbp2LZS02f8ft_-Vo9JxNQJgXxRTT62rRIQTAm10-y6XRSHw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <img
              src="/brand/booknow.png"
              alt="Book Now"
              className="h-auto w-[150px] md:w-[170px] lg:w-[190px] xl:w-[210px] transition duration-200 group-hover:scale-105"
            />
          </a>
        </div>
      </div>

      {/* NAV BUTTONS */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-4 pb-6">
        {nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="ef-nav-btn"
            style={{
              animationDelay: `${i * 60}ms`,
              margin: "6px 6px",
            }}
          >
            <span className="ef-nav-btn__text">{item.label}</span>
            <span className="ef-nav-btn__shine" aria-hidden="true" />
            <span className="ef-nav-btn__noise" aria-hidden="true" />
          </Link>
        ))}
      </div>

      <div className="union-accent h-[2px] w-full opacity-70" />
    </header>
  );
}