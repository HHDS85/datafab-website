<template>
  <header class="fixed top-0 w-full3">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="flex items-center justify-between">
        <img
          class="h-10"
          alt="Logo datafabrictor"
          src="/logo-datafabrictor.svg"
        />

        <nav class="hidden lg:flex items-center gap-8">
          <a
            v-for="(item, index) in navigationItems"
            :key="`nav-${index}`"
            :href="item.href"
            class="flex items-center cursor-pointer group relative"
          >
            <span
              :class="[
                'font-family-jakarta relative transition-all duration-300',
                item.active ? 'font-bold text-white' : 'font-normal text-white/90 group-hover:text-white',
                'tracking-wide uppercase text-sm'
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

        <button
          class="hidden md:flex items-center gap-2 bg-[#242528] hover:bg-[#323438] transition-all duration-300 px-6 h-9"
        >
          <img
            class="w-4 h-4"
            alt="Language"
            src="/language.svg"
          />
          <span class="font-family-jakarta font-medium text-white text-sm">
            DE
          </span>
        </button>

        <button
          @click="toggleMenu"
          class="lg:hidden flex flex-col items-center justify-center w-9 h-9 z-30 group relative"
          aria-label="Toggle menu"
        >
          <span class="flex flex-col gap-1.5 w-5">
            <span
              class="h-0.5 w-full bg-white transition-all duration-300 ease-out transform origin-center"
              :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="h-0.5 w-full bg-white transition-all duration-300 ease-out"
              :class="isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
            ></span>
            <span
              class="h-0.5 w-full bg-white transition-all duration-300 ease-out transform origin-center"
              :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </span>
        </button>

        <Transition name="slide-fade">
          <div
            v-if="isMenuOpen"
            class="lg:hidden absolute top-full left-0 right-0 bg-[#071B3A]/98 backdrop-blur-xl shadow-2xl overflow-hidden border-t border-white/10"
          >
            <nav class="flex flex-col p-5">
              <a
                v-for="(item, index) in navigationItems"
                :key="`mobile-nav-${index}`"
                :href="item.href"
                @click="closeMenu"
                class="flex items-center justify-between py-3.5 border-b border-white/10 last:border-0 group hover:bg-white/5 -mx-2 px-2 transition-all duration-200"
              >
                <span
                  :class="[
                    'font-family-jakarta',
                    item.active ? 'font-bold text-white' : 'font-normal text-white/80 group-hover:text-white',
                    'text-base transition-colors duration-200'
                  ]"
                >
                  {{ item.label }}
                </span>
                <svg class="w-4 h-4 text-white/40 group-hover:text-white/80 transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>

              <div class="mt-5 flex items-center justify-center gap-2 px-5 py-2.5 bg-[#242528] hover:bg-[#323438] transition-all duration-200">
                <img class="w-4 h-4" alt="Language" src="/language.svg" />
                <span class="font-family-jakarta font-medium text-white text-sm">
                  DE
                </span>
              </div>
            </nav>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { navigationItems as originalNavigationItems } from '@/data/navigation';

const isMenuOpen = ref(false);
const activeSection = ref('');

const navigationItems = computed(() => {
  return originalNavigationItems.map(item => ({
    ...item,
    active: activeSection.value === item.href.substring(1)
  }));
});

const updateActiveSection = () => {
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
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
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
