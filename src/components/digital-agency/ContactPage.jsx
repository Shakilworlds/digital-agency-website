// ============================================================
// Contact Us Page — Digital Agency
// Figma node: 11072:17438
// ============================================================
import React, { useState } from "react";
import { Navbar, Footer, PageHero, Btn, BRAND, DARK, GRAY, LIGHT_BG, BORDER, FONT_HEADING, FONT_BODY } from "./shared";

const budgets = ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

const support = [
  { icon: "💬", title: "Service Support", desc: "Get help from the community. If you're on a paid plan, submit a ticket to our support team." },
  { icon: "🎯", title: "Live Chat", desc: "Talk to Our Sales Team. Get immediate answers during business hours." },
];

export default function ContactPage() {
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: LIGHT_BG, minHeight: "100vh" }}>
      <Navbar activePage="Contact" />
      <PageHero title="Contact Us" subtitle="Let's Build Something Great Together" />

      {/* Top Info Strip */}
      <section style={{ background: "#fff", padding: "48px 80px", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>Email Us</p>
            <p style={{ fontFamily: FONT_HEADING, fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>hello@arvion.com</p>
          </div>
          <div style={{ textAlign: "center", borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, padding: "0 32px" }}>
            <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>Call Us</p>
            <p style={{ fontFamily: FONT_HEADING, fontSize: 18, fontWeight: 700, color: DARK, margin: 0 }}>+(880) 164 408 565</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "#9E9E9E", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>Company Deck</p>
            <a href="#" style={{ fontFamily: FONT_HEADING, fontSize: 16, fontWeight: 700, color: BRAND, textDecoration: "none" }}>Download PDF →</a>
          </div>
        </div>
      </section>

      {/* Support Cards */}
      <section style={{ padding: "64px 80px 0", background: LIGHT_BG }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 64 }}>
          {support.map(s => (
            <div key={s.title} style={{
              background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 20, padding: "28px 32px",
              display: "flex", alignItems: "flex-start", gap: 16,
            }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{s.icon}</div>
              <div>
                <h3 style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 17, color: DARK, margin: "0 0 6px" }}>{s.title}</h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: GRAY, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section style={{ padding: "0 80px 96px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 28, padding: "56px 48px" }}>
            <h2 style={{ fontFamily: FONT_HEADING, fontSize: 32, fontWeight: 700, color: DARK, margin: "0 0 8px", textAlign: "center" }}>
              Have an idea? We're ready to build it!
            </h2>
            <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: GRAY, textAlign: "center", margin: "0 0 40px" }}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: FONT_HEADING, fontSize: 24, fontWeight: 700, color: DARK, margin: "0 0 8px" }}>Inquiry Sent!</h3>
                <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: GRAY }}>We'll reach out within 24 hours. Check your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <div>
                    <label style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: DARK, display: "block", marginBottom: 8 }}>Your Name</label>
                    <input type="text" placeholder="Shakil Khan" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${BORDER}`, borderRadius: 10, fontFamily: FONT_BODY, fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = BRAND} onBlur={e => e.target.style.borderColor = BORDER} required />
                  </div>
                  <div>
                    <label style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: DARK, display: "block", marginBottom: 8 }}>Email Address</label>
                    <input type="email" placeholder="hello@yourcompany.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: `1.5px solid ${BORDER}`, borderRadius: 10, fontFamily: FONT_BODY, fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = BRAND} onBlur={e => e.target.style.borderColor = BORDER} required />
                  </div>
                </div>

                {/* Budget */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: DARK, display: "block", marginBottom: 8 }}>What is your budget for this project?</label>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {budgets.map(b => (
                      <button type="button" key={b} onClick={() => setBudget(b)} style={{
                        background: budget === b ? BRAND : "#fff",
                        color: budget === b ? "#fff" : GRAY,
                        border: `1.5px solid ${budget === b ? BRAND : BORDER}`,
                        borderRadius: 100, padding: "8px 16px",
                        fontFamily: FONT_BODY, fontWeight: 500, fontSize: 13, cursor: "pointer", transition: "all 0.2s",
                      }}>{b}</button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 32 }}>
                  <label style={{ fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, color: DARK, display: "block", marginBottom: 8 }}>Tell us about your project</label>
                  <textarea placeholder="We're building an MVP for a fintech app and need UI/UX design + investor pitch deck..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5} style={{ width: "100%", padding: "14px 16px", border: `1.5px solid ${BORDER}`, borderRadius: 10, fontFamily: FONT_BODY, fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = BRAND} onBlur={e => e.target.style.borderColor = BORDER} required />
                </div>

                <button type="submit" style={{
                  width: "100%", background: BRAND, color: "#fff", border: "none",
                  borderRadius: 12, padding: "16px", fontFamily: FONT_HEADING, fontWeight: 700,
                  fontSize: 16, cursor: "pointer", transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  Send Inquiry 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
