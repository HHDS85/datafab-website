import { onMounted, onUnmounted } from 'vue';
import { SCROLL_ANIMATION } from '@/constants';

export function useScrollAnimation(elementRefs, options = {}) {
  const { threshold = SCROLL_ANIMATION.THRESHOLD, rootMargin = SCROLL_ANIMATION.ROOT_MARGIN, once = true } = options;

  let observer = null;

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        if (once && observer) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        entry.target.classList.remove('in-view');
      }
    });
  };

  onMounted(() => {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    const elements = Array.isArray(elementRefs) ? elementRefs : [elementRefs];

    elements.forEach(ref => {
      if (ref && ref.value) {
        observer.observe(ref.value);
      }
    });
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    observer
  };
}
