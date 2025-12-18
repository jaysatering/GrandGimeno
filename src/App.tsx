import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import PrivatePage from './pages/PrivatePage';
import DevNav from './components/DevNav';

// Global flag to prevent duplicate pixel initialization across all instances
if (!window._metaPixelInitialized) {
  window._metaPixelInitialized = false;
}

if (!window._hubspotPixelInitialized) {
  window._hubspotPixelInitialized = false;
}

export default function App() {
  useEffect(() => {
    // Initialize Meta Pixel only once globally
    if (window._metaPixelInitialized) {
      console.log('Meta Pixel already initialized, skipping');
      return;
    }
    
    if (!window.fbq) {
      (function(f,b,e,v,n,t,s) {
        if(f.fbq) return;
        n=f.fbq=function(){
          n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
        };
        if(!f._fbq) f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
        t=b.createElement(e);
        t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }
    
    // Always init and track PageView (but only once due to flag)
    window.fbq('init', '511510642697274');
    window.fbq('track', 'PageView');
    window._metaPixelInitialized = true;
    console.log('Meta Pixel initialized');
  }, []);

  useEffect(() => {
    // Initialize HubSpot Pixel only once globally
    if (window._hubspotPixelInitialized) {
      console.log('HubSpot Pixel already initialized, skipping');
      return;
    }
    
    if (!window._hsq) {
      window._hsq = [];
    }
    
    // Load HubSpot tracking script with correct Portal ID
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.id = 'hs-script-loader';
    script.src = '//js-na2.hs-scripts.com/48463492.js';
    document.head.appendChild(script);
    
    window._hubspotPixelInitialized = true;
    console.log('HubSpot Pixel initialized');
  }, []);

  return (
    <HashRouter>
      <DevNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/private" element={<PrivatePage />} />
      </Routes>
    </HashRouter>
  );
}