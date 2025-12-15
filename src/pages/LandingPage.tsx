import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import GgLogo from '../imports/GgLogo6';

export function LandingPage() {
  const [showCTA, setShowCTA] = useState(false);
  const navigate = useNavigate();

  const handleInquirySubmit = () => {
    navigate('/thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('inquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('inquiry-form');
      if (formSection) {
        const rect = formSection.getBoundingClientRect();
        const isFormVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setShowCTA(!isFormVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '48463492',
          formId: '83c1be77-a158-4a0a-9938-e04f79ced417',
          region: 'na2',
          target: '#hubspot-form-container',
          onFormSubmitted: () => {
            // Track Meta Pixel Lead event
            if (window.fbq) {
              window.fbq('track', 'Lead');
            }
            // Track Google Analytics conversion event
            if (window.gtag) {
              window.gtag('event', 'conversion', {
                'send_to': 'G-260342425',
                'event_category': 'Form',
                'event_label': 'Inquiry Form Submission'
              });
            }
            handleInquirySubmit();
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
  }, []);

  return (
    <div className="bg-bone">
      {/* Fixed Logo - Top Left */}
      <div className="fixed z-50 lg:hidden" style={{ top: '16px', left: '16px', width: '120px' }}>
        <GgLogo />
      </div>
      
      {/* Desktop Logo - Larger */}
      <div className="hidden lg:block fixed z-50" style={{ top: '32px', left: '48px', width: '180px' }}>
        <GgLogo />
      </div>

      {/* Desktop CTA - Top Right - Using inline styles for Vercel compatibility */}
      <div 
        className="hidden lg:block fixed z-50 transition-opacity duration-300" 
        style={{ 
          top: '32px', 
          right: '48px',
          opacity: showCTA ? 1 : 0, 
          pointerEvents: showCTA ? 'auto' : 'none' 
        }}
      >
        <button
          onClick={scrollToForm}
          className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mono"
        >
          INQUIRE
        </button>
      </div>

      {/* Mobile CTA - Bottom Right */}
      <div 
        className="lg:hidden fixed z-50 transition-opacity duration-300" 
        style={{ 
          bottom: '24px', 
          right: '16px',
          opacity: showCTA ? 1 : 0, 
          pointerEvents: showCTA ? 'auto' : 'none' 
        }}
      >
        <button
          onClick={scrollToForm}
          className="px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mono shadow-lg"
          aria-label="Scroll to inquiry form"
        >
          INQUIRE
        </button>
      </div>

      {/* Hero - Shorter on mobile */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '96px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="container-wide w-full text-center"
        >
          <p className="mono text-primary mb-12 lg:mb-12">OLD TOWNE ORANGE, CALIFORNIA</p>
          <h1 className="mb-16 lg:mb-16">
            Grand<br />Gimeno
          </h1>
          <p className="max-w-3xl mx-auto mb-24 lg:mb-32 text-foreground/60">
            A 30,000-square-foot Spanish Colonial sanctuary. Built 1928. Architect Harold Gimeno.
          </p>
          
          {/* Scroll indicator - mobile only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
          >
            <p className="mono">SCROLL</p>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick-Hit Value Props - New Section */}
      <section style={{ paddingLeft: '24px', paddingRight: '24px', marginBottom: '96px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container-content"
        >
          <div className="grid md:grid-cols-3 border-t border-b" style={{ gap: '48px', paddingTop: '48px', paddingBottom: '48px', borderColor: 'rgba(82, 85, 87, 0.1)' }}>
            <div className="text-center md:text-left">
              <p className="mb-2">Two VIP Suites</p>
              <p className="text-foreground/60">optional 8am access</p>
            </div>
            
            <div className="text-center md:text-left">
              <p className="mb-2">Up to 300</p>
              <p className="text-foreground/60">guests across six spaces</p>
            </div>
            
            <div className="text-center md:text-left">
              <p className="mb-2">Created by</p>
              <p className="text-foreground/60">Jay's Catering</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Editorial Image 1 - Full Width */}
      <section style={{ marginBottom: '192px' }}>
        <div className="container-full" style={{ maxWidth: '1800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden h-screen"
          >
            <img
              src="https://images.unsplash.com/photo-1750178943403-d95117c47595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMGdyb3ZlJTIwd2VkZGluZyUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NjU3Njg5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Olive Grove reception at Grand Gimeno with 100-year-old olive trees"
              className="w-full h-full object-cover absolute inset-0"
            />
            
            {/* Overlay CTA Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={scrollToForm}
                className="px-6 lg:px-12 py-3 lg:py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mono"
              >
                READY TO SEE IT IN PERSON?
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Spaces - Full Width Text Block */}
      <section style={{ paddingLeft: '24px', paddingRight: '24px', marginBottom: '192px' }}>
        <div className="container-text" style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '80px' }}
          >
            <p className="mono text-primary" style={{ marginBottom: '32px' }}>THE ARCHITECTURE</p>
            <h2 style={{ marginBottom: '48px' }}>
              A journey through<br />30,000 square feet
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid md:grid-cols-2 text-foreground/70"
            style={{ gap: '48px' }}
          >
            <div>
              <h3 className="text-foreground" style={{ marginBottom: '16px' }}>The Courtyard</h3>
              <p>
                The arrival point. A lush, open-air space with a large Spanish fountain and arched breezeways.
              </p>
            </div>

            <div>
              <h3 className="text-foreground" style={{ marginBottom: '16px' }}>The Foyer</h3>
              <p>
                A transition space with a wrought-iron chandelier and double doors leading to the heart of the building.
              </p>
            </div>

            <div>
              <h3 className="text-foreground" style={{ marginBottom: '16px' }}>Grand Central</h3>
              <p>
                The primary indoor reception space. Soaring 30-foot ceilings, exposed timber trusses, and massive windows. Rustic industrial luxury—no crystal chandeliers here.
              </p>
            </div>

            <div>
              <h3 className="text-foreground" style={{ marginBottom: '16px' }}>The Olive Grove</h3>
              <p>
                The crown jewel. A large outdoor sanctuary filled with 100-year-old olive trees, market lights, and decomposed granite floors—designed for al fresco dining.
              </p>
            </div>

            <div>
              <h3 className="text-foreground" style={{ marginBottom: '16px' }}>The Suites</h3>
              <p>
                Two high-end VIP suites—The Parlor and The Speakeasy—to prepare in style.
              </p>
            </div>

            <div>
              <h3 className="text-foreground" style={{ marginBottom: '16px' }}>The Sanctuary</h3>
              <p>
                Enclosed by high walls, Grand Gimeno creates a silent, private world inside the bustling city of Orange.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culinary Distinction */}
      <section style={{ marginBottom: '192px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="container-full" style={{ maxWidth: '1800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="grid lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
            {/* Image - Full Width on Mobile, Half on Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="order-1"
            >
              <div className="aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1689150911817-3e27168ab6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZmlyZWQlMjBwaXp6YSUyMG92ZW58ZW58MXx8fHwxNzY1NzY4OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wood-fired pizza oven at Grand Gimeno"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2"
            >
              <p className="mono text-primary" style={{ marginBottom: '32px' }}>CULINARY DISTINCTION</p>
              <h2 style={{ marginBottom: '48px' }}>
                Where architecture<br />meets fire
              </h2>
              <div className="text-foreground/70" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <p>
                  Grand Gimeno wasn't designed around food—it was designed from food. Created by Jay's Catering, this is a culinary vision made architecture.
                </p>
                <p>
                  The permanent outdoor kitchen features an Argentine Asado Grill and a Wood-Fired Pizza Oven, cooking live in front of your guests.
                </p>
                <p>
                  Every event becomes a performance of fire, flavor, and craft—orchestrated by the team that built this place.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form - Conversion-Optimized */}
      <section id="inquiry-form" style={{ marginBottom: '192px' }}>
        <div className="container-text" style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <p className="mono text-primary" style={{ marginBottom: '16px' }}>LIMITED 2026 AVAILABILITY</p>
              <h2 style={{ marginBottom: '12px' }}>
                Start here
              </h2>
              <p className="text-foreground/40">
                tell us about your event
              </p>
            </div>

            {/* HubSpot Form Container */}
            <div id="hubspot-form-container" className="hubspot-form-wrapper"></div>
          </motion.div>
        </div>
      </section>

      {/* Final Editorial Image - Full Bleed, Edge to Edge */}
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="h-screen overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1689958270296-0874646defbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwY29sb25pYWwlMjBjb3VydHlhcmQlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjU3Njg5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Olive Grove ceremony at Grand Gimeno"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}