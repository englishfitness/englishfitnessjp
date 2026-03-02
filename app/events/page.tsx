export default function EventsPage() {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 160 }}>
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          backgroundColor: "#ffffff",
          padding: "60px 40px",
          borderRadius: 28,
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow:
            "0 30px 70px rgba(0,0,0,0.15), 0 1px 0 rgba(255,255,255,0.6) inset",
        }}
      >
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
          Events
        </p>

        <div
          style={{
            height: 3,
            width: 56,
            background: "var(--red)",
            borderRadius: 999,
            margin: "0 auto 28px auto",
          }}
        />

        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: "var(--navy)",
            marginBottom: 20,
          }}
        >
          Coming Soon
        </h1>

        <p
          style={{
            fontSize: 16,
            color: "rgba(0,0,0,0.70)",
            lineHeight: 1.7,
          }}
        >
          Group sessions, workshops, and community meet-ups are on the way.
          We’ll announce the first events here — and early access will go to
          Founding Members.
        </p>
      </section>
    </div>
  );
}