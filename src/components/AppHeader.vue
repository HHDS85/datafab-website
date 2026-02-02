<template>
  <header
    class="fixed z-50 transition-all duration-300 ease-out"
    :class="isScrolled
      ? 'top-0 left-0 right-0 bg-[#071B3A]/70 backdrop-blur-md shadow-sm px-6 md:px-8 lg:px-12 xl:px-16 py-3 md:py-3.5'
      : 'top-0 left-0 right-0 bg-[#071B3A]/30 backdrop-blur-sm px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-5'"
  >
    <div
      class="flex items-center justify-between gap-4 md:gap-[50px] max-w-[1600px] mx-auto"
    >
    <div class="flex items-center gap-4 md:gap-[92px] flex-1">
      <img
        class="transition-all duration-300 ease-out transform hover:scale-105"
        :class="isScrolled ? 'w-[100px] md:w-[130px] lg:w-[150px]' : 'w-[130px] md:w-[170px] lg:w-[200px]'"
        alt="Logo datafabrictor"
        src="/logo-datafabrictor.svg"
      />

      <nav class="hidden lg:flex items-center gap-[40px] flex-1 justify-end">
        <a
          v-for="(item, index) in navigationItems"
          :key="`nav-${index}`"
          :href="item.href"
          class="flex items-center gap-[11.5px] cursor-pointer group relative transform transition-transform duration-200 hover:scale-105"
        >
          <span
            :class="[
              'font-family-jakarta relative transition-all duration-300',
              item.active ? 'font-bold text-white' : 'font-normal text-white/90 group-hover:text-white',
              'tracking-wide uppercase whitespace-nowrap',
              isScrolled ? 'text-sm leading-[22px]' : 'text-base leading-[25.2px]'
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ease-out',
                item.active ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </span>
        </a>
      </nav>
    </div>

    <button
      class="hidden md:flex items-center gap-2 bg-[#242528] rounded-[99px] hover:bg-[#242528]/90 transition-all duration-500"
      :class="isScrolled ? 'px-4 lg:px-6 h-8 lg:h-10' : 'px-6 lg:px-10 h-10 lg:h-12'"
    >
      <img
        class="transition-all duration-500"
        :class="isScrolled ? 'w-4 h-4' : 'w-5 lg:w-6 h-5 lg:h-6'"
        alt="Language"
        src="/language.svg"
      />
      <span class="font-family-jakarta font-medium text-white transition-all duration-500" :class="isScrolled ? 'text-xs' : 'text-sm'">
        DE
      </span>
    </button>

    <button
      @click="toggleMenu"
      class="lg:hidden flex flex-col items-center justify-center w-10 h-10 z-30 group relative"
      aria-label="Toggle menu"
    >
      <span class="flex flex-col gap-1.5 w-6">
        <span
          class="h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out transform origin-center shadow-sm"
          :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out shadow-sm"
          :class="isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
        ></span>
        <span
          class="h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out transform origin-center shadow-sm"
          :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </span>
    </button>

    <Transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#071B3A]/98 backdrop-blur-xl shadow-2xl overflow-hidden border-t border-white/10"
      >
        <nav class="flex flex-col p-6">
          <a
            v-for="(item, index) in navigationItems"
            :key="`mobile-nav-${index}`"
            :href="item.href"
            @click="closeMenu"
            class="flex items-center justify-between py-4 border-b border-white/10 last:border-0 group hover:bg-white/5 -mx-2 px-2 rounded-lg transition-all duration-200"
          >
            <span
              :class="[
                'font-family-jakarta',
                item.active ? 'font-bold text-white' : 'font-normal text-white/80 group-hover:text-white',
                'text-lg tracking-[-0.36px] leading-[25.2px] transition-colors duration-200'
              ]"
            >
              {{ item.label }}
            </span>
            <svg class="w-5 h-5 text-white/40 group-hover:text-white/80 transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <div class="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-[#242528] rounded-[99px] hover:bg-[#242528]/80 transition-all duration-200">
            <img class="w-5 h-5" alt="Language" src="/language.svg" />
            <span class="font-family-jakarta font-medium text-white text-sm">
              DE
            </span>
          </div>
        </nav>
      </div>
    </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { navigationItems as originalNavigationItems } from '@/data/navigation';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('');

const navigationItems = computed(() => {
  return originalNavigationItems.map(item => ({
    ...item,
    active: activeSection.value === item.href.substring(1)
  }));
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  const sections = ['leistungen', 'referenzen', 'faq', 'kontakt'];
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>
