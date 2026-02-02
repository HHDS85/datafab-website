import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation(elementRefs, options = {}) {
  const threshold = options.threshold || 0.1;
  const rootMargin = options.rootMargin || '0px 0px -100px 0px';

  let observer = null;

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  };

  onMounted(() => {
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
}
