import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Layers3,
  Menu,
  Moon,
  Palette,
  Play,
  Quote,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const projects = [
  {
    client: "NORTHSTAR",
    title: "Operations platform for modern teams",
    type: "Product Design · Web Development",
    className: "project-northstar",
  },
  {
    client: "MONO",
    title: "A clearer way to manage your finances",
    type: "Brand · Product Experience",
    className: "project-mono",
  },
  {
    client: "VECTOR",
    title: "Infrastructure made easier to understand",
    type: "Web Design · Engineering",
    className: "project-vector",
  },
];

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Product design",
    text: "Research, interface design and prototypes for digital products people can understand quickly.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web development",
    text: "Responsive React experiences built with maintainable components and performance in mind.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Interactive experiences",
    text: "Motion, transitions and immersive interactions that support the story instead of distracting from it.",
  },
];

const process = [
  ["01", "Discover", "We define the problem, audience, goals and technical constraints before designing."],
  ["02", "Shape", "We turn the direction into a visual system, structure and interaction model."],
  ["03", "Build", "We develop the experience with reusable components and regular feedback."],
  ["04", "Launch", "We test the final product, optimize the details and prepare it for release."],
];

const testimonials = [
  ["“", "ALGORYX helped us simplify a complicated product without losing the depth our users needed.", "Riya Menon", "Product Manager, Northstar"],
  ["“", "The final website feels considered rather than decorated. Every interaction has a reason.", "Daniel Reed", "Founder, Mono"],
];

const plans = [
  {
    name: "Launch",
    price: "₹15k",
    note: "For a focused marketing website.",
    features: ["Up to 5 pages", "Responsive UI", "Motion system", "Contact form"],
  },
  {
    name: "Product",
    price: "₹35k",
    note: "For a product or startup that needs more depth.",
    features: ["Custom UI system", "Advanced interactions", "React development", "Performance review"],
    featured: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    note: "For larger or technically complex experiences.",
    features: ["Custom scope", "3D / WebGL options", "Integrations", "Ongoing support"],
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ target, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1000;

      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["Pricing", "#pricing"],
  ];

  return (
    <header className="header">
      <a className="logo" href="#top" onClick={() => setOpen(false)}>
        <span className="logo-mark">A</span>
        <span>ALGORYX</span>
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Open navigation">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <a className="header-cta" href="#contact" onClick={() => setOpen(false)}>
          Start a project <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-grid" />
      <div className="hero-layout">
        <Reveal>
          <div className="eyebrow"><CircleDot size={12} /> DIGITAL PRODUCT STUDIO</div>
          <h1>We design and build <em>digital products</em> that work.</h1>
          <p className="hero-copy">
            ALGORYX is a digital product studio focused on clear interfaces,
            thoughtful engineering and experiences that feel natural to use.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Discuss a project <ArrowRight size={17} /></a>
            <a className="text-link" href="#work">View selected work <ArrowRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <span>Based in India</span>
            <span className="meta-dot" />
            <span>Working globally</span>
          </div>
        </Reveal>

        <motion.div className="hero-art" style={{ y: imageY }}>
          <div className="art-label">01 / 04</div>
          <div className="art-card art-back" />
          <div className="art-card art-main">
            <div className="art-top"><span>ALGORYX</span><span>01</span></div>
            <div className="art-circle"><Sparkles size={38} /></div>
            <div className="art-bottom">
              <span>Strategy</span><span>Design</span><span>Build</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll">Scroll to explore <span>↓</span></div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div><strong><Counter target={42} />+</strong><span>Projects delivered</span></div>
      <div><strong><Counter target={18} /></strong><span>Clients & teams</span></div>
      <div><strong><Counter target={96} />%</strong><span>Repeat / referral work</span></div>
      <div><strong><Counter target={7} /> yrs</strong><span>Combined experience</span></div>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <Reveal>
          <span className="label">SELECTED WORK</span>
          <h2>Useful first.<br /><em>Beautiful too.</em></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>We care about the details, but we start with the reason the product exists.</p>
        </Reveal>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <Reveal key={project.client} delay={index * 0.08}>
            <motion.article className="project" whileHover={{ y: -5 }}>
              <div className={`project-visual ${project.className}`}>
                <div className="project-ui">
                  <div className="ui-bar"><span /><span /><span /></div>
                  <div className="ui-title" />
                  <div className="ui-row"><i /><i /><i /></div>
                  <div className="ui-block" />
                </div>
              </div>
              <div className="project-info">
                <div>
                  <small>{project.client}</small>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <span className="round-arrow"><ArrowUpRight size={18} /></span>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section soft" id="services">
      <div className="section-head">
        <Reveal>
          <span className="label">SERVICES</span>
          <h2>From first idea<br /><em>to final build.</em></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>One team across strategy, design and engineering. No unnecessary handoffs.</p>
        </Reveal>
      </div>

      <div className="service-list">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.number} delay={index * 0.08}>
              <motion.article className="service" whileHover={{ x: 6 }}>
                <span className="service-number">{service.number}</span>
                <Icon size={26} strokeWidth={1.6} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ArrowUpRight size={20} />
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process" id="process">
      <Reveal>
        <span className="label">PROCESS</span>
        <h2>A clear path from <em>problem to product.</em></h2>
      </Reveal>

      <div className="process-list">
        {process.map(([number, title, text], index) => (
          <Reveal key={number} delay={index * 0.08}>
            <article className="process-row">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ChevronDown size={18} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <Reveal>
        <span className="label">CLIENTS</span>
        <h2>What working together <em>feels like.</em></h2>
      </Reveal>
      <div className="quote-grid">
        {testimonials.map(([mark, quote, name, role], index) => (
          <Reveal key={name} delay={index * 0.1}>
            <article className="quote-card">
              <Quote size={26} />
              <p>{quote}</p>
              <div className="quote-person">
                <div>{name[0]}</div>
                <span><strong>{name}</strong>{role}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <Reveal>
        <span className="label">PRICING</span>
        <h2>Start with a scope.<br /><em>Scale when needed.</em></h2>
      </Reveal>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.08}>
            <article className={plan.featured ? "price-card featured" : "price-card"}>
              {plan.featured && <span className="featured-tag">MOST REQUESTED</span>}
              <h3>{plan.name}</h3>
              <p>{plan.note}</p>
              <strong>{plan.price}</strong>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={15} /> {feature}</li>
                ))}
              </ul>
              <a className="price-link" href="#contact">Discuss scope <ArrowRight size={15} /></a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Please add a little more detail.";
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <Reveal>
          <span className="label">CONTACT</span>
          <h2>Have a project<br /><em>in mind?</em></h2>
          <p>Tell us what you are building, what needs to change, or simply where you are stuck.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit}>
            <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />{errors.name && <small>{errors.name}</small>}</label>
            <label>Email<input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />{errors.email && <small>{errors.email}</small>}</label>
            <label>What are you working on?<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="A short description of the project..." rows="5" />{errors.message && <small>{errors.message}</small>}</label>
            <button className="button button-light" type="submit">Send enquiry <ArrowRight size={17} /></button>
            {submitted && <div className="form-success">Thanks — your enquiry has been validated successfully.</div>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="logo"><span className="logo-mark">A</span><span>ALGORYX</span></div>
      <span>Digital products & experiences.</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <Header dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}