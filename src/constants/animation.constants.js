export const DURATIONS = {
  FAST: 200,
  DEFAULT: 300,
  SLOW: 500,
  SLOWER: 700,
  SLOWEST: 900,
};

export const EASING = {
  LINEAR: 'linear',
  EASE: 'ease',
  EASE_IN: 'ease-in',
  EASE_OUT: 'ease-out',
  EASE_IN_OUT: 'ease-in-out',
  CUBIC_BEZIER: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

export const TRANSITIONS = {
  FADE: `opacity ${DURATIONS.DEFAULT}ms ${EASING.EASE}`,
  SLIDE: `transform ${DURATIONS.DEFAULT}ms ${EASING.EASE_OUT}`,
  ALL: `all ${DURATIONS.DEFAULT}ms ${EASING.EASE}`,
  COLORS: `background-color ${DURATIONS.DEFAULT}ms ${EASING.EASE}, color ${DURATIONS.DEFAULT}ms ${EASING.EASE}`,
};

export const SCROLL_ANIMATION = {
  THRESHOLD: 0.15,
  ROOT_MARGIN: '0px 0px -80px 0px',
};

export const CAROUSEL = {
  AUTOPLAY_INTERVAL: 9000,
  SWIPE_THRESHOLD: 50,
  TRANSITION_DURATION: DURATIONS.SLOW,
};
