import Link from "next/link";

const nav = [
  { href: "/mission", label: "Mission" },
  { href: "/book", label: "Book" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/events", label: "Events" },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 pb-6">
      <div className="mx-auto px-4">
        <div
          className="mx-auto w-full max-w-4xl border border-black/10 shadow-sm px-6 py-4"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.88)" }}
        >
          {/* Hero Graphic */}
          <div className="flex justify-center">
            <img
              src="/brand/getfit-hero.png"
              alt="Get Fit Get Fluent"
              style={{ width: "460px", maxWidth: "100%", height: "auto" }}
            />
          </div>

          <p className="mt-3 text-center text-[10px] text-black/60">
            Personal training + English coaching in Tokyo.
          </p>

          <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] text-black/60 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ICONS */}
          <div className="mt-5 flex items-center justify-center gap-6">

            {/* Instagram slightly larger */}
            <a
              href="https://www.instagram.com/englishfitness2024/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="/brand/instagram.png"
                alt="Instagram"
                style={{
                  width: "32px",
                  height: "32px",
                  objectFit: "contain",
                }}
              />
            </a>

            {/* LINE */}
            <a
              href="https://line.me/ti/p/80QHXIBHvNM"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="/brand/line.png"
                alt="LINE"
                style={{
                  width: "26px",
                  height: "26px",
                  objectFit: "contain",
                }}
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/819062954336"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="/brand/whatsapp.png"
                alt="WhatsApp"
                style={{
                  width: "28px",
                  height: "28px",
                  objectFit: "contain",
                }}
              />
            </a>

          </div>

          <div className="mt-4 text-center text-[9px] text-black/45">
            © 2026 English Fitness. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
