import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import GgLogo from '../imports/GgLogo6';
import { ChevronDown } from 'lucide-react';

// Placeholder images from Unsplash
const image_spanishCourtyard = "https://images.unsplash.com/photo-1721860982031-e1a031beb5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwY291cnR5YXJkJTIwZm91bnRhaW58ZW58MXx8fHwxNzY1NzU3NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_chandelier = "https://images.unsplash.com/photo-1760281581532-73976e21fa10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cm91Z2h0JTIwaXJvbiUyMGNoYW5kZWxpZXJ8ZW58MXx8fHwxNzY1NzY2NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_historicInterior = "https://images.unsplash.com/photo-1761116182530-67c643f982fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NjY2Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_outdoorDining = "https://images.unsplash.com/photo-1762195804047-65ba748de62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZGluaW5nJTIwb2xpdmUlMjB0cmVlc3xlbnwxfHx8fDE3NjU3NjY0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_wroughtIron = "https://images.unsplash.com/photo-1754852050560-d4c57cbf77c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cm91Z2h0JTIwaXJvbiUyMGRldGFpbHxlbnwxfHx8fDE3NjU3NTc3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_c35727a90159d087a9e56d733b68c098e3f119cd = "https://images.unsplash.com/photo-1634913174448-f2932ddfe4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwc2V0dXB8ZW58MXx8fHwxNzY1NzY2NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_96f784d215fdb2dafc0538f61064c2adef28e0fd = "https://images.unsplash.com/photo-1759730840961-09faa5731a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFsbHJvb20lMjBjZWlsaW5nfGVufDF8fHx8MTc2NTc0NjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_oliveTrees = "https://images.unsplash.com/photo-1722228097356-bd0202d99367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMGdyb3ZlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NTc2NjQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const image_132849be8bad78b6d89d4aadacdafbccad992ce1 = "https://images.unsplash.com/photo-1757190412618-a52ad13f6759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMGhhbGwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY1NjY2Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const oliveGroveAerial = "https://images.unsplash.com/photo-1763231575952-98244918f99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHNwYWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NzY4OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function PrivateProfile() {
  const navigate = useNavigate();

  return (
    <div className="bg-bone" style={{ paddingTop: '128px' }}>
      {/* Fixed Logo */}
      <div className="fixed-logo">
        <GgLogo />
      </div>

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '100vh', marginBottom: '0', marginTop: '-128px', paddingTop: '128px' }}>
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="mono text-primary mb-16">PRIVATE VENUE PROFILE</p>
            <h1 className="mb-24">
              THE LANDMARK<br />IS YOURS.
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              We do not split the venue.<br />
              You secure the entire building and grounds.
            </p>
          </motion.div>

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
        </div>
      </section>

      {/* The Investment - Minimal Pricing */}
      <section style={{ marginBottom: '256px' }}>
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="mono text-primary mb-32 text-center">THE INVESTMENT</p>
            
            {/* Pricing - Simple & Bold */}
            <div className="space-y-16">
              <div className="flex items-baseline justify-between border-b border-border pb-8">
                <span className="mono text-primary">SATURDAY</span>
                <span>$12K</span>
              </div>
              
              <div className="flex items-baseline justify-between border-b border-border pb-8">
                <span className="mono text-primary">FRIDAY</span>
                <span>$10K</span>
              </div>
              
              <div className="flex items-baseline justify-between border-b border-border pb-8">
                <span className="mono text-primary">SUNDAY</span>
                <span>$9K</span>
              </div>
            </div>

            <p className="text-foreground/60 mt-16 text-center max-w-2xl mx-auto">
              Pricing includes venue access from 10am–midnight. Catering by Jay's Catering Collection is required and billed separately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Image Break */}
      <section style={{ marginBottom: '256px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="w-full h-[80vh]"
        >
          <img
            src={oliveGroveAerial}
            alt="Grand Central Hall"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Culinary Section */}
      <section className="px-6 lg:px-12 mb-64">
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >
            <p className="mono text-primary mb-16">CULINARY EXPERIENCE</p>
            <h2 className="mb-20">
              Bespoke menus,<br />designed for you
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-12">
              Every Grand Gimeno event is catered by Jay's Catering Collection. Our culinary team designs custom menus that reflect your vision, using seasonal ingredients and live-fire techniques.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20"
          >
            <div className="space-y-6">
              <h3>Live fire cooking</h3>
              <p className="text-foreground/70">
                Our Live Fire Kitchen features an Asado grill and wood-fired pizza oven. We specialize in open-flame techniques that bring theater and flavor to your event.
              </p>
            </div>

            <div className="space-y-6">
              <h3>Seasonal menus</h3>
              <p className="text-foreground/70">
                We design menus around what's in season, sourcing from California farms and artisan producers. Each menu is tailored to your taste and event style.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included - Clean Lists */}
      <section className="px-6 lg:px-12 mb-64">
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <p className="mono text-primary mb-16">INCLUSIONS</p>
            <h2>
              The design spec
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <p className="text-foreground/70">The Courtyard with Spanish fountain</p>
              <p className="text-foreground/70">Grand Central hall with 30-foot ceilings</p>
              <p className="text-foreground/70">The Olive Grove with 100-year-old trees</p>
              <p className="text-foreground/70">The Parlor & The Speakeasy VIP suites</p>
              <p className="text-foreground/70">Live Fire Kitchen with Asado Grill & Pizza Oven</p>
            </div>

            <div className="border-t border-border pt-12 space-y-4">
              <p className="text-foreground/70">300 Bentwood Chairs matched to timber</p>
              <p className="text-foreground/70">Market lights throughout Olive Grove</p>
              <p className="text-foreground/70">All original architectural features</p>
              <p className="text-foreground/70">Wrought-iron chandeliers</p>
            </div>

            <div className="border-t border-border pt-12 space-y-4">
              <p className="text-foreground/70">Dedicated venue coordinator</p>
              <p className="text-foreground/70">14-hour venue access (10am–midnight)</p>
              <p className="text-foreground/70">On-site parking coordination</p>
              <p className="text-foreground/70">Full climate control</p>
            </div>

            <div className="border-t border-border pt-12 space-y-4">
              <p className="text-foreground/70">Exclusive use of Live Fire Kitchen</p>
              <p className="text-foreground/70">Jay's Catering Collection culinary team</p>
              <p className="text-foreground/70">Custom menu design included</p>
              <p className="text-foreground/70">Tasting for up to 4 guests</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capacity - Minimal */}
      <section className="px-6 lg:px-12 mb-64">
        <div className="container-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="mono text-primary mb-32 text-center">CAPACITY</p>
            
            <div className="space-y-16">
              <div className="flex items-baseline justify-between border-b border-border pb-8">
                <span className="text-foreground/70">Reception style</span>
                <span>300</span>
              </div>
              
              <div className="flex items-baseline justify-between border-b border-border pb-8">
                <span className="text-foreground/70">Seated dinner</span>
                <span>250</span>
              </div>
              
              <div className="flex items-baseline justify-between border-b border-border pb-8">
                <span className="text-foreground/70">Ceremony + dinner</span>
                <span>200</span>
              </div>
            </div>

            <p className="text-foreground/60 mt-16 text-center">
              Total square footage: 30,000 sq ft
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vendor Collective */}
      <section className="px-6 lg:px-12 mb-64">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-48 text-center"
          >
            <p className="mono text-primary mb-16">VENDOR COLLECTIVE</p>
            <h2 className="mb-20">
              The people<br />we trust
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              We don't do preferred vendor lists. This is our collective—the artists, designers, and makers who understand the building and deliver at the level we expect.
            </p>
          </motion.div>

          {/* Vendor Grid - Editorial Layout */}
          <div className="grid lg:grid-cols-3 gap-x-20 gap-y-32">
            {/* Planning & Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <p className="mono text-primary text-sm mb-8">PLANNING & DESIGN</p>
              <div className="space-y-6">
                <div>
                  <a href="https://bashplease.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Bash Please
                  </a>
                  <p className="text-foreground/60 text-sm">Full-service planning</p>
                </div>
                <div>
                  <a href="https://lindseynickel.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Lindsey Nickel Design
                  </a>
                  <p className="text-foreground/60 text-sm">Event design & florals</p>
                </div>
                <div>
                  <a href="https://detailsdetails.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Details Details
                  </a>
                  <p className="text-foreground/60 text-sm">Day-of coordination</p>
                </div>
              </div>
            </motion.div>

            {/* Florals */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="mono text-primary text-sm mb-8">FLORALS</p>
              <div className="space-y-6">
                <div>
                  <a href="https://plentyofpetals.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Plenty of Petals
                  </a>
                  <p className="text-foreground/60 text-sm">Organic, editorial florals</p>
                </div>
                <div>
                  <a href="https://elevatebygina.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Elevate by Gina
                  </a>
                  <p className="text-foreground/60 text-sm">Modern luxury design</p>
                </div>
                <div>
                  <a href="https://wildheartflorals.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Wild Heart Florals
                  </a>
                  <p className="text-foreground/60 text-sm">Romantic & textural</p>
                </div>
              </div>
            </motion.div>

            {/* Photography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="mono text-primary text-sm mb-8">PHOTOGRAPHY</p>
              <div className="space-y-6">
                <div>
                  <a href="https://erinandgeoffrey.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Erin & Geoffrey Photo
                  </a>
                  <p className="text-foreground/60 text-sm">Film & digital</p>
                </div>
                <div>
                  <a href="https://braedonflynn.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Braedon Flynn
                  </a>
                  <p className="text-foreground/60 text-sm">Editorial storytelling</p>
                </div>
                <div>
                  <a href="https://dianamcgregor.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Diana McGregor
                  </a>
                  <p className="text-foreground/60 text-sm">Timeless documentation</p>
                </div>
              </div>
            </motion.div>

            {/* Rentals */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="mono text-primary text-sm mb-8">RENTALS</p>
              <div className="space-y-6">
                <div>
                  <a href="https://archiverentals.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Archive Vintage Rentals
                  </a>
                  <p className="text-foreground/60 text-sm">Curated vintage pieces</p>
                </div>
                <div>
                  <a href="https://signaturepartyrentals.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Signature Party Rentals
                  </a>
                  <p className="text-foreground/60 text-sm">High-end furniture & tabletop</p>
                </div>
                <div>
                  <a href="https://foundrentals.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Found Vintage Rentals
                  </a>
                  <p className="text-foreground/60 text-sm">Specialty furniture</p>
                </div>
              </div>
            </motion.div>

            {/* Lighting & Production */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="mono text-primary text-sm mb-8">LIGHTING & PRODUCTION</p>
              <div className="space-y-6">
                <div>
                  <a href="https://lightenupinc.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Lighten Up Inc.
                  </a>
                  <p className="text-foreground/60 text-sm">Architectural lighting design</p>
                </div>
                <div>
                  <a href="https://ambereventproduction.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Amber Event Production
                  </a>
                  <p className="text-foreground/60 text-sm">Full technical production</p>
                </div>
                <div>
                  <a href="https://designsbyhemingway.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Designs by Hemingway
                  </a>
                  <p className="text-foreground/60 text-sm">Draping & specialty lighting</p>
                </div>
              </div>
            </motion.div>

            {/* Entertainment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="mono text-primary text-sm mb-8">ENTERTAINMENT</p>
              <div className="space-y-6">
                <div>
                  <a href="https://westcoastmusic.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    West Coast Music
                  </a>
                  <p className="text-foreground/60 text-sm">Live bands & DJs</p>
                </div>
                <div>
                  <a href="https://mandmproductions.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    M&M Productions
                  </a>
                  <p className="text-foreground/60 text-sm">DJ & MC services</p>
                </div>
                <div>
                  <a href="https://silverarrowband.com" target="_blank" rel="noopener noreferrer" className="text-xl mb-2 block hover:text-primary transition-colors">
                    Silver Arrow Band
                  </a>
                  <p className="text-foreground/60 text-sm">Live performance</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-48 text-center"
          >
            <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">
              This collective knows the building intimately. They've designed for the architecture, they understand the flow, and they execute at the highest level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery - Asymmetric Editorial */}
      <section className="px-6 lg:px-12 pb-48 lg:pb-64">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <p className="mono text-primary">THE SPACES</p>
          </motion.div>

          {/* Row 1: Large + Portrait */}
          <div className="grid grid-cols-12 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={image_spanishCourtyard}
                  alt="The Courtyard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="col-span-12 lg:col-span-5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image_chandelier}
                  alt="Wrought Iron Chandeliers"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>

          {/* Row 2: Square + Wide */}
          <div className="grid grid-cols-12 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="col-span-12 lg:col-span-5"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image_historicInterior}
                  alt="Historic Building Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={image_outdoorDining}
                  alt="Olive Grove Dining"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Row 3: Three Columns */}
          <div className="grid grid-cols-12 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image_wroughtIron}
                  alt="Architectural Details"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image_c35727a90159d087a9e56d733b68c098e3f119cd}
                  alt="Event Setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image_96f784d215fdb2dafc0538f61064c2adef28e0fd}
                  alt="Ballroom Ceiling"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Row 4: Wide Panoramic + Small Portrait */}
          <div className="grid grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  src={image_oliveTrees}
                  alt="The Olive Grove at Dusk"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image_132849be8bad78b6d89d4aadacdafbccad992ce1}
                  alt="Grand Central Hall"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-20 border-t border-foreground/10">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
            {/* Location & Address */}
            <div className="text-center lg:text-left">
              <p className="mono text-primary mb-4">LOCATION</p>
              <p className="text-foreground/70 mb-1">146 N Grand St</p>
              <p className="text-foreground/70">Orange, CA 92866</p>
            </div>
            
            {/* Contact */}
            <div className="text-center">
              <p className="mono text-primary mb-4">CONTACT</p>
              <p className="text-foreground/70 mb-1">
                <a href="tel:+17146366045" className="hover:text-primary transition-colors">
                  (714) 636-6045
                </a>
              </p>
              <p className="text-foreground/70">
                <a href="mailto:info@grandgimeno.com" className="hover:text-primary transition-colors">
                  info@grandgimeno.com
                </a>
              </p>
            </div>
            
            {/* Hours */}
            <div className="text-center lg:text-right">
              <p className="mono text-primary mb-4">TOURS</p>
              <p className="text-foreground/70 mb-1">By appointment only</p>
              <p className="text-foreground/70">Tuesday–Friday</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-foreground/10 flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-foreground/40">© 2025 Grand Gimeno. All rights reserved.</p>
            <p className="mono text-foreground/60">CREATED BY JAY'S CATERING</p>
          </div>
        </div>
      </footer>
    </div>
  );
}