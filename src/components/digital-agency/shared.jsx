// ============================================================
// Shared Components — Digital Agency
// ============================================================
import React, { useState } from "react";

export const BRAND = "#F05023";
export const DARK = "#1A1A1A";
export const GRAY = "#6B6B6B";
export const LIGHT_BG = "#F9F7F4";
export const BORDER = "#E8E8E8";
export const FONT_HEADING = "'Inter Tight', Inter, sans-serif";
export const FONT_BODY = "Inter, sans-serif";

// ── Navbar ────────────────────────────────────────────────────
export function Navbar({ activePage = "Home" }) {
  const links = ["Home", "About us", "Services", "Portfolio", "Blog"];
  return (
    <nav style={{
      position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
      width: "calc(100% - 64px)", maxWidth: 1072, height: 72,
      background: "rgba(255,255,255,0.88)", backdropFilter: "blur(14px)",
      borderRadius: 16, border: `1px solid ${BORDER}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 24px", zIndex: 100, boxSizing: "border-box",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    }}>
      {/* Logo */}
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
        <div style={{
          width: 40, height: 40, background: BRAND, borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ width: 26, height: 26, background: "#fff", borderRadius: 6 }} />
        </div>
        <span style={{
          background: `${BRAND}1F`, color: BRAND, fontSize: 11, fontWeight: 600,
          fontFamily: FONT_BODY, padding: "2px 6px", borderRadius: 5,
        }}>V1</span>
      </a>

      {/* Links */}
      <div style={{ display: "flex", gap: 32, fontFamily: FONT_HEADING, fontWeight: 500, fontSize: 14 }}>
        {links.map(l => (
          <a key={l} href={`/${l.toLowerCase().replace(" ", "-")}`} style={{
            color: activePage === l ? BRAND : DARK,
            textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
            transition: "color 0.2s",
          }}>
            {l}
            {l === "Services" && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </a>
        ))}
      </div>

      {/* CTA */}
      <Btn>Become a Client</Btn>
    </nav>
  );
}

// ── Button ─────────────────────────────────────────────────────
export function Btn({ children, outline = false, style = {}, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: outline ? "transparent" : hov ? "#d9401a" : BRAND,
        color: outline ? BRAND : "#fff",
        border: outline ? `1.5px solid ${BRAND}` : "none",
        borderRadius: 10, padding: "10px 20px",
        fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 14,
        cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
        ...style,
      }}>{children}</button>
  );
}

// ── Page Hero Banner ───────────────────────────────────────────
export function PageHero({ title, subtitle }) {
  return (
    <section style={{
      background: DARK, paddingTop: 140, paddingBottom: 80,
      paddingLeft: 80, paddingRight: 80, position: "relative", overflow: "hidden",
    }}>
      {/* Decorative lines */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: `${BORDER}22` }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 1, background: `${BORDER}22` }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: `${BRAND}1A`, borderRadius: 100, padding: "6px 14px 6px 8px",
          marginBottom: 20,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: BRAND }} />
          <span style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 500, color: BRAND }}>
            {subtitle}
          </span>
        </div>
        <h1 style={{
          fontFamily: FONT_HEADING, fontSize: 56, fontWeight: 700,
          color: "#fff", margin: 0, lineHeight: 1.1, letterSpacing: -1,
        }}>{title}</h1>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────
export function Footer() {
  const services = ["UI/UX Design", "Branding", "Web Development", "Mobile Development", "Digital Marketing"];
  const company = ["Portfolio", "About Us", "Careers", "Blog"];
  const socials = ["Facebook", "Twitter (x.com)", "Instagram", "Dribbble", "Behance"];
  return (
    <footer style={{ background: DARK, padding: "64px 80px 32px", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, background: BRAND, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 26, height: 26, background: "#fff", borderRadius: 6 }} />
              </div>
              <span style={{ fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 18, color: "#fff" }}>Arvion</span>
            </div>
            <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "#9E9E9E", lineHeight: 1.7, maxWidth: 260 }}>
              We blend creativity with technology to deliver impactful digital experiences.
            </p>
            <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "#9E9E9E", marginTop: 12 }}>hello@arvion.com</p>
            <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "#9E9E9E" }}>+(880) 164 408 565</p>
          </div>
          {/* Services */}
          <FooterCol title="Services" links={services} />
          {/* Company */}
          <FooterCol title="Arvion" links={company} />
          {/* Socials */}
          <FooterCol title="Socials" links={socials} />
        </div>
        <div style={{ borderTop: "1px solid #2E2E2E", paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "#666", margin: 0 }}>
            © 2024 All rights reserved by Arvion
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 style={{ fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 15, color: "#fff", marginBottom: 16, marginTop: 0 }}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map(l => (
          <li key={l} style={{ marginBottom: 10 }}>
            <a href="#" style={{ fontFamily: FONT_BODY, fontSize: 14, color: "#9E9E9E", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = BRAND}
              onMouseLeave={e => e.target.style.color = "#9E9E9E"}>{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Section Heading ────────────────────────────────────────────
export function SectionHeading({ tag, title, subtitle, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 48 }}>
      {tag && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: `${BRAND}12`, borderRadius: 100, padding: "6px 14px 6px 8px", marginBottom: 16,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: BRAND }} />
          <span style={{ fontFamily: FONT_BODY, fontSize: 12, fontWeight: 500, color: BRAND }}>{tag}</span>
        </div>
      )}
      <h2 style={{ fontFamily: FONT_HEADING, fontSize: 40, fontWeight: 700, color: DARK, margin: "0 0 16px", letterSpacing: -0.5, lineHeight: 1.15 }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontFamily: FONT_BODY, fontSize: 16, color: GRAY, lineHeight: 1.7, maxWidth: center ? 560 : "100%", margin: center ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

// ── CTA Strip ──────────────────────────────────────────────────
export function CTAStrip() {
  return (
    <section style={{ background: BRAND, padding: "64px 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: FONT_HEADING, fontSize: 36, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>
            Contact us via your preferred freelance platform.
          </h2>
          <p style={{ fontFamily: FONT_BODY, fontSize: 16, color: "rgba(255,255,255,0.8)", margin: 0 }}>
            Explore our services on Upwork, Fiverr, and Contra for tailored, professional solutions.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Upwork", "Fiverr", "Contra"].map(p => (
            <button key={p} style={{
              background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)",
              color: "#fff", borderRadius: 10, padding: "12px 24px",
              fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 14, cursor: "pointer",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
            >{p}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Card ───────────────────────────────────────────────────────
export function Card({ children, style = {} }) {
  return (
    <div style={{
      background: "#fff", border: `1px solid ${BORDER}`,
      borderRadius: 20, padding: 32, transition: "box-shadow 0.2s, transform 0.2s",
      ...style,
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
    >{children}</div>
  );
}
