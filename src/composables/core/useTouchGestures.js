import { ref } from 'vue';
import { CAROUSEL } from '@/constants';

export function useTouchGestures(options = {}) {
  const { onSwipeLeft, onSwipeRight, threshold = CAROUSEL.SWIPE_THRESHOLD } = options;

  const touchStartX = ref(0);
  const touchEndX = ref(0);
  const touchStartY = ref(0);
  const touchEndY = ref(0);

  const handleTouchStart = (event) => {
    touchStartX.value = event.touches[0].clientX;
    touchStartY.value = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    touchEndX.value = event.touches[0].clientX;
    touchEndY.value = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.value - touchEndX.value;
    const diffY = Math.abs(touchStartY.value - touchEndY.value);

    if (Math.abs(diffX) > threshold && diffY < threshold) {
      if (diffX > 0 && onSwipeLeft) {
        onSwipeLeft();
      } else if (diffX < 0 && onSwipeRight) {
        onSwipeRight();
      }
    }

    touchStartX.value = 0;
    touchEndX.value = 0;
    touchStartY.value = 0;
    touchEndY.value = 0;
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}
