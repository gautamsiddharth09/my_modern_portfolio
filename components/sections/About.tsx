"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const competencies = [
  "MERN Stack Development",
  "REST API Development",
  "AI Integration",
  "Payment Integration",
  "Database Design",
  "JWT Authentication",
  "Redux Toolkit",
  "Responsive Design",
  "API Integration",
  "Performance Optimization",
  "Reusable Components",
  "Modular Architecture",
];

const highlights = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "REST APIs",
    desc: "Built RESTful APIs for product, cart, order, authentication, lending, and other application workflows using Node.js and Express.js.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "AI-Powered Applications",
    desc: "Integrated Google Gemini, OpenAI, LangChain, RAG, and vector embeddings to build practical AI features across SaaS, invoicing, and fintech applications.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10z" />
      </svg>
    ),
    title: "Secure & Scalable Systems",
    desc: "Implemented JWT authentication, bcrypt, validation, payment integrations, MongoDB workflows, and modular backend architectures.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <SectionTitle
            eyebrow="About Me"
            title="Building products, not just writing code"
            subtitle="A MERN Stack Developer focused on building scalable web applications and practical AI-powered solutions."
            align="center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Bio text */}
          <div
            className={`lg:col-span-3 reveal ${
              isVisible ? "visible" : ""
            } reveal-delay-1`}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="prose max-w-none space-y-4">
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  I&apos;m{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                    Gautam Kumar
                  </strong>
                  , a{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>
                    Full Stack MERN Developer
                  </span>{" "}
                  with 1+ year of experience building modern and scalable web
                  applications.
                </p>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  Currently, I&apos;m working as a{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>
                    MERN Stack Developer at Riquenza
                  </span>
                  , where I work on real-world web applications using React.js,
                  Node.js, Express.js, and MongoDB. My work includes developing
                  dynamic product experiences, REST APIs, e-commerce workflows,
                  payment integrations, and database-driven features.
                </p>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  Alongside my professional experience, I build AI-powered
                  applications using{" "}
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>
                    Google Gemini, OpenAI, LangChain, and RAG
                  </span>
                  . I&apos;ve worked on projects across e-commerce, fintech,
                  invoicing, and SaaS, combining modern full-stack development
                  with practical AI capabilities.
                </p>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  I enjoy building{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                    clean, secure, and maintainable applications
                  </strong>{" "}
                  with a focus on reusable components, well-structured APIs,
                  database performance, authentication, and a smooth user
                  experience.
                </p>
              </div>

              {/* Core competencies */}
              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p
                  className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  Core Competencies
                </p>

                <div className="flex flex-wrap gap-2">
                  {competencies.map((c) => (
                    <span key={c} className="skill-badge">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Highlights */}
          <div
            className={`lg:col-span-2 flex flex-col gap-4 reveal ${
              isVisible ? "visible" : ""
            } reveal-delay-2`}
          >
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`card-hover rounded-2xl p-6 reveal ${
                  isVisible ? "visible" : ""
                } reveal-delay-${i + 2}`}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                  }}
                  aria-hidden="true"
                >
                  {h.icon}
                </div>

                <h3
                  className="font-display font-bold text-base mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {h.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
