import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import PrivatePage from './pages/PrivatePage';
// import DevNav from './components/DevNav';

export default function App() {
  // Load Meta Pixel via React (backup to index.html version)
  useEffect(() => {
    // Check if pixel is already loaded from index.html
    if (window.fbq) {
      console.log('✅ Meta Pixel already loaded from index.html');
      return;
    }

    console.log('⚠️ Loading Meta Pixel via React fallback...');

    // Load pixel script
    (function(f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '511510642697274');
    window.fbq('track', 'PageView');

    console.log('✅ Meta Pixel loaded via React');
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/private" element={<PrivatePage />} />
      </Routes>
      {/* <DevNav /> */}
    </HashRouter>
  );
}