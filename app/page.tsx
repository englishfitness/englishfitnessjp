"use client";

import Link from "next/link";

const features = [
  {
    title: "Personal Training",
    desc: "Whether you’re just getting started or ready to level up, I’ll help you train with purpose, build real strength, and enjoy the process along the way.",
  },
  {
    title: "English Confidence",
    desc: "Sessions are a relaxed space to practise real English naturally, so little by little you feel more confident speaking and expressing yourself.",
  },
  {
    title: "Real Progress",
    desc: "I’m all about steady wins, good energy, and results you can feel — stronger body, better habits, and more belief in yourself.",
  },
];

export default function HomePage() {
  return (
    <div className="ef-home-page">
      <style>{`
        @keyframes efHeroIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes efCardIn {
          0% {
            opacity: 0;
            transform: translateY(36px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes efCtaIn {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ef-home-page {
          padding-top: 12px;
          padding-bottom: 90px;
        }

        .ef-home-shell {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* HERO */

        .ef-home-hero {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(0,0,0,0.08);
          background: linear-gradient(180deg, #ffffff 0%, #f8f8fb 100%);
          box-shadow:
            0 34px 80px rgba(0,0,0,0.14),
            inset 0 1px 0 rgba(255,255,255,0.9);
          padding: 50px 38px 44px 38px;
          animation: efHeroIn 900ms cubic-bezier(.22,1,.36,1) both;
        }

        .ef-home-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/brand/ribbons-bg.png");
          background-size: cover;
          background-position: center;
          opacity: 0.022;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .ef-home-hero::after {
          content: "";
          position: absolute;
          right: -100px;
          bottom: -100px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(220,38,38,0.08), transparent 72%);
          pointer-events: none;
        }

        .ef-home-hero-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .ef-home-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 8px 14px;
          background: rgba(220,38,38,0.08);
          color: var(--red);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ef-home-title {
          margin: 20px 0 0 0;
          font-size: 60px;
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -0.055em;
          color: #1f4fb3;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.95),
            0 10px 24px rgba(31,79,179,0.12),
            2px 2px 0 rgba(220,38,38,0.12);
        }

        .ef-home-title-line {
          display: block;
        }

        .ef-home-title-line--accent {
          color: #193f8f;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.95),
            0 12px 26px rgba(31,79,179,0.14),
            3px 3px 0 rgba(220,38,38,0.14);
        }

        .ef-home-copy {
          max-width: 720px;
          margin: 22px auto 0 auto;
          font-size: 18px;
          line-height: 1.75;
          color: rgba(0,0,0,0.72);
        }

        /* FEATURE GRID */

        .ef-home-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .ef-home-card {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(8,24,58,0.08);
          background: linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%);
          box-shadow:
            0 24px 50px rgba(10,20,40,0.10),
            inset 0 1px 0 rgba(255,255,255,0.92);
          padding: 28px 26px 26px 26px;
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
          animation: efCardIn .9s cubic-bezier(.22,1,.36,1) both;
        }

        .ef-home-card:nth-child(1) { animation-delay: .15s; }
        .ef-home-card:nth-child(2) { animation-delay: .30s; }
        .ef-home-card:nth-child(3) { animation-delay: .45s; }

        .ef-home-card::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 0;
          background: linear-gradient(180deg, var(--red), #ff7b7b);
          transition: width .22s ease;
        }

        .ef-home-card::after {
          content: "";
          position: absolute;
          top: -18%;
          right: -18%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(31,79,179,0.08), transparent 70%);
          pointer-events: none;
        }

        .ef-home-card:hover {
          transform: translateY(-6px);
          border-color: rgba(220,38,38,0.14);
          box-shadow:
            0 34px 60px rgba(10,20,40,0.16),
            inset 0 1px 0 rgba(255,255,255,0.94);
        }

        .ef-home-card:hover::before {
          width: 6px;
        }

        .ef-home-card-number {
          position: relative;
          z-index: 1;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: rgba(13,34,71,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: .06em;
          color: rgba(13,34,71,0.72);
        }

        .ef-home-card-title {
          position: relative;
          z-index: 1;
          margin-top: 18px;
          font-size: 28px;
          font-weight: 800;
          line-height: 1.08;
          color: var(--navy);
          letter-spacing: -0.03em;
        }

        .ef-home-card-copy {
          position: relative;
          z-index: 1;
          margin-top: 14px;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(0,0,0,0.70);
        }

        /* CTA */

        .ef-home-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          animation: efCtaIn .85s cubic-bezier(.22,1,.36,1) both;
          animation-delay: .55s;
        }

        .ef-home-cta img {
          width: 340px;
          max-width: 85vw;
          transition: transform .2s ease;
        }

        .ef-home-cta img:hover {
          transform: scale(1.05);
        }

        .ef-home-cta-text {
          font-size: 14px;
          color: rgba(0,0,0,0.62);
        }

        /* RESPONSIVE */

        @media (max-width: 1024px) {
          .ef-home-grid {
            grid-template-columns: 1fr;
          }

          .ef-home-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .ef-home-page {
            padding-top: 0;
            padding-bottom: 64px;
          }

          .ef-home-shell {
            gap: 28px;
          }

          .ef-home-hero {
            padding: 34px 22px 30px 22px;
            border-radius: 24px;
          }

          .ef-home-title {
            font-size: 38px;
            line-height: 1.0;
          }

          .ef-home-copy {
            font-size: 15px;
            margin-top: 18px;
          }

          .ef-home-card {
            border-radius: 24px;
            padding: 22px;
          }

          .ef-home-card-title {
            font-size: 24px;
          }

          .ef-home-card-copy {
            font-size: 15px;
          }

          .ef-home-cta img {
            width: 260px;
            max-width: 82vw;
          }

          .ef-home-cta-text {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .ef-home-hero {
            padding: 28px 18px 24px 18px;
          }

          .ef-home-title {
            font-size: 32px;
          }

          .ef-home-copy {
            font-size: 14px;
          }

          .ef-home-card {
            padding: 20px 18px 18px 18px;
          }

          .ef-home-card-title {
            font-size: 22px;
          }

          .ef-home-card-copy {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ef-home-hero,
          .ef-home-card,
          .ef-home-cta {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .ef-home-card,
          .ef-home-cta img {
            transition: none !important;
          }
        }
      `}</style>

      <div className="ef-home-shell">
        <section className="ef-home-hero">
          <div className="ef-home-hero-inner">
            <div className="ef-home-kicker">English Fitness</div>

            <h1 className="ef-home-title">
              <span className="ef-home-title-line">Get fit</span>
              <span className="ef-home-title-line ef-home-title-line--accent">
                Get fluent
              </span>
            </h1>

            <p className="ef-home-copy">
              English Fitness is a place to train hard, laugh a little, and grow
              your confidence — both in the gym and in English. Through focused
              training and relaxed conversation, we build strength, momentum,
              and the kind of confidence that carries into everyday life.
            </p>
          </div>
        </section>

        <section className="ef-home-grid">
          {features.map((item, index) => (
            <div key={item.title} className="ef-home-card">
              <div className="ef-home-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="ef-home-card-title">{item.title}</h3>

              <p className="ef-home-card-copy">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="ef-home-cta">
          <Link href="/book" aria-label="Book a session">
            <img src="/brand/booknow.png" alt="Book Now" />
          </Link>

          <p className="ef-home-cta-text">
            Start your journey and receive confirmation within 24 hours.
          </p>
        </section>
      </div>
    </div>
  );
}