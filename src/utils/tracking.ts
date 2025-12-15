/**
 * Grand Gimeno Tracking Utility
 * Handles GCLID (Google Ads) and FBCLID (Meta) tracking for conversion attribution
 */

// Cookie helper functions
function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name: string, value: string, days: number): void {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; secure; samesite=Lax";
}

function getQueryParam(param: string): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Captures tracking parameters from URL and stores them in cookies
 */
function captureTrackingParameters(): void {
  // 1. GCLID (Google Click ID) Logic
  const gclid = getQueryParam('gclid');
  if (gclid) {
    setCookie('gclid', gclid, 90);
  }

  // 2. FBCLID (Facebook Click ID) & FBC Logic
  const fbclid = getQueryParam('fbclid');
  const fbc = getCookie('_fbc');

  if (fbclid && !fbc) {
    const timestamp = new Date().getTime();
    const newFbc = `fb.1.${timestamp}.${fbclid}`;
    setCookie('_fbc', newFbc, 90);
  }
}

/**
 * Polls for HubSpot form fields and fills them with tracking data
 * Uses MutationObserver for efficiency, falls back to polling if needed
 */
function waitForFormAndFill(): void {
  const maxAttempts = 50; // 10 seconds max (50 * 200ms)
  let attempts = 0;

  const fillFormFields = (): boolean => {
    const gclidField = document.querySelector('input[name="gclid"]') as HTMLInputElement;
    const fbcField = document.querySelector('input[name="meta_fbc"]') as HTMLInputElement;
    const fbpField = document.querySelector('input[name="meta_fbp"]') as HTMLInputElement;

    // Check if at least one field exists
    if (!gclidField && !fbcField && !fbpField) {
      return false;
    }

    // Fill fields with cookie values
    const finalGclid = getCookie('gclid') || getQueryParam('gclid');
    const finalFbc = getCookie('_fbc');
    const finalFbp = getCookie('_fbp');

    if (finalGclid && gclidField) {
      gclidField.value = finalGclid;
      console.log('[Tracking] GCLID field populated:', finalGclid);
    }

    if (finalFbc && fbcField) {
      fbcField.value = finalFbc;
      console.log('[Tracking] Meta FBC field populated:', finalFbc);
    }

    if (finalFbp && fbpField) {
      fbpField.value = finalFbp;
      console.log('[Tracking] Meta FBP field populated:', finalFbp);
    }

    return true;
  };

  // Try to fill immediately first
  if (fillFormFields()) {
    console.log('[Tracking] Form fields found and filled immediately');
    return;
  }

  // Set up MutationObserver to watch for form changes
  const formContainer = document.getElementById('hubspot-form-container');
  
  if (formContainer) {
    const observer = new MutationObserver((mutations, obs) => {
      if (fillFormFields()) {
        console.log('[Tracking] Form fields found and filled via MutationObserver');
        obs.disconnect();
      }
    });

    observer.observe(formContainer, {
      childList: true,
      subtree: true
    });

    // Safety timeout - disconnect observer after 15 seconds
    setTimeout(() => {
      observer.disconnect();
      console.log('[Tracking] MutationObserver disconnected after timeout');
    }, 15000);
  }

  // Fallback polling mechanism
  const pollInterval = setInterval(() => {
    attempts++;

    if (fillFormFields()) {
      console.log('[Tracking] Form fields found and filled via polling');
      clearInterval(pollInterval);
      return;
    }

    if (attempts >= maxAttempts) {
      console.warn('[Tracking] Form fields not found after maximum attempts');
      clearInterval(pollInterval);
    }
  }, 200);
}

/**
 * Initialize tracking system
 * Call this from your React component's useEffect
 */
export function initializeTracking(): void {
  // Capture tracking parameters immediately
  captureTrackingParameters();

  // Wait for form to render, then fill fields
  waitForFormAndFill();
}
