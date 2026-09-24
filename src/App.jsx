import { useEffect, useRef, useState } from 'react'
import {
  Menu, X, ArrowUpRight, ArrowRight, Play,
  Globe, Share2, Clapperboard, Layers, TrendingUp, Megaphone, MessageCircle,
  Compass, Target, Hammer, Rocket,
  Sparkles, Smartphone, CheckCircle2,
} from 'lucide-react'

const WHATSAPP = 'https://wa.me/918001865418'
const PHONE = '8001865418'

/* ---------- Scroll reveal wrapper ---------- */
function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* ---------- Mini visual system ----------
   Reusable realistic mockups shared across hero, website
   showcase, video, social and portfolio sections. */

const PALETTES = {
  fashion: { a: '#16332C', b: '#3B5C50' },
  restaurant: { a: '#C8792F', b: '#8F5220' },
  local: { a: '#1A211D', b: '#3C443F' },
  service: { a: '#24463D', b: '#101915' },
  personal: { a: '#8F5220', b: '#C8792F' },
}

function MiniSite({ variant = 'fashion', compact = false }) {
  const p = PALETTES[variant] || PALETTES.fashion
  return (
    <div className={`minisite ${compact ? 'minisite--compact' : ''}`}>
      <div className="minisite-nav">
        <span className="minisite-dot" />
        <span className="minisite-link" />
        <span className="minisite-link" />
        <span className="minisite-link short" />
      </div>
      <div className="minisite-hero">
        <div className="minisite-hero-text">
          <span className="minisite-line big" />
          <span className="minisite-line big w70" />
          <span className="minisite-line small w50" />
          <span className="minisite-btn" style={{ background: p.a }} />
        </div>
        <div className="minisite-hero-image" style={{ background: `linear-gradient(150deg, ${p.a}, ${p.b})` }} />
      </div>
      {!compact && (
        <div className="minisite-grid">
          <div className="minisite-tile" style={{ background: p.b }} />
          <div className="minisite-tile" style={{ background: p.a }} />
          <div className="minisite-tile ghost" />
        </div>
      )}
    </div>
  )
}

function MiniReel({ compact = false }) {
  return (
    <div className={`minireel ${compact ? 'minireel--compact' : ''}`}>
      <div className="minireel-top">
        <span>REEL</span>
        <span>0:14</span>
      </div>
      <div className="minireel-play"><Play size={20} fill="currentColor" /></div>
      <div>
        <div className="minireel-caption">
          <span className="minireel-cap-line" />
          <span className="minireel-cap-line w60" />
        </div>
        <div className="minireel-progress" style={{ marginTop: 10 }}><span /></div>
      </div>
    </div>
  )
}

function ReelStrip() {
  return (
    <div className="reel-strip">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={`reel-thumb rt${i}`}><Play size={11} fill="currentColor" /></div>
      ))}
    </div>
  )
}

const SOCIAL_TILES = [
  { c: 't1', k: 'photo' },
  { c: 't2', k: 'product' },
  { c: 't3', k: 'quote' },
  { c: 't4', k: 'carousel' },
  { c: 't5', k: 'reel' },
  { c: 't6', k: 'photo' },
]

function SocialTile({ t, compact = false }) {
  return (
    <div className={`social-tile ${t.c}`}>
      {t.k === 'reel' && <span className="play"><Play size={12} fill="currentColor" /></span>}
      {t.k === 'product' && <span className="tile-badge">NEW</span>}
      {t.k === 'carousel' && (
        <>
          <span className="tile-layer l2" />
          <span className="tile-layer l1" />
        </>
      )}
      {t.k === 'quote' && <span className="tile-quote-mark">&ldquo;</span>}
      {!compact && <span className="mock-bar w40" style={{ background: 'rgba(250,247,239,0.85)', position: 'relative', zIndex: 1 }} />}
    </div>
  )
}

function MiniSocialGrid({ compact = false }) {
  return (
    <div className={compact ? 'minigrid' : 'social-grid'}>
      {SOCIAL_TILES.map((t, i) => <SocialTile t={t} key={i} compact={compact} />)}
    </div>
  )
}

function MiniBrand() {
  return (
    <div className="minibrand">
      <div className="minibrand-mark" />
      <div className="minibrand-word">
        <span className="minisite-line big w60" />
      </div>
      <div className="minibrand-swatches">
        <span style={{ background: '#16332C' }} />
        <span style={{ background: '#C8792F' }} />
        <span style={{ background: '#1A211D' }} />
        <span style={{ background: '#FAF7EF' }} />
      </div>
    </div>
  )
}

function MiniPoster() {
  return (
    <div className="miniposter">
      <span className="miniposter-tag">CAMPAIGN</span>
      <span className="minisite-line big w70" style={{ background: 'rgba(255,255,255,0.85)' }} />
      <span className="minisite-line small w40" style={{ background: 'rgba(255,255,255,0.55)' }} />
      <span className="miniposter-cta">Shop Now</span>
    </div>
  )
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['Services', '#services'],
    ['Work', '#work'],
    ['Process', '#process'],
    ['Contact', '#contact'],
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-mark">
          <span className="nav-mark-dot" />
          Design Adda
        </a>
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn--primary">Start a Project</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>Start a Project</a>
      </div>
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <Reveal>
            <span className="hero-eyebrow"><span className="pulse" /> Websites · Social · Video · Growth</span>
          </Reveal>
          <Reveal delay={80}>
            <h1>Make your business look like a brand.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede">Premium websites, social media, content and digital experiences designed to make your business look credible, memorable and ready for growth.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="btn-row">
              <a href="#contact" className="btn btn--primary">Build My Website</a>
              <a href="#work" className="btn btn--ghost">Explore Our Work</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="hero-visual">
          <div className="mock mock-browser">
            <div className="mock-browser-bar"><span /><span /><span /></div>
            <div className="mock-browser-fill">
              <MiniSite variant="fashion" />
            </div>
          </div>

          <div className="mock mock-phone">
            <div className="mock-phone-fill">
              <MiniReel compact />
            </div>
          </div>

          <div className="mock mock-reel">
            <div className="mock-reel-inner">
              <div className="mock-reel-play"><Play size={16} fill="currentColor" /></div>
              <span className="mock-reel-bar" />
            </div>
          </div>

          <div className="mock mock-chip">
            <span className="dot"><Sparkles size={16} /></span>
            <span>
              <span className="label" style={{ display: 'block' }}>Brand ready</span>
              <span className="sub">Live in weeks</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Services ---------- */
const SERVICES = [
  { n: '01', t: 'Website Design', d: 'Premium business websites, landing pages and digital experiences.', icon: Globe, feature: true },
  { n: '02', t: 'Social Media Management', d: 'Content planning, creative direction and consistent social presence.', icon: Share2 },
  { n: '03', t: 'Video Editing', d: 'Reels, promotional videos, product videos and short-form content.', icon: Clapperboard, feature: true },
  { n: '04', t: 'Content Creation', d: 'Posts, carousels, campaigns and social-media creatives.', icon: Layers },
  { n: '05', t: 'Brand Growth', d: 'Positioning, strategy and digital presence.', icon: TrendingUp },
  { n: '06', t: 'Meta Ads', d: 'Campaign creative and advertising support.', icon: Megaphone },
  { n: '07', t: 'WhatsApp & Digital Systems', d: 'Digital enquiry and customer communication systems.', icon: MessageCircle },
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">What we build</span>
          <h2 className="headline">Seven ways we grow how customers see you.</h2>
        </Reveal>
        <Reveal>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.n} className={`service-card ${s.feature ? 'service-card--feature' : ''}`}>
                <span className="service-num">{s.n}</span>
                <div className="service-icon"><s.icon size={26} strokeWidth={1.6} /></div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Website Showcase ---------- */
const SITES = [
  { tag: 'Fashion Brand', variant: 'fashion' },
  { tag: 'Restaurant', variant: 'restaurant' },
  { tag: 'Local Business', variant: 'local' },
  { tag: 'Professional Service', variant: 'service' },
]

function WebsiteShowcase() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Website design</span>
          <h2 className="headline">Websites that make the first impression count.</h2>
          <p className="lede">Original concepts, not stock templates — a preview of the kind of website Design Adda would build for a business like yours.</p>
        </Reveal>
        <Reveal>
          <div className="showcase-rail">
            {SITES.map((s) => (
              <div className="site-card" key={s.tag}>
                <div className="site-card-browser">
                  <div className="mock-browser-bar"><span /><span /><span /></div>
                  <div className="site-card-visual">
                    <MiniSite variant={s.variant} />
                  </div>
                </div>
                <div className="site-card-body">
                  <h4>{s.tag}</h4>
                  <p>Website Concept</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <a href="#contact" className="btn btn--primary" style={{ marginTop: 36 }}>
            I need a website <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Video Editing ---------- */
function VideoEditing() {
  const items = [
    'Instagram Reels', 'Promotional Videos', 'Product Videos',
    'Business Videos', 'Short-form Content', 'Social Media Editing',
  ]
  return (
    <section className="section">
      <div className="container video-layout">
        <Reveal>
          <div className="video-phone">
            <div className="video-phone-screen">
              <span className="video-phone-reel-label">REEL · 0:14</span>
              <div className="video-phone-play"><Play size={22} fill="currentColor" /></div>
              <div className="video-phone-frames">
                <span /><span /><span /><span /><span />
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="kicker">Video editing</span>
            <h2 className="headline">Turn every second into attention.</h2>
            <p className="lede">Edited for the scroll — fast cuts, clean pacing and a hook that holds in the first two seconds.</p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="video-list">
              {items.map((i) => (
                <li key={i}><Smartphone size={16} /> {i}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <ReelStrip />
          </Reveal>
          <Reveal delay={200}>
            <a href="#contact" className="btn btn--primary" style={{ marginTop: 24 }}>Discuss My Video Project</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- Social Media ---------- */
function SocialMedia() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Social media</span>
          <h2 className="headline">Your feed should feel like your brand.</h2>
          <p className="lede">A grid designed to be scrolled — consistent colors, considered layout, no random posting.</p>
        </Reveal>
        <Reveal>
          <MiniSocialGrid />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Brand Growth ---------- */
function BrandGrowth() {
  const steps = ['Position', 'Create', 'Publish', 'Promote', 'Grow']
  return (
    <section className="section">
      <div className="container">
        <Reveal className="block-dark" as="div">
          <div style={{ padding: 'clamp(40px, 6vw, 72px)' }}>
            <span className="kicker">Brand growth</span>
            <h2 className="headline" style={{ color: 'var(--ivory)' }}>Good design gets attention. Good positioning builds trust.</h2>
            <p className="lede">Design Adda works beyond individual posts, building a consistent digital presence customers recognise everywhere they find you.</p>
            <div className="journey">
              {steps.map((s, i) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="journey-step">
                    <span className="num">{i + 1}</span>
                    <span className="word">{s}</span>
                  </div>
                  {i < steps.length - 1 && <ArrowRight size={16} className="journey-arrow" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Work / Portfolio ---------- */
const WORK = [
  { size: 'large', cat: 'Websites', title: 'Fashion Website — Concept', sub: 'Website Design', kind: 'site', variant: 'fashion' },
  { size: 'small', cat: 'Video', title: 'Reel Series — Concept', sub: 'Video Editing', kind: 'reel' },
  { size: 'small', cat: 'Social Media', title: 'Feed System — Concept', sub: 'Content + Social', kind: 'social' },
  { size: 'large', cat: 'Branding', title: 'Studio Identity — Concept', sub: 'Brand Growth', kind: 'brand' },
  { size: 'small', cat: 'Campaigns', title: 'Campaign Poster — Concept', sub: 'Meta Ads', kind: 'poster' },
  { size: 'small', cat: 'Websites', title: 'Local Business Website — Concept', sub: 'Website Design', kind: 'site', variant: 'local' },
]

function WorkVisual({ w }) {
  if (w.kind === 'site') return <MiniSite variant={w.variant} compact />
  if (w.kind === 'reel') return <MiniReel compact />
  if (w.kind === 'social') return <MiniSocialGrid compact />
  if (w.kind === 'brand') return <MiniBrand />
  if (w.kind === 'poster') return <MiniPoster />
  return null
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Work</span>
          <h2 className="headline">Work that speaks before you do.</h2>
          <p className="lede">Selected concepts built to show how Design Adda approaches a project — not claims about specific clients.</p>
        </Reveal>
        <Reveal>
          <div className="work-grid">
            {WORK.map((w) => (
              <div className={`work-card c-${w.size}`} key={w.title}>
                <div className="work-visual">
                  <span className="cat">{w.cat}</span>
                  <WorkVisual w={w} />
                </div>
                <div className="work-meta">
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.sub}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Process ---------- */
const PROCESS = [
  { n: '01', t: 'Discover', d: 'Understand the business, audience and goals.', icon: Compass },
  { n: '02', t: 'Strategy', d: 'Define positioning, message and visual direction.', icon: Target },
  { n: '03', t: 'Create', d: 'Build the website, content and digital assets.', icon: Hammer },
  { n: '04', t: 'Launch', d: 'Launch the digital presence and prepare it for customer enquiries.', icon: Rocket },
]

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Process</span>
          <h2 className="headline">A clear path from idea to launch.</h2>
        </Reveal>
        <Reveal>
          <div className="process-list">
            {PROCESS.map((p) => (
              <div className="process-item" key={p.n}>
                <div className="process-num">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Why Design Adda ---------- */
const WHY = [
  'Business-first thinking',
  'Premium visual presentation',
  'Website + Social + Content under one roof',
  'Mobile-first execution',
  'Clear communication',
  'Built for real customer action',
]

function WhyUs() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Why Design Adda</span>
          <h2 className="headline">A partner that treats your business like a brand.</h2>
        </Reveal>
        <Reveal>
          <div className="why-list">
            {WHY.map((w) => (
              <div className="why-item" key={w}>
                <CheckCircle2 size={18} />
                {w}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="container" id="contact">
      <div className="block-dark final-cta">
        <div className="final-cta-orbit" />
        <Reveal>
          <h2 className="headline" style={{ color: 'var(--ivory)' }}>Ready to look like a brand?</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="lede">Let's build a digital presence your customers remember.</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="btn-row">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--light">Start a Project</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--line">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-mark">
              <span className="nav-mark-dot" />
              Design Adda Studio
            </div>
            <p className="footer-tag">Premium Websites · Social Media · Video · Brand Growth</p>
          </div>
          <div className="footer-contact">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp / Call: {PHONE}</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Design Adda Studio</span>
          <span>Built for businesses ready to grow</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WebsiteShowcase />
        <VideoEditing />
        <SocialMedia />
        <BrandGrowth />
        <Work />
        <Process />
        <WhyUs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
          }
