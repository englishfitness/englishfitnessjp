import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="ef-blog-page">
      <style>{`
        .ef-blog-page {
          padding-top: 110px;
          padding-bottom: 150px;
        }

        .ef-blog-article {
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
          padding: 46px 42px 50px 42px;
          box-sizing: border-box;
        }

        .ef-blog-article::before {
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

        .ef-blog-article::after {
          content: "";
          position: absolute;
          right: -90px;
          bottom: -90px;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(220,38,38,0.08), transparent 72%);
          pointer-events: none;
        }

        .ef-blog-inner {
          position: relative;
          z-index: 1;
        }

        .ef-blog-topbar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
        }

        .ef-blog-back {
          font-weight: 800;
          color: var(--red);
          text-decoration: none;
          letter-spacing: 0.01em;
        }

        .ef-blog-back:hover {
          text-decoration: underline;
        }

        .ef-blog-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          border-radius: 999px;
          background: rgba(13,34,71,0.05);
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.85);
        }

        .ef-blog-toggle-current {
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #163d8f 0%, #214fb3 52%, #2f67d8 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          line-height: 1;
          letter-spacing: 0.01em;
        }

        .ef-blog-toggle-link {
          padding: 8px 14px;
          border-radius: 999px;
          color: var(--navy);
          font-weight: 700;
          font-size: 14px;
          line-height: 1;
          text-decoration: none;
        }

        .ef-blog-toggle-link:hover {
          background: rgba(255,255,255,0.75);
        }

        .ef-blog-kicker {
          margin-top: 26px;
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

        .ef-blog-title {
          margin: 18px 0 0 0;
          font-size: 44px;
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.045em;
          color: var(--navy);
          max-width: 760px;
        }

        .ef-blog-date {
          margin-top: 14px;
          font-size: 14px;
          color: rgba(0,0,0,0.50);
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .ef-blog-accent {
          margin-top: 20px;
          width: 64px;
          height: 4px;
          border-radius: 999px;
          background: var(--red);
        }

        .ef-blog-content {
          margin-top: 30px;
          font-size: 17px;
          line-height: 1.95;
          color: rgba(0,0,0,0.76);
        }

        .ef-blog-content h1,
        .ef-blog-content h2,
        .ef-blog-content h3,
        .ef-blog-content h4 {
          color: var(--navy);
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin: 1.8em 0 0.6em 0;
        }

        .ef-blog-content h1 {
          font-size: 34px;
        }

        .ef-blog-content h2 {
          font-size: 28px;
        }

        .ef-blog-content h3 {
          font-size: 22px;
        }

        .ef-blog-content p {
          margin: 0 0 1.25em 0;
        }

        .ef-blog-content strong {
          color: rgba(0,0,0,0.88);
          font-weight: 800;
        }

        .ef-blog-content em {
          color: rgba(0,0,0,0.78);
        }

        .ef-blog-content ul,
        .ef-blog-content ol {
          margin: 0 0 1.4em 1.2em;
          padding-left: 1.1em;
        }

        .ef-blog-content li {
          margin-bottom: 0.6em;
        }

        .ef-blog-content blockquote {
          margin: 1.8em 0;
          padding: 18px 20px;
          border-left: 4px solid var(--red);
          border-radius: 16px;
          background: rgba(13,34,71,0.04);
          color: rgba(0,0,0,0.76);
        }

        .ef-blog-content hr {
          border: none;
          height: 1px;
          background: rgba(0,0,0,0.10);
          margin: 2em 0;
        }

        .ef-blog-content code {
          background: rgba(13,34,71,0.06);
          padding: 0.15em 0.4em;
          border-radius: 8px;
          font-size: 0.95em;
        }

        .ef-blog-content pre {
          overflow-x: auto;
          background: rgba(13,34,71,0.06);
          padding: 16px;
          border-radius: 16px;
        }

        .ef-blog-content pre code {
          background: transparent;
          padding: 0;
        }

        .ef-blog-content img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 20px;
          margin: 1.8em auto;
          box-shadow: 0 20px 42px rgba(0,0,0,0.10);
        }

        .ef-blog-content a {
          color: var(--red);
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .ef-blog-page {
            padding-top: 88px;
            padding-bottom: 100px;
          }

          .ef-blog-article {
            border-radius: 24px;
            padding: 30px 22px 34px 22px;
          }

          .ef-blog-title {
            font-size: 30px;
            line-height: 1.12;
          }

          .ef-blog-content {
            font-size: 15px;
            line-height: 1.85;
          }

          .ef-blog-content h1 {
            font-size: 28px;
          }

          .ef-blog-content h2 {
            font-size: 24px;
          }

          .ef-blog-content h3 {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .ef-blog-article {
            padding: 26px 18px 30px 18px;
          }

          .ef-blog-title {
            font-size: 26px;
          }

          .ef-blog-toggle-current,
          .ef-blog-toggle-link {
            padding: 8px 12px;
            font-size: 13px;
          }
        }
      `}</style>

      <article className="ef-blog-article">
        <div className="ef-blog-inner">
          <div className="ef-blog-topbar">
            <Link href="/blog" className="ef-blog-back">
              ← Back to Blog
            </Link>

            <div className="ef-blog-toggle">
              <span className="ef-blog-toggle-current">English</span>

              <Link href={`/blog/ja/${slug}`} className="ef-blog-toggle-link">
                日本語
              </Link>
            </div>
          </div>

          <div className="ef-blog-kicker">English Fitness Blog</div>

          <h1 className="ef-blog-title">{post.title}</h1>

          {post.date ? <p className="ef-blog-date">{post.date}</p> : null}

          <div className="ef-blog-accent" />

          <div className="ef-blog-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
}