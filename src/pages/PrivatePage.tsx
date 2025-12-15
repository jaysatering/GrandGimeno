import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import GgLogo from '../components/GgLogo';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AccordionSingle } from '../components/Accordion';

export default function PrivatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const heroImageUrl = "https://images.unsplash.com/photo-1738800076744-c37b80b37d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwbWluaW1hbHxlbnwxfHx8fDE3NjU3ODMyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const courtyardImageUrl = "https://images.unsplash.com/photo-1721860982031-e1a031beb5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwY291cnR5YXJkJTIwZm91bnRhaW58ZW58MXx8fHwxNzY1NzU3NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080";
  const archImageUrl = "https://images.unsplash.com/photo-1762375164298-2f8f14bd8d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsJTIwYXJjaHxlbnwxfHx8fDE3NjU3ODMyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080";
  const culinaryImageUrl = "https://images.unsplash.com/photo-1652969209744-929be02a06c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwZmlyZSUyMGNvb2tpbmclMjBhc2Fkb3xlbnwxfHx8fDE3NjU4MTI1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const faqItems = [
    {
      question: "Can we bring our own caterer?",
      answer: "Grand Gimeno was built by Jay's Catering Collection. All culinary services are provided exclusively by our in-house team to maintain the highest standards of quality and execution."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require a non-refundable deposit to secure your date. Our full cancellation policy will be provided during your consultation and outlined in your contract."
    },
    {
      question: "Do you allow outside vendors?",
      answer: "Yes. You are welcome to work with your preferred florist, photographer, DJ, and other vendors. We'll provide a list of preferred partners who are familiar with the venue."
    },
    {
      question: "Is there parking available?",
      answer: "Yes. Grand Gimeno offers on-site parking for up to 100 vehicles. We also coordinate with nearby lots for larger events and can arrange valet service."
    },
    {
      question: "Can we see the venue before booking?",
      answer: "Absolutely. We offer private tours by appointment. Please submit an inquiry and our venue concierge will schedule a personalized walkthrough."
    },
    {
      question: "What time can we access the venue?",
      answer: "Your rental includes 14 hours of access from 10am to midnight. Early access and extended hours can be arranged for an additional fee."
    }
  ];

  const vendorCollective = [
    "Adore You Events",
    "Blush Botanicals",
    "Cake & Art",
    "DJ Marcus Lee",
    "Elevate Productions",
    "Floral Theory",
    "Glow Event Rentals",
    "Honeycomb Coordinating"
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
            <span className="mono">Private Profile</span>
          </p>
          <h1 className="hero-title">
            <span className="hero-title-line">The</span>
            <span className="hero-title-line">Details</span>
          </h1>
          <p className="hero-subtitle">
            Investment. Inclusions. Culinary experience.<br />
            Everything you need to know.
          </p>
        </motion.div>

        <button 
          onClick={scrollToNextSection}
          className="scroll-indicator"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </button>
      </section>

      <section style={{ padding: '64px 0', marginBottom: '64px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          <div className="pricing-row-container">
            <div className="pricing-row-item">
              <span className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>FRIDAY</span>
              <span className="pricing-value">$10,000</span>
            </div>

            <div className="pricing-row-item">
              <span className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>SATURDAY</span>
              <span className="pricing-value">$12,000</span>
            </div>

            <div className="pricing-row-item">
              <span className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>SUNDAY</span>
              <span className="pricing-value">$9,000</span>
            </div>
          </div>

          <p style={{ 
            marginTop: '16px', 
            textAlign: 'center',
            maxWidth: '672px',
            margin: '16px auto 0',
            opacity: 0.6,
            fontSize: '1rem'
          }}>
            Pricing includes venue access from 10am–midnight. Catering by Jay's Catering Collection is required and billed separately.
          </p>
        </motion.div>
      </section>

      <section className="editorial-image-section" style={{ height: '80vh', minHeight: '600px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="editorial-image-wrapper"
          style={{ height: '100%' }}
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1765308767818-1e7fd17c8067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGhhbGwlMjBiYWxscm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjU4MzM5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Grand Central Hall"
            className="editorial-image"
            style={{ height: '100%' }}
          />
        </motion.div>
      </section>

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
              <span className="mono">What's Included</span>
            </p>
            <h2>Your rental includes</h2>
          </motion.div>

          <div className="architecture-grid">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="architecture-item"
            >
              <h3>Venue Access</h3>
              <p>14 hours (10am-midnight) across six distinct spaces including the Olive Grove, Grand Central, Courtyard, Foyer, and two VIP suites.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="architecture-item"
            >
              <h3>Event Staff</h3>
              <p>Professional venue coordinator, security personnel, and setup/breakdown crew to ensure seamless execution.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="architecture-item"
            >
              <h3>Tables & Seating</h3>
              <p>Farm tables, ghost chairs, and lounge furniture throughout. Additional rentals available through our preferred partners.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="architecture-item"
            >
              <h3>Lighting Design</h3>
              <p>Market lights throughout the Olive Grove, architectural uplighting, and ambient string lights across all outdoor spaces.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="architecture-item"
            >
              <h3>Culinary Infrastructure</h3>
              <p>Permanent outdoor kitchen with wood-fired pizza oven, Argentine asado grill, and full prep facilities for live cooking.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="architecture-item"
            >
              <h3>Parking & Logistics</h3>
              <p>On-site parking for 100 vehicles. Valet coordination and overflow lot arrangements available for larger events.</p>
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
                src={culinaryImageUrl}
                alt="Live fire cooking"
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
                <span className="mono">Culinary Experience</span>
              </p>
              <h2>Jay's Catering Collection</h2>
              <div className="culinary-paragraphs">
                <p>
                  Every event at Grand Gimeno is catered by Jay's Catering Collection—the culinary team that designed and built this venue from the ground up.
                </p>
                <p>
                  The menu is designed around live-fire cooking: wood-fired pizza, Argentine asado, seasonal family-style platters, and curated bar service. This isn't a venue with catering—it's a culinary experience with architecture.
                </p>
                <p>
                  Pricing ranges from $175-$225 per guest depending on menu selection, bar package, and service style. 100-guest minimum.
                </p>
              </div>
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
            transition={{ duration: 0.8 }}
            className="architecture-header"
          >
            <p className="section-eyebrow">
              <span className="mono">Capacity</span>
            </p>
            <h2>Event sizes</h2>
          </motion.div>
        </div>
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
            <p className="stat-main">200</p>
            <p className="stat-sub">Seated dinner maximum</p>
          </div>
          <div className="stat-item">
            <p className="stat-main">300</p>
            <p className="stat-sub">Cocktail reception maximum</p>
          </div>
          <div className="stat-item">
            <p className="stat-main">100</p>
            <p className="stat-sub">Guest minimum</p>
          </div>
        </motion.div>
      </section>

      <section className="editorial-grid-section">
        <div className="editorial-grid-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="editorial-grid"
          >
            <div className="editorial-grid-item editorial-grid-item-large">
              <ImageWithFallback 
                src={courtyardImageUrl}
                alt="Grand Gimeno courtyard"
                className="editorial-grid-image"
              />
            </div>
            <div className="editorial-grid-item editorial-grid-item-small-1">
              <ImageWithFallback 
                src={archImageUrl}
                alt="Architectural details"
                className="editorial-grid-image"
              />
            </div>
            <div className="editorial-grid-item editorial-grid-item-small-2">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMHRyZWUlMjBvdXRkb29yfGVufDF8fHx8MTc2NTc1Nzc1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Olive grove detail"
                className="editorial-grid-image"
              />
            </div>
          </motion.div>
        </div>
      </section>

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
              <span className="mono">Vendor Collective</span>
            </p>
            <h2>Preferred partners</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ padding: '0 48px' }}
          >
            <p style={{ marginBottom: '48px', maxWidth: '800px' }}>
              We've curated relationships with Orange County's most exceptional wedding professionals—florists, photographers, planners, and entertainment who understand the architecture and spirit of Grand Gimeno.
            </p>

            <div className="private-vendor-grid">
              {vendorCollective.map((vendor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="private-vendor-card"
                >
                  <p>{vendor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="architecture-section" style={{ paddingBottom: 'var(--space-section)' }}>
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="architecture-header"
          >
            <p className="section-eyebrow">
              <span className="mono">Questions</span>
            </p>
            <h2>Frequently asked</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ padding: '0 48px', maxWidth: '1100px', margin: '0 auto' }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <AccordionSingle
                  question={item.question}
                  answer={item.answer}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}