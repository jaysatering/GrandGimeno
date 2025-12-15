import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import GgLogo from '../imports/GgLogo11';

export function ThankYou() {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate('/private-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bone flex items-center justify-center" style={{ paddingTop: '96px', minHeight: '100vh', paddingLeft: '24px', paddingRight: '24px' }}>
      <div className="container-text w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          {/* G Logo Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center" style={{ marginBottom: '48px' }}
          >
            <div style={{ width: '80px', height: '80px' }}>
              <GgLogo />
            </div>
          </motion.div>

          {/* Concierge Note */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{ marginBottom: '32px' }}>
              <h1>
                Inquiry<br />received
              </h1>
            </div>

            <div className="max-w-2xl mx-auto text-foreground/70">
              <p>
                We'll be in touch shortly. Your pricing and details below.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <button
              onClick={handleViewProfile}
              className="px-16 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mono"
            >
              VIEW PRIVATE PROFILE
            </button>
            
            <p className="text-foreground/60">
              146 N Grand St, Orange, CA 92866
            </p>
          </div>

          {/* Signature */}
          <div className="border-t border-border" style={{ marginTop: '64px', paddingTop: '48px', marginBottom: '48px' }}>
            <p className="text-foreground/60">
              The Grand Gimeno Team
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}