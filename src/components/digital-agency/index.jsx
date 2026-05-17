// ============================================================
// Digital Agency — App Router
// Usage: import DigitalAgency from "@/components/digital-agency"
// ============================================================
import React, { useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import PortfolioPage from "./PortfolioPage";
import PortfolioDetailsPage from "./PortfolioDetailsPage";
import BlogPage from "./BlogPage";
import BlogDetailsPage from "./BlogDetailsPage";
import ContactPage from "./ContactPage";

const pages = {
  "/": HomePage,
  "/about-us": AboutPage,
  "/services": ServicesPage,
  "/portfolio": PortfolioPage,
  "/portfolio/details": PortfolioDetailsPage,
  "/blog": BlogPage,
  "/blog/details": BlogDetailsPage,
  "/contact": ContactPage,
};

export default function DigitalAgency() {
  const [route, setRoute] = useState("/");

  React.useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");
      if (pages[href]) {
        e.preventDefault();
        setRoute(href);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const Page = pages[route] || HomePage;
  return <Page />;
}
