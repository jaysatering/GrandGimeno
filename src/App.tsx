import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import GgLogo from './components/GgLogo';

// Unsplash Images
const heroImage = "https://images.unsplash.com/photo-1655323193437-c68a5b3281f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwY29sb25pYWwlMjBjb3VydHlhcmQlMjBmb3VudGFpbnxlbnwxfHx8fDE3NjU3NzQ2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const interiorImage = "https://images.unsplash.com/photo-1763231575952-98244918f99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHNwYWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNjU3Njg5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const chandelierImage = "https://images.unsplash.com/photo-1758597340435-c6ac65a88e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFsbHJvb20lMjBjaGFuZGVsaWVyfGVufDF8fHx8MTc2NTc3NDY5NHww&ixlib=rb-4.1.0&q=80&w=1080";
const outdoorImage = "https://images.unsplash.com/photo-1762195804047-65ba748de62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZGluaW5nJTIwb2xpdmUlMjB0cmVlc3xlbnwxfHx8fDE3NjU3NjY0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080";

export default function App() {
  const [showCTA, setShowCTA] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'thank-you'>('landing');

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentView === 'landing') {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "48463073",
            formId: "aff9e4b8-d8da-425c-ae96-e8fc1c25b850",
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

  return (
    <div className="page-wrapper">
      {/* Fixed Logo - Top Left */}
      <div className="fixed-logo">
        <GgLogo />
      </div>

      {/* Desktop CTA - Top Right */}
      <div 
        className="desktop-cta"
        style={{ 
          opacity: showCTA ? 1 : 0,
          pointerEvents: showCTA ? 'auto' : 'none'
        }}
      >
        <button onClick={scrollToForm} className="cta-button">
          <span className="mono">Inquire Now</span>
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
          <h1>Grand Gimeno</h1>
          <p className="hero-subtitle">
            A restored 1928 Spanish Colonial Revival estate in the heart of Old Towne Orange
          </p>
          
          <button onClick={scrollToForm} className="cta-button hero-cta">
            <span className="mono">Book Private Tour</span>
          </button>
        </motion.div>

        <button 
          onClick={scrollToForm}
          className="scroll-indicator"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </button>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Where History Meets Luxury</h2>
            <div className="intro-text">
              <p>
                Grand Gimeno stands as one of Orange County's most distinguished event venues—a meticulously restored Spanish Colonial Revival masterpiece offering 12,000 square feet of elegant indoor and outdoor space.
              </p>
              <p>
                From intimate gatherings to grand celebrations, our venue seamlessly blends historic architecture with modern luxury, providing an unparalleled backdrop for life's most important moments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="featured-image-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="featured-image-wrapper"
        >
          <img 
            src={heroImage}
            alt="Grand Gimeno Spanish Colonial courtyard with fountain"
            className="featured-image"
          />
        </motion.div>
      </section>

      {/* Spaces Grid */}
      <section className="spaces-section">
        <div className="container-content">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Distinctive Spaces
          </motion.h2>

          <div className="spaces-grid">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-card"
            >
              <div className="space-image-wrapper">
                <img src={interiorImage} alt="Grand Ballroom interior" className="space-image" />
              </div>
              <div className="space-content">
                <h3>Grand Ballroom</h3>
                <p>5,000 sq ft of restored grandeur featuring original 1928 architectural details, wrought iron chandeliers, and soaring ceilings.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-card"
            >
              <div className="space-image-wrapper">
                <img src={chandelierImage} alt="Intimate salon with chandelier" className="space-image" />
              </div>
              <div className="space-content">
                <h3>Intimate Salons</h3>
                <p>Three private salon spaces perfect for cocktail receptions, board meetings, or boutique gatherings up to 75 guests.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-card"
            >
              <div className="space-image-wrapper">
                <img src={outdoorImage} alt="Outdoor courtyard with olive trees" className="space-image" />
              </div>
              <div className="space-content">
                <h3>Courtyard Gardens</h3>
                <p>Mediterranean-inspired outdoor space with century-old olive trees, custom lighting, and Spanish tile accents.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="features-section">
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="features-content"
          >
            <h2>Exceptional Amenities</h2>
            
            <div className="features-grid">
              <div className="feature-item">
                <span className="mono feature-label">Capacity</span>
                <p>300 guests seated / 450 reception style</p>
              </div>
              
              <div className="feature-item">
                <span className="mono feature-label">Catering</span>
                <p>Full commercial kitchen with preferred caterer list</p>
              </div>
              
              <div className="feature-item">
                <span className="mono feature-label">Parking</span>
                <p>Dedicated lot accommodating 150+ vehicles</p>
              </div>
              
              <div className="feature-item">
                <span className="mono feature-label">Technology</span>
                <p>Integrated AV system, high-speed WiFi, professional lighting</p>
              </div>
              
              <div className="feature-item">
                <span className="mono feature-label">Accessibility</span>
                <p>ADA compliant with elevator access to all levels</p>
              </div>
              
              <div className="feature-item">
                <span className="mono feature-label">Service</span>
                <p>Dedicated event coordinator for planning and execution</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="form-section">
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="form-content"
          >
            <h2>Begin Your Journey</h2>
            <p className="form-subtitle">
              Schedule a private tour or request detailed pricing and availability information.
            </p>
            
            <div id="hubspot-form-container" className="hubspot-form-wrapper"></div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-text">
          <div className="footer-content">
            <div className="footer-info">
              <span className="mono">Grand Gimeno</span>
              <p>123 Historic Plaza, Old Towne Orange, CA 92866</p>
            </div>
            <div className="footer-legal">
              <span className="mono">&copy; 2024 Grand Gimeno. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

declare global {
  interface Window {
    hbspt: any;
  }
}