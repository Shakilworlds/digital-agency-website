// ============================================================
// Our Services Details Page — Digital Agency
// Figma node: 11065:12994
// ============================================================
import React from "react";
import { Navbar, Footer, CTAStrip, PageHero, Card, SectionHeading, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

const services = [
  { icon: "🎨", title: "UI/UX Design", desc: "We design interfaces that put users first and make investors confident. From wireframes to polished prototypes — every screen has purpose.", deliverables: ["User Research", "Wireframes", "UI Design", "Prototype", "Dev Handoff"] },
  { icon: "📱", title: "Mobile Development", desc: "React Native and Flutter apps that perform on iOS and Android. Fast, scalable, and beautiful.", deliverables: ["iOS App", "Android App", "API Integration", "App Store Submit", "QA Testing"] },
  { icon: "💻", title: "Web Development", desc: "Next.js, React, and Webflow — we build the web stack that fits your product and team.", deliverables: ["Frontend Dev", "CMS Setup", "Performance Opt.", "SEO Basics", "Deployment"] },
  { icon: "🏷️", title: "Branding", desc: "Logo, color system, typography, and brand guidelines that make you instantly recognizable.", deliverables: ["Logo Design", "Color System", "Type Scale", "Brand Guide", "Asset Pack"] },
  { icon: "📣", title: "Digital Marketing", desc: "Growth strategy, content, and paid campaigns to get your product in front of the right people.", deliverables: ["Growth Strategy", "Content Plan", "Ad Campaigns", "Analytics Setup", "Monthly Report"] },
  { icon: "📊", title: "Investor Deck Design", desc: "Pitch decks that tell your story, show your traction, and make investors want to write the check.", deliverables: ["Story Structure", "Slide Design", "Data Viz", "Infographics", "PDF Export"] },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn your product, users, and business goals in a deep-dive session." },
  { step: "02", title: "Strategy", desc: "We map the user journey and define what success looks like." },
  { step: "03", title: "Design", desc: "We build wireframes, then high-fidelity designs with your feedback at each stage." },
  { step: "04", title: "Deliver", desc: "Final files, dev handoff, and ongoing support as you launch." },
];

const portfolio = [
  { tag: "MVP Design", title: "FinTech Dashboard", desc: "Raised $400K after redesign." },
  { tag: "Branding", title: "SaaS Identity System", desc: "Full rebrand for Series A startup." },
  { tag: "Web Dev", title: "Marketing Site", desc: "0→1 launch in 3 weeks." },
];

export default function ServicesPage() {
  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="Services" />
      <PageHero title="Our Services Details" subtitle="Design · Development · Strategy" />

      {/* Services Grid */}
      <section style={{ padding: "96px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Services" title="Everything Your Product Needs" subtitle="End-to-end solutions — from first sketch to live product." center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {services.map(s => (
              <Card key={s.title} style={{ padding: "32px" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 20, color: DARK, margin: "0 0 12px" }}>{s.title}</h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, lineHeight: 1.65, margin: "0 0 20px" }}>{s.desc}</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 600, color: BRAND, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: 0.8 }}>Deliverables</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.deliverables.map(d => (
                      <span key={d} style={{ background: `${BRAND}12`, color: BRAND, fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>{d}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section style={{ padding: "96px 80px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Working Process" title="How We Work With You" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {process.map((p, i) => (
              <div key={p.step} style={{ position: "relative" }}>
                {i < process.length - 1 && (
                  <div style={{ position: "absolute", top: 28, left: "60%", right: "-40%", height: 1, background: `${BRAND}30`, zIndex: 0 }} />
                )}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: BRAND, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <span style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 16, color: "#fff" }}>{p.step}</span>
                  </div>
                  <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 18, color: DARK, margin: "0 0 8px" }}>{p.title}</h3>
                  <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section style={{ background: "#fff", padding: "40px 80px", borderTop: `1px solid ${BORDER}` }}>
        <p style={{ textAlign: "center", fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E", marginBottom: 28 }}>
          Trusted by 40+ Global Brands
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {["Airbnb", "Stripe", "Notion", "Figma", "Linear", "Vercel"].map(l => (
            <div key={l} style={{ width: 88, height: 30, background: "#F0F0F0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: "#BDBDBD" }}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section style={{ padding: "96px 80px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeading tag="Portfolio" title="Work That Speaks for Itself" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {portfolio.map(p => (
              <Card key={p.title} style={{ cursor: "pointer" }}>
                <div style={{ width: "100%", height: 180, background: "linear-gradient(135deg,#F0F0F0,#E0E0E0)", borderRadius: 12, marginBottom: 20 }} />
                <span style={{ background: `${BRAND}12`, color: BRAND, fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>{p.tag}</span>
                <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 18, color: DARK, margin: "12px 0 6px" }}>{p.title}</h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, margin: 0 }}>{p.desc}</p>
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
