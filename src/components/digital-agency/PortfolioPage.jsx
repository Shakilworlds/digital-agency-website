// ============================================================
// Portfolio Page — Digital Agency
// Figma node: 11070:15568
// ============================================================
import React, { useState } from "react";
import { Navbar, Footer, CTAStrip, PageHero, Card, SectionHeading, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

const filters = ["All", "UI/UX Design", "Branding", "Web Dev", "Mobile"];

const projects = [
  { id: 1, tag: "UI/UX Design", title: "FinTech Dashboard MVP", desc: "Investor-ready dashboard that helped raise $400K Seed round.", year: "2024" },
  { id: 2, tag: "Branding", title: "Series A SaaS Identity", desc: "Full rebrand for a B2B SaaS scaling to enterprise.", year: "2024" },
  { id: 3, tag: "Web Dev", title: "Launch-Ready Marketing Site", desc: "0→1 site in 3 weeks using Next.js and Framer Motion.", year: "2023" },
  { id: 4, tag: "Mobile", title: "Health Tracking App", desc: "React Native app with 4.8★ on App Store at launch.", year: "2023" },
  { id: 5, tag: "UI/UX Design", title: "EdTech Platform Redesign", desc: "User retention increased 38% post-redesign.", year: "2023" },
  { id: 6, tag: "Branding", title: "Startup Brand System", desc: "Logo, colors, type, and full guidelines from scratch.", year: "2022" },
  { id: 7, tag: "Web Dev", title: "E-commerce UI Kit", desc: "Modular component library for a fashion brand.", year: "2022" },
  { id: 8, tag: "Mobile", title: "Logistics Tracker App", desc: "Real-time package tracking with clean UX.", year: "2022" },
  { id: 9, tag: "UI/UX Design", title: "Investor Pitch Deck", desc: "Deck design that closed a $1.2M round in 6 weeks.", year: "2024" },
];

const colors = { "UI/UX Design": "#7C3AED", Branding: BRAND, "Web Dev": "#059669", Mobile: "#2563EB" };

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.tag === active);

  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="Portfolio" />
      <PageHero title="Our Portfolio" subtitle="Work · Case Studies · Results" />

      <section style={{ padding: "96px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Portfolio" title="Work That Speaks for Itself" center />

          {/* Filters */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{
                background: active === f ? BRAND : "#fff",
                color: active === f ? "#fff" : GRAY,
                border: `1.5px solid ${active === f ? BRAND : BORDER}`,
                borderRadius: 100, padding: "8px 20px",
                fontFamily: FONT_BODY, fontWeight: 600, fontSize: 13,
                cursor: "pointer", transition: "all 0.2s",
              }}>{f}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {filtered.map(p => (
              <Card key={p.id} style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}>
                <div style={{
                  width: "100%", height: 220,
                  background: `linear-gradient(135deg, ${colors[p.tag]}15 0%, ${colors[p.tag]}30 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderBottom: `1px solid ${BORDER}`,
                }}>
                  <span style={{ fontSize: 48 }}>
                    {p.tag === "UI/UX Design" ? "🎨" : p.tag === "Branding" ? "🏷️" : p.tag === "Web Dev" ? "💻" : "📱"}
                  </span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{
                      background: `${colors[p.tag]}15`, color: colors[p.tag],
                      fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600,
                      padding: "4px 10px", borderRadius: 100,
                    }}>{p.tag}</span>
                    <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E" }}>{p.year}</span>
                  </div>
                  <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 18, color: DARK, margin: "0 0 8px" }}>{p.title}</h3>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, lineHeight: 1.6, margin: "0 0 16px" }}>{p.desc}</p>
                  <a href="#" style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: BRAND, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    View Case Study →
                  </a>
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
