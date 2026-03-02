import Link from "next/link";

const FORM_VIEW_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdbp2LZS02f8ft_-Vo9JxNQJgXxRTT62rRIQTAm10-y6XRSHw/viewform";

// Google Forms embed version:
const FORM_EMBED_URL = `${FORM_VIEW_URL}?embedded=true`;

export default function BookPage() {
  return (
    <div style={{ paddingTop: 90, paddingBottom: 140 }}>
      {/* Page Header Bubble */}
      <section
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
          style={{
            marginTop: 20,
            fontSize: 36,
            fontWeight: 800,
            color: "var(--navy)",
            lineHeight: 1.1,
          }}
        >
          Request a Session
        </h1>

        <p
          style={{
            marginTop: 14,
            fontSize: 16,
            color: "rgba(0,0,0,0.72)",
            lineHeight: 1.7,
            maxWidth: 760,
          }}
        >
          Fill out the request form below. After submitting, you’ll receive
          confirmation within 24 hours.
        </p>

        <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
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
              background: "rgba(0,0,0,0.02)",
              color: "rgba(0,0,0,0.78)",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Open form in new tab
          </a>

          <Link
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
      </section>

      {/* Form + Terms */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.35fr 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* Embedded Google Form */}
        <section
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
          <iframe
            title="English Fitness Booking Request Form"
            src={FORM_EMBED_URL}
            style={{
              width: "100%",
              height: 820,
              border: "0",
              display: "block",
            }}
            loading="lazy"
          />
        </section>

        {/* Terms & Conditions */}
        <aside
          style={{
            backgroundColor: "#ffffff",
            padding: "34px 30px",
            borderRadius: 28,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow:
              "0 30px 70px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.6) inset",
          }}
        >
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

          <div style={{ marginTop: 18, color: "rgba(0,0,0,0.75)", lineHeight: 1.7 }}>
            <p style={{ marginTop: 0 }}>
              By submitting the booking request, you agree to the following:
            </p>

            <ul style={{ paddingLeft: 18, marginTop: 12 }}>
              <li>
                <strong>Payment to confirm:</strong> Trial sessions and single
                sessions must be paid before the booking is confirmed.
              </li>
              <li>
                <strong>Refund / cancellation (24h rule):</strong> To receive a
                refund, cancellations must be made at least 24 hours before the
                scheduled session time.
              </li>
              <li>
                <strong>Packages — same-day cancellation:</strong> If you are on
                a session package and cancel on the day of your session, you
                will lose one session from your package.
              </li>
              <li>
                <strong>Rescheduling:</strong> Where possible, reschedules are
                offered if requested 24+ hours in advance (subject to trainer
                availability).
              </li>
              <li>
                <strong>Late arrival:</strong> Sessions start at the scheduled
                time. Late arrivals may reduce training time to avoid impacting
                other bookings.
              </li>
              <li>
                <strong>Health & safety:</strong> You confirm you are fit to
                exercise (or have medical clearance if required). Please inform
                the trainer of injuries, conditions, or pain before and during
                training.
              </li>
              <li>
                <strong>Training advice:</strong> Coaching is educational and
                fitness-focused. It is not medical treatment. Always follow
                professional medical guidance when relevant.
              </li>
              <li>
                <strong>Location & equipment:</strong> Sessions may be held at a
                gym, studio, or agreed location. Any facility fees (if
                applicable) will be communicated in advance.
              </li>
              <li>
                <strong>Respectful conduct:</strong> A safe and respectful
                environment is required. The trainer may end a session for
                inappropriate behavior.
              </li>
              <li>
                <strong>Changes & force majeure:</strong> Rare circumstances
                (illness, severe weather, transport disruption, facility issues)
                may require schedule changes. In those cases, we’ll reschedule
                as soon as possible.
              </li>
            </ul>

            <p
  style={{
    marginTop: 18,
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(0,0,0,0.85)",
  }}
>
  By submitting a booking request, you acknowledge and agree to these terms.
</p>
          </div>
        </aside>
      </div>

      {/* Small responsive note (computer-first, but helpful) */}
      <div
        style={{
          maxWidth: 1100,
          margin: "14px auto 0 auto",
          fontSize: 13,
          color: "rgba(0,0,0,0.60)",
        }}
      >
        If the embedded form looks weird on your device, use “Open form in new
        tab”.
      </div>
    </div>
  );
}