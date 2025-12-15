import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import GgLogo from './components/GgLogo';

// Unsplash Images
const oliveGroveAerial = "https://images.unsplash.com/photo-1496123630896-5374cc9e8233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMGdyb3ZlJTIwYWVyaWFsfGVufDF8fHx8MTc2NTc3NTg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const pizzaOven = "https://images.unsplash.com/photo-1689150911817-3e27168ab6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZmlyZWQlMjBwaXp6YSUyMG92ZW58ZW58MXx8fHwxNzY1NzY4OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const spanishCourtyard = "https://images.unsplash.com/photo-1721860982031-e1a031beb5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwY291cnR5YXJkJTIwZm91bnRhaW58ZW58MXx8fHwxNzY1NzU3NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const oliveCeremony = "https://images.unsplash.com/photo-1761047726992-4e47b1dda7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMHRyZWVzJTIwY2VyZW1vbnklMjBvdXRkb29yfGVufDF8fHx8MTc2NTc3NTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function App() {
  const [showCTA, setShowCTA] = useState(true);
  const [currentView, setCurrentView] = useState<'landing' | 'thank-you'>('landing');
  const formRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to hide CTAs when form is visible
  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowCTA(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(formRef.current);

    return () => {
      observer.disconnect();
    };
  }, [currentView]);

  useEffect(() => {
    if (currentView === 'landing') {
      const script = document.createElement('script');
      script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na2",
            portalId: "48463492",
            formId: "83c1be77-a158-4a0a-9938-e04f79ced417",
            target: '#hubspot-form-container',
            onFormSubmit: () => {
              setTimeout(() => {
                setCurrentView('thank-you');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 500);
            }
          });
        }
      };
      
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [currentView]);

  const scrollToForm = () => {
    const formSection = document.getElementById('inquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProfile = () => {
    window.open('/private-profile.html', '_blank');
  };

  if (currentView === 'thank-you') {
    return (
      <div className="page-wrapper">
        <div className="fixed-logo">
          <GgLogo />
        </div>
        
        <main className="thank-you-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="thank-you-content"
          >
            <h1>Thank You</h1>
            <p className="thank-you-subtitle">
              We've received your inquiry and will be in touch within 24 hours.
            </p>
            
            <button 
              onClick={handleViewProfile}
              className="cta-button"
            >
              <span className="mono">View Full Property Profile</span>
            </button>
          </motion.div>
        </main>
      </div>
    );
  }

  const ctaClassDesktop = showCTA ? "cta-fixed cta-fixed-desktop" : "cta-fixed cta-fixed-desktop cta-hidden";
  const ctaClassMobile = showCTA ? "cta-fixed cta-fixed-mobile" : "cta-fixed cta-fixed-mobile cta-hidden";

  return (
    <div className="page-wrapper">
      {/* Fixed Logo - Top Left */}
      <div className="fixed-logo">
        <GgLogo />
      </div>

      {/* Desktop CTA - Top Right */}
      <div className={ctaClassDesktop}>
        <button onClick={scrollToForm} className="cta-button">
          <span className="mono">Inquire</span>
        </button>
      </div>

      {/* Mobile CTA - Bottom Right */}
      <div className={ctaClassMobile}>
        <button onClick={scrollToForm} className="cta-button">
          <span className="mono">Inquire</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="hero-content"
        >
          <p className="hero-eyebrow">
            <span className="mono">Old Towne Orange, California</span>
          </p>
          <h1 className="hero-title">
            <span className="hero-title-line">Grand</span>
            <span className="hero-title-line">Gimeno</span>
          </h1>
          <p className="hero-subtitle">
            A 30,000-square-foot Spanish Colonial sanctuary.<br />
            Built 1928. Architect Harold Gimeno.
          </p>
        </motion.div>

        <button 
          onClick={scrollToForm}
          className="scroll-indicator"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </button>
      </section>

      {/* Quick Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat-item">
            <p className="stat-main">Two VIP Suites</p>
            <p className="stat-sub">optional 8am access</p>
          </div>
          <div className="stat-item">
            <p className="stat-main">Up to 300</p>
            <p className="stat-sub">guests across six spaces</p>
          </div>
          <div className="stat-item">
            <p className="stat-main">Created by</p>
            <p className="stat-sub">Jay's Catering</p>
          </div>
        </div>
      </section>

      {/* Full-Width Editorial Image with Overlay CTA */}
      <section className="editorial-image-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="editorial-image-wrapper"
        >
          <img 
            src={oliveGroveAerial}
            alt="Grand Gimeno olive grove aerial view"
            className="editorial-image"
          />
          <div className="editorial-overlay">
            <button onClick={scrollToForm} className="cta-button cta-overlay">
              <span className="mono">Ready to see it in person?</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Architecture Section */}
      <section className="architecture-section">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="architecture-header"
          >
            <p className="section-eyebrow">
              <span className="mono">The Architecture</span>
            </p>
            <h2>A journey through 30,000 square feet</h2>
          </motion.div>

          <div className="architecture-grid">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="architecture-item"
            >
              <h3>The Courtyard</h3>
              <p>The arrival point. A lush, open-air space with a large Spanish fountain and arched breezeways.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="architecture-item"
            >
              <h3>The Foyer</h3>
              <p>A transition space with a wrought-iron chandelier and double doors leading to the heart of the building.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="architecture-item"
            >
              <h3>Grand Central</h3>
              <p>The primary indoor reception space. Soaring 30-foot ceilings, exposed timber trusses, and massive windows. Rustic industrial luxury—no crystal chandeliers here.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="architecture-item"
            >
              <h3>The Olive Grove</h3>
              <p>The crown jewel. A large outdoor sanctuary filled with 100-year-old olive trees, market lights, and decomposed granite floors—designed for al fresco dining.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="architecture-item"
            >
              <h3>The Suites</h3>
              <p>Two high-end VIP suites—The Parlor and The Speakeasy—to prepare in style.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="architecture-item"
            >
              <h3>The Sanctuary</h3>
              <p>Enclosed by high walls, Grand Gimeno creates a silent, private world inside the bustling city of Orange.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="culinary-section">
        <div className="container-content">
          <div className="culinary-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="culinary-image-wrapper"
            >
              <img 
                src={pizzaOven}
                alt="Wood-fired pizza oven"
                className="culinary-image"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="culinary-text"
            >
              <p className="section-eyebrow">
                <span className="mono">Culinary Distinction</span>
              </p>
              <h2>Where architecture meets fire</h2>
              <div className="culinary-paragraphs">
                <p>Grand Gimeno wasn't designed around food—it was designed from food. Created by Jay's Catering, this is a culinary vision made architecture.</p>
                <p>The permanent outdoor kitchen features an Argentine Asado Grill and a Wood-Fired Pizza Oven, cooking live in front of your guests.</p>
                <p>Every event becomes a performance of fire, flavor, and craft—orchestrated by the team that built this place.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="form-section" ref={formRef}>
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="form-content"
          >
            <p className="section-eyebrow">
              <span className="mono">Limited 2026 Availability</span>
            </p>
            <h2>Start here</h2>
            <p className="form-subtitle">
              Tell us about your event
            </p>
            
            <div id="hubspot-form-container" className="hubspot-form-wrapper"></div>
          </motion.div>
        </div>
      </section>

      {/* Final Full-Screen Image */}
      <section className="final-image-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
        >
          <img 
            src={oliveCeremony}
            alt="Olive grove ceremony at Grand Gimeno"
            className="final-image"
          />
        </motion.div>
      </section>
    </div>
  );
}

declare global {
  interface Window {
    hbspt: any;
  }
}