// ============================================================
// Home Page — Digital Agency
// Figma node: 11056:623
// ============================================================
import React from "react";
import { Navbar, Footer, CTAStrip, Btn, Card, SectionHeading, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

function Hero() {
  return (
    <section style={{
      background: LIGHT_BG, minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "140px 80px 80px", maxWidth: 1440, margin: "0 auto",
      boxSizing: "border-box", gap: 48,
    }}>
      <div style={{ flex: 1, maxWidth: 560 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#fff", border: `1px solid ${BORDER}`,
          borderRadius: 100, padding: "6px 14px 6px 8px", marginBottom: 24,
        }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${BRAND}1A`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: BRAND }} />
          </div>
          <span style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 500, color: "#555" }}>4 Services Available</span>
        </div>

        <h1 style={{ fontFamily: FONT_HEADING, fontSize: 56, fontWeight: 700, lineHeight: 1.1, color: DARK, margin: "0 0 20px", letterSpacing: -1 }}>
          Creative Solutions,{" "}
          <span style={{ color: BRAND }}>Measurable</span> Impact.
        </h1>

        <p style={{ fontFamily: FONT_BODY, fontSize: 16, lineHeight: 1.7, color: GRAY, margin: "0 0 36px" }}>
          We seamlessly blend design, strategy, and cutting-edge technology to craft user-focused digital experiences that not only engage your audience but also drive measurable business growth.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <Btn style={{ padding: "14px 24px", fontSize: 15, borderRadius: 12 }}>👋 Schedule a 30-min Call</Btn>
          <span style={{ color: "#9E9E9E", fontFamily: FONT_BODY, fontSize: 14 }}>Or</span>
          <button style={{
            background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12,
            padding: "14px 20px", fontFamily: FONT_HEADING, fontWeight: 500, fontSize: 15,
            color: DARK, cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15.5 12.7c-.3-.15-1.8-.88-2.08-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-1.78-.88-2.95-1.58-4.12-3.58-.31-.53.31-.5.9-1.65.1-.2.05-.37-.03-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37C5.3 5.27 4.5 6 4.5 7.5c0 1.5 1.07 2.95 1.22 3.15.15.2 2.1 3.2 5.1 4.48 1.9.82 2.65.89 3.6.75.58-.09 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35z" fill="#25D366"/>
            </svg>
            Chat on WhatsApp
          </button>
        </div>

        {/* Review */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 32 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#E0E0E0" }} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15, color: DARK }}>5.0</span>
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1l1.55 3.14L12 4.64l-2.5 2.43.59 3.44L7 8.77l-3.09 1.74.59-3.44L2 4.64l3.45-.5L7 1z" fill="#FFC107" />
                  </svg>
                ))}
              </div>
            </div>
            <p style={{ margin: 0, fontFamily: FONT_BODY, fontSize: 12, color: "#9E9E9E" }}>Based on 70+ Clutch reviews</p>
          </div>
        </div>
      </div>

      {/* Right image panel */}
      <div style={{
        flex: 1, maxWidth: 580, height: 540,
        background: "linear-gradient(135deg, #F0F0F0 0%, #E4E4E4 100%)",
        borderRadius: 28, position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "85%", height: "85%",
          background: "linear-gradient(135deg,#fff 0%,#F5F5F5 100%)",
          borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ color: "#BDBDBD", fontFamily: FONT_BODY, fontSize: 14 }}>Hero Image</span>
        </div>
        <div style={{
          position: "absolute", bottom: 28, left: 20,
          background: "#fff", borderRadius: 14, padding: "10px 14px",
          display: "flex", alignItems: "center", gap: 10,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#E0E0E0" }} />
          <div>
            <p style={{ margin: 0, fontFamily: FONT_BODY, fontWeight: 600, fontSize: 13, color: DARK }}>Dianne Russel</p>
            <p style={{ margin: 0, fontFamily: FONT_BODY, fontSize: 11, color: "#9E9E9E" }}>Co-Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLogos() {
  const logos = ["Airbnb", "Stripe", "Notion", "Figma", "Linear", "Vercel"];
  return (
    <section style={{ background: "#fff", padding: "40px 80px", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <p style={{ textAlign: "center", fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E", marginBottom: 28 }}>
        UX/UI Design Company Trusted by Over 40+ Global Brands
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
        {logos.map(l => (
          <div key={l} style={{ width: 88, height: 30, background: "#F0F0F0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: "#BDBDBD" }}>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: "🎨", title: "UI/UX Design", desc: "Crafting intuitive interfaces that users love and investors trust." },
    { icon: "📱", title: "Mobile Development", desc: "Native and cross-platform apps built for performance and scale." },
    { icon: "💻", title: "Web Development", desc: "Fast, modern websites and web apps that convert visitors." },
    { icon: "🚀", title: "Branding", desc: "Identities that stand out and tell your story at a glance." },
  ];
  return (
    <section style={{ background: LIGHT_BG, padding: "96px 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeading tag="Our Services" title="What We Do Best" subtitle="From idea to launch — we cover every layer of your digital product." center />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {items.map(s => (
            <Card key={s.title}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 18, color: DARK, margin: "0 0 10px" }}>{s.title}</h3>
              <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [{ n: "10+", l: "Startups Helped" }, { n: "$1M+", l: "Capital Raised" }, { n: "70+", l: "5-Star Reviews" }, { n: "40+", l: "Global Brands" }];
  return (
    <section style={{ background: DARK, padding: "80px", display: "flex", justifyContent: "center", gap: 0 }}>
      <div style={{ maxWidth: 1280, width: "100%", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {items.map((s, i) => (
          <div key={s.l} style={{ textAlign: "center", padding: "0 32px", borderLeft: i > 0 ? "1px solid #2E2E2E" : "none" }}>
            <p style={{ fontFamily: FONT_HEADING, fontSize: 48, fontWeight: 700, color: BRAND, margin: "0 0 8px" }}>{s.n}</p>
            <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "#9E9E9E", margin: 0 }}>{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="Home" />
      <Hero />
      <ClientLogos />
      <Services />
      <Stats />
      <CTAStrip />
      <Footer />
    </div>
  );
}
