import { useEffect } from 'react';
import { motion } from 'motion/react';
import GgLogo from '../components/GgLogo';
import DevNav from '../components/DevNav';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Accordion } from '../components/Accordion';

export default function PrivatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    {
      category: "PLANNING",
      vendors: [
        { name: "Kelsey Rae Designs", specialty: "Full-service production" },
        { name: "Bash Please", specialty: "Luxury event curation" },
        { name: "Moxie Bright Events", specialty: "Modern celebrations" },
        { name: "Style & Story Creative", specialty: "Editorial design" },
        { name: "Ashley Baber Weddings", specialty: "Refined details" },
        { name: "Duet Weddings", specialty: "Romantic planning" },
        { name: "Engage!13", specialty: "Destination expertise" },
        { name: "Jesi Haack Design", specialty: "Organic elegance" },
        { name: "Love & Splendor", specialty: "Timeless events" },
        { name: "Sinclair & Moore", specialty: "Modern luxury" },
        { name: "Brightly & Co", specialty: "Elevated design" },
        { name: "The Dainty Lion", specialty: "Intimate celebrations" },
        { name: "Bright Event Productions", specialty: "Flawless execution" },
        { name: "LVL Weddings & Events", specialty: "Curated experiences" },
        { name: "Amorology", specialty: "Artful planning" },
        { name: "A Good Affair", specialty: "Signature style" },
        { name: "Beijos Events", specialty: "European inspired" },
        { name: "Details Details", specialty: "Personalized service" },
        { name: "Sterling Engagements", specialty: "Bespoke events" },
        { name: "Alchemy Fine Events", specialty: "Transformative design" }
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <DevNav />
      
      <div className="fixed-logo">
        <GgLogo />
      </div>
      
      <main>
        {/* HERO SECTION */}
        <section style={{ padding: '200px 24px 160px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="section-eyebrow">
              <span className="mono">PRIVATE VENUE PROFILE</span>
            </p>
            <h1 style={{ marginTop: '40px', marginBottom: '48px' }}>THE LANDMARK IS YOURS.</h1>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.6' }}>
              We do not split the venue. You secure the entire building and grounds.
            </p>
          </motion.div>
        </section>

        {/* THE INVESTMENT (PRICING) */}
        <section style={{ padding: '120px 24px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ marginBottom: '80px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
                  <div style={{ padding: '48px 24px', borderBottom: '1px solid var(--color-border)' }}>
                    <p className="mono" style={{ marginBottom: '16px', color: 'var(--color-muted)' }}>SATURDAY</p>
                    <h2>$12K</h2>
                  </div>
                  <div style={{ padding: '48px 24px', borderBottom: '1px solid var(--color-border)' }}>
                    <p className="mono" style={{ marginBottom: '16px', color: 'var(--color-muted)' }}>FRIDAY</p>
                    <h2>$10K</h2>
                  </div>
                  <div style={{ padding: '48px 24px', borderBottom: '1px solid var(--color-border)' }}>
                    <p className="mono" style={{ marginBottom: '16px', color: 'var(--color-muted)' }}>SUNDAY</p>
                    <h2>$9K</h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INCLUSIONS */}
        <section style={{ padding: '80px 24px 160px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '96px' }}>
                <h2>What's included</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px 96px', maxWidth: '1200px', margin: '0 auto' }}>
                {/* SPACES */}
                <div>
                  <p className="mono" style={{ marginBottom: '32px', color: 'var(--color-primary)' }}>SPACES</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p>Courtyard with Spanish fountain</p>
                    <p>Grand Central hall (30-foot ceilings)</p>
                    <p>Olive Grove (100-year-old trees)</p>
                    <p>The Parlor & Speakeasy VIP suites</p>
                    <p>Live Fire Kitchen with Asado Grill & Pizza Oven</p>
                  </div>
                </div>

                {/* FURNISHINGS */}
                <div>
                  <p className="mono" style={{ marginBottom: '32px', color: 'var(--color-primary)' }}>FURNISHINGS</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p>300 Bentwood Chairs</p>
                    <p>Market lights in Olive Grove</p>
                    <p>Original architectural features</p>
                    <p>Wrought-iron chandeliers</p>
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <p className="mono" style={{ marginBottom: '32px', color: 'var(--color-primary)' }}>SERVICE</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p>Dedicated venue coordinator</p>
                    <p>14-hour venue access (10am–midnight)</p>
                    <p>On-site parking coordination</p>
                    <p>Full climate control</p>
                  </div>
                </div>

                {/* CULINARY */}
                <div>
                  <p className="mono" style={{ marginBottom: '32px', color: 'var(--color-primary)' }}>CULINARY</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p>Exclusive use of Live Fire Kitchen</p>
                    <p>Jay's Catering Collection team</p>
                    <p>Custom menu design included</p>
                    <p>Tasting for up to 4 guests</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FULL-WIDTH IMAGE BREAK */}
        <section style={{ width: '100%', margin: '0', padding: '0' }}>
          <ImageWithFallback 
            src={heroImageUrl}
            alt="Grand Gimeno venue"
            style={{ width: '100%', height: 'auto', display: 'block', minHeight: '100vh', objectFit: 'cover' }}
          />
        </section>

        {/* CULINARY EXPERIENCE */}
        <section style={{ padding: '160px 24px' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                {/* Image on left */}
                <div>
                  <ImageWithFallback 
                    src={culinaryImageUrl}
                    alt="Live fire cooking at Grand Gimeno"
                    style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4 / 5', objectFit: 'cover' }}
                  />
                </div>

                {/* Content on right */}
                <div style={{ paddingRight: '40px' }}>
                  <p className="section-eyebrow" style={{ marginBottom: '32px' }}>
                    <span className="mono">CULINARY EXPERIENCE</span>
                  </p>
                  
                  <h2 style={{ marginBottom: '48px', lineHeight: '1.2' }}>
                    Live fire.<br />
                    Seasonal craft.<br />
                    Zero compromise.
                  </h2>

                  <div style={{ marginBottom: '64px' }}>
                    <p style={{ marginBottom: '32px', color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: '1.7' }}>
                      Grand Gimeno was built by Jay's Catering Collection. Every menu is designed specifically for your event—guided by what's in season, what inspires us, and what moves you.
                    </p>
                    <p style={{ color: 'var(--color-muted)', fontSize: '1.125rem', lineHeight: '1.7' }}>
                      The Live Fire Kitchen anchors the experience: whole animal asado on the custom grill, wood-fired pizzas from the oven, smoke and flame as part of the theater.
                    </p>
                  </div>

                  <div>
                    <a 
                      href="http://www.jayscatering.com/food-and-drink/the-grand-gimeno-bespoke-menu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button"
                      style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                      <span className="mono">View Bespoke Menus</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VENDOR COLLECTIVE */}
        <section style={{ padding: '160px 24px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ marginBottom: '32px' }}>The Collective</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-muted)' }}>
                  Partners who know the space.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '96px' }}>
                {vendorCollective.map((category, idx) => (
                  <div key={idx}>
                    <p className="mono" style={{ marginBottom: '48px', color: 'var(--color-primary)' }}>
                      {category.category}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
                      {category.vendors.map((vendor, vIdx) => (
                        <div 
                          key={vIdx}
                          style={{
                            cursor: 'pointer',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            const h3 = e.currentTarget.querySelector('h3');
                            if (h3) h3.style.color = 'var(--color-primary)';
                          }}
                          onMouseLeave={(e) => {
                            const h3 = e.currentTarget.querySelector('h3');
                            if (h3) h3.style.color = '';
                          }}
                        >
                          <h3 style={{ marginBottom: '8px', fontSize: '1rem', transition: 'color 0.3s ease' }}>{vendor.name}</h3>
                          <p style={{ color: 'var(--color-muted)', margin: '0', fontSize: '0.875rem' }}>{vendor.specialty}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CAPACITY */}
        <section style={{ padding: '160px 24px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ marginBottom: '80px' }}>
                <h2 style={{ marginBottom: '80px' }}>Capacity</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
                  <div style={{ padding: '48px 24px', borderBottom: '1px solid var(--color-border)' }}>
                    <p className="mono" style={{ marginBottom: '16px', color: 'var(--color-muted)' }}>RECEPTION STYLE</p>
                    <h2>300</h2>
                  </div>
                  <div style={{ padding: '48px 24px', borderBottom: '1px solid var(--color-border)' }}>
                    <p className="mono" style={{ marginBottom: '16px', color: 'var(--color-muted)' }}>SEATED DINNER</p>
                    <h2>250</h2>
                  </div>
                  <div style={{ padding: '48px 24px', borderBottom: '1px solid var(--color-border)' }}>
                    <p className="mono" style={{ marginBottom: '16px', color: 'var(--color-muted)' }}>CEREMONY + DINNER</p>
                    <h2>200</h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE SPACES (GALLERY) */}
        <section style={{ padding: '120px 24px 200px' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2>The Spaces</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '32px' }}>
                <ImageWithFallback 
                  src={courtyardImageUrl}
                  alt="Spanish courtyard with fountain"
                  style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '3 / 2', objectFit: 'cover' }}
                />
                <ImageWithFallback 
                  src={archImageUrl}
                  alt="Architectural detail"
                  style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4 / 5', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ padding: '160px 24px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ textAlign: 'center', marginBottom: '96px' }}>
                <h2>Frequently Asked Questions</h2>
              </div>

              <Accordion items={faqItems} />
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '120px 24px 80px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '64px', marginBottom: '80px' }}>
              {/* Address */}
              <div>
                <p className="mono" style={{ marginBottom: '24px', color: 'var(--color-primary)', fontSize: '0.875rem' }}>
                  LOCATION
                </p>
                <p style={{ lineHeight: '1.8', color: 'var(--color-muted)' }}>
                  147 S Olive Street<br />
                  Old Towne Orange, CA 92866
                </p>
              </div>

              {/* Contact */}
              <div>
                <p className="mono" style={{ marginBottom: '24px', color: 'var(--color-primary)', fontSize: '0.875rem' }}>
                  INQUIRIES
                </p>
                <p style={{ lineHeight: '1.8' }}>
                  <a 
                    href="tel:7145322333" 
                    style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
                  >
                    714.532.2333
                  </a>
                  <br />
                  <a 
                    href="mailto:events@grandgimeno.com" 
                    style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-muted)'}
                  >
                    events@grandgimeno.com
                  </a>
                </p>
              </div>

              {/* Hours */}
              <div>
                <p className="mono" style={{ marginBottom: '24px', color: 'var(--color-primary)', fontSize: '0.875rem' }}>
                  VENUE TOURS
                </p>
                <p style={{ lineHeight: '1.8', color: 'var(--color-muted)' }}>
                  By appointment only
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{ textAlign: 'center', paddingTop: '64px', borderTop: '1px solid var(--color-border)' }}>
              <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>
                © 2024 GRAND GIMENO. a Jay's Catering Hospitality Group Property
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}