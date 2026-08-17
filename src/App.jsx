import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Braces, Check, Database, Download, Github, Linkedin, Mail, MapPin, Menu, Phone, ScanSearch, Sparkles, TerminalSquare, X } from 'lucide-react'
import SectionHeading from './components/SectionHeading'
import { useActiveSection } from './hooks/useActiveSection'
import { additionalProjects, navItems, profile, projects, roles, skillGroups } from './data/portfolio'
import profileImage from '../assets/images/profile.jpg'
import resumeFile from '../cv/Zafar_Ullah_AIML_Resume.pdf'

const icons = { BrainCircuit, Braces, Database, ScanSearch, Sparkles, TerminalSquare }
const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .58 } } }

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(navItems.map(([id]) => id))
  useEffect(() => { const fn = () => setScrolled(scrollY > 24); fn(); addEventListener('scroll', fn, { passive: true }); return () => removeEventListener('scroll', fn) }, [])
  useEffect(() => { const fn = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', fn); return () => removeEventListener('keydown', fn) }, [])
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-shell">
      <a className="brand" href="#home" aria-label="Zafar Ullah, home"><span>Z</span><b>Zafar Ullah</b></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>{label}</a>)}
      </nav>
      <a className="nav-cta" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
    </motion.nav>}</AnimatePresence>
  </header>
}

function Hero() {
  const roles = ['Agentic AI systems', 'production ML pipelines', 'grounded RAG applications']
  const [role, setRole] = useState(0)
  useEffect(() => { const id = setInterval(() => setRole(v => (v + 1) % roles.length), 2800); return () => clearInterval(id) }, [])
  return <section className="hero" id="home">
    <div className="hero-grid-bg" aria-hidden="true" /><div className="hero-orb orb-a" aria-hidden="true" /><div className="hero-orb orb-b" aria-hidden="true" />
    <div className="container hero-layout">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .1 } } }}>
        <motion.div variants={reveal} className="status"><i /> Available for AI/ML opportunities</motion.div>
        <motion.p variants={reveal} className="hero-kicker">AI Engineer at ALGO HUB <span>•</span> ML Engineering Intern at FlyRank</motion.p>
        <motion.h1 variants={reveal}>Zafar Ullah.<br /><span>I build intelligence that ships.</span></motion.h1>
        <motion.div variants={reveal} className="rotator">Engineering <AnimatePresence mode="wait"><motion.strong key={role} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{roles[role]}</motion.strong></AnimatePresence></motion.div>
        <motion.p variants={reveal} className="hero-lead">I architect production-grade AI systems that transform intelligent prototypes into scalable, reliable products—across Machine Learning, NLP, Generative AI, LangGraph, and FastAPI.</motion.p>
        <motion.div variants={reveal} className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <ArrowDownRight size={18} /></a>
          <a className="button button-ghost" href={resumeFile} download="Zafar_Ullah_AIML_Resume.pdf">Download résumé <Download size={17} /></a>
        </motion.div>
        <motion.div variants={reveal} className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email Zafar Ullah"><Mail /></a>
          <span><MapPin size={15} /> {profile.location}</span>
        </motion.div>
      </motion.div>
      <motion.div className="portrait-stage" initial={{ opacity: 0, scale: .94, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .85, delay: .2 }}>
        <div className="portrait-halo" /><div className="portrait-frame"><img src={profileImage} alt="Zafar Ullah, AI Engineer" width="884" height="1600" fetchPriority="high" /></div>
        <div className="float-card float-one"><span>11</span> Agent architecture</div>
        <div className="float-card float-two"><Check size={14} /> Production focused</div>
        <div className="portrait-code" aria-hidden="true"><span>AI</span><i>01</i></div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span /> Scroll to explore</a>
  </section>
}

function About() {
  return <section className="section" id="about"><div className="container">
    <SectionHeading eyebrow="01 / About" title="Model intelligence meets engineering discipline." text="I build practical AI products grounded in evidence, evaluation, and thoughtful software design." />
    <div className="about-grid">
      <motion.div className="about-copy panel" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }}>
        <p>I am an AI Engineer at <strong>ALGO HUB</strong> and a BS Computer Science student specializing in Artificial Intelligence at UET Mardan. My work spans Machine Learning, NLP, Generative AI, chatbot development, and reliable AI applications.</p>
        <p>I work with LangChain, LangGraph, FastAPI, RAG systems, and Deep Learning. I am currently strengthening my skills in end-to-end ML deployment, LLM evaluation, and production-ready AI systems.</p>
        <p className="opportunity">Open to AI/ML engineering roles, research collaborations, and ambitious applied-AI product work.</p>
      </motion.div>
      <motion.aside className="proof-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }}>
        <span className="proof-label">Concrete proof</span><h3>FlyRank Machine Learning Track</h3>
        <p>Completed Weeks 1–8 and built a live, privacy-safe capstone that prioritizes content-review opportunities using anonymized search data.</p>
        <div className="proof-stack"><span>Python</span><span>Pandas</span><span>Scikit-learn</span><span>Responsible AI</span></div>
        <a href="https://github.com/Zafar488/flyrank-ml-internship" target="_blank" rel="noreferrer">View the work <ArrowUpRight size={16} /></a>
      </motion.aside>
    </div>
  </div></section>
}

function Skills() {
  return <section className="section section-tint" id="skills"><div className="container">
    <SectionHeading eyebrow="02 / Technical skills" title="A full-stack applied AI toolkit." text="From data and modeling to orchestration, APIs, evaluation, interfaces, and delivery." />
    <motion.div className="skills-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} variants={{ show: { transition: { staggerChildren: .08 } } }}>
      {skillGroups.map(group => { const Icon = icons[group.icon]; return <motion.article className="skill-card" key={group.title} variants={reveal}><div className="skill-icon"><Icon /></div><h3>{group.title}</h3><div className="skill-list">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></motion.article> })}
    </motion.div>
  </div></section>
}

function Experience() {
  return <section className="section" id="experience"><div className="container">
    <SectionHeading eyebrow="03 / Experience" title="Learning fast. Building for delivery." text="Professional and internship experience across machine learning, generative AI, and production-oriented engineering." />
    <div className="timeline">
      {roles.map((item, index) => <motion.article className="experience-row" key={`${item.organization}-${item.title}`} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}>
        <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
        <div className="role-meta"><span>{item.type}</span>{item.status && <b>{item.status}</b>}</div>
        <div className="role-content"><p>{item.organization}</p><h3>{item.title}</h3><div>{item.description}</div><div className="tech-row">{item.tech.map(t => <span key={t}>{t}</span>)}</div>{item.link && <a href={item.link} target="_blank" rel="noreferrer">Proof / project <ArrowUpRight size={15} /></a>}</div>
      </motion.article>)}
    </div>
  </div></section>
}

function ProjectCard({ project, index }) {
  return <motion.article className={`project-card ${project.featured ? 'featured' : ''}`} variants={reveal} whileHover={{ y: -7 }}>
    <div className={`project-visual ${project.accent}`}>
      <div className="visual-grid" /><span className="project-number">0{index + 1}</span><div className="visual-core"><i /><i /><i /></div><p>{project.type}</p>
    </div>
    <div className="project-content"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p className="problem">{project.problem}</p><p>{project.description}</p><strong>{project.result}</strong><div className="tech-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div></div>
  </motion.article>
}

function Projects() {
  return <section className="section section-tint" id="projects"><div className="container">
    <SectionHeading eyebrow="04 / Selected work" title="Systems built around real problems." text="Applied AI projects combining models, agents, retrieval, interfaces, and decision support." />
    <motion.div className="projects-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: .08 }} variants={{ show: { transition: { staggerChildren: .09 } } }}>{projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}</motion.div>
    <motion.div className="additional-projects" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><div><span className="eyebrow">More experiments & builds</span><h3>Additional AI/ML projects</h3><a href={profile.github} target="_blank" rel="noreferrer">GitHub: Zafar488 <ArrowUpRight size={15} /></a></div><div className="project-pills">{additionalProjects.map(([name, link]) => <a href={link} target="_blank" rel="noreferrer" key={name}>{name}<ArrowUpRight size={13} /></a>)}</div></motion.div>
  </div></section>
}

function Credentials() {
  return <>
    <section className="section compact-section" id="education"><div className="container"><SectionHeading eyebrow="05 / Education" title="Building a rigorous AI foundation." />
      <motion.div className="education-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><div className="edu-monogram">UET</div><div><span>In progress</span><h3>Bachelor of Science in Computer Science</h3><p>Artificial Intelligence Specialization · University of Engineering and Technology, Mardan</p></div><strong>CGPA<br /><b>3.56 / 4.00</b></strong></motion.div>
    </div></section>
    <section className="section compact-section achievement-section" id="achievements"><div className="container"><SectionHeading eyebrow="06 / Achievements" title="Evidence over adjectives." />
      <div className="achievement-grid"><motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span>02</span><div><h3>Second Place</h3><p>National datathon focused on air-quality forecasting, achieved with SmogNet.</p></div></motion.article><motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span>264K+</span><div><h3>Rows modeled</h3><p>Large-scale environmental dataset used for forecasting, classification, and alerting.</p></div></motion.article><motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span>11</span><div><h3>Specialized agents</h3><p>Orchestrated in the bilingual AgriMind Pakistan advisory platform.</p></div></motion.article></div>
    </div></section>
  </>
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    const encoded = new URLSearchParams()
    const formData = new FormData(form)
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        encoded.append(key, value)
      }
    })
    encoded.set('form-name', 'contact')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      })

      const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname)

      if (!response.ok && !isLocalPreview) {
        throw new Error('Unable to submit the form right now.')
      }

      setStatus({ type: 'success', message: 'Thanks! Your message has been received.' })
      form.reset()
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return <section className="section contact-section" id="contact"><div className="container"><motion.div className="contact-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }}>
    <span className="eyebrow">07 / Let’s build something useful</span><h2>Have an AI problem<br />worth solving?</h2><p>I’m open to AI/ML engineering opportunities, research collaborations, and serious product work.</p>
    <form onSubmit={handleSubmit} name="contact" method="POST" action="/success.html" encType="application/x-www-form-urlencoded" data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="New portfolio message (%{submissionId})" data-remove-prefix="true" />
      <p className="visually-hidden" aria-hidden="true">
        <label htmlFor="bot-field">Don’t fill this out if you’re human:</label>
        <input id="bot-field" name="bot-field" type="text" tabIndex="-1" autoComplete="off" />
      </p>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" name="email" autoComplete="email" required />
      </div>
      <div className="form-field form-field-message">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="6" required></textarea>
      </div>
      <button className="contact-submit" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>Send Message</button>
      <div className="form-response" role="status" aria-live="polite">
        {status.type !== 'idle' && <p className={status.type === 'success' ? 'form-success' : 'form-error'}>{status.message}</p>}
      </div>
    </form>
    <div className="contact-meta"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a><a href={`tel:${profile.phone.replace(/-/g, '')}`}><Phone /> {profile.phone}</a><span><MapPin /> {profile.location}</span></div>
  </motion.div></div></section>
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: .001 })
  return <><motion.div className="scroll-progress" style={{ scaleX }} /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><About /><Skills /><Experience /><Projects /><Credentials /><Contact /></main><footer><div className="container"><a className="brand" href="#home"><span>Z</span><b>Zafar Ullah</b></a><p>AI Engineer · Mardan, Pakistan</p><p>© {new Date().getFullYear()} Zafar Ullah</p></div></footer></>
}

export default App
