/**
 * Style reminder: Stealth Systems Console — an asymmetric, architecture-first
 * AI engineering field report. Signal Blue is reserved for live/system emphasis.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Bot,
  ChevronDown,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Radar,
  ScanLine,
  Server,
  Trophy,
  X,
} from "lucide-react";
import { useState } from "react";
import "./Home.portrait.css";
import {
  education,
  experience,
  expertise,
  metricCards,
  projects,
  techLayers,
  type Project,
} from "../data/portfolio";

const heroVisual = "/portfolio-assets/dhiraj-hero-systems.png";
const cvVisual = "/portfolio-assets/dhiraj-cv-pipeline.png";
const speechVisual = "/portfolio-assets/dhiraj-speech-pipeline.png";
const ragVisual = "/portfolio-assets/dhiraj-rag-lab.png";
const tutorVisual = "/portfolio-assets/dhiraj-tutor-pipeline.png";
const meetingVisual = "/portfolio-assets/dhiraj-meeting-pipeline.png";
const sportsVisual = "/portfolio-assets/dhiraj-sports-pipeline.png";
const logoMark = "/portfolio-assets/dhiraj-da-mark.png";
const portraitVisual = "/portfolio-assets/dhiraj-technical-portrait.png";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <i />
      <p>{children}</p>
    </div>
  );
}

function SignalPath({ className = "" }: { className?: string }) {
  return (
    <div className={`signal-path ${className}`} aria-hidden="true">
      <i /><span /><b /><span /><i />
    </div>
  );
}

function IconForExpertise({ name }: { name: string }) {
  const className = "expertise-icon";
  if (name === "vision") return <ScanLine className={className} aria-hidden="true" />;
  if (name === "signal") return <Radar className={className} aria-hidden="true" />;
  if (name === "audio") return <AudioLines className={className} aria-hidden="true" />;
  return <Bot className={className} aria-hidden="true" />;
}

function Architecture({ nodes }: { nodes: string[] }) {
  return (
    <div className="architecture" aria-label="System architecture flow">
      {nodes.map((node, index) => (
        <div className="architecture-step" key={node}>
          <div className="architecture-node">
            <span className="architecture-count">0{index + 1}</span>
            <span>{node}</span>
          </div>
          {index < nodes.length - 1 && <div className="architecture-arrow" aria-hidden="true"><span /></div>}
        </div>
      ))}
    </div>
  );
}

function ProjectRecord({ project, isOpen, onToggle }: { project: Project; isOpen: boolean; onToggle: () => void }) {
  const image = 
    project.visual === "vision" ? cvVisual : 
    project.visual === "speech" ? speechVisual : 
    project.visual === "rag" ? ragVisual : 
    project.visual === "tutor" ? tutorVisual : 
    project.visual === "meeting" ? meetingVisual : 
    project.visual === "sports" ? sportsVisual : null;
  return (
    <motion.article
      layout
      className={`project-record ${isOpen ? "is-open" : ""}`}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
    >
      <button className="project-trigger" onClick={onToggle} aria-expanded={isOpen} aria-controls={`project-${project.id}`}>
        <span className="project-index">{project.index}</span>
        <span className="project-intro">
          <span className="project-category">{project.category}</span>
          <span className="project-title">{project.title}</span>
        </span>
        <span className="project-tags" aria-label="Technologies">{project.tags.map((tag) => <i key={tag}>{tag}</i>)}</span>
        <span className="project-action">{isOpen ? "CLOSE SYSTEM" : "VIEW SYSTEM"}<ChevronDown aria-hidden="true" /></span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`project-${project.id}`}
            className="project-detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="project-detail-inner">
              <div className="project-summary">
                <p className="detail-eyebrow">SYSTEM OVERVIEW</p>
                <p className="project-description">{project.description}</p>
                <div className="outcomes">
                  <p className="detail-eyebrow">OBSERVED OUTCOMES</p>
                  <ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                </div>
              </div>
              <div className={`architecture-panel ${image ? "has-visual" : ""}`}>
                {image && <img className="project-visual" src={image} alt="Abstract technical representation" />}
                <div className="architecture-panel-content">
                  <p className="detail-eyebrow">ARCHITECTURE / FLOW</p>
                  <Architecture nodes={project.architecture} />
                </div>
              </div>
              <div className="project-specs">
                <div>
                  <p className="detail-eyebrow">TECHNOLOGY</p>
                  <div className="chip-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div>
                  <p className="detail-eyebrow">CONTRIBUTION</p>
                  <div className="role-list">{project.role.map((item, index) => <p key={item}><b>0{index + 1}</b>{item}</p>)}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Home() {
  const [openProject, setOpenProject] = useState("multi-camera-vision");
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["WORK", "#work"],
    ["SYSTEMS", "#systems"],
    ["EXPERIENCE", "#experience"],
    ["ABOUT", "#about"],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Dhiraj Athreya home">
          <span className="brand-mark"><img src={logoMark} alt="" /></span>
          <span><b>DHIRAJ</b><em>//</em>ATHREYA</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          <a className="resume-nav" href="/portfolio-assets/dhiraj-athreya-resume.pdf" target="_blank" rel="noreferrer" download="Dhiraj_Athreya_Resume.pdf">RÉSUMÉ <Download size={13} aria-hidden="true" /></a>
        </nav>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} aria-label="Mobile navigation">
              {navItems.map(([label, href]) => <a href={href} onClick={closeMenu} key={label}>{label}</a>)}
              <a href="#contact" onClick={closeMenu}>CONTACT</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="top" className="hero">
        <div className="hero-visual" aria-hidden="true"><img src={heroVisual} alt="" /></div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-portrait"><img src={portraitVisual} alt="Dhiraj Athreya in a blue suit" /><span aria-hidden="true">PROFILE / DA-01</span></div>
        <motion.div className="hero-content" initial="hidden" animate="visible" transition={{ staggerChildren: 0.07 }}>
          <motion.div variants={reveal}><SectionLabel index="01">INTRODUCTION / AI SYSTEMS ENGINEERING</SectionLabel></motion.div>
          <motion.p variants={reveal} className="hero-role">AI / ML ENGINEER</motion.p>
          <motion.div variants={reveal} className="hero-identity"><h1>DHIRAJ<br /><span>ATHREYA</span></h1><div className="hero-monogram"><img src={logoMark} alt="" /><p>DA / SIGNAL<br />MONOGRAM</p></div></motion.div>
          <motion.div variants={reveal} className="hero-copy">
            <p>I build production-grade AI systems, GPU-accelerated real-time inference pipelines, and intelligent computer-vision applications.</p>
          </motion.div>
          <motion.div variants={reveal} className="hero-actions">
            <a className="button button-primary" href="#work">INSPECT SYSTEMS <ArrowRight size={17} aria-hidden="true" /></a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/dhiraj-athreyas" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={16} aria-hidden="true" /></a>
          </motion.div>
        </motion.div>
        <motion.aside className="system-status" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28, duration: 0.36 }} aria-label="Professional profile">
          <div className="status-heading"><span className="live-dot" />SYSTEM STATUS</div>
          <div className="status-main">CURRENTLY<br />BUILDING</div>
          <div className="status-row"><span>LOCATION</span><b><MapPin size={12} /> BANGALORE, INDIA</b></div>
          <div className="status-row"><span>FOCUS</span><b>GENAI / VISION / SPEECH AI</b></div>
          <div className="status-row"><span>EXPERIENCE</span><b>1+ YEAR / PRODUCTION AI</b></div>
          <div className="signal-line"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </motion.aside>
        <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO INSPECT</span><i /></div>
      </section>

      <section id="about" className="profile section-frame">
        <SectionLabel index="02">SYSTEM PROFILE</SectionLabel>
        <div className="profile-layout">
          <div className="profile-copy">
            <h2>ENGINEERING AI THAT<br /><span>OPERATES IN THE REAL WORLD.</span></h2>
            <p>AI/ML Engineer with production experience building Computer Vision, Speech AI, and Generative AI systems. I focus on transforming research and open-source capability into reliable, high-performance deployments.</p>
            <div className="specialization-list">
              {["GENAI", "COMPUTER VISION", "REAL-TIME INFERENCE", "SPEECH AI", "AI PIPELINES", "GPU OPTIMIZATION"].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
            </div>
          </div>
          <div className="terminal" aria-label="Technical profile terminal">
            <div className="terminal-bar"><span /><span /><span /><b>PROFILE.SYS</b></div>
            <div className="terminal-body">
              <p><i>$</i> whoami</p><strong>dhiraj@ai-ml-engineer</strong>
              <p><i>$</i> focus</p><strong>computer-vision · speech-ai<br />generative-ai · systems</strong>
              <p><i>$</i> status</p><strong className="terminal-live"><em /> systems operational</strong>
            </div>
          </div>
        </div>
        <div className="section-proof"><SignalPath /><span>PRODUCTION PROOF</span><b>40 CONCURRENT<br />RTSP STREAMS</b></div>
        <div className="metrics-grid">
          {metricCards.map((metric) => <div className="metric" key={metric.label}><b>{metric.value}</b><p>{metric.label}</p><span /></div>)}
        </div>
      </section>

      <section id="systems" className="expertise-section section-frame">
        <SectionLabel index="03">CORE CAPABILITIES</SectionLabel>
        <div className="section-heading-row"><h2>ENGINEERING<br /><span>CAPABILITIES.</span></h2><div className="heading-context"><p>Specialized across the model, inference, retrieval, data, and deployment layers of applied AI systems.</p><strong>01+ YEAR<br />PRODUCTION AI</strong></div></div>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <motion.article className="expertise-card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.045 }} key={item.title}>
              <div><span>{item.index}</span><IconForExpertise name={item.icon} /></div>
              <h3>{item.title}</h3>
              <ul>{item.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="work" className="projects section-frame">
        <SectionLabel index="04">SELECTED SYSTEMS / PROJECTS</SectionLabel>
        <div className="section-heading-row projects-heading"><h2>WORK THAT<br /><span>SHIPS.</span></h2><div className="heading-context"><p>System records that prioritize the problem, architecture, modeled capability, and operational outcome.</p><strong>06 SYSTEM<br />RECORDS</strong></div></div>
        <div className="project-list">
          {projects.map((project) => <ProjectRecord project={project} isOpen={openProject === project.id} onToggle={() => setOpenProject(openProject === project.id ? "" : project.id)} key={project.id} />)}
        </div>
      </section>

      <section className="stack-section section-frame">
        <SectionLabel index="05">TECHNOLOGY SYSTEM</SectionLabel>
        <div className="section-heading-row"><h2>THE<br /><span>STACK.</span></h2><div className="heading-context"><p>Tools arranged by the layers where they support the system, not as a logo wall.</p><strong>05 SYSTEM<br />LAYERS</strong></div></div>
        <div className="stack-layers">
          {techLayers.map((layer, index) => (
            <div className="stack-layer" key={layer.label}>
              <span className="layer-number">0{index + 1}</span>
              <h3>{layer.label}</h3>
              <div>{layer.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section section-frame">
        <SectionLabel index="06">EXPERIENCE / RESEARCH LOG</SectionLabel>
        <div className="section-heading-row"><h2>BUILT FROM<br /><span>RESEARCH TO RUNTIME.</span></h2><div className="heading-context"><p>Hands-on work across research, system design, production deployment, and live AI infrastructure.</p><strong>2025 → NOW<br />LIVE SYSTEMS</strong></div></div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-record" key={item.period}>
              <div className="timeline-date"><span>{item.period}</span><i /></div>
              <div className="timeline-content">
                <p className="role-label">{item.role}</p>
                <h3>{item.organization}</h3>
                <p className="location"><MapPin size={13} />{item.location}</p>
                <ul>{item.work.map((point) => <li key={point}>{point}</li>)}</ul>
                <div className="chip-list compact">{item.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                {item.note && <p className="timeline-note"><ArrowUpRight size={15} />{item.note}</p>}
              </div>
            </article>
          ))}
        </div>
        <div className="education-layout">
          <div className="education-list">
            <p className="detail-eyebrow">EDUCATION</p>
            {education.map((entry) => <article key={entry.degree}><span>{entry.period}</span><div><h3>{entry.degree}</h3><p>{entry.school}</p><small>{entry.detail}</small></div></article>)}
          </div>
          <aside className="achievement"><Trophy size={21} /><div><p className="detail-eyebrow">ACADEMIC ACHIEVEMENT</p><h3>FANTOM CODE HACKATHON</h3><p>Team Leader, 4-member team · National-level 24-hour hackathon at RV Institute of Technology and Management, Bengaluru.</p></div></aside>
        </div>
      </section>

      <section className="lab-section section-frame">
        <SectionLabel index="07">LAB / RESEARCH TRACK</SectionLabel>
        <div className="lab-layout">
          <div><h2>CONVERTING<br /><span>RESEARCH INTO SYSTEMS.</span></h2><p>Research on multi-camera surveillance, geometric localization, camera self-calibration, feature extraction, and person re-identification established the foundation for production deployment.</p><div className="lab-proof"><SignalPath /><b>RESEARCH →<br />PRODUCTION</b></div></div>
          <div className="lab-records">
            <article><span>EXPERIMENT / 001</span><h3>MULTI-CAMERA PERCEPTION</h3><p>Literature evaluation, model benchmarking, and a unified perception stack for surveillance-oriented AI.</p><footer><b>STATUS</b> RESEARCH TO PRODUCTION</footer></article>
            <article><span>EXPERIMENT / 002</span><h3>CROSS-CAMERA REID</h3><p>Custom ResNet50 pipeline for robust appearance-based identity association across camera viewpoints.</p><footer><b>STATUS</b> RESEARCH</footer></article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-wire" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <SectionLabel index="08">CONTACT / SYSTEM INTERFACE</SectionLabel>
        <div className="contact-layout">
          <div><h2>HAVE A SYSTEM<br />WORTH <span>BUILDING?</span></h2><p>For AI engineering, computer vision, multilingual speech systems, or applied Generative AI work.</p></div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:dhiraj.athreyas@gmail.com"><Mail size={19} /><span>dhiraj.athreyas@gmail.com</span><ArrowUpRight size={18} /></a>
            <a className="contact-link" href="https://www.linkedin.com/in/dhiraj-athreyas" target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN / DHIRAJ-ATHREYAS <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top"><div><span className="live-dot" /> SYSTEM STATUS / ONLINE</div><div>AVAILABLE FOR / AI ENGINEERING · GENAI · COMPUTER VISION · SYSTEM DEVELOPMENT</div></div>
        <div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark"><img src={logoMark} alt="" /></span><span><b>DHIRAJ</b><em>//</em>ATHREYA</span></a><SignalPath className="footer-signal" /><p>$ exit<br /><span>connection remains open.</span></p><small>© 2026 DHIRAJ ATHREYA</small></div>
      </footer>
    </main>
  );
}
