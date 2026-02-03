import { ref, onMounted, onUnmounted } from 'vue';
import { BREAKPOINTS } from '@/constants';

export function useMediaQuery(query) {
  const matches = ref(false);
  let mediaQuery = null;

  const updateMatches = (event) => {
    matches.value = event.matches;
  };

  onMounted(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      mediaQuery = window.matchMedia(query);
      matches.value = mediaQuery.matches;

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', updateMatches);
      } else {
        mediaQuery.addListener(updateMatches);
      }
    }
  });

  onUnmounted(() => {
    if (mediaQuery) {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMatches);
      } else {
        mediaQuery.removeListener(updateMatches);
      }
    }
  });

  return matches;
}

export function useBreakpoint() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.MD - 1}px)`);
  const isTablet = useMediaQuery(`(min-width: ${BREAKPOINTS.MD}px) and (max-width: ${BREAKPOINTS.LG - 1}px)`);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.LG}px)`);
  const isLargeDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.XL}px)`);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop
  };
}
