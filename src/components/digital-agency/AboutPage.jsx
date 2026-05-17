// ============================================================
// About Us Page — Digital Agency
// Figma node: 11063:10410
// ============================================================
import React from "react";
import { Navbar, Footer, CTAStrip, PageHero, Card, SectionHeading, Btn, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

const team = [
  { name: "Shakil Khan", role: "Lead UI/UX Designer", bio: "10+ years crafting MVPs that attract investors and deliver ROI." },
  { name: "Dianne Russel", role: "Co-Founder & Strategist", bio: "Helping startups turn ideas into fundable digital products." },
  { name: "Alex Carter", role: "Frontend Engineer", bio: "React, Next.js, and pixel-perfect implementation specialist." },
  { name: "Nadia Islam", role: "Brand Designer", bio: "Visual identities that make brands unforgettable." },
];

const values = [
  { icon: "🎯", title: "Clarity First", desc: "We cut through noise to find what actually matters to your users and investors." },
  { icon: "⚡", title: "Speed & Quality", desc: "We ship fast without cutting corners — because both matter." },
  { icon: "🤝", title: "True Partnership", desc: "Your success is our success. We're in it with you, not just for you." },
  { icon: "📈", title: "ROI-Driven Design", desc: "Every pixel is intentional — designed to move your metrics." },
  { icon: "🔍", title: "Research-Led", desc: "We validate before we build, so nothing is wasted." },
  { icon: "🌍", title: "Global Perspective", desc: "40+ brands across 12 countries — we understand diverse markets." },
];

const pricing = [
  { plan: "Starter", price: "$1,500", features: ["MVP UI/UX Design", "5 Core Screens", "1 Revision Round", "Figma Source File"], highlight: false },
  { plan: "Growth", price: "$4,500", features: ["Full Product Design", "15+ Screens", "3 Revision Rounds", "Dev Handoff", "Investor Deck Design"], highlight: true },
  { plan: "Scale", price: "$9,000", features: ["End-to-End MVP", "Unlimited Screens", "Unlimited Revisions", "Web Development", "Post-Launch Support"], highlight: false },
];

export default function AboutPage() {
  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="About us" />
      <PageHero title="Discover About Our Agency" subtitle="Arvion · Design · Development · Team" />

      {/* About Section */}
      <section style={{ padding: "96px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <SectionHeading tag="About Us" title="Where Innovation Meets Identity"
              subtitle="We're a boutique digital agency built for startups and ambitious brands. Since 2020, we've helped over 10 companies raise more than $1M by designing MVPs that don't just look good — they tell the right story to investors." />
            <div style={{ display: "flex", gap: 12 }}>
              <Btn style={{ padding: "14px 24px", fontSize: 15, borderRadius: 12 }}>Work With Us</Btn>
              <Btn outline style={{ padding: "14px 24px", fontSize: 15, borderRadius: 12 }}>View Portfolio</Btn>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[["10+", "Startups"], ["$1M+", "Raised"], ["70+", "Reviews"], ["40+", "Brands"]].map(([n, l]) => (
              <div key={l} style={{ background: LIGHT_BG, borderRadius: 20, padding: 28, textAlign: "center" }}>
                <p style={{ fontFamily: FONT_HEADING, fontSize: 40, fontWeight: 700, color: BRAND, margin: "0 0 6px" }}>{n}</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "96px 80px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Our Core Value" title="What Drives Everything We Do" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {values.map(v => (
              <Card key={v.title}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 18, color: DARK, margin: "0 0 10px" }}>{v.title}</h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "96px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Team Member" title="Meet the Experts Behind the Magic" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {team.map(m => (
              <Card key={m.name} style={{ textAlign: "center", padding: "32px 24px" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${BRAND}1A`, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 28 }}>👤</span>
                </div>
                <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 16, color: DARK, margin: "0 0 4px" }}>{m.name}</h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: BRAND, fontWeight: 600, margin: "0 0 10px" }}>{m.role}</p>
                <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: GRAY, lineHeight: 1.6, margin: 0 }}>{m.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "96px 80px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Pricing" title="Affordable Solutions for Every Budget" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {pricing.map(p => (
              <div key={p.plan} style={{
                background: p.highlight ? DARK : "#fff",
                border: p.highlight ? "none" : `1px solid ${BORDER}`,
                borderRadius: 24, padding: "36px 32px",
                transform: p.highlight ? "scale(1.04)" : "none",
                boxShadow: p.highlight ? "0 24px 64px rgba(0,0,0,0.15)" : "none",
                transition: "box-shadow 0.2s",
              }}>
                <p style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: p.highlight ? BRAND : GRAY, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 1 }}>{p.plan}</p>
                <p style={{ fontFamily: FONT_HEADING, fontSize: 44, fontWeight: 700, color: p.highlight ? "#fff" : DARK, margin: "0 0 24px" }}>{p.price}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                  {p.features.map(f => (
                    <li key={f} style={{ fontFamily: FONT_BODY, fontSize: 14, color: p.highlight ? "#ccc" : GRAY, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: BRAND, fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Btn outline={!p.highlight} style={{
                  width: "100%", padding: "14px", fontSize: 15, borderRadius: 12,
                  background: p.highlight ? BRAND : "transparent",
                  color: p.highlight ? "#fff" : BRAND,
                  border: `1.5px solid ${BRAND}`,
                }}>Get Started</Btn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
      <Footer />
    </div>
  );
}
