// ============================================================
// Blog Details Page — Digital Agency
// Figma node: 11070:16959
// ============================================================
import React from "react";
import { Navbar, Footer, CTAStrip, Card, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

const post = {
  title: "5 MVP Design Mistakes That Kill Fundraising",
  date: "16 Dec 2024",
  tag: "UI/UX Design",
  readTime: "7 min read",
  author: { name: "Shakil Khan", role: "Lead UI/UX Designer" },
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      body: "Rumors swirled on X earlier this week, sparking a frenzy with the startup community. But the real story isn't about hype — it's about why so many MVPs fail to impress investors before they even get to the pitch. Most founders make the same design mistakes, and they're all avoidable. Here's what we've learned from working with 10+ startups that raised $1M+.",
    },
    {
      id: "why-built",
      heading: "Why We Built It",
      body: "Blockchain gaming venture studio Animoca Brands has secured $10 million in funding to accelerate. But more importantly, we built this framework after watching brilliant founders lose investor interest — not because their ideas were bad, but because their product told the wrong story. Design is a fundraising tool. It signals execution ability, product sense, and user empathy all at once.",
    },
    {
      id: "richer-analysis",
      heading: "Perform Richer Analysis with Easy Access to Data",
      body: "We're excited to launch Google Sheets, our newest integration for Mode. Mode's vision is to connect every data point in your product to a clear narrative. The same applies to MVP design — every screen should answer one question: 'Why now, why you, and why this?' When your design does that, investors lean in.",
    },
    {
      id: "whats-next",
      heading: "What's Next with Mode?",
      body: "Getting Started with Google Sheets. The next evolution of MVP design is about systems thinking — not just screens. We're building template kits, design tokens, and investor-lens checklists that founders can use before their first pitch. Stay tuned for our free toolkit dropping next month.",
    },
  ],
};

const related = [
  { tag: "Fundraising", title: "What Investors Really Look for in an MVP", date: "May 8, 2025", emoji: "💰" },
  { tag: "Design Process", title: "How We Go From Idea to Prototype in 2 Weeks", date: "Apr 29, 2025", emoji: "⚡" },
  { tag: "Branding", title: "Why Your Startup's Brand Is a Fundraising Tool", date: "Apr 20, 2025", emoji: "🏷️" },
];

const socials = [
  { label: "LinkedIn", icon: "🔗" },
  { label: "Twitter", icon: "𝕏" },
  { label: "Copy link", icon: "📋" },
];

export default function BlogDetailsPage() {
  const [copied, setCopied] = React.useState(false);

  const handleShare = (label) => {
    if (label === "Copy link") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="Blog" />

      {/* Hero */}
      <section style={{ background: DARK, paddingTop: 140, paddingBottom: 64, paddingLeft: 80, paddingRight: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#9E9E9E", fontFamily: FONT_BODY, fontSize: 14, textDecoration: "none", marginBottom: 24 }}>
            ← Back to Blog
          </a>
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ background: `${BRAND}1A`, color: BRAND, fontFamily: FONT_BODY, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>
                {post.tag}
              </span>
              <span style={{ fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E" }}>{post.date} · {post.readTime}</span>
            </div>
            <h1 style={{ fontFamily: FONT_HEADING, fontSize: 48, fontWeight: 700, color: "#fff", margin: "0 0 24px", lineHeight: 1.15, letterSpacing: -1 }}>
              {post.title}
            </h1>
            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${BRAND}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 20 }}>👤</span>
              </div>
              <div>
                <p style={{ fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 15, color: "#fff", margin: 0 }}>{post.author.name}</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E", margin: 0 }}>{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section style={{ padding: "0 80px", background: DARK }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            width: "100%", height: 420,
            background: `linear-gradient(135deg, ${BRAND}25 0%, ${BRAND}45 100%)`,
            borderRadius: "20px 20px 0 0",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 96 }}>🎨</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: "80px 80px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 280px", gap: 80 }}>

          {/* Main Content */}
          <article>
            {/* Table of Contents */}
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px 28px", marginBottom: 48 }}>
              <p style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 15, color: DARK, margin: "0 0 14px" }}>Contents</p>
              {post.sections.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "6px 0",
                  fontFamily: FONT_BODY, fontSize: 14, color: GRAY, textDecoration: "none",
                  borderBottom: i < post.sections.length - 1 ? `1px solid ${BORDER}` : "none",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = BRAND}
                  onMouseLeave={e => e.currentTarget.style.color = GRAY}
                >
                  <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#BDBDBD", minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </a>
              ))}
            </div>

            {/* Sections */}
            {post.sections.map((s) => (
              <div key={s.id} id={s.id} style={{ marginBottom: 56, scrollMarginTop: 100 }}>
                <h2 style={{ fontFamily: FONT_HEADING, fontSize: 26, fontWeight: 700, color: DARK, margin: "0 0 16px", lineHeight: 1.3 }}>{s.heading}</h2>
                <p style={{ fontFamily: FONT_BODY, fontSize: 16, color: GRAY, lineHeight: 1.85, margin: 0 }}>{s.body}</p>

                {/* Visual block for first section */}
                {s.id === "introduction" && (
                  <div style={{
                    background: `${BRAND}08`, border: `1.5px solid ${BRAND}25`,
                    borderRadius: 16, padding: "24px 28px", marginTop: 28,
                    borderLeft: `4px solid ${BRAND}`,
                  }}>
                    <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: DARK, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                      "Design is a fundraising tool. Every screen either builds or destroys investor confidence."
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Share */}
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 32, display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 14, color: DARK }}>Share:</span>
              {socials.map(s => (
                <button key={s.label} onClick={() => handleShare(s.label)} style={{
                  background: "#fff", border: `1.5px solid ${BORDER}`, borderRadius: 10,
                  padding: "8px 16px", fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600,
                  color: GRAY, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.color = BRAND; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = GRAY; }}
                >
                  <span>{s.icon}</span>
                  {s.label === "Copy link" && copied ? "Copied!" : s.label}
                </button>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: 100, alignSelf: "start" }}>
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 20, padding: "28px", marginBottom: 24 }}>
              <p style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 15, color: DARK, margin: "0 0 16px" }}>About the Author</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${BRAND}1A`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 22 }}>👤</span>
                </div>
                <div>
                  <p style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 14, color: DARK, margin: 0 }}>{post.author.name}</p>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: BRAND, margin: 0 }}>{post.author.role}</p>
                </div>
              </div>
              <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: GRAY, lineHeight: 1.6, margin: "0 0 16px" }}>
                10+ years helping startups design MVPs that raise funding. Lead designer at Arvion.
              </p>
              <a href="/contact" style={{
                display: "block", textAlign: "center", background: BRAND, color: "#fff",
                textDecoration: "none", borderRadius: 10, padding: "10px",
                fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 13,
              }}>Work With Me</a>
            </div>

            {/* CTA */}
            <div style={{
              background: DARK, borderRadius: 20, padding: "28px",
              textAlign: "center",
            }}>
              <p style={{ fontFamily: FONT_HEADING, fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>Ready to build?</p>
              <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E", lineHeight: 1.6, margin: "0 0 20px" }}>Get a free MVP design audit from our team.</p>
              <a href="/contact" style={{
                display: "block", background: BRAND, color: "#fff",
                textDecoration: "none", borderRadius: 10, padding: "12px",
                fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 14,
              }}>Schedule a Call 👋</a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      <section style={{ padding: "0 80px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FONT_HEADING, fontSize: 28, fontWeight: 700, color: DARK, margin: "0 0 32px" }}>Related Articles</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {related.map(r => (
              <Card key={r.title} style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}>
                <div style={{ height: 140, background: `${BRAND}15`, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `1px solid ${BORDER}` }}>
                  <span style={{ fontSize: 40 }}>{r.emoji}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <span style={{ background: `${BRAND}12`, color: BRAND, fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{r.tag}</span>
                  <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 15, color: DARK, margin: "10px 0 8px", lineHeight: 1.3 }}>{r.title}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E" }}>{r.date}</span>
                    <a href="#" style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: BRAND, textDecoration: "none" }}>Read →</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
      <Footer />
    </div>
  );
}
