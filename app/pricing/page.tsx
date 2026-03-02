"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("reveal--in");
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`speech-bubble reveal ${className}`}
      style={{ maxWidth: 860, width: "100%", margin: "0 auto" }}
    >
      {children}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ paddingTop: 44, paddingBottom: 84 }}>
      <div className="flex flex-col items-center" style={{ gap: 66 }}>

        {/* Header */}
        <Card>
          <div className="speech-accent" />
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Premium Coaching. Clear Structure. Real Results.
          </h1>
          <p className="mt-6 text-black/70 leading-relaxed">
            English Fitness combines structured strength training with natural
            English conversation to build stronger bodies, stronger habits, and
            stronger confidence.
          </p>
        </Card>

        {/* Trial */}
        <Card>
          <div className="speech-accent" />
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-2xl font-semibold">Trial Session</h2>
            <div className="price-big">¥5,000</div>
          </div>
          <p className="mt-6 text-black/70 leading-relaxed">
            Strength assessment + goal consultation + relaxed English conversation.
            You leave with clarity, direction, and a clear improvement roadmap.
          </p>
        </Card>

        {/* Single */}
        <Card>
          <div className="speech-accent" />
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-2xl font-semibold">Single Session</h2>
            <div className="price-big">¥7,500</div>
          </div>

          <ul className="mt-6 space-y-3 text-black/70 leading-relaxed">
            <li>• Structured strength training</li>
            <li>• Technique correction & performance feedback</li>
            <li>• Natural English conversation practice</li>
            <li>• Tailored training plan</li>
            <li>• Nutrition guidance</li>
          </ul>

          <p className="mt-6 font-medium text-black/80">
            This is full coaching — not just a workout.
          </p>
        </Card>

        {/* 5 Pack */}
        <Card>
          <div className="speech-accent" />
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-2xl font-semibold">5 Sessions</h2>
            <div className="price-big">¥35,000</div>
          </div>

          <ul className="mt-6 space-y-3 text-black/70 leading-relaxed">
            <li>• Everything in single sessions</li>
            <li>• Weekly feedback & plan adjustments</li>
            <li>• Habit tracking & progress sheet</li>
            <li>• English Performance Assignments</li>
          </ul>

          <p className="mt-6 text-black/80">Consistency builds momentum.</p>
        </Card>

        {/* 10 Pack */}
        <Card className="most-popular">
          <div className="speech-accent" />

          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <div className="badge">MOST POPULAR</div>
              <h2 className="mt-3 text-2xl font-semibold">10 Sessions</h2>
            </div>
            <div className="price-big shrink-0">¥67,500</div>
          </div>

          <ul className="mt-6 space-y-3 text-black/70 leading-relaxed">
            <li>• Everything in the 5-session package</li>
            <li>• Ongoing goal refinement</li>
            <li>• Priority scheduling</li>
          </ul>

          <p className="mt-6 font-semibold text-black/85">
            This is where transformation happens.
          </p>

          <div className="speech-accent mt-10" />

          <div className="mt-6 text-sm text-black/70 leading-relaxed">
            <h3 className="font-semibold text-base text-black/85 mb-2">
              Founding Member Benefits
            </h3>

            <p className="text-red-600 font-semibold mb-4">
              Only 20 Founding Member spots available.
            </p>

            <ul className="space-y-2">
              <li>• Locked-in pricing for 12 months</li>
              <li>• Priority booking access</li>
              <li>• Early access to English Fitness events</li>
              <li>• Recognition as an original member</li>
            </ul>
          </div>
        </Card>

        {/* CTA */}
        <div className="flex flex-col items-center mt-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbp2LZS02f8ft_-Vo9JxNQJgXxRTT62rRIQTAm10-y6XRSHw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src="/brand/booknow.png"
              alt="Book Now"
              style={{ width: 340 }}
              className="transition duration-200 group-hover:scale-105"
            />
          </a>

          <p className="mt-4 text-sm text-black/60 tracking-wide">
            After submitting, you’ll receive confirmation within 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
}