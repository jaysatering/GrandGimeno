import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import GgLogo from '../components/GgLogo';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function PrivatePage() {
  useEffect(() => {
    document.title = "Grand Gimeno | Private Access";
    window.scrollTo(0, 0);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const culinaryImageUrl = "https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765839039/_AJB3571_ijrgo1.jpg";

  const vendorCollective = [
    {
      name: "A Touch of Lavender",
      url: "https://atouchoflavender.net/"
    },
    {
      name: "Ah, Love",
      url: "https://www.ahloveevents.com/"
    },
    {
      name: "All in the Detail Design",
      url: "https://www.aitdd.com/"
    },
    {
      name: "Beloved Events",
      url: "https://www.belovedeventsco.com/"
    },
    {
      name: "Blissful Moments",
      url: "https://www.blissfulmomentslp.com/"
    },
    {
      name: "Blush Events",
      url: "https://blush-events.com/"
    },
    {
      name: "Bring the Bubbly Events",
      url: "https://www.bringthebubblyevents.com/"
    },
    {
      name: "Campfire Events",
      url: "https://www.campfire-events.com/"
    },
    {
      name: "De La Planning",
      url: "https://delaplanning.com/"
    },
    {
      name: "Details Darling",
      url: "https://detailsdarling.com/"
    },
    {
      name: "Exceptionally Yours Weddings & Events",
      url: "https://exceptionallyyours.com/"
    },
    {
      name: "Fetelle Designs",
      url: "https://fetelle.com/"
    },
    {
      name: "Golden Hour Events",
      url: "https://www.goldenhour-events.com/"
    },
    {
      name: "Haus + Company",
      url: "https://haus353.com/"
    },
    {
      name: "Intertwined",
      url: "https://intertwinedevents.com/"
    },
    {
      name: "Joyfully Co",
      url: "https://www.joyfullyco.com/"
    },
    {
      name: "Mele Amore",
      url: "https://www.meleamore.com/"
    },
    {
      name: "Modest Magnolia",
      url: "https://modestmagnolia.com/"
    },
    {
      name: "Now & Forever Love",
      url: "http://www.nowandforeverlove.com/"
    },
    {
      name: "Palm & Pine Events",
      url: "https://www.palmandpineevents.com/"
    },
    {
      name: "Peonies & Bliss Events",
      url: "https://www.peoniesandblissevents.com/"
    },
    {
      name: "Pop the Champagne",
      url: "https://popthechampagneevents.com/"
    },
    {
      name: "Pure Lavish",
      url: "https://eventsbypurelavish.com/"
    },
    {
      name: "Sage Event Planning",
      url: "https://www.sageeventplanning.com/"
    },
    {
      name: "The Fete Collective",
      url: "https://www.thefetecollective.com/"
    },
    {
      name: "Unoaked. Event design & production",
      url: "https://unoakedevents.com/"
    },
    {
      name: "White Blossom Events",
      url: "https://www.instagram.com/whiteblossomevents/"
    }
  ];

  const pricingRowStyle = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingBottom: '8px',
    borderBottom: '1px solid var(--color-border)'
  };

  return (
    <div className="page-wrapper">
      <div className="fixed-logo">
        <GgLogo />
      </div>

      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="hero-content"
        >
          <p className="hero-eyebrow">
            <span className="mono">Private Venue Profile</span>
          </p>
          <h1 className="hero-title">
            <span className="hero-title-line">The Landmark</span>
            <span className="hero-title-line">Is Yours.</span>
          </h1>
        </motion.div>

        <button 
          onClick={scrollToNextSection}
          className="scroll-indicator"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </button>
      </section>

      <section style={{ padding: 'var(--space-section-mobile) 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          <div className="pricing-row-container" style={{ 
            gridTemplateColumns: '1fr',
            gap: '48px'
          } as React.CSSProperties & { 
            '@media (min-width: 768px)': { gridTemplateColumns: string };
            '@media (min-width: 1024px)': { gridTemplateColumns: string; gap: string };
          }}>
            <style>{`
              @media (min-width: 768px) {
                .pricing-row-container {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 48px !important;
                }
              }
              @media (min-width: 1024px) {
                .pricing-row-container {
                  grid-template-columns: repeat(4, 1fr) !important;
                  gap: 64px !important;
                }
              }
            `}</style>

            <div className="pricing-row-item">
              <span className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>FRIDAY</span>
              <span className="pricing-value">$8,000</span>
            </div>

            <div className="pricing-row-item">
              <span className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>SATURDAY</span>
              <span className="pricing-value">$10,000</span>
              <span className="mono" style={{ color: 'var(--color-muted)', marginTop: '8px', display: 'block', fontSize: '9px' }}>JAN - AUG</span>
            </div>

            <div className="pricing-row-item">
              <span className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>SATURDAY</span>
              <span className="pricing-value">$11,000</span>
              <span className="mono" style={{ color: 'var(--color-muted)', marginTop: '8px', display: 'block', fontSize: '9px' }}>SEP - DEC</span>
            </div>

            <div className="pricing-row-item">
              <span className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>SUNDAY</span>
              <span className="pricing-value">$8,000</span>
            </div>
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
          <ImageWithFallback 
            src="https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765839486/KAPSULE_Shawn_Steph_0796_qywqze.jpg"
            alt="Grand Central Hall"
            className="editorial-image-wide"
          />
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
              <span className="mono">INCLUSIONS</span>
            </p>
            <h2>The Logistics</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ opacity: 0.7 }}>Five and a half hours for your event. Four hours to set the scene. One hour to close the chapter.</p>
                <p style={{ opacity: 0.7 }}>Six distinct spaces: Grand Central Hall. Olive Grove. Courtyard. Foyer. Two VIP suites—private, quiet, yours.</p>
                <p style={{ opacity: 0.7 }}>Dining tables - king or round. 250 wishbone chairs. More tables used as you need.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
                <p style={{ opacity: 0.7 }}>Market lights strung through the Olive Grove. Architectural uplighting that whispers elegance.</p>
                <p style={{ opacity: 0.7 }}>An outdoor kitchen alive with fire: wood-fired pizza oven, Argentine asado grill.</p>
                <p style={{ opacity: 0.7 }}>Two fireplaces inside. One fireplace outside. And a firepit under the stars.</p>
                <p style={{ opacity: 0.7 }}>Handmade zellige and terracotta underfoot—every tile, a quiet detail.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
                <p style={{ opacity: 0.7 }}>An experienced team: venue representative, catering manager, security, and setup crew.</p>
                <p style={{ opacity: 0.7 }}>The List—our trusted vendor partners, with exclusive offerings for your day.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
                <p style={{ opacity: 0.7 }}>Two luxury suites, apartment-style. Optional early access at 8am.</p>
                <p style={{ opacity: 0.7 }}>On-site parking.</p>
                <p style={{ opacity: 0.7 }}>Rehearsal dinner discounts across The Collection.</p>
                <p style={{ opacity: 0.7 }}>And two seats at A Taste of Jay's—on us.</p>
              </div>
            </div>
          </motion.div>
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
                src={culinaryImageUrl}
                alt="Grand Gimeno Olive Grove"
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
                <span className="mono">JAY'S CATERING</span>
              </p>
              <h2>The Experience</h2>
              <p style={{ opacity: 0.7 }}>
                Every event at Grand Gimeno begins with Jay's Catering. The culinary team who imagined this space—and built it around food.
              </p>
              <p style={{ opacity: 0.7, marginTop: '24px' }}>
                The menu lives in fire: wood-fired pizza, Argentine asado, handmade hors d'oeuvres. Abundant buffets or curated plates. Indulgent desserts. A bar, perfectly crafted. This is not a venue with catering—it's a culinary experience with architecture.
              </p>
              
              <div style={{ marginTop: '48px' }}>
                <h3 style={{ marginBottom: '16px' }}>Pricing</h3>
                <p style={{ opacity: 0.7 }}>
                  Dependent on guest count, event length, menu, and service style. 75-guest minimum. Let us create your custom proposal.
                </p>
              </div>

              <a 
                href="http://www.jayscatering.com/food-and-drink/the-grand-gimeno-bespoke-menu"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button" 
                style={{ marginTop: '32px', display: 'inline-block', textDecoration: 'none' }}
              >
                <span className="mono">Bespoke Menu</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="architecture-section">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="architecture-header center-aligned"
          >
            <p className="section-eyebrow">
              <span className="mono">Trusted professionals who know Grand Gimeno.</span>
            </p>
            <h2>The List</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            style={{ padding: '0 48px' }}
          >
            <div className="vendor-collective-grid">
              {vendorCollective.map((vendor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.02 }}
                >
                  {vendor.url ? (
                    <a 
                      href={vendor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vendor-name"
                      style={{ textDecoration: 'none', color: 'var(--color-charcoal)', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-charcoal)'}
                    >
                      {vendor.name}
                    </a>
                  ) : (
                    <p className="vendor-name">
                      {vendor.name}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="full-height-image-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="editorial-full-height"
        >
          <img 
            src="https://res.cloudinary.com/dr9hlxnbp/image/upload/v1765813997/jaysTitusandJo-4-2_1_x4l2ou.jpg"
            alt="Grand Gimeno"
            className="editorial-full-height-img"
          />
        </motion.div>
      </section>

      <footer style={{ 
        padding: '80px 24px 48px', 
        borderTop: '1px solid var(--color-border)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}
        >
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            marginBottom: '64px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
              <div>
                <p className="mono" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>LOCATION</p>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-charcoal)' }}>
                  Grand Gimeno<br />
                  146 N Grand St<br />
                  Orange, CA 92866
                </p>
              </div>

              <div>
                <p className="mono" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>CONTACT</p>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-charcoal)' }}>
                  <a 
                    href="tel:+17146366045"
                    style={{ 
                      color: 'var(--color-charcoal)', 
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-charcoal)'}
                  >
                    (714) 636-6045
                  </a>
                  <br />
                  <a 
                    href="mailto:info@grandgimeno.com"
                    style={{ 
                      color: 'var(--color-charcoal)', 
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-charcoal)'}
                  >
                    info@grandgimeno.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
            © {new Date().getFullYear()} Grand Gimeno. All rights reserved.
          </p>
        </motion.div>

        <style>{`
          @media (min-width: 768px) {
            footer {
              padding: 96px 48px 64px !important;
            }
            footer > div > div {
              margin-bottom: 80px !important;
            }
            footer > div > div > div {
              grid-template-columns: 1fr 1fr !important;
              gap: 96px !important;
            }
          }
        `}</style>
      </footer>
    </div>
  );
}