// ============================================================
// Portfolio Details Page — Digital Agency
// Figma node: 11066:14557
// ============================================================
import React, { useState } from "react";
import { Navbar, Footer, CTAStrip, Card, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

const sections = ["Overview", "Problem", "Challenges", "Our Solutions", "Project Process"];

const project = {
  title: "Mobile App — FinTech Delivery",
  date: "16 Dec 2024",
  category: "Mobile App",
  client: "Esther Howard",
  timeline: "2 Months",
  liveLink: "Visit App Store",
  services: ["UX Research", "UI Design", "App Development"],
  overview: "Our team took on the challenge of crafting a mobile app that blends functionality, user-friendliness, and a seamless checkout experience. The goal was to reduce friction at every step of the user journey — from product discovery to final purchase.",
  problem: "From the survey we found users struggle with long checkout lines, inconvenience of visiting multiple stores, and lack of trust in online delivery systems. The existing solutions were cluttered, slow, and failed to build confidence at the transaction layer.",
  challenges: "We faced various design challenges, including creating effective filters for accurate results, optimizing for low-connectivity environments, building a component system that scaled across Android and iOS, and maintaining visual consistency across 40+ screens.",
  solutions: "We designed a reliable delivery system to boost transactions, accurate product descriptions, sale updates, and push notifications. The new checkout flow reduced drop-off by 34% in testing. A robust component library ensured consistency and speed for the dev team.",
  process: "We started with 2 weeks of user research and IA mapping, followed by low-fidelity wireframes, usability testing with 12 users, high-fidelity UI design, and a full dev handoff package including tokens, specs, and interaction notes.",
};

export default function PortfolioDetailsPage() {
  const [active, setActive] = useState("Overview");

  const contentMap = {
    Overview: project.overview,
    Problem: project.problem,
    Challenges: project.challenges,
    "Our Solutions": project.solutions,
    "Project Process": project.process,
  };

  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="Portfolio" />

      {/* Hero Banner */}
      <section style={{
        background: DARK, paddingTop: 140, paddingBottom: 0,
        paddingLeft: 80, paddingRight: 80, position: "relative", overflow: "hidden",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <a href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#9E9E9E", fontFamily: FONT_BODY, fontSize: 14, textDecoration: "none", marginBottom: 24 }}>
            ← Back to Portfolio
          </a>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingBottom: 48 }}>
            <div>
              <span style={{ background: `${BRAND}1A`, color: BRAND, fontFamily: FONT_BODY, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100, display: "inline-block", marginBottom: 16 }}>
                {project.category}
              </span>
              <h1 style={{ fontFamily: FONT_HEADING, fontSize: 48, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.15, letterSpacing: -1 }}>
                {project.title}
              </h1>
              <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "#9E9E9E", margin: "12px 0 0" }}>{project.date}</p>
            </div>
            <a href="#" style={{
              background: BRAND, color: "#fff", textDecoration: "none",
              borderRadius: 10, padding: "12px 24px",
              fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 14,
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              {project.liveLink} ↗
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            width: "100%", height: 400,
            background: `linear-gradient(135deg, ${BRAND}20 0%, ${BRAND}40 100%)`,
            borderRadius: "20px 20px 0 0",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 80 }}>📱</span>
          </div>
        </div>
      </section>

      {/* Meta Info */}
      <section style={{ background: "#fff", padding: "0 80px", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {[
            { label: "Client", value: project.client },
            { label: "Category", value: project.category },
            { label: "Timeline", value: project.timeline },
            { label: "Services", value: project.services.join(" · ") },
          ].map((item, i) => (
            <div key={item.label} style={{
              padding: "28px 32px",
              borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
            }}>
              <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>{item.label}</p>
              <p style={{ fontFamily: FONT_HEADING, fontSize: 15, fontWeight: 700, color: DARK, margin: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Tags */}
      <section style={{ padding: "48px 80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 600, color: "#9E9E9E", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 12px" }}>Service We Provide</p>
          <div style={{ display: "flex", gap: 10 }}>
            {project.services.map(s => (
              <span key={s} style={{ background: `${BRAND}12`, color: BRAND, fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 100 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section style={{ padding: "64px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 64 }}>

          {/* Sidebar Nav */}
          <div>
            <nav style={{ position: "sticky", top: 100 }}>
              {sections.map(s => (
                <button key={s} onClick={() => setActive(s)} style={{
                  display: "block", width: "100%", textAlign: "left",
                  background: active === s ? `${BRAND}10` : "transparent",
                  border: "none", borderLeft: `3px solid ${active === s ? BRAND : "transparent"}`,
                  padding: "14px 20px", marginBottom: 4, borderRadius: "0 10px 10px 0",
                  fontFamily: FONT_HEADING, fontWeight: active === s ? 700 : 500,
                  fontSize: 15, color: active === s ? BRAND : GRAY,
                  cursor: "pointer", transition: "all 0.2s",
                }}>{s}</button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div>
            <h2 style={{ fontFamily: FONT_HEADING, fontSize: 32, fontWeight: 700, color: DARK, margin: "0 0 24px" }}>{active}</h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: 16, color: GRAY, lineHeight: 1.8, margin: "0 0 40px" }}>
              {contentMap[active]}
            </p>

            {/* Visual blocks */}
            {active === "Project Process" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {["Information Architecture", "Style Guide & Component", "Visual Output", "Dev Handoff"].map(p => (
                  <div key={p} style={{
                    background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16,
                    height: 160, display: "flex", alignItems: "center", justifyContent: "center",
                    flexDirection: "column", gap: 8, cursor: "pointer",
                  }}>
                    <span style={{ fontSize: 32 }}>🖼️</span>
                    <span style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: GRAY }}>{p}</span>
                  </div>
                ))}
              </div>
            )}

            {active === "Our Solutions" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                {[
                  { icon: "🚀", title: "34% Less Drop-off", desc: "Checkout flow redesigned from scratch" },
                  { icon: "⚡", title: "2x Faster", desc: "Optimized for low-connectivity users" },
                  { icon: "✨", title: "40+ Screens", desc: "Consistent component library delivered" },
                ].map(r => (
                  <Card key={r.title} style={{ textAlign: "center", padding: 24 }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{r.icon}</div>
                    <p style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 16, color: DARK, margin: "0 0 4px" }}>{r.title}</p>
                    <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: GRAY, margin: 0 }}>{r.desc}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section style={{ padding: "0 80px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px 40px", background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 20 }}>
            <div>
              <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E", margin: "0 0 4px" }}>Next Project</p>
              <p style={{ fontFamily: FONT_HEADING, fontSize: 20, fontWeight: 700, color: DARK, margin: 0 }}>Series A SaaS Identity Rebrand →</p>
            </div>
            <a href="/portfolio" style={{
              background: BRAND, color: "#fff", textDecoration: "none",
              borderRadius: 10, padding: "12px 24px",
              fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 14,
            }}>View Project</a>
          </div>
        </div>
      </section>

      <CTAStrip />
      <Footer />
    </div>
  );
}
