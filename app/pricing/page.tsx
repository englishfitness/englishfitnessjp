"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("pricing-reveal--in");
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

function PricingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className={`pricing-card pricing-reveal ${className}`}
      style={{
        maxWidth: 860,
        width: "100%",
        margin: "0 auto",
      }}
    >
      {children}
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <style>{`
        @keyframes pricingSlideUp {
          0% {
            opacity: 0;
            transform: translateY(34px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pricing-page {
          padding-top: 44px;
          padding-bottom: 84px;
        }

        .pricing-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 66px;
        }

        .pricing-reveal {
          opacity: 0;
          transform: translateY(34px);
        }

        .pricing-reveal.pricing-reveal--in {
          animation: pricingSlideUp 820ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .pricing-card {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 30px;
          box-shadow:
            0 30px 70px rgba(0,0,0,0.14),
            0 1px 0 rgba(255,255,255,0.7) inset;
          padding: 34px 34px 32px 34px;
          box-sizing: border-box;
        }

        .pricing-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/brand/ribbons-bg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          opacity: 0.022;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .pricing-card::after {
          content: "";
          position: absolute;
          right: -90px;
          bottom: -90px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(220,38,38,0.06), transparent 72%);
          pointer-events: none;
        }

        .pricing-card-inner {
          position: relative;
          z-index: 1;
        }

        .pricing-accent {
          width: 56px;
          height: 4px;
          border-radius: 999px;
          background: var(--red);
        }

        .pricing-header-title {
          margin: 22px 0 0 0;
          font-size: 42px;
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--navy);
        }

        .pricing-copy {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.72;
          color: rgba(0,0,0,0.72);
        }

        .pricing-top-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
        }

        .pricing-card-title {
          margin: 0;
          font-size: 34px;
          line-height: 1.12;
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.03em;
        }

        .pricing-price {
          flex-shrink: 0;
          font-size: 50px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #111111;
        }

        .pricing-list {
          margin: 22px 0 0 0;
          padding-left: 0;
          list-style: none;
          color: rgba(0,0,0,0.72);
          font-size: 17px;
          line-height: 1.72;
        }

        .pricing-list li {
          position: relative;
          padding-left: 20px;
          margin-top: 10px;
        }

        .pricing-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.72em;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: var(--red);
          transform: translateY(-50%);
        }

        .pricing-note {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.7;
          color: rgba(0,0,0,0.82);
        }

        .pricing-note-strong {
          font-weight: 700;
        }

        .pricing-popular {
          border-color: rgba(220,38,38,0.16);
          box-shadow:
            0 34px 80px rgba(0,0,0,0.14),
            0 1px 0 rgba(255,255,255,0.7) inset;
        }

        .pricing-badge {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 12px;
          background: rgba(220,38,38,0.10);
          color: var(--red);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .pricing-subsection-title {
          margin: 0 0 10px 0;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 700;
          color: rgba(0,0,0,0.86);
        }

        .pricing-subsection-copy {
          margin: 0 0 18px 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--red);
          font-weight: 700;
        }

        .pricing-divider {
          width: 56px;
          height: 4px;
          border-radius: 999px;
          background: var(--red);
          margin-top: 34px;
        }

        .pricing-cta-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 8px;
          text-align: center;
        }

        .pricing-cta-link {
          display: inline-flex;
          justify-content: center;
        }

        .pricing-cta-image {
          width: 340px;
          max-width: 86vw;
          height: auto;
          transition: transform 200ms ease;
        }

        .pricing-cta-link:hover .pricing-cta-image {
          transform: scale(1.05);
        }

        .pricing-cta-text {
          margin-top: 16px;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(0,0,0,0.60);
          letter-spacing: 0.03em;
        }

        @media (max-width: 900px) {
          .pricing-header-title {
            font-size: 36px;
          }

          .pricing-card-title {
            font-size: 30px;
          }

          .pricing-price {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .pricing-page {
            padding-top: 30px;
            padding-bottom: 68px;
          }

          .pricing-stack {
            gap: 28px;
          }

          .pricing-card {
            border-radius: 24px;
            padding: 26px 22px 24px 22px;
          }

          .pricing-header-title {
            margin-top: 18px;
            font-size: 28px;
            line-height: 1.12;
          }

          .pricing-copy {
            margin-top: 14px;
            font-size: 16px;
            line-height: 1.68;
          }

          .pricing-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .pricing-card-title {
            font-size: 24px;
          }

          .pricing-price {
            font-size: 32px;
          }

          .pricing-list {
            margin-top: 18px;
            font-size: 15px;
            line-height: 1.68;
          }

          .pricing-note {
            margin-top: 18px;
            font-size: 15px;
          }

          .pricing-divider {
            margin-top: 28px;
          }

          .pricing-subsection-title {
            font-size: 18px;
          }

          .pricing-subsection-copy {
            font-size: 14px;
            margin-bottom: 14px;
          }

          .pricing-cta-image {
            width: 260px;
            max-width: 80vw;
          }

          .pricing-cta-text {
            margin-top: 12px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .pricing-page {
            padding-top: 22px;
            padding-bottom: 54px;
          }

          .pricing-card {
            padding: 22px 18px 20px 18px;
            border-radius: 22px;
          }

          .pricing-header-title {
            font-size: 24px;
          }

          .pricing-copy {
            font-size: 15px;
          }

          .pricing-card-title {
            font-size: 22px;
          }

          .pricing-price {
            font-size: 28px;
          }

          .pricing-list {
            font-size: 14px;
          }

          .pricing-note {
            font-size: 14px;
          }

          .pricing-badge {
            font-size: 11px;
            padding: 7px 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pricing-reveal,
          .pricing-reveal.pricing-reveal--in {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }

          .pricing-cta-image {
            transition: none !important;
          }
        }
      `}</style>

      <div className="pricing-stack">
        {/* Header */}
        <PricingCard>
          <div className="pricing-card-inner">
            <div className="pricing-accent" />

            <h1 className="pricing-header-title">
              Premium Coaching. Clear Structure. Real Results.
            </h1>

            <p className="pricing-copy">
              English Fitness combines structured strength training with natural
              English conversation to build stronger bodies, stronger habits,
              and stronger confidence.
            </p>
          </div>
        </PricingCard>

        {/* Trial */}
        <PricingCard>
          <div className="pricing-card-inner">
            <div className="pricing-accent" />

            <div className="pricing-top-row" style={{ marginTop: 22 }}>
              <h2 className="pricing-card-title">Trial Session</h2>
              <div className="pricing-price">¥5,000</div>
            </div>

            <p className="pricing-copy">
              Strength assessment + goal consultation + relaxed English
              conversation. You leave with clarity, direction, and a clear
              improvement roadmap.
            </p>
          </div>
        </PricingCard>

        {/* Single */}
        <PricingCard>
          <div className="pricing-card-inner">
            <div className="pricing-accent" />

            <div className="pricing-top-row" style={{ marginTop: 22 }}>
              <h2 className="pricing-card-title">Single Session</h2>
              <div className="pricing-price">¥7,500</div>
            </div>

            <ul className="pricing-list">
              <li>Structured strength training</li>
              <li>Technique correction &amp; performance feedback</li>
              <li>Natural English conversation practice</li>
              <li>Tailored training plan</li>
              <li>Nutrition guidance</li>
            </ul>

            <p className="pricing-note pricing-note-strong">
              This is full coaching — not just a workout.
            </p>
          </div>
        </PricingCard>

        {/* 5 Pack */}
        <PricingCard>
          <div className="pricing-card-inner">
            <div className="pricing-accent" />

            <div className="pricing-top-row" style={{ marginTop: 22 }}>
              <h2 className="pricing-card-title">5 Sessions</h2>
              <div className="pricing-price">¥35,000</div>
            </div>

            <ul className="pricing-list">
              <li>Everything in single sessions</li>
              <li>Weekly feedback &amp; plan adjustments</li>
              <li>Habit tracking &amp; progress sheet</li>
              <li>English Performance Assignments</li>
            </ul>

            <p className="pricing-note">Consistency builds momentum.</p>
          </div>
        </PricingCard>

        {/* 10 Pack */}
        <PricingCard className="pricing-popular">
          <div className="pricing-card-inner">
            <div className="pricing-accent" />

            <div className="pricing-top-row" style={{ marginTop: 22 }}>
              <div style={{ minWidth: 0 }}>
                <div className="pricing-badge">Most Popular</div>
                <h2 className="pricing-card-title" style={{ marginTop: 14 }}>
                  10 Sessions
                </h2>
              </div>
              <div className="pricing-price">¥67,500</div>
            </div>

            <ul className="pricing-list">
              <li>Everything in the 5-session package</li>
              <li>Ongoing goal refinement</li>
              <li>Priority scheduling</li>
            </ul>

            <p className="pricing-note pricing-note-strong">
              This is where transformation happens.
            </p>

            <div className="pricing-divider" />

            <div style={{ marginTop: 22 }}>
              <h3 className="pricing-subsection-title">
                Founding Member Benefits
              </h3>

              <p className="pricing-subsection-copy">
                Only 20 Founding Member spots available.
              </p>

              <ul className="pricing-list" style={{ marginTop: 0 }}>
                <li>Locked-in pricing for 12 months</li>
                <li>Priority booking access</li>
                <li>Early access to English Fitness events</li>
                <li>Recognition as an original member</li>
              </ul>
            </div>
          </div>
        </PricingCard>

        {/* CTA */}
        <div className="pricing-cta-wrap">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbp2LZS02f8ft_-Vo9JxNQJgXxRTT62rRIQTAm10-y6XRSHw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="pricing-cta-link"
          >
            <img
              src="/brand/booknow.png"
              alt="Book Now"
              className="pricing-cta-image"
            />
          </a>

          <p className="pricing-cta-text">
            After submitting, you’ll receive confirmation within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}