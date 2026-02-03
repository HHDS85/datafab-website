import { ref, computed } from 'vue';
import { CAROUSEL } from '@/constants';

export function useCarousel(items, options = {}) {
  const {
    autoplay = false,
    autoplayInterval = CAROUSEL.AUTOPLAY_INTERVAL,
    loop = true
  } = options;

  const currentIndex = ref(0);
  let autoplayTimer = null;

  const currentItem = computed(() => items[currentIndex.value]);
  const totalItems = computed(() => items.length);
  const hasNext = computed(() => loop || currentIndex.value < totalItems.value - 1);
  const hasPrevious = computed(() => loop || currentIndex.value > 0);

  const goTo = (index) => {
    if (index >= 0 && index < totalItems.value) {
      currentIndex.value = index;
    }
  };

  const next = () => {
    if (hasNext.value) {
      currentIndex.value = loop
        ? (currentIndex.value + 1) % totalItems.value
        : Math.min(currentIndex.value + 1, totalItems.value - 1);
    }
  };

  const previous = () => {
    if (hasPrevious.value) {
      currentIndex.value = loop
        ? (currentIndex.value - 1 + totalItems.value) % totalItems.value
        : Math.max(currentIndex.value - 1, 0);
    }
  };

  const startAutoplay = () => {
    if (autoplayTimer) {
      stopAutoplay();
    }
    autoplayTimer = setInterval(() => {
      next();
    }, autoplayInterval);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const toggleAutoplay = () => {
    if (autoplayTimer) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  };

  if (autoplay) {
    startAutoplay();
  }

  return {
    currentIndex,
    currentItem,
    totalItems,
    hasNext,
    hasPrevious,
    goTo,
    next,
    previous,
    startAutoplay,
    stopAutoplay,
    toggleAutoplay
  };
}
