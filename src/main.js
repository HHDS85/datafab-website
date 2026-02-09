import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import { initBrowserCompatibility } from './utils/browser';

if (!CSS.supports('display', 'grid')) {
  console.warn('Your browser does not support CSS Grid. Some layouts may not display correctly.');
}

if (!('IntersectionObserver' in window)) {
  console.warn('IntersectionObserver not supported. Scroll animations may not work.');
}

if (typeof window !== 'undefined') {
  initBrowserCompatibility();

  window.addEventListener('load', () => {
    document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
  });

  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
  });
}

const app = createApp(App);

app.use(router);
app.mount('#app');
