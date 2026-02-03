import { ref, computed, onMounted, onUnmounted } from 'vue';
import { HEADER, SECTION_IDS } from '@/constants';

export function useNavigation(navigationItems) {
  const isMenuOpen = ref(false);
  const activeSection = ref('');
  const isScrolled = ref(false);

  const items = computed(() => {
    return navigationItems.map(item => ({
      ...item,
      active: activeSection.value === item.href.substring(1)
    }));
  });

  const handleScroll = () => {
    isScrolled.value = window.scrollY > HEADER.SCROLL_THRESHOLD;

    const sections = Object.values(SECTION_IDS);
    let currentSection = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section;
          break;
        }
      }
    }

    activeSection.value = currentSection;
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };

  const openMenu = () => {
    isMenuOpen.value = true;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    isMenuOpen,
    activeSection,
    isScrolled,
    items,
    toggleMenu,
    closeMenu,
    openMenu,
    handleScroll
  };
}
