import { useEffect, useState } from 'react';

export default function GTMDebugger() {
  const [status, setStatus] = useState({
    dataLayerExists: false,
    gtmLoaded: false,
    fbqLoaded: false,
    dataLayerEvents: 0
  });

  useEffect(() => {
    const checkGTM = () => {
      const newStatus = {
        dataLayerExists: !!(window as any).dataLayer,
        gtmLoaded: !!(window as any).google_tag_manager,
        fbqLoaded: !!(window as any).fbq,
        dataLayerEvents: ((window as any).dataLayer || []).length
      };
      setStatus(newStatus);
      
      console.log('🔍 GTM Debug Status:', {
        '✅ dataLayer exists': newStatus.dataLayerExists,
        '✅ GTM loaded': newStatus.gtmLoaded,
        '✅ Meta Pixel loaded': newStatus.fbqLoaded,
        'dataLayer events': newStatus.dataLayerEvents,
        'Full dataLayer': (window as any).dataLayer
      });
    };

    // Check immediately
    checkGTM();

    // Check again after 2 seconds (GTM loads async)
    const timer = setTimeout(checkGTM, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Only show in development or when URL has ?debug=true
  const showDebugger = (import.meta.env?.DEV) || window.location.search.includes('debug=true');

  if (!showDebugger) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#000',
      color: '#fff',
      padding: '15px',
      borderRadius: '8px',
      fontFamily: 'monospace',
      fontSize: '12px',
      zIndex: 99999,
      maxWidth: '300px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        🔍 GTM Debug Status
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div>
          {status.dataLayerExists ? '✅' : '❌'} dataLayer exists
        </div>
        <div>
          {status.gtmLoaded ? '✅' : '❌'} GTM loaded
        </div>
        <div>
          {status.fbqLoaded ? '✅' : '❌'} Meta Pixel loaded
        </div>
        <div>
          📊 Events: {status.dataLayerEvents}
        </div>
      </div>
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.7 }}>
        Check console for full dataLayer
      </div>
    </div>
  );
}