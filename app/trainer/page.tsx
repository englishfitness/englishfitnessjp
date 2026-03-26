"use client";

import { useEffect, useRef, useState } from "react";

export default function TrainerPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ paddingBottom: 96 }}>
      <style>{`
        @keyframes efSlideIn {
          0% {
            opacity: 0;
            transform: translateY(38px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ef-card-enter {
          opacity: 0;
          transform: translateY(38px);
        }

        .ef-card-enter.ef-card-enter--in {
          animation: efSlideIn 850ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .trainer-card {
          position: relative;
        }

        .trainer-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/brand/ribbons-bg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          opacity: 0.028;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .trainer-card::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -80px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.08), transparent 72%);
          pointer-events: none;
        }

        .trainer-layout {
          display: flex;
          flex-direction: row;
          gap: 40px;
          align-items: flex-start;
        }

        .trainer-photo-wrap {
          width: 280px;
          flex-shrink: 0;
        }

        .trainer-photo-circle {
          width: 260px;
          height: 260px;
          margin-top: 6px;
        }

        .trainer-heading {
          font-size: 36px;
        }

        .trainer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        @media (max-width: 768px) {
          .trainer-card {
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-top: 34px !important;
            padding-bottom: 38px !important;
            border-radius: 24px !important;
          }

          .trainer-layout {
            flex-direction: column !important;
            gap: 28px !important;
          }

          .trainer-photo-wrap {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }

          .trainer-photo-circle {
            width: 200px !important;
            height: 200px !important;
            margin-top: 0 !important;
          }

          .trainer-heading {
            font-size: 28px !important;
            line-height: 1.12 !important;
          }

          .trainer-grid {
            grid-template-columns: 1fr !important;
            gap: 34px !important;
          }
        }

        @media (max-width: 480px) {
          .trainer-card {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 30px !important;
            padding-bottom: 34px !important;
          }

          .trainer-heading {
            font-size: 25px !important;
          }

          .trainer-photo-circle {
            width: 180px !important;
            height: 180px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ef-card-enter,
          .ef-card-enter.ef-card-enter--in {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <div style={{ height: "18vh" }} />

      <section
        ref={ref}
        className={[
          "mx-auto w-full max-w-5xl rounded-[30px] border border-black/10",
          "ef-card-enter",
          inView ? "ef-card-enter--in" : "",
          "trainer-card",
        ].join(" ")}
        style={{
          backgroundColor: "#ffffff",
          boxShadow:
            "0 34px 80px rgba(0,0,0,0.18), 0 2px 0 rgba(255,255,255,0.7) inset",
          boxSizing: "border-box",
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 44,
          paddingBottom: 48,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Top header */}
          <div style={{ marginBottom: 36 }}>
            <p
              style={{
                fontSize: 14,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.55)",
                margin: 0,
                fontWeight: 600,
              }}
            >
              Trainer
            </p>

            <div
              style={{
                marginTop: 10,
                height: 3,
                width: 64,
                borderRadius: 999,
                background: "var(--red)",
              }}
            />
          </div>

          {/* Photo + text */}
          <div className="trainer-layout">
            <div className="trainer-photo-wrap">
              <div
                className="trainer-photo-circle"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.10)",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 0,
                  overflow: "hidden",
                  boxShadow:
                    "0 18px 40px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.7) inset",
                  boxSizing: "border-box",
                }}
              >
                <img
                  src="/brand/trainer.png"
                  alt="Trainer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.08)",
                  }}
                />
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h1
                className="trainer-heading"
                style={{
                  lineHeight: 1.1,
                  fontWeight: 800,
                  color: "var(--navy)",
                  margin: 0,
                  letterSpacing: "-0.03em",
                }}
              >
                Hi, I’m Charlie — founder of English Fitness.
              </h1>

              <div
                style={{
                  marginTop: 22,
                  color: "rgba(0,0,0,0.75)",
                  lineHeight: 1.7,
                  fontSize: 16,
                }}
              >
                <p style={{ marginTop: 0 }}>
                  I began my journey in Japan as an English teacher, and along
                  the way discovered how much I love helping people grow through
                  health and fitness. Supporting someone as they build strength,
                  confidence, and lasting habits is something I genuinely care
                  about.
                </p>

                <p>
                  I’m an ISSA-certified Nutrition Coach and a certified Strength
                  &amp; Conditioning Coach — and a powerlifter. You’ll often see
                  me eating chicken, rice, and broccoli… but my favourite food
                  is pizza.
                </p>

                <p>
                  Outside the gym, I enjoy reading and listening to music. I
                  believe fitness should be structured, sustainable, and
                  positive — something that fits into your life and builds real
                  confidence over time.
                </p>

                <p
                  style={{
                    fontWeight: 600,
                    color: "rgba(0,0,0,0.82)",
                    marginBottom: 0,
                  }}
                >
                  I look forward to working together and helping you become
                  stronger — physically and in your English confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              margin: "44px 0",
              height: 1,
              width: "100%",
              background: "rgba(0,0,0,0.10)",
            }}
          />

          {/* Lower sections */}
          <div className="trainer-grid">
            <div>
              <p
                style={{
                  fontSize: 14,
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.55)",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Qualifications
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

              <ul
                style={{
                  marginTop: 18,
                  color: "rgba(0,0,0,0.75)",
                  lineHeight: 1.7,
                  paddingLeft: 22,
                }}
              >
                <li>ISSA Certified Personal Trainer</li>
                <li>ISSA Certified Nutrition Coach</li>
                <li>Certified Strength &amp; Conditioning Coach</li>
                <li>Powerlifter</li>
                <li>Experience supporting English learners in Japan</li>
              </ul>
            </div>

            <div>
              <p
                style={{
                  fontSize: 14,
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.55)",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                My Coaching Philosophy
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
                  I believe real progress comes from consistency, not extremes.
                </p>

                <p>
                  Quick fixes fade. Sustainable habits last. Whether we’re
                  building physical strength or improving English confidence,
                  growth happens through steady, structured effort over time.
                </p>

                <p>
                  Training should challenge you — but it should also feel
                  supportive and sustainable. Rep by rep, conversation by
                  conversation, confidence grows naturally.
                </p>

                <p style={{ marginBottom: 0 }}>
                  Strength isn’t just physical. It’s resilience, discipline, and
                  belief in yourself. When we train together, we build all
                  three.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div style={{ marginTop: 44, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                height: 3,
                width: 96,
                borderRadius: 999,
                background: "var(--red)",
                opacity: 0.8,
              }}
            />
          </div>
        </div>
      </section>

      <div style={{ height: 64 }} />
    </div>
  );
}