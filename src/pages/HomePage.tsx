import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import GgLogo from '../components/GgLogo';
import { initializeTracking } from '../utils/tracking';

const oliveGroveAerial = "https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765780333/3J4A8985_qzhoes.jpg";
const pizzaOven = "https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765780827/_AJB3193_turfsf.jpg";
const oliveCeremony = "https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765780355/3J4A0229_cpnpow.jpg";

// Slider images
const sliderImages = [
  {
    type: 'image',
    src: oliveCeremony,
    alt: "Olive grove ceremony at Grand Gimeno"
  },
  {
    type: 'video',
    src: "https://res.cloudinary.com/dr9hlxnbp/video/upload/v1766643603/TOJPizza_csjtqg.mp4",
    alt: "Grand Gimeno pizza oven"
  }
];

// Center tall photo slider images
const centerSliderImages = [
  {
    src: "https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765846212/Jennifer_Michael_Wedding_Day_1011_smkp1z.jpg",
    alt: "Grand Gimeno interior"
  },
  {
    src: "https://res.cloudinary.com/dr9hlxnbp/image/upload/v1766644028/Gimeno_Selects_40_qflh1j.jpg",
    alt: "Grand Gimeno detail"
  },
  {
    src: "https://res.cloudinary.com/dr9hlxnbp/image/upload/v1766644027/cerwinkatitusandjo-47_ezllbs.png",
    alt: "Grand Gimeno event"
  }
];

export default function HomePage() {
  const [showCTA, setShowCTA] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerSlide, setCenterSlide] = useState(0);
  const [centerSliderPaused, setCenterSliderPaused] = useState(false);
  const [footerSliderPaused, setFooterSliderPaused] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const centerSliderRef = useRef<HTMLDivElement>(null);
  const footerSliderRef = useRef<HTMLDivElement>(null);

  // Set page title for HubSpot tracking
  useEffect(() => {
    document.title = "Grand Gimeno | Inquiry";
  }, []);

  // Show CTA after user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track hero visibility
  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeroInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(heroRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (hasScrolled) {
            setShowCTA(!entry.isIntersecting);
          }
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
  }, [hasScrolled]);

  useEffect(() => {
    // 1. Generate the Unique "Receipt Number" (Event ID)
    const masterEventId = 'lead_' + new Date().getTime() + '_' + Math.floor(Math.random() * 10000);

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
          formId: "83c1be77-a158-4a0a-9938-e04f79ced417", // ✅ Verified Landing Page Form ID
          target: '#hubspot-form-container',
          
          onFormReady: function($form) {
            console.log('✅ Grand Gimeno LP - Form Loaded with ID:', masterEventId);

            // --- A. GET TRACKING DATA (URL or Session Storage) ---
            const urlParams = new URLSearchParams(window.location.search);
            const sessionData = JSON.parse(sessionStorage.getItem('hubspot_tracking_data') || '{}');

            const getVal = (paramName, sessionKey) => {
              return urlParams.get(paramName) || sessionData[sessionKey || paramName] || '';
            };

            const getCookie = (name) => {
              const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
              return match ? match.pop() : '';
            };

            // --- B. BUILD DATA OBJECT ---
            const trackingData = {
              'utm_source':   getVal('utm_source'),
              'utm_medium':   getVal('utm_medium'),
              'utm_campaign': getVal('utm_campaign'),
              'utm_content':  getVal('utm_content', 'custom_utm_content'),
              'utm_term':     getVal('utm_term', 'custom_utm_term'),
              'gclid':        getVal('gclid'),
              'fbc':          getCookie('_fbc') || getVal('meta_fbc'),
              'fbp':          getCookie('_fbp') || getVal('meta_fbp'),
              'event_id':     masterEventId,
              'landing_page': window.location.href,
              'referrer_url': document.referrer
            };

            // --- C. SAVE TO SESSION (Persist if they refresh) ---
            sessionStorage.setItem('hubspot_tracking_data', JSON.stringify({
              utm_source: trackingData.utm_source,
              utm_medium: trackingData.utm_medium,
              utm_campaign: trackingData.utm_campaign,
              custom_utm_content: trackingData.utm_content,
              custom_utm_term: trackingData.utm_term,
              gclid: trackingData.gclid,
              meta_fbc: trackingData.fbc,
              meta_fbp: trackingData.fbp
            }));

            // --- D. FILL HIDDEN FIELDS (For Server/CAPI) ---
            const mapping = {
              'utm_source':   trackingData.utm_source,
              'utm_medium':   trackingData.utm_medium,
              'utm_campaign': trackingData.utm_campaign,
              'custom_utm_content': trackingData.utm_content,
              'custom_utm_term':    trackingData.utm_term,
              'gclid':        trackingData.gclid,
              'meta_fbc':     trackingData.fbc,
              'meta_fbp':     trackingData.fbp,
              'event_id':     trackingData.event_id,
              'landing_page': trackingData.landing_page,
              'referrer_url': trackingData.referrer_url
            };

            for (const key in mapping) {
              if (mapping[key]) {
                const input = $form.querySelector('input[name="' + key + '"]');
                if (input) {
                  input.value = mapping[key];
                  input.dispatchEvent(new Event('change', { bubbles: true }));
                }
              }
            }
          },

          onFormSubmit: function($form) {
            const emailInput = $form.querySelector('input[name="email"]');
            const emailVal = emailInput ? emailInput.value : '';
            
            // 🔥 Fire GTM event with MASTER ID
            if (window.dataLayer) {
              window.dataLayer.push({
                'event': 'hubspot_form_success', // Matches GTM Trigger
                'form_name': 'Grand Gimeno Landing Page',
                'form_id': '83c1be77-a158-4a0a-9938-e04f79ced417',
                'hs-form-email': emailVal,
                'lead_event_id': masterEventId // <--- The Deduplication Key
              });
            }
            console.log('✅ Grand Gimeno LP - Form submitted. Event ID:', masterEventId);
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

  // Initialize tracking system for GCLID and FBCLID
  useEffect(() => {
    initializeTracking();
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('inquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaClassDesktop = showCTA ? "cta-fixed cta-fixed-desktop" : "cta-fixed cta-fixed-desktop cta-hidden";
  const ctaClassMobile = hasScrolled && showCTA && !heroInView ? "cta-fixed cta-fixed-mobile" : "cta-fixed cta-fixed-mobile cta-hidden";

  return (
    <div className="page-wrapper">
      <div className="fixed-logo">
        <GgLogo />
      </div>

      <div className={ctaClassDesktop}>
        <button onClick={scrollToForm} className="cta-button">
          <span className="mono">Inquire</span>
        </button>
      </div>

      <div className={ctaClassMobile}>
        <button onClick={scrollToForm} className="cta-button">
          <span className="mono">Inquire</span>
        </button>
      </div>

      <section className="hero-section" ref={heroRef}>
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

      <section className="stats-bar">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="stats-container"
        >
          <div className="stat-item">
            <p className="stat-main">Up to 300</p>
            <p className="stat-sub">guests across six spaces</p>
          </div>
          <div className="stat-item">
            <p className="stat-main">Two VIP Suites</p>
            <p className="stat-sub">optional 8am access</p>
          </div>
          <div className="stat-item">
            <p className="stat-main">Created by</p>
            <p className="stat-sub">Jay's Catering</p>
          </div>
        </motion.div>
      </section>

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

      <section className="architecture-section">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
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
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="architecture-item"
            >
              <h3>The Courtyard</h3>
              <p>The arrival point. A lush, open-air space with a large Spanish fountain and arched breezeways.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
              className="architecture-item"
            >
              <h3>The Foyer</h3>
              <p>An intimate space with wrought-iron chandeliers and two fireplaces leading to the heart of the building.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
              className="architecture-item"
            >
              <h3>Grand Central</h3>
              <p>The primary indoor reception space. Soaring 30-foot ceilings, exposed timber trusses, and massive windows. Rustic industrial luxury—no crystal chandeliers here.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="architecture-item"
            >
              <h3>The Olive Grove</h3>
              <p>The crown jewel. A large outdoor sanctuary filled with 100-year-old olive trees, market lights, and decomposed granite floors—designed for al fresco dining.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.25 }}
              className="architecture-item"
            >
              <h3>The Suites</h3>
              <p>Two custom-finished suites - The Powder Room and The Parlor. To prepare in luxury, for the moment before the moment.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
              className="architecture-item"
            >
              <h3>The Sanctuary</h3>
              <p>Enclosed by high walls and greenery, Grand Gimeno creates a silent, private world inside the bustling city of Orange.</p>
            </motion.div>
          </div>
        </div>
      </section>

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
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
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

      <section id="inquiry-form" className="form-section" ref={formRef}>
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="form-content"
          >
            <p className="section-eyebrow">
              <span className="mono">Limited 2026 Availability</span>
            </p>
            <h2>Tell us about your event</h2>
            
            <div id="hubspot-form-container" className="hubspot-form-wrapper"></div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: 'var(--space-section-mobile) 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="three-tall-photos-grid"
        >
          <div className="tall-photo-item">
            <img 
              src="https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765846540/8W6A9496_vndbyv.jpg"
              alt="Grand Gimeno event detail"
              className="tall-photo-img"
            />
          </div>
          <div className="tall-photo-item" style={{ position: 'relative' }}>
            <div
              ref={centerSliderRef}
              onMouseEnter={() => setCenterSliderPaused(true)}
              onMouseLeave={() => setCenterSliderPaused(false)}
            >
              <img 
                key={centerSlide}
                src={centerSliderImages[centerSlide].src}
                alt={centerSliderImages[centerSlide].alt}
                className="tall-photo-img"
              />
              <button
                className="slider-arrow slider-arrow-prev"
                onClick={() => setCenterSlide((prev) => (prev > 0 ? prev - 1 : centerSliderImages.length - 1))}
                aria-label="Previous image"
                style={{ position: 'absolute' }}
              >
                <ChevronLeft size={32} strokeWidth={1} />
              </button>
              <button
                className="slider-arrow slider-arrow-next"
                onClick={() => setCenterSlide((prev) => (prev < centerSliderImages.length - 1 ? prev + 1 : 0))}
                aria-label="Next image"
                style={{ position: 'absolute' }}
              >
                <ChevronRight size={32} strokeWidth={1} />
              </button>
            </div>
          </div>
          <div className="tall-photo-item">
            <img 
              src="https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765846541/Gimeno_Selects_35_emhokx.jpg"
              alt="Architectural detail"
              className="tall-photo-img"
            />
          </div>
        </motion.div>
      </section>

      <section className="final-image-section">
        <div
          className="final-slider-wrapper"
          ref={footerSliderRef}
          onMouseEnter={() => setFooterSliderPaused(true)}
          onMouseLeave={() => setFooterSliderPaused(false)}
        >
          {sliderImages[currentSlide].type === 'video' ? (
            <video 
              key={currentSlide}
              src={sliderImages[currentSlide].src}
              className="final-image"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img 
              key={currentSlide}
              src={sliderImages[currentSlide].src}
              alt={sliderImages[currentSlide].alt}
              className="final-image"
            />
          )}
          <button
            className="slider-arrow slider-arrow-prev"
            onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : sliderImages.length - 1))}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <button
            className="slider-arrow slider-arrow-next"
            onClick={() => setCurrentSlide((prev) => (prev < sliderImages.length - 1 ? prev + 1 : 0))}
            aria-label="Next image"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>
      </section>
    </div>
  );
}

declare global {
  interface Window {
    hbspt: any;
    fbq: any;
    dataLayer: any;
  }
}