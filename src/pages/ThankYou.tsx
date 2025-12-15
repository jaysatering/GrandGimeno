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
    <div className="bg-bone pt-24 lg:pt-32 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[800px] w-full">
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
            className="flex justify-center mb-12"
          >
            <div className="w-20 h-20 lg:w-24 lg:h-24">
              <GgLogo />
            </div>
          </motion.div>

          {/* Concierge Note */}
          <div className="mb-16 space-y-8">
            <h1 className="text-4xl lg:text-6xl leading-tight">
              Inquiry<br />received
            </h1>

            <div className="max-w-[600px] mx-auto text-lg text-foreground/70 leading-relaxed">
              <p>
                We'll be in touch shortly. Your pricing and details below.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <button
              onClick={handleViewProfile}
              className="px-16 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mono"
            >
              VIEW PRIVATE PROFILE
            </button>
            
            <p className="text-sm text-foreground/60">
              146 N Grand St, Orange, CA 92866
            </p>
          </div>

          {/* Signature */}
          <div className="mt-16 pt-12 border-t border-border mb-12">
            <p className="text-foreground/60">
              The Grand Gimeno Team
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}