export default function TestimonialsPage() {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 160 }}>
      <section
        style={{
          maxWidth: 820,
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "60px 50px",
          borderRadius: 28,
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow:
            "0 30px 70px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.6) inset",
          textAlign: "center",
        }}
      >
        {/* Subtitle */}
        <p
          style={{
            fontSize: 14,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.55)",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Testimonials
        </p>

        {/* Red line */}
        <div
          style={{
            height: 3,
            width: 56,
            background: "var(--red)",
            borderRadius: 999,
            margin: "0 auto 28px auto",
          }}
        />

        {/* Heading */}
        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: "var(--navy)",
            marginBottom: 20,
          }}
        >
          Real Client Results
        </h1>

        {/* Placeholder message */}
        <p
          style={{
            fontSize: 16,
            color: "rgba(0,0,0,0.70)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          Testimonials from English Fitness clients will appear here soon.
          Every transformation is built on consistency, structure, and confidence.
        </p>

        {/* Future testimonial layout preview (subtle) */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gap: 28,
          }}
        >
          <div
            style={{
              padding: 30,
              borderRadius: 20,
              border: "1px solid rgba(0,0,0,0.06)",
              background: "rgba(0,0,0,0.02)",
              color: "rgba(0,0,0,0.45)",
              fontStyle: "italic",
            }}
          >
            “Client story coming soon.”
          </div>

          <div
            style={{
              padding: 30,
              borderRadius: 20,
              border: "1px solid rgba(0,0,0,0.06)",
              background: "rgba(0,0,0,0.02)",
              color: "rgba(0,0,0,0.45)",
              fontStyle: "italic",
            }}
          >
            “Another transformation story coming soon.”
          </div>
        </div>
      </section>
    </div>
  );
}