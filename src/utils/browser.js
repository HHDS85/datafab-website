export const detectBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.indexOf('chrome') > -1 && userAgent.indexOf('edg') === -1) {
    return 'chrome';
  }
  if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) {
    return 'safari';
  }
  if (userAgent.indexOf('firefox') > -1) {
    return 'firefox';
  }
  if (userAgent.indexOf('edg') > -1) {
    return 'edge';
  }

  return 'unknown';
};

export const addBrowserClass = () => {
  const browser = detectBrowser();
  document.documentElement.classList.add(`browser-${browser}`);
};

export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const supportsBackdropFilter = () => {
  return CSS.supports('backdrop-filter', 'blur(10px)') ||
         CSS.supports('-webkit-backdrop-filter', 'blur(10px)');
};

export const initBrowserCompatibility = () => {
  addBrowserClass();

  if (isTouchDevice()) {
    document.documentElement.classList.add('touch-device');
  }

  if (prefersReducedMotion()) {
    document.documentElement.classList.add('reduced-motion');
  }

  if (!supportsBackdropFilter()) {
    document.documentElement.classList.add('no-backdrop-filter');
  }
};
