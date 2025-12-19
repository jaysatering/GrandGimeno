import { useEffect } from 'react';
import { getGTMScriptUrl, TRACKING_CONFIG } from '../config/tracking';

export default function GTMLoader() {
  useEffect(() => {
    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    console.log('🔵 DataLayer initialized:', (window as any).dataLayer);

    // Get the correct GTM URL (Stape server or standard)
    const gtmUrl = getGTMScriptUrl();
    console.log('🔵 Loading GTM from:', gtmUrl);

    // Add GTM script to head
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '${gtmUrl}';
      j.onerror=function(){console.error('❌ GTM FAILED TO LOAD! Check network tab.')};
      j.onload=function(){console.log('✅ GTM script loaded successfully!')};
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TJG6R99K');
    `;
    document.head.appendChild(gtmScript);
    console.log('🔵 GTM script injected into head');

    // Add GTM noscript to body (for users with JS disabled)
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    const noscriptUrl = TRACKING_CONFIG.USE_SERVER_SIDE_TRACKING && TRACKING_CONFIG.STAPE_SERVER_URL
      ? `${TRACKING_CONFIG.STAPE_SERVER_URL}/ns.html?id=${TRACKING_CONFIG.GTM_CONTAINER_ID}`
      : `https://www.googletagmanager.com/ns.html?id=${TRACKING_CONFIG.GTM_CONTAINER_ID}`;
    iframe.src = noscriptUrl;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
    console.log('🔵 GTM noscript iframe added:', noscriptUrl);

    // Check GTM loaded after 2 seconds
    setTimeout(() => {
      const gtmLoaded = !!(window as any).google_tag_manager;
      if (gtmLoaded) {
        console.log('✅ GTM is active and running!');
        console.log('🔍 GTM Container:', (window as any).google_tag_manager);
      } else {
        console.error('❌ GTM did not load after 2 seconds!');
        console.error('🔍 Check these:');
        console.error('1. Is GTM-TJG6R99K published in your GTM account?');
        console.error('2. Check Network tab - is gtm.js blocked?');
        console.error('3. Do you have an ad blocker enabled?');
      }
    }, 2000);
  }, []);

  return null;
}