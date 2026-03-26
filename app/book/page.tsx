"use client";

import Link from "next/link";

const FORM_VIEW_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdbp2LZS02f8ft_-Vo9JxNQJgXxRTT62rRIQTAm10-y6XRSHw/viewform";

const FORM_EMBED_URL = `${FORM_VIEW_URL}?embedded=true`;

export default function BookPage() {
  return (
    <div style={{ paddingTop: 90, paddingBottom: 140 }}>
      <style>{`
        .book-header-card,
        .book-form-card,
        .book-terms-card {
          position: relative;
          overflow: hidden;
        }

        .book-header-card::before,
        .book-form-card::before,
        .book-terms-card::before {
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

        .book-header-card::after,
        .book-terms-card::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -80px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.07), transparent 72%);
          pointer-events: none;
        }

        .book-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
          gap: 24px;
          align-items: start;
        }

        .book-header-title {
          font-size: 36px;
          line-height: 1.1;
        }

        .book-form-iframe {
          width: 100%;
          height: 820px;
          border: 0;
          display: block;
        }

        @media (max-width: 980px) {
          .book-main-grid {
            grid-template-columns: 1fr;
          }

          .book-form-iframe {
            height: 780px;
          }
        }

        @media (max-width: 768px) {
          .book-page-wrap {
            padding-top: 72px !important;
            padding-bottom: 110px !important;
          }

          .book-header-card {
            padding: 34px 24px !important;
            border-radius: 24px !important;
            margin-bottom: 20px !important;
          }

          .book-form-card,
          .book-terms-card {
            border-radius: 24px !important;
          }

          .book-form-card {
            min-height: 0 !important;
          }

          .book-terms-card {
            padding: 26px 22px !important;
          }

          .book-header-title {
            font-size: 28px !important;
            line-height: 1.12 !important;
          }

          .book-header-copy {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }

          .book-button-row {
            gap: 10px !important;
          }

          .book-button {
            width: 100%;
            justify-content: center !important;
          }

          .book-form-iframe {
            height: 720px !important;
          }

          .book-note {
            margin-top: 12px !important;
            font-size: 12px !important;
            padding: 0 4px !important;
          }
        }

        @media (max-width: 480px) {
          .book-page-wrap {
            padding-top: 60px !important;
            padding-bottom: 90px !important;
          }

          .book-header-card {
            padding: 28px 20px !important;
          }

          .book-terms-card {
            padding: 24px 18px !important;
          }

          .book-header-title {
            font-size: 24px !important;
          }

          .book-form-iframe {
            height: 660px !important;
          }
        }
      `}</style>

      <div className="book-page-wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* Page Header Bubble */}
        <section
          className="book-header-card"
          style={{
            maxWidth: 920,
            margin: "0 auto 28px auto",
            backgroundColor: "#ffffff",
            padding: "46px 44px",
            borderRadius: 28,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow:
              "0 30px 70px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.6) inset",
          }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontSize: 14,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.55)",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Book
            </p>

            <div
              style={{
                marginTop: 10,
                height: 3,
                width: 56,
                borderRadius: 999,
                background: "var(--red)",
              }}
            />

            <h1
              className="book-header-title"
              style={{
                marginTop: 20,
                fontWeight: 800,
                color: "var(--navy)",
                marginBottom: 0,
                letterSpacing: "-0.03em",
              }}
            >
              Request a Session
            </h1>

            <p
              className="book-header-copy"
              style={{
                marginTop: 14,
                fontSize: 16,
                color: "rgba(0,0,0,0.72)",
                lineHeight: 1.7,
                maxWidth: 760,
                marginBottom: 0,
              }}
            >
              Fill out the request form below. After submitting, you’ll receive
              confirmation within 24 hours.
            </p>

            <div
              className="book-button-row"
              style={{
                marginTop: 22,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                className="book-button"
                href={FORM_VIEW_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.10)",
                  background: "linear-gradient(135deg, #163d8f 0%, #214fb3 52%, #2f67d8 100%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 16px 30px rgba(22, 61, 143, 0.22)",
                }}
              >
                Open form in new tab
              </a>

              <Link
                className="book-button"
                href="/pricing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 16px",
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.10)",
                  background: "#ffffff",
                  color: "var(--navy)",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                View Pricing
              </Link>
            </div>

            <div
              style={{
                marginTop: 24,
                padding: "18px 18px 16px",
                borderRadius: 18,
                border: "1px solid rgba(0,0,0,0.08)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.96) 100%)",
                maxWidth: 760,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--navy)",
                  letterSpacing: "-0.01em",
                }}
              >
                Prefer to reach out directly?
              </p>

              <p
                style={{
                  marginTop: 8,
                  marginBottom: 0,
                  fontSize: 15,
                  color: "rgba(0,0,0,0.72)",
                  lineHeight: 1.7,
                }}
              >
                Alternatively, you can contact us directly via email or LINE and
                we’ll respond as soon as possible.
              </p>

              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a
                  href="mailto:englishfitness2024@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.10)",
                    background: "#ffffff",
                    color: "var(--navy)",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Email Us
                </a>

                <a
                  href="https://line.me/R/ti/p/@209aherv"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "#06C755",
                    color: "#ffffff",
                    fontWeight: 800,
                    textDecoration: "none",
                    boxShadow: "0 12px 24px rgba(6, 199, 85, 0.20)",
                  }}
                >
                  Contact via LINE
                </a>
              </div>

              <p
                style={{
                  marginTop: 12,
                  marginBottom: 0,
                  fontSize: 13,
                  color: "rgba(0,0,0,0.58)",
                  lineHeight: 1.7,
                }}
              >
                englishfitness2024@gmail.com
              </p>
            </div>
          </div>
        </section>

        {/* Form + Terms */}
        <div
          className="book-main-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Embedded Google Form */}
          <section
            className="book-form-card"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 28,
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow:
                "0 30px 70px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.6) inset",
              overflow: "hidden",
              minHeight: 720,
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <iframe
                title="English Fitness Booking Request Form"
                src={FORM_EMBED_URL}
                className="book-form-iframe"
                loading="lazy"
              />
            </div>
          </section>

          {/* Terms & Conditions */}
          <aside
            className="book-terms-card"
            style={{
              backgroundColor: "#ffffff",
              padding: "34px 30px",
              borderRadius: 28,
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow:
                "0 30px 70px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.6) inset",
            }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: 14,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.55)",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Terms & Conditions
              </p>

              <div
                style={{
                  marginTop: 10,
                  height: 3,
                  width: 56,
                  borderRadius: 999,
                  background: "var(--red)",
                }}
              />

              <div
                style={{
                  marginTop: 18,
                  color: "rgba(0,0,0,0.75)",
                  lineHeight: 1.7,
                  fontSize: 16,
                }}
              >
                <p style={{ marginTop: 0 }}>
                  By submitting the booking request, you agree to the following:
                </p>

                <ul style={{ paddingLeft: 18, marginTop: 12 }}>
                  <li>
                    <strong>Payment to confirm:</strong> Trial sessions and
                    single sessions must be paid before the booking is
                    confirmed.
                  </li>
                  <li>
                    <strong>Refund / cancellation (24h rule):</strong> To
                    receive a refund, cancellations must be made at least 24
                    hours before the scheduled session time.
                  </li>
                  <li>
                    <strong>Packages — same-day cancellation:</strong> If you
                    are on a session package and cancel on the day of your
                    session, you will lose one session from your package.
                  </li>
                  <li>
                    <strong>Rescheduling:</strong> Where possible, reschedules
                    are offered if requested 24+ hours in advance, subject to
                    trainer availability.
                  </li>
                  <li>
                    <strong>Late arrival:</strong> Sessions start at the
                    scheduled time. Late arrivals may reduce training time to
                    avoid impacting other bookings.
                  </li>
                  <li>
                    <strong>Health & safety:</strong> You confirm you are fit to
                    exercise, or have medical clearance if required. Please
                    inform the trainer of injuries, conditions, or pain before
                    and during training.
                  </li>
                  <li>
                    <strong>Training advice:</strong> Coaching is educational
                    and fitness-focused. It is not medical treatment. Always
                    follow professional medical guidance when relevant.
                  </li>
                  <li>
                    <strong>Location & equipment:</strong> Sessions may be held
                    at a gym, studio, or agreed location. Any facility fees, if
                    applicable, will be communicated in advance.
                  </li>
                  <li>
                    <strong>Respectful conduct:</strong> A safe and respectful
                    environment is required. The trainer may end a session for
                    inappropriate behavior.
                  </li>
                  <li>
                    <strong>Changes & force majeure:</strong> Rare circumstances
                    such as illness, severe weather, transport disruption, or
                    facility issues may require schedule changes. In those
                    cases, we’ll reschedule as soon as possible.
                  </li>
                </ul>

                <p
                  style={{
                    marginTop: 18,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgba(0,0,0,0.85)",
                    marginBottom: 0,
                  }}
                >
                  By submitting a booking request, you acknowledge and agree to
                  these terms.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Responsive note */}
        <div
          className="book-note"
          style={{
            maxWidth: 1100,
            margin: "14px auto 0 auto",
            fontSize: 13,
            color: "rgba(0,0,0,0.60)",
          }}
        >
          If the embedded form looks strange on your device, use “Open form in
          new tab” for the best experience.
        </div>
      </div>
    </div>
  );
}