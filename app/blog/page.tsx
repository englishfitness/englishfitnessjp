import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="ef-blog-index-page">
      <style>{`
        .ef-blog-index-page {
          padding-top: 110px;
          padding-bottom: 150px;
        }

        .ef-blog-index-shell {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .ef-blog-index-hero {
          position: relative;
          overflow: hidden;
          max-width: 860px;
          margin: 0 auto;
          background: linear-gradient(180deg, #ffffff 0%, #f8f8fb 100%);
          border-radius: 32px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow:
            0 34px 80px rgba(0,0,0,0.14),
            inset 0 1px 0 rgba(255,255,255,0.9);
          padding: 46px 42px 48px 42px;
          box-sizing: border-box;
          text-align: center;
        }

        .ef-blog-index-hero::before,
        .ef-blog-index-list::before {
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

        .ef-blog-index-hero::after,
        .ef-blog-index-list::after {
          content: "";
          position: absolute;
          right: -90px;
          bottom: -90px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(220,38,38,0.08), transparent 72%);
          pointer-events: none;
        }

        .ef-blog-index-inner {
          position: relative;
          z-index: 1;
        }

        .ef-blog-index-kicker {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 14px;
          background: rgba(220,38,38,0.08);
          color: var(--red);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ef-blog-index-title {
          margin: 18px 0 0 0;
          font-size: 44px;
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.045em;
          color: var(--navy);
        }

        .ef-blog-index-copy {
          margin: 18px auto 0 auto;
          max-width: 660px;
          font-size: 17px;
          line-height: 1.8;
          color: rgba(0,0,0,0.72);
        }

        .ef-blog-index-accent {
          margin: 22px auto 0 auto;
          width: 64px;
          height: 4px;
          border-radius: 999px;
          background: var(--red);
        }

        .ef-blog-index-list {
          position: relative;
          overflow: hidden;
          max-width: 860px;
          margin: 0 auto;
          background: linear-gradient(180deg, #ffffff 0%, #f8f8fb 100%);
          border-radius: 32px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow:
            0 28px 70px rgba(0,0,0,0.12),
            inset 0 1px 0 rgba(255,255,255,0.88);
          padding: 24px;
          box-sizing: border-box;
        }

        .ef-blog-index-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 18px;
        }

        .ef-blog-card-link {
          text-decoration: none;
          color: inherit;
        }

        .ef-blog-card {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(8,24,58,0.08);
          background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,248,251,0.96) 100%);
          box-shadow:
            0 20px 42px rgba(10,20,40,0.08),
            inset 0 1px 0 rgba(255,255,255,0.92);
          padding: 26px 24px 24px 24px;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
        }

        .ef-blog-card::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 0;
          background: linear-gradient(180deg, var(--red), #ff7b7b);
          transition: width 220ms ease;
        }

        .ef-blog-card::after {
          content: "";
          position: absolute;
          top: -18%;
          right: -18%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(31,79,179,0.08), transparent 70%);
          pointer-events: none;
        }

        .ef-blog-card-link:hover .ef-blog-card {
          transform: translateY(-4px);
          border-color: rgba(220,38,38,0.14);
          box-shadow:
            0 28px 52px rgba(10,20,40,0.12),
            inset 0 1px 0 rgba(255,255,255,0.94);
        }

        .ef-blog-card-link:hover .ef-blog-card::before {
          width: 6px;
        }

        .ef-blog-card-inner {
          position: relative;
          z-index: 1;
        }

        .ef-blog-card-meta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 7px 12px;
          background: rgba(13,34,71,0.05);
          color: rgba(13,34,71,0.76);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ef-blog-card-title {
          margin: 16px 0 0 0;
          font-size: 28px;
          line-height: 1.12;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--navy);
        }

        .ef-blog-card-desc {
          margin: 12px 0 0 0;
          font-size: 16px;
          line-height: 1.75;
          color: rgba(0,0,0,0.70);
        }

        .ef-blog-card-footer {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--red);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ef-blog-empty {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 30px 20px;
          color: rgba(0,0,0,0.62);
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .ef-blog-index-page {
            padding-top: 88px;
            padding-bottom: 100px;
          }

          .ef-blog-index-hero,
          .ef-blog-index-list {
            border-radius: 24px;
          }

          .ef-blog-index-hero {
            padding: 30px 22px 34px 22px;
          }

          .ef-blog-index-list {
            padding: 18px;
          }

          .ef-blog-index-title {
            font-size: 30px;
            line-height: 1.12;
          }

          .ef-blog-index-copy {
            font-size: 15px;
            line-height: 1.75;
          }

          .ef-blog-card {
            border-radius: 22px;
            padding: 22px 20px 20px 20px;
          }

          .ef-blog-card-title {
            font-size: 23px;
          }

          .ef-blog-card-desc {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .ef-blog-index-hero {
            padding: 26px 18px 30px 18px;
          }

          .ef-blog-index-list {
            padding: 14px;
          }

          .ef-blog-index-title {
            font-size: 26px;
          }

          .ef-blog-card-title {
            font-size: 21px;
          }

          .ef-blog-card-desc {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="ef-blog-index-shell">
        <section className="ef-blog-index-hero">
          <div className="ef-blog-index-inner">
            <div className="ef-blog-index-kicker">Blog</div>

            <h1 className="ef-blog-index-title">English Fitness Articles</h1>

            <p className="ef-blog-index-copy">
              Practical ideas for strength training, confidence, and real
              English conversation in everyday life.
            </p>

            <div className="ef-blog-index-accent" />
          </div>
        </section>

        <section className="ef-blog-index-list">
          {posts.length === 0 ? (
            <div className="ef-blog-empty">
              Articles are coming soon.
            </div>
          ) : (
            <div className="ef-blog-index-grid">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="ef-blog-card-link"
                >
                  <article className="ef-blog-card">
                    <div className="ef-blog-card-inner">
                      <div className="ef-blog-card-meta">
                        <span>English Fitness</span>
                        {post.date ? <span>• {post.date}</span> : null}
                      </div>

                      <h2 className="ef-blog-card-title">{post.title}</h2>

                      <p className="ef-blog-card-desc">{post.description}</p>

                      <div className="ef-blog-card-footer">
                        Read article <span>→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}