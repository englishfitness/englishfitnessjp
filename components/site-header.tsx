"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/trainer", label: "Trainer", sub: "Meet your coach" },
  { href: "/pricing", label: "Pricing", sub: "Simple membership options" },
  { href: "/testimonials", label: "Testimonials", sub: "See client results" },
  { href: "/blog", label: "Blog", sub: "Fitness, English, lifestyle" },
  { href: "/shop", label: "Shop", sub: "Merch and resources" },
  { href: "/events", label: "Events", sub: "Join special sessions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <style>{`
        .ef-desktop-header {
          display: block;
        }

        .ef-mobile-header {
          display: none;
        }

        @media (max-width: 767px) {
          .ef-desktop-header {
            display: none;
          }

          .ef-mobile-header {
            display: block;
          }
        }

        @keyframes efMenuPanelIn {
          0% {
            opacity: 0;
            transform: translateX(-56px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes efMenuItemIn {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ef-header-shell {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: none;
          background:
            linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)),
            url("/brand/ribbons-bg.png");
          background-size: cover;
          background-position: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow:
            0 8px 24px rgba(0,0,0,0.08),
            0 1px 0 rgba(255,255,255,0.90) inset;
          overflow: hidden;
        }

        .ef-header-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(220,38,38,0.05), transparent 26%),
            radial-gradient(circle at top right, rgba(31,79,179,0.05), transparent 26%);
          pointer-events: none;
        }

        .ef-header-inner {
          position: relative;
          z-index: 1;
        }

        .ef-header-accent {
          height: 2px;
          width: 100%;
          background: linear-gradient(
            90deg,
            rgba(12,47,109,0.9) 0%,
            rgba(217,31,38,0.9) 50%,
            rgba(12,47,109,0.9) 100%
          );
          opacity: 0.72;
        }

        .ef-booknow-link img {
          transition: transform 200ms ease, filter 200ms ease;
        }

        .ef-booknow-link:hover img {
          transform: scale(1.05);
          filter: drop-shadow(0 8px 14px rgba(0,0,0,0.20));
        }

        .ef-mobile-menu-inner {
          animation: efMenuPanelIn 560ms cubic-bezier(.22,1,.36,1) forwards;
        }

        .ef-mobile-nav-item {
          animation: efMenuItemIn 420ms cubic-bezier(.22,1,.36,1) both;
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(8, 24, 58, 0.08);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,249,252,0.96) 100%);
          box-shadow:
            0 18px 40px rgba(10, 20, 40, 0.08),
            inset 0 1px 0 rgba(255,255,255,0.95);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
        }

        .ef-mobile-nav-item::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 0;
          background: linear-gradient(180deg, var(--red), #ff6b6b);
          transition: width 180ms ease;
        }

        .ef-mobile-nav-item::after {
          content: "";
          position: absolute;
          top: -20%;
          right: -20%;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(220,38,38,0.10), transparent 70%);
          pointer-events: none;
        }

        .ef-mobile-nav-link:hover .ef-mobile-nav-item,
        .ef-mobile-nav-link:active .ef-mobile-nav-item {
          transform: translateY(-2px);
          box-shadow:
            0 22px 48px rgba(10, 20, 40, 0.12),
            inset 0 1px 0 rgba(255,255,255,0.95);
          border-color: rgba(220, 38, 38, 0.16);
        }

        .ef-mobile-nav-link:hover .ef-mobile-nav-item::before,
        .ef-mobile-nav-link:active .ef-mobile-nav-item::before {
          width: 6px;
        }

        .ef-mobile-nav-link:hover .ef-mobile-nav-arrow,
        .ef-mobile-nav-link:active .ef-mobile-nav-arrow {
          transform: translateX(4px);
          color: var(--red);
        }

        .ef-mobile-nav-arrow {
          transition: transform 180ms ease, color 180ms ease;
        }

        .ef-menu-shell {
          background:
            radial-gradient(circle at top left, rgba(220,38,38,0.10), transparent 28%),
            radial-gradient(circle at top right, rgba(18,43,92,0.08), transparent 30%),
            linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,248,250,0.98) 100%);
        }

        .ef-menu-top-card {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 28px;
          border: 1px solid rgba(8, 24, 58, 0.08);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(246,248,252,0.94) 100%);
          box-shadow:
            0 20px 45px rgba(10, 20, 40, 0.08),
            inset 0 1px 0 rgba(255,255,255,0.96);
          width: 100%;
          min-height: 156px;
          padding: 20px 18px;
          margin: 0 0 18px 0;
          box-sizing: border-box;
          text-align: center;
        }

        .ef-menu-top-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/brand/ribbons-bg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          opacity: 0.03;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .ef-menu-top-card::after {
          content: "";
          position: absolute;
          right: -40px;
          bottom: -40px;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(220,38,38,0.12), transparent 70%);
          pointer-events: none;
        }

        .ef-menu-hero-logo {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .ef-menu-hero-logo img {
          width: 270px;
          max-width: 88%;
          height: auto;
          display: block;
        }

        .ef-menu-cta {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background:
            linear-gradient(135deg, #163d8f 0%, #214fb3 52%, #2f67d8 100%);
          box-shadow: 0 24px 46px rgba(22, 61, 143, 0.28);
        }

        .ef-menu-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 30%),
            linear-gradient(90deg, rgba(255,255,255,0.08), transparent 45%);
          pointer-events: none;
        }

        .ef-hamburger {
          position: relative;
          width: 22px;
          height: 16px;
        }

        .ef-hamburger span {
          position: absolute;
          left: 0;
          width: 22px;
          height: 2.5px;
          border-radius: 999px;
          background: var(--navy);
          transition: transform 180ms ease, width 180ms ease;
        }

        .ef-hamburger span:nth-child(1) { top: 0; }
        .ef-hamburger span:nth-child(2) { top: 6.5px; width: 16px; }
        .ef-hamburger span:nth-child(3) { top: 13px; }

        .ef-hamburger.is-open span:nth-child(1) {
          transform: translateY(1px);
          width: 18px;
        }

        .ef-hamburger.is-open span:nth-child(2) {
          width: 22px;
        }

        .ef-hamburger.is-open span:nth-child(3) {
          transform: translateY(-1px);
          width: 14px;
        }
      `}</style>

      <div className="ef-desktop-header">
        <header className="ef-header-shell">
          <div className="ef-header-inner">
            <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-6">
              <div />

              <Link href="/" className="justify-self-center flex items-center">
                <img
                  src="/brand/logo.png"
                  alt="English Fitness"
                  className="h-auto w-[190px] md:w-[210px] lg:w-[235px] xl:w-[255px]"
                />
              </Link>

              <div className="justify-self-end">
                <Link
                  href="/book"
                  className="group ef-booknow-link"
                  aria-label="Book a session"
                >
                  <img
                    src="/brand/booknow.png"
                    alt="Book Now"
                    className="h-auto w-[150px] md:w-[170px] lg:w-[190px] xl:w-[210px]"
                  />
                </Link>
              </div>
            </div>

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

            <div className="ef-header-accent" />
          </div>
        </header>
      </div>

      <div className="ef-mobile-header">
        <header className="ef-header-shell">
          <div className="ef-header-inner">
            <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-4">
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  onClick={() => setOpen((prev) => !prev)}
                  style={{
                    width: 48,
                    height: 48,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className={`ef-hamburger ${open ? "is-open" : ""}`}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </button>
              </div>

              <Link
                href="/"
                className="justify-self-center flex items-center"
                style={{ justifyContent: "center" }}
              >
                <img
                  src="/brand/logo.png"
                  alt="English Fitness"
                  className="h-auto w-[182px]"
                />
              </Link>

              <div className="justify-self-end">
                <Link
                  href="/book"
                  className="group ef-booknow-link"
                  aria-label="Book a session"
                >
                  <img
                    src="/brand/booknow.png"
                    alt="Book Now"
                    className="h-auto w-[110px]"
                  />
                </Link>
              </div>
            </div>

            <div className="ef-header-accent" />
          </div>
        </header>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div
            className="ef-mobile-menu-inner ef-menu-shell"
            style={{
              height: "100dvh",
              width: "100%",
              boxSizing: "border-box",
              padding: "20px 18px 24px 18px",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr 48px",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
                flexShrink: 0,
              }}
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                style={{
                  width: 48,
                  height: 48,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                }}
              >
                <div className="ef-hamburger is-open" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </button>

              <Link
                href="/"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  transform: "translateX(-6px)",
                }}
              >
                <img
                  src="/brand/logo.png"
                  alt="English Fitness"
                  style={{ width: 170, height: "auto", cursor: "pointer" }}
                />
              </Link>

              <div />
            </div>

            <div className="ef-menu-top-card">
              <div className="ef-menu-hero-logo">
                <img
                  src="/brand/getfitgetfluent.png"
                  alt="Get Fit Get Fluent"
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 12,
                width: "100%",
                alignContent: "start",
                flex: "0 0 auto",
              }}
            >
              {nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="ef-mobile-nav-link"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    width: "100%",
                  }}
                >
                  <div
                    className="ef-mobile-nav-item"
                    style={{
                      padding: "17px 18px 17px 18px",
                      animationDelay: `${170 + index * 60}ms`,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "34px 1fr auto",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 999,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(13,34,71,0.06)",
                          color: "rgba(13,34,71,0.72)",
                          fontSize: 12,
                          fontWeight: 900,
                          letterSpacing: "0.06em",
                          flexShrink: 0,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            color: "var(--navy)",
                            fontSize: 20,
                            fontWeight: 900,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            marginTop: 4,
                            color: "rgba(0,0,0,0.52)",
                            fontSize: 12,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.sub}
                        </div>
                      </div>

                      <div
                        className="ef-mobile-nav-arrow"
                        style={{
                          color: "rgba(13,34,71,0.30)",
                          fontSize: 24,
                          fontWeight: 700,
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                display: "block",
                width: "100%",
                marginTop: 16,
                flexShrink: 0,
              }}
            >
              <div
                className="ef-menu-cta"
                style={{
                  padding: "18px 18px 18px 18px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "#ffffff",
                    fontSize: 20,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Book a Session
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    marginTop: 6,
                    color: "rgba(255,255,255,0.82)",
                    fontSize: 12,
                    lineHeight: 1.5,
                    maxWidth: 260,
                  }}
                >
                  Start your journey with expert coaching for fitness,
                  confidence, and real-world English.
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    marginTop: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#ffffff",
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Start now <span style={{ color: "#cfe0ff" }}>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}