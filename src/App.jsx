import { useState, useEffect } from "react";
import "./App.css";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const TITLES = ["Frontend Developer", "Full Stack Developer", "React Devloper", ];

const SKILLS = {
  "Languages":  { items: ["JavaScript", "Python"],                                    color: "violet" },
  "Frontend":   { items: ["React", "HTML5", "CSS3"],                                  color: "cyan"   },
  "Backend":    { items: ["Node.js", "Express.js"],                                   color: "lime"   },
  "Databases":  { items: ["MongoDB Atlas", "MySQL", "PostgreSQL"],                    color: "amber"  },
  "Tools":      { items: ["Git", "GitHub", "VS Code", "Postman", "Vercel","Netlify"], color: "pink"   },
};

const EXPERIENCES = [
  {
    role: "Technology Intern", company: "REVEZA", location: "Bangalore, India",
    period: "Nov 2024 – Dec 2025", color: "cyan",
    points: [
      "Developed and maintained internal web-based tools using JavaScript and React, improving operational workflows.",
      "Analysed service performance data and prepared structured reports to support data-driven improvements.",
      "Collaborated cross-functionally with technical and client-facing teams to identify issues and propose solutions.",
      "Conducted client field visits to gather requirements and translate feedback into actionable technical insights.",
      "Supported testing, documentation, and optimisation of existing systems, improving application reliability.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Health AI – Symptom Checker", icon: "🩺", color: "cyan",
    tech: ["React", "JavaScript", "CSS", "AI Logic", "Vercel"], link: "https://health-ai-v1.vercel.app/",
    description: "AI-based health assessment tool that analyses symptoms, suggests medical conditions, recommends precautions, and guides users through a chatbot-style interactive interface.",
    highlights: ["AI-driven symptom analysis engine","Chatbot-style conversational UI","Condition suggestions with precautions & tests","Responsive design, deployed on Vercel"],
  },
  {
    title: "Mental Health Support App", icon: "🧠", color: "violet",
    tech: ["React", "JavaScript", "AI Logic", "Vercel"], link: "https://mental-health-ruddy-nu.vercel.app/",
    description: "AI-powered mental wellness platform featuring mood analysis, self-assessment quizzes, emotional tracking, stress-relief tools, and curated wellness resources.",
    highlights: ["Mood & emotional state analysis","Self-assessment quiz engine","Interactive stress-relief tools","Wellness resource library"],
  },
  {
    title: "Courier Service Website", icon: "📦", color: "amber",
    tech: ["React", "JavaScript", "CSS", "Netlify"], link: "https://sunilandcompany.netlify.app/",
    description: "Professional responsive business website for Sunil and Company courier service, featuring service pages, contact forms, inquiry workflow, and mobile-optimised layouts.",
    highlights: ["Fully responsive React frontend","Service pages & contact forms","Reusable UI component system","Deployed on Netlify with mobile optimisation"],
  },
];

const EDUCATION = [
  { degree: "Master of Computer Applications (MCA)", school: "Amrita Vishwa Vidyapeetham",      period: "2021 – 2023", score: "CGPA: 8.1", color: "cyan"   },
  { degree: "Bachelor of Science (B.Sc.)",           school: "Lyallpur Khalsa College, Jalandhar", period: "2017 – 2020", score: "60.6%",    color: "violet" },
];

const CERTS = [
  { text: "Full Stack Python – Prostack Academy, Bangalore", color: "lime"   },
  { text: "Meta Frontend Developer Certificate",             color: "cyan"   },
  { text: "CCNA – Cisco Networking",                         color: "amber"  },
  { text: "Elements of AI",                                  color: "pink"   },
  { text: "Google Cloud: Generative AI",                     color: "violet" },
  { text: "IBM Python for Data Science",                     color: "orange" },
];

const FORAGE = [
  { company: "Skyscanner", color: "cyan",   title: "Front-End Engineering Simulation",           desc: "Built a React-based date selection interface using Skyscanner's Backpack UI component library." },
  { company: "Citi",       color: "amber",  title: "Technology Software Development Simulation", desc: "Created UML state diagrams for loan management workflows; researched ML approaches for credit risk." },
  { company: "J.P. Morgan",color: "violet", title: "Software Engineering Simulation",            desc: "Diagnosed and resolved broken frontend components; integrated Perspective library for live data." },
];

/* ─── Mesh Background ── */
function MeshBg() {
  return (
    <div className="mesh-bg" aria-hidden="true">
      <div className="blob blob--1" /><div className="blob blob--2" />
      <div className="blob blob--3" /><div className="blob blob--4" />
      <div className="blob blob--5" /><div className="blob blob--6" />
      <div className="noise" />
    </div>
  );
}

/* ─── NavBar ── */
function NavBar({ active, onNav }) {
  const [solid, setSolid]     = useState(false);
  const [open,  setOpen]      = useState(false);

  useEffect(() => {
    const h = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (l) => {
    onNav(l); setOpen(false);
    document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${solid ? " navbar--solid" : ""}`}>
      <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span>SD</span>
      </button>
      <ul className={`nav-links${open ? " nav-links--open" : ""}`}>
        {NAV_LINKS.map(l => (
          <li key={l}>
            <button className={`nav-btn${active === l ? " nav-btn--on" : ""}`} onClick={() => go(l)}>{l}</button>
          </li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

/* ─── Hero ── */
function HeroSection() {
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [typed, setTyped] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = TITLES[ti]; let t;
    if (!del && ci < cur.length)        t = setTimeout(() => { setTyped(cur.slice(0,ci+1)); setCi(c=>c+1); }, 75);
    else if (!del && ci === cur.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && ci > 0)             t = setTimeout(() => { setTyped(cur.slice(0,ci-1)); setCi(c=>c-1); }, 38);
    else                                { setDel(false); setTi(i=>(i+1)%TITLES.length); }
    return () => clearTimeout(t);
  }, [ci, del, ti]);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="pill pill--green"><span className="pdot" />Open to Opportunities</div>
          <h1 className="hero-name">Sahil<br /><span className="hero-grad">Dhiman</span></h1>
          <div className="hero-typed"><span>{typed}</span><span className="cur">|</span></div>
          <p className="hero-bio">
            Computer Applications graduate crafting responsive, scalable web apps
            with React, Node.js, and modern full-stack tech. Passionate about UI that feels alive.
          </p>
          <div className="hero-cta">
            <a href="./SahilDhiman.pdf" download className="btn-primary">
              <span className="btn-icon">↓</span> Download Résumé
            </a>
            <button className="btn-ghost" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}>
              Get in Touch
            </button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/SahilD1509" target="_blank" rel="noreferrer" className="soc-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/sahil-dhiman-b10261255/" target="_blank" rel="noreferrer" className="soc-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:sdhiman1509@gmail.com" className="soc-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-wrap">
            <div className="halo halo--a" /><div className="halo halo--b" /><div className="halo halo--c" />
            <div className="profile-glass">
              <img src="/profile.png" alt="Sahil Dhiman" className="profile-photo"
                onError={e=>{ e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
              <div className="profile-init">SD</div>
            </div>
            <div className="fchip fchip--react">⚛ React</div>
            <div className="fchip fchip--node">🟢 Node.js</div>
            <div className="fchip fchip--ai">🤖 AI Apps</div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-track"><div className="scroll-thumb" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

/* ─── Section Header ── */
function SecHeader({ label, title, color = "cyan" }) {
  return (
    <div className="sec-header">
      <span className={`sec-pill sec-pill--${color}`}>{label}</span>
      <h2 className="sec-title">{title}</h2>
      <div className={`sec-line sec-line--${color}`} />
    </div>
  );
}

/* ─── Skills ── */
function SkillsSection() {
  return (
    <section className="section" id="skills">
      <SecHeader label="Technical Skills" title="What I Work With" color="cyan" />
      <div className="skills-grid">
        {Object.entries(SKILLS).map(([cat, { items, color }]) => (
          <div className={`gcard skill-card sc--${color}`} key={cat}>
            <div className={`stripe stripe--${color}`} />
            <span className={`badge badge--${color}`}>{cat}</span>
            <div className="stags">
              {items.map(item => <span className={`stag stag--${color}`} key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Experience ── */
function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <SecHeader label="Work Experience" title="Where I've Worked" color="violet" />
      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <div className="tl-row" key={i}>
            <div className="tl-side">
              <div className={`tl-dot tl-dot--${exp.color}`} />
              <div className="tl-stem" />
            </div>
            <div className={`gcard exp-card ec--${exp.color}`}>
              <div className={`stripe stripe--${exp.color}`} />
              <div className="exp-head">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className={`exp-co exp-co--${exp.color}`}>{exp.company} · {exp.location}</p>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <ul className="exp-pts">
                {exp.points.map((p,j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="forage-block">
        <h3 className="forage-h">Virtual Engineering Experience — Forage</h3>
        <div className="forage-grid">
          {FORAGE.map((f, i) => (
            <div className={`gcard forage-card fc--${f.color}`} key={i}>
              <div className={`stripe stripe--${f.color}`} />
              <span className={`badge badge--${f.color}`}>{f.company}</span>
              <h4 className="forage-title">{f.title}</h4>
              <p className="forage-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ── */
function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <SecHeader label="Projects" title="Things I've Built" color="pink" />
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <div className={`gcard proj-card pc--${p.color}`} key={i}>
            <div className={`stripe stripe--${p.color}`} />
            <div className={`pglow pglow--${p.color}`} />
            <div className="proj-top">
              <span className="proj-icon">{p.icon}</span>
              <h3 className="proj-title">{p.title}</h3>
            </div>
            <p className="proj-desc">{p.description}</p>
            <ul className="proj-hl">
              {p.highlights.map((h,j) => (
                <li key={j}><span className={`hldot hldot--${p.color}`}>◆</span>{h}</li>
              ))}
            </ul>
            <div className="proj-techs">
              {p.tech.map(t => <span className={`tchip tchip--${p.color}`} key={t}>{t}</span>)}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" className={`view-btn vb--${p.color}`}>
              View Project <span className="arr">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Education ── */
function EducationSection() {
  return (
    <section className="section" id="education">
      <SecHeader label="Education & Certifications" title="Academic Background" color="amber" />
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <div className={`gcard edu-card edc--${e.color}`} key={i}>
            <div className={`stripe stripe--${e.color}`} />
            <div className={`edu-icon-wrap eiw--${e.color}`}>🎓</div>
            <h3 className="edu-degree">{e.degree}</h3>
            <p className={`edu-school eds--${e.color}`}>{e.school}</p>
            <div className="edu-meta">
              <span className="edu-period">{e.period}</span>
              <span className={`edu-score esc--${e.color}`}>{e.score}</span>
            </div>
          </div>
        ))}
      </div>
      <h3 className="certs-h">Certifications</h3>
      <div className="certs-grid">
        {CERTS.map((c, i) => (
          <div className={`gcard cert-card cc--${c.color}`} key={i}>
            <div className={`stripe stripe--${c.color}`} />
            <span className="cert-medal">🏅</span>
            <span className="cert-txt">{c.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Contact ── */
function ContactSection() {
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const ch = e => setForm({ ...form, [e.target.name]: e.target.value });
  const sendWA = () => {
    if (!form.name || !form.message) return;
    const txt = encodeURIComponent(`Hi Sahil! 👋\n\nName: ${form.name}\nPhone: ${form.phone||"N/A"}\nEmail: ${form.email||"N/A"}\n\nMessage:\n${form.message}`);
    window.open(`https://wa.me/919015130859?text=${txt}`, "_blank");
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name:"",phone:"",email:"",message:"" }); }, 3000);
  };

  const CONTACTS = [
    { icon:"📱", label:"Phone",    value:"+91 9015130859",         href:"tel:+919015130859",                                color:"cyan"   },
    { icon:"✉️", label:"Email",    value:"sdhiman1509@gmail.com",  href:"mailto:sdhiman1509@gmail.com",                     color:"pink"   },
    { icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label:"LinkedIn", value:"sahil-dhiman-b10261255", href:"https://www.linkedin.com/in/sahil-dhiman-b10261255/",  color:"violet" },
    { icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>, label:"GitHub",   value:"SahilD1509",             href:"https://github.com/SahilD1509",                        color:"amber"  },
  ];

  return (
    <section className="section" id="contact">
      <SecHeader label="Get In Touch" title="Let's Work Together" color="lime" />
      <div className="contact-grid">
        <div className="contact-left">
          <p className="contact-intro">I'm open to full-time roles, freelance projects, or even a great conversation about tech. Reach out anytime.</p>
          <div className="contact-cards">
            {CONTACTS.map((c,i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" className={`gcard con-card cc2--${c.color}`}>
                <div className={`stripe stripe--${c.color}`} />
                <span className={`con-icon coni--${c.color}`}>{c.icon}</span>
                <div>
                  <div className="con-lbl">{c.label}</div>
                  <div className="con-val">{c.value}</div>
                </div>
                <span className="con-arr">→</span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-right">
          <div className="gcard form-card">
            <div className="stripe stripe--lime" />
            <h3 className="form-h">Send a Message via WhatsApp</h3>
            <p className="form-sub">Fill the form — it'll open WhatsApp with your message pre-filled.</p>
            <div className="form-stack">
              {[
                { name:"name",    label:"Full Name *",     type:"text",  placeholder:"John Doe"           },
                { name:"phone",   label:"Phone Number",    type:"tel",   placeholder:"+91 98765 43210"    },
                { name:"email",   label:"Email Address",   type:"email", placeholder:"you@example.com"   },
              ].map(f => (
                <div className="fg" key={f.name}>
                  <label className="fl">{f.label}</label>
                  <input type={f.type} name={f.name} value={form[f.name]} onChange={ch} className="fi" placeholder={f.placeholder} />
                </div>
              ))}
              <div className="fg">
                <label className="fl">Your Message *</label>
                <textarea name="message" value={form.message} onChange={ch} className="fi fi--ta" placeholder="Tell me about your project…" rows={5} />
              </div>
              <button className={`wa-btn${sent?" wa-btn--sent":""}`} onClick={sendWA} disabled={!form.name||!form.message}>
                {sent ? "✓ Opening WhatsApp…" : (
                  <><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>Send via WhatsApp</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <span className="footer-logo">SD</span>
        <p className="footer-copy">Designed & Built by <strong>Sahil Dhiman</strong> · {new Date().getFullYear()}</p>
        <div className="footer-links">
          {[["GitHub","https://github.com/SahilD1509"],["LinkedIn","https://www.linkedin.com/in/sahil-dhiman-b10261255/"],["Email","mailto:sdhiman1509@gmail.com"]].map(([l,h]) =>
            <a key={l} href={h} target="_blank" rel="noreferrer">{l}</a>
          )}
        </div>
      </div>
    </footer>
  );
}

/* ─── App ── */
export default function App() {
  const [active, setActive] = useState("About");
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { const n = NAV_LINKS.find(l=>l.toLowerCase()===e.target.id); if(n) setActive(n); }
      }),
      { threshold: 0.35 }
    );
    NAV_LINKS.forEach(l => { const el = document.getElementById(l.toLowerCase()); if(el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <MeshBg />
      <NavBar active={active} onNav={setActive} />
      <main>
        <HeroSection />
        <div id="about" style={{ height: 0 }} />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}