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
          0% { opacity: 0; transform: translateY(38px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .ef-card-enter { opacity: 0; transform: translateY(38px); }
        .ef-card-enter.ef-card-enter--in {
          animation: efSlideIn 850ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .ef-card-enter, .ef-card-enter.ef-card-enter--in {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Spacer for slide-in feel */}
      <div style={{ height: "18vh" }} />

      {/* SOLID WHITE BUBBLE CARD */}
      <section
        ref={ref}
        className={[
          "mx-auto w-full max-w-5xl rounded-[30px] border border-black/10",
          "ef-card-enter",
          inView ? "ef-card-enter--in" : "",
        ].join(" ")}
        style={{
          backgroundColor: "#ffffff",
          opacity: 1,
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
        {/* Top Header */}
        <div style={{ marginBottom: 36 }}>
          <p
            style={{
              fontSize: 14, // ✅ bumped to match other subtitles
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

        {/* Photo + Text (forced side-by-side) */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            alignItems: "flex-start",
          }}
        >
          {/* Photo */}
          <div style={{ width: 280, flexShrink: 0 }}>
            <div
              style={{
                width: 260,
                height: 260,
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.10)",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                paddingLeft: 24,
                paddingRight: 24,
                boxShadow:
                  "0 18px 40px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.7) inset",
                marginTop: 6,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(0,0,0,0.55)",
                  lineHeight: 1.45,
                }}
              >
                Photo coming soon
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    color: "rgba(0,0,0,0.40)",
                  }}
                >
                  (after next week’s shoot)
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1
              style={{
                fontSize: 36,
                lineHeight: 1.1,
                fontWeight: 800,
                color: "var(--navy)",
                margin: 0,
              }}
            >
              Hi, I’m Charlie — founder of English Fitness.
            </h1>

            <div
              style={{
                marginTop: 22,
                color: "rgba(0,0,0,0.75)",
                lineHeight: 1.7,
              }}
            >
              <p>
                I began my journey in Japan as an English teacher, and along the way discovered how
                much I love helping people grow through health and fitness. Supporting someone as
                they build strength, confidence, and lasting habits is something I genuinely care about.
              </p>

              <p>
                I’m an ISSA-certified Nutrition Coach and a certified Strength &amp; Conditioning Coach
                — and a powerlifter. You’ll often see me eating chicken, rice, and broccoli… but my
                favourite food is pizza.
              </p>

              <p>
                Outside the gym, I enjoy reading and listening to music. I believe fitness should be
                structured, sustainable, and positive — something that fits into your life and builds
                real confidence over time.
              </p>

              <p style={{ fontWeight: 600, color: "rgba(0,0,0,0.80)" }}>
                I look forward to working together and helping you become stronger — physically and in your
                English confidence.
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {/* Qualifications */}
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

            <ul style={{ marginTop: 18, color: "rgba(0,0,0,0.75)", lineHeight: 1.7 }}>
              <li>ISSA Certified Nutrition Coach</li>
              <li>Certified Strength &amp; Conditioning Coach</li>
              <li>Powerlifter</li>
              <li>Experience supporting English learners in Japan</li>
            </ul>
          </div>

          {/* Philosophy */}
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

            <div style={{ marginTop: 18, color: "rgba(0,0,0,0.75)", lineHeight: 1.7 }}>
              <p>I believe real progress comes from consistency, not extremes.</p>

              <p>
                Quick fixes fade. Sustainable habits last. Whether we’re building physical strength or
                improving English confidence, growth happens through steady, structured effort over time.
              </p>

              <p>
                Training should challenge you — but it should also feel supportive and sustainable. Rep by
                rep, conversation by conversation, confidence grows naturally.
              </p>

              <p>
                Strength isn’t just physical. It’s resilience, discipline, and belief in yourself. When we
                train together, we build all three.
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
      </section>

      <div style={{ height: 64 }} />
    </div>
  );
}