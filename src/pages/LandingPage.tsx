import image_f6a2ad092cee1d6e9dc3124d7ab0c09316fb4e86 from 'figma:asset/f6a2ad092cee1d6e9dc3124d7ab0c09316fb4e86.png';
import oliveGroveAerial from 'figma:asset/70a63a86057ecdc10a10ef186184d504f07ebd8a.png';
import image_3803d145ad74e97ee8f3b71a8444d177e600d7e1 from 'figma:asset/3803d145ad74e97ee8f3b71a8444d177e600d7e1.png';
import heroPhoto from 'figma:asset/95febfac84472c08a078fc09edad3c36f0dc9c68.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import GgLogo from '../imports/GgLogo6';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

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
      <div className="fixed top-4 left-4 lg:top-8 lg:left-12 z-50">
        <div className="w-[120px] lg:w-[180px] h-auto" aria-label="Grand Gimeno">
          <GgLogo />
        </div>
      </div>

      {/* Desktop CTA - Top Right */}
      <div className="hidden lg:block fixed top-8 right-12 z-50 transition-opacity duration-300" style={{ opacity: showCTA ? 1 : 0, pointerEvents: showCTA ? 'auto' : 'none' }}>
        <button
          onClick={scrollToForm}
          className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mono"
        >
          INQUIRE
        </button>
      </div>

      {/* Mobile CTA - Bottom Right */}
      <div className="lg:hidden fixed bottom-6 right-4 z-50 transition-opacity duration-300" style={{ opacity: showCTA ? 1 : 0, pointerEvents: showCTA ? 'auto' : 'none' }}>
        <button
          onClick={scrollToForm}
          className="px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mono shadow-lg"
          aria-label="Scroll to inquiry form"
        >
          INQUIRE
        </button>
      </div>

      {/* Hero - Shorter on mobile */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24 lg:pt-32 pb-20 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-[1600px] w-full text-center"
        >
          <p className="mono text-primary mb-12 lg:mb-12">OLD TOWNE ORANGE, CALIFORNIA</p>
          <h1 className="text-6xl md:text-8xl lg:text-[180px] leading-[0.9] mb-16 lg:mb-16">
            Grand<br />Gimeno
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-24 lg:mb-32 text-foreground/60">
            A 30,000-square-foot Spanish Colonial sanctuary. Built 1928. Architect Harold Gimeno.
          </p>
          
          {/* Scroll indicator - mobile only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
          >
            <p className="mono text-[8px]">SCROLL</p>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick-Hit Value Props - New Section */}
      <section className="px-6 lg:px-12 mb-24 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 py-12 lg:py-16 border-t border-b border-foreground/10">
            <div className="text-center md:text-left">
              <p className="text-3xl lg:text-4xl mb-2">Two VIP Suites</p>
              <p className="text-foreground/60">optional 8am access</p>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-3xl lg:text-4xl mb-2">Up to 300</p>
              <p className="text-foreground/60">guests across six spaces</p>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-3xl lg:text-4xl mb-2">Created by</p>
              <p className="text-foreground/60">Jay's Catering</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Editorial Image 1 - Full Width */}
      <section className="lg:px-12 mb-32 lg:mb-48">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden h-screen"
          >
            <ImageWithFallback
              src={heroPhoto}
              alt="Olive Grove reception at Grand Gimeno with 100-year-old olive trees"
              className="w-full h-full object-cover absolute inset-0"
            />
            
            {/* Overlay CTA Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={scrollToForm}
                className="px-6 lg:px-12 py-3 lg:py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mono text-[9px] lg:text-[12px]"
              >
                READY TO SEE IT IN PERSON?
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Spaces - Full Width Text Block */}
      <section className="px-6 lg:px-12 mb-32 lg:mb-48">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <p className="mono text-primary mb-8">THE ARCHITECTURE</p>
            <h2 className="text-4xl lg:text-6xl mb-12 leading-tight">
              A journey through<br />30,000 square feet
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 text-lg text-foreground/70"
          >
            <div>
              <h3 className="text-2xl text-foreground mb-4">The Courtyard</h3>
              <p>
                The arrival point. A lush, open-air space with a large Spanish fountain and arched breezeways.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-foreground mb-4">The Foyer</h3>
              <p>
                A transition space with a wrought-iron chandelier and double doors leading to the heart of the building.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-foreground mb-4">Grand Central</h3>
              <p>
                The primary indoor reception space. Soaring 30-foot ceilings, exposed timber trusses, and massive windows. Rustic industrial luxury—no crystal chandeliers here.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-foreground mb-4">The Olive Grove</h3>
              <p>
                The crown jewel. A large outdoor sanctuary filled with 100-year-old olive trees, market lights, and decomposed granite floors—designed for al fresco dining.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-foreground mb-4">The Suites</h3>
              <p>
                Two high-end VIP suites—The Parlor and The Speakeasy—to prepare in style.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-foreground mb-4">The Sanctuary</h3>
              <p>
                Enclosed by high walls, Grand Gimeno creates a silent, private world inside the bustling city of Orange.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culinary Distinction */}
      <section className="mb-32 lg:mb-48 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - Full Width on Mobile, Half on Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="order-1"
            >
              <div className="aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
                <ImageWithFallback
                  src={image_f6a2ad092cee1d6e9dc3124d7ab0c09316fb4e86}
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
              <p className="mono text-primary mb-8">CULINARY DISTINCTION</p>
              <h2 className="text-4xl lg:text-6xl mb-12 leading-tight">
                Where architecture<br />meets fire
              </h2>
              <div className="space-y-8 text-lg text-foreground/70">
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
      <section id="inquiry-form" className="mb-12 lg:mb-48">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-12 lg:mb-16">
              <p className="mono text-primary mb-4">LIMITED 2026 AVAILABILITY</p>
              <h2 className="text-5xl lg:text-7xl mb-3 leading-tight">
                Start here
              </h2>
              <p className="text-foreground/40 text-sm lg:text-base">
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
            <ImageWithFallback
              src={image_3803d145ad74e97ee8f3b71a8444d177e600d7e1}
              alt="Olive Grove ceremony at Grand Gimeno"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}