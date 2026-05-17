// ============================================================
// Blog Page — Digital Agency
// Figma node: 11070:16215
// ============================================================
import React, { useState } from "react";
import { Navbar, Footer, CTAStrip, PageHero, Card, SectionHeading, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

const posts = [
  { id: 1, tag: "UI/UX Design", title: "5 MVP Design Mistakes That Kill Fundraising", excerpt: "Most founders make these errors before their first investor meeting. Here's how to avoid them.", date: "May 12, 2025", read: "5 min read", emoji: "🎨" },
  { id: 2, tag: "Fundraising", title: "What Investors Really Look for in an MVP", excerpt: "It's not about features — it's about the story your product tells in 30 seconds.", date: "May 8, 2025", read: "7 min read", emoji: "💰" },
  { id: 3, tag: "Design Process", title: "How We Go From Idea to Prototype in 2 Weeks", excerpt: "Our internal process for rapid MVP validation — the exact steps we use for every client.", date: "Apr 29, 2025", read: "6 min read", emoji: "⚡" },
  { id: 4, tag: "Branding", title: "Why Your Startup's Brand Is a Fundraising Tool", excerpt: "A polished brand signals execution ability. Here's how to use it strategically.", date: "Apr 20, 2025", read: "4 min read", emoji: "🏷️" },
  { id: 5, tag: "UI/UX Design", title: "The Investor Lens: Designing MVPs That Close Deals", excerpt: "Every screen is a pitch. Learn to design with the investor in the room.", date: "Apr 15, 2025", read: "8 min read", emoji: "🔍" },
  { id: 6, tag: "Growth", title: "From 0 to 40+ Clients: What We Learned Building Arvion", excerpt: "The honest lessons from building a design agency for startups from scratch.", date: "Apr 5, 2025", read: "10 min read", emoji: "🚀" },
];

const tagColors = {
  "UI/UX Design": BRAND, Fundraising: "#7C3AED", "Design Process": "#059669",
  Branding: "#EA580C", Growth: "#2563EB",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="Blog" />
      <PageHero title="Blog & Insights" subtitle="Design · Fundraising · Growth" />

      <section style={{ padding: "96px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Blog" title="Ideas Worth Sharing" center />

          {/* Featured Post */}
          <div style={{
            background: "#fff", borderRadius: 24, border: `1px solid ${BORDER}`,
            overflow: "hidden", marginBottom: 48, display: "grid", gridTemplateColumns: "1fr 1fr",
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${BRAND}20 0%, ${BRAND}40 100%)`,
              display: "flex", alignItems: "center", justifyContent: "center", minHeight: 320,
            }}>
              <span style={{ fontSize: 80 }}>{featured.emoji}</span>
            </div>
            <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: `${BRAND}15`, color: BRAND, fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>{featured.tag}</span>
                <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E" }}>{featured.date} · {featured.read}</span>
              </div>
              <h2 style={{ fontFamily: FONT_HEADING, fontSize: 28, fontWeight: 700, color: DARK, margin: "0 0 16px", lineHeight: 1.25 }}>{featured.title}</h2>
              <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: GRAY, lineHeight: 1.7, margin: "0 0 24px" }}>{featured.excerpt}</p>
              <a href="#" style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 600, color: BRAND, textDecoration: "none" }}>Read Article →</a>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {rest.map(p => (
              <Card key={p.id} style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}>
                <div style={{
                  background: `linear-gradient(135deg, ${(tagColors[p.tag] || BRAND)}12, ${(tagColors[p.tag] || BRAND)}25)`,
                  height: 160, display: "flex", alignItems: "center", justifyContent: "center",
                  borderBottom: `1px solid ${BORDER}`,
                }}>
                  <span style={{ fontSize: 48 }}>{p.emoji}</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{
                      background: `${(tagColors[p.tag] || BRAND)}15`, color: tagColors[p.tag] || BRAND,
                      fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100,
                    }}>{p.tag}</span>
                    <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E" }}>{p.read}</span>
                  </div>
                  <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 17, color: DARK, margin: "0 0 8px", lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: GRAY, lineHeight: 1.6, margin: "0 0 16px" }}>{p.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E" }}>{p.date}</span>
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
