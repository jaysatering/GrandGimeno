import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import GgLogo from '../components/GgLogo';
import DevNav from '../components/DevNav';

export default function PrivatePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="page-wrapper">
      <DevNav />
      
      <div className="fixed-logo">
        <GgLogo />
      </div>
      
      <main style={{ minHeight: '100vh', padding: '128px 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p className="section-eyebrow" style={{ marginBottom: '16px' }}>
              <span className="mono">Private Access</span>
            </p>
            <h1 style={{ marginBottom: '24px' }}>Investment & Packages</h1>
            <p style={{ color: 'var(--color-muted)', maxWidth: '700px', margin: '0 auto' }}>
              Grand Gimeno pricing reflects the caliber of the venue, the exclusivity of the space, and the culinary artistry of Jay's Catering.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', marginBottom: '80px' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ 
                padding: '48px', 
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(102, 156, 196, 0.02)'
              }}
            >
              <p className="mono" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Full Venue Buyout</p>
              <h2 style={{ marginBottom: '24px' }}>Starting at $15,000</h2>
              <p style={{ marginBottom: '32px', color: 'var(--color-muted)' }}>
                Exclusive access to all six spaces, VIP suites from 8am, capacity up to 300 guests, and dedicated event coordination.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ fontSize: '1rem' }}>• All indoor and outdoor spaces</p>
                <p style={{ fontSize: '1rem' }}>• The Parlor & Speakeasy VIP suites</p>
                <p style={{ fontSize: '1rem' }}>• On-site event manager</p>
                <p style={{ fontSize: '1rem' }}>• 12-hour venue access</p>
                <p style={{ fontSize: '1rem' }}>• Tables, chairs, and market lighting included</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                padding: '48px', 
                border: '1px solid var(--color-border)'
              }}
            >
              <p className="mono" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Jay's Catering Required</p>
              <h2 style={{ marginBottom: '24px' }}>Minimum $75/guest</h2>
              <p style={{ marginBottom: '32px', color: 'var(--color-muted)' }}>
                Grand Gimeno was built by Jay's Catering. All culinary services are provided exclusively by our in-house team.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ fontSize: '1rem' }}>• Custom menus and tasting experiences</p>
                <p style={{ fontSize: '1rem' }}>• Wood-fired pizza and asado grill stations</p>
                <p style={{ fontSize: '1rem' }}>• Full bar service available</p>
                <p style={{ fontSize: '1rem' }}>• Professional service staff included</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ 
                padding: '48px', 
                border: '1px solid var(--color-border)'
              }}
            >
              <p className="mono" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Availability</p>
              <h2 style={{ marginBottom: '24px' }}>2026 Dates</h2>
              <p style={{ marginBottom: '32px', color: 'var(--color-muted)' }}>
                Grand Gimeno hosts a limited number of events per year to maintain exclusivity and service excellence.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ fontSize: '1rem' }}>• Peak season: April – October</p>
                <p style={{ fontSize: '1rem' }}>• Limited winter availability</p>
                <p style={{ fontSize: '1rem' }}>• Book 12-18 months in advance</p>
                <p style={{ fontSize: '1rem' }}>• Saturday availability extremely limited</p>
              </div>
            </motion.div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '48px', borderTop: '1px solid var(--color-border)' }}>
            <p style={{ marginBottom: '32px', color: 'var(--color-muted)', maxWidth: '600px', margin: '0 auto 32px' }}>
              Our team will provide a custom proposal based on your event date, guest count, and culinary preferences during our consultation.
            </p>
            <button 
              onClick={handleBackHome}
              className="cta-button"
            >
              <span className="mono">Return to Home</span>
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}