"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Download,
  Mail,
  ExternalLink,
  Megaphone,
  BarChart2,
  FileText,
  Cpu,
  Briefcase,
  Layers,
  Target,
  TrendingUp,
  Activity,
  Send,
  ChevronRight,
} from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const SKILLS = [
  {
    icon: <Megaphone size={22} />,
    title: "Advertising",
    items: ["Meta Ads", "Google Ads", "LinkedIn Campaign Manager", "A/B Testing"],
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Analytics",
    items: ["GA4", "Looker Studio", "Google Tag Manager", "Google Search Console"],
  },
  {
    icon: <FileText size={22} />,
    title: "Content & SEO",
    items: ["SEO Strategy", "Semrush", "WordPress", "Content Creation"],
  },
  {
    icon: <Cpu size={22} />,
    title: "AI & Productivity",
    items: ["Prompt Engineering for GenAI", "ChatGPT", "HubSpot", "Salesforce"],
  },
];

const PROJECTS = [
  {
    icon: <Layers size={20} />,
    title: "Strategic Funnel Architect",
    desc: "Engineered a full-funnel Meta Ads ecosystem for technical certifications — from awareness to conversion — driving consistent lead quality.",
  },
  {
    icon: <Cpu size={20} />,
    title: "AI-Driven Optimization",
    desc: "Leveraged Generative AI for rapid creative testing and high-converting ad copy, cutting iteration cycles by 60%.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Digital Pulse Agency",
    desc: "Uplifted conversions by 45% and slashed CPA by 22% through data-backed campaign restructuring and audience segmentation.",
  },
  {
    icon: <Target size={20} />,
    title: "Precision Targeting",
    desc: "Deployed lookalike audiences and custom intent segments to isolate high-value prospects and scale lead volume profitably.",
  },
  {
    icon: <Activity size={20} />,
    title: "Performance Analytics",
    desc: "Managed end-to-end tracking pipelines for ROAS, CPL, and campaign scaling using GA4, GTM, and Looker Studio dashboards.",
  },
];

const CERTIFICATIONS = [
  "Meta Certified Digital Marketing Associate",
  "Google Ads Search Certification",
  "HubSpot Content Marketing Certification",
  "Google Analytics (GA4) Certification",
  "SEMrush SEO Fundamentals",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#fff", color: "#0a0a0a", minHeight: "100vh" }}>
      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>
            Tushita Trivedi
          </span>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 32 }} className="hide-mobile">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                suppressHydrationWarning
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#374151",
                  padding: "4px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#2563eb")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#374151")}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            suppressHydrationWarning
            style={{ background: "none", border: "none", cursor: "pointer", display: "none" }}
            className="show-mobile"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid #e5e7eb",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                suppressHydrationWarning
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#374151",
                  textAlign: "left",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="about"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 72px", textAlign: "center" }}
      >
        {/* Profile image */}
        <div
          style={{
            width: 160, height: 160, borderRadius: "50%",
            margin: "0 auto 28px",
            boxShadow: "0 0 0 4px #fff, 0 0 0 6px #bfdbfe, 0 0 40px 10px #93c5fd",
            overflow: "hidden", position: "relative",
          }}
        >
          <Image
            src="/profile.jpg" alt="Tushita Trivedi" fill
            sizes="160px"
            style={{ objectFit: "cover" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div
            style={{
              width: "100%", height: "100%",
              background: "linear-gradient(135deg, #2563eb, #60a5fa)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 44, fontWeight: 700, color: "#fff",
              position: "absolute", top: 0, left: 0, zIndex: -1,
            }}
          >
            TT
          </div>
        </div>

        <div
          style={{
            display: "inline-block", background: "#eff6ff", color: "#2563eb",
            fontSize: 13, fontWeight: 600, padding: "4px 14px",
            borderRadius: 999, marginBottom: 16, letterSpacing: "0.04em",
          }}
        >
          Available for opportunities
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800,
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14,
          }}
        >
          Tushita Trivedi
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 19px)", color: "#4b5563",
            fontWeight: 500, marginBottom: 32, lineHeight: 1.5,
          }}
        >
          Performance Marketing Lead | Meta Ads &amp; Google Ads Specialist
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="/Tushita Digital Marketing(Performance Marketer) CV.pdf"
            download="Tushita_Trivedi_Resume.pdf"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#0a0a0a", color: "#fff", padding: "13px 30px",
              borderRadius: 8, fontWeight: 600, fontSize: 15,
              textDecoration: "none", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563eb")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0a0a0a")}
          >
            <Download size={16} /> Download Resume
          </a>
          <button
            onClick={() => scrollTo("Contact")}
            suppressHydrationWarning
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#0a0a0a", padding: "13px 30px",
              borderRadius: 8, fontWeight: 600, fontSize: 15,
              border: "2px solid #0a0a0a", cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#0a0a0a"; el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent"; el.style.color = "#0a0a0a";
            }}
          >
            <Mail size={16} /> Get in Touch
          </button>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: "#f9fafb", padding: "72px 24px" }}>
        <div
          style={{
            maxWidth: 1200, margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 64, alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: heading */}
          <div>
            <span
              style={{
                display: "inline-block", background: "#eff6ff", color: "#2563eb",
                fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999,
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20,
              }}
            >
              About Me
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800,
                letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 0,
              }}
            >
              Turning Ad Spend into{" "}
              <span style={{ color: "#2563eb" }}>Measurable Growth</span>
            </h2>
          </div>

          {/* Right: bio + stats */}
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.8, marginBottom: 28 }}>
              Results-driven Performance Marketing Executive with 2+ years of experience in SEO,
              paid-media, and content strategy for education. Specialist in leveraging AI-powered
              tools and growth-hacking to slash acquisition costs and drive conversion.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Specialisation", value: "Meta Ads & Google Ads" },
                { label: "Industry", value: "EdTech / Education" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2563eb", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "#6b7280", fontWeight: 500 }}>
                    {label}:{" "}
                    <span style={{ color: "#0a0a0a", fontWeight: 700 }}>{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Skills &amp; Tools</SectionLabel>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }}
            className="skills-grid"
          >
            {SKILLS.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: "28px 28px",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 30px rgba(37,99,235,0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 48, height: 48, background: "#eff6ff", borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#2563eb", flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 20, color: "#0a0a0a", margin: 0 }}>{s.title}</h3>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex", alignItems: "flex-start", gap: 10,
                        fontSize: 15, color: "#4b5563",
                        wordBreak: "break-word", overflowWrap: "break-word",
                      }}
                    >
                      <ChevronRight size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Work Experience</SectionLabel>
          <SectionTitle>Career Timeline</SectionTitle>
          <div style={{ marginTop: 48, position: "relative", paddingLeft: 32 }}>

            {/* Vertical line */}
            <div style={{
              position: "absolute", left: 7, top: 8, bottom: 8,
              width: 2, background: "linear-gradient(to bottom, #2563eb, #bfdbfe)", borderRadius: 2,
            }} />

            {/* Entry 1 */}
            <div style={{ position: "relative", marginBottom: 28 }}>
              <div style={{
                position: "absolute", left: -32, top: 28,
                width: 16, height: 16, borderRadius: "50%",
                background: "#2563eb", border: "3px solid #fff", boxShadow: "0 0 0 2px #2563eb",
              }} />
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "28px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Performance Marketing Executive</h3>
                    <p style={{ color: "#2563eb", fontWeight: 600, fontSize: 15, margin: 0 }}>Netzwerk AI Pvt Ltd</p>
                  </div>
                  <span style={{ background: "#eff6ff", color: "#2563eb", fontSize: 13, fontWeight: 600, padding: "4px 12px", borderRadius: 999, height: "fit-content", whiteSpace: "nowrap" }}>
                    Feb 2024 – May 2026
                  </span>
                </div>
                <ul style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
                  {[
                    "Drafted 5–6 SEO-optimised articles monthly, improving organic visibility and domain authority.",
                    "Generated 20–30% more qualified leads through targeted content and paid media synergy.",
                    "Lifted CTR by 10–15% through data-driven ad copy iterations and creative A/B testing.",
                    "Managed Meta & Google Ads campaigns end-to-end, optimising for CPL and ROAS.",
                    "Built performance dashboards in Looker Studio for real-time campaign monitoring.",
                  ].map((point) => (
                    <li key={point} style={{ display: "flex", gap: 10, fontSize: 14, color: "#4b5563", lineHeight: 1.6 }}>
                      <Briefcase size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Entry 2 */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: -32, top: 28,
                width: 16, height: 16, borderRadius: "50%",
                background: "#2563eb", border: "3px solid #fff", boxShadow: "0 0 0 2px #2563eb",
              }} />
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "28px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>HR Intern</h3>
                    <p style={{ color: "#2563eb", fontWeight: 600, fontSize: 15, margin: 0 }}>Loksuvidha</p>
                  </div>
                  <span style={{ background: "#eff6ff", color: "#2563eb", fontSize: 13, fontWeight: 600, padding: "4px 12px", borderRadius: 999, height: "fit-content", whiteSpace: "nowrap" }}>
                    Nov 2023 – Jan 2024
                  </span>
                </div>
                <ul style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
                  {[
                    "Coordinated end-to-end employee onboarding for 20+ new hires, managing documentation, system entries, and orientation activities for smooth integration.",
                    "Managed EPFO data updates and submissions for 100+ employee records, ensuring 100% accuracy and statutory compliance within prescribed timelines.",
                    "Performed document verification for new recruits, validating identity, educational, and employment records, reducing onboarding discrepancies.",
                    "Conducted CIBIL score checks for pre-employment background screening of candidates for loan-based roles, supporting risk mitigation and compliance.",
                  ].map((point) => (
                    <li key={point} style={{ display: "flex", gap: 10, fontSize: 14, color: "#4b5563", lineHeight: 1.6 }}>
                      <Briefcase size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TOOLS USED ── */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Tools Used</SectionLabel>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 40,
              justifyContent: "flex-start",
            }}
          >
            {[
              "Google Analytics 4",
              "Google Ads",
              "Semrush",
              "Ahrefs",
              "WordPress",
              "Shopify",
              "Looker Studio",
              "Meta Ads Manager",
              "ChatGPT",
              "Canva",
              "Google Tag Manager",
              "LinkedIn Campaign Manager",
              "Grammarly",
              "SurferSEO",
              "Salesforce",
              "HubSpot",
              "Microsoft Office",
              "n8n",
              "Google Search Console",
              "ClickFunnels",
            ].map((tool) => (
              <span
                key={tool}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  padding: "10px 18px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1f2937",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#eff6ff";
                  el.style.borderColor = "#93c5fd";
                  el.style.color = "#2563eb";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#f9fafb";
                  el.style.borderColor = "#e5e7eb";
                  el.style.color = "#1f2937";
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ background: "#f9fafb", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Featured Projects</SectionLabel>
          <SectionTitle>Work That Delivered Results</SectionTitle>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}
            className="projects-grid"
          >
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: "28px 28px",
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 30px rgba(37,99,235,0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 48, height: 48, background: "#eff6ff", borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#2563eb", flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#0a0a0a" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0, wordBreak: "break-word" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Certifications</SectionLabel>
          <SectionTitle>Credentials &amp; Achievements</SectionTitle>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}
            className="cert-grid"
          >
            {[
              {
                title: "Performance Marketing with Tude Dude",
                org: "Tude Dude",
                date: "Issued 2024",
                desc: "Comprehensive training in performance marketing strategies covering Meta Ads, Google Ads, campaign optimisation, funnel building, and ROI-driven paid media execution.",
                badge: "Verified",
              },
              {
                title: "Digital Marketing Certification",
                org: "HubSpot Academy",
                date: "Issued 2024",
                desc: "Covers the full spectrum of digital marketing including SEO, content marketing, social media strategy, email marketing, and paid advertising fundamentals.",
                badge: "Active",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: 16,
                  padding: "32px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transition: "box-shadow 0.2s, transform 0.2s",
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 30px rgba(37,99,235,0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top row: icon + badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      width: 52, height: 52, background: "#eff6ff", borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    <Activity size={22} color="#2563eb" />
                  </div>
                  <span
                    style={{
                      background: "#dcfce7", color: "#16a34a",
                      fontSize: 12, fontWeight: 700, padding: "4px 12px",
                      borderRadius: 999, letterSpacing: "0.04em",
                    }}
                  >
                    ✓ {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontWeight: 800, fontSize: 17, color: "#0a0a0a", margin: 0, lineHeight: 1.3 }}>
                  {cert.title}
                </h3>

                {/* Org + date */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#2563eb" }}>{cert.org}</span>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#d1d5db", display: "inline-block" }} />
                  <span style={{ fontSize: 13, color: "#9ca3af", fontWeight: 500 }}>{cert.date}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#f9fafb", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>Let&apos;s Work Together</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 48,
              marginTop: 48,
            }}
          >
            {/* Contact info */}
            <div>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32 }}>
                Open to performance marketing roles, freelance projects, and consulting engagements.
                Let&apos;s connect and build something impactful.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <a
                  href="mailto:triveditushita@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#0a0a0a",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#2563eb")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#0a0a0a")}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#eff6ff",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Mail size={18} color="#2563eb" />
                  </div>
                  triveditushita@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/tushita-trivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#0a0a0a",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#2563eb")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#0a0a0a")}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#eff6ff",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ExternalLink size={18} color="#2563eb" />
                  </div>
                  linkedin.com/in/tushita-trivedi
                </a>
              </div>
            </div>

            {/* Contact form */}
            <form
              autoComplete="off"
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setSendError("");
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(form),
                });
                setSending(false);
                if (res.ok) {
                  setSent(true);
                  setForm({ name: "", email: "", message: "" });
                } else {
                  setSendError("Something went wrong. Please try again.");
                }
              }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {(["name", "email"] as const).map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Your Name" : "Your Email"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                  suppressHydrationWarning
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    fontSize: 15,
                    outline: "none",
                    transition: "border-color 0.2s",
                    background: "#fff",
                  }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#2563eb")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#e5e7eb")}
                />
              ))}
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  fontSize: 15,
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                  background: "#fff",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#2563eb")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#e5e7eb")}
              />
              <button
                type="submit"
                disabled={sending}
                suppressHydrationWarning
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: sending ? "#6b7280" : "#0a0a0a",
                  color: "#fff",
                  padding: "13px 28px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  border: "none",
                  cursor: sending ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = "#2563eb"; }}
                onMouseLeave={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = "#0a0a0a"; }}
              >
                <Send size={16} /> {sending ? "Sending…" : "Send Message"}
              </button>
              {sent && <p style={{ color: "#16a34a", fontSize: 14, margin: 0 }}>✓ Message sent! I&apos;ll get back to you soon.</p>}
              {sendError && <p style={{ color: "#dc2626", fontSize: 14, margin: 0 }}>{sendError}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "24px",
          textAlign: "center",
          fontSize: 14,
          color: "#9ca3af",
        }}
      >
        © {new Date().getFullYear()} Tushita Trivedi. Built with Next.js.
      </footer>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 12 }}>
      <span
        style={{
          display: "inline-block",
          background: "#eff6ff",
          color: "#2563eb",
          fontSize: 13,
          fontWeight: 700,
          padding: "5px 16px",
          borderRadius: 999,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        textAlign: "center",
        fontSize: "clamp(30px, 4vw, 44px)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "#0a0a0a",
        marginTop: 8,
      }}
    >
      {children}
    </h2>
  );
}
