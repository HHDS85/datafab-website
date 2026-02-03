<template>
  <section class="relative w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-4 md:pt-6">
    <div class="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-[32px] md:rounded-[40px] xl:rounded-[48px]">
      <div class="relative w-full min-h-[100vh]">
        <div class="absolute inset-0 w-full h-full rounded-[32px] md:rounded-[40px] xl:rounded-[48px] overflow-hidden">
          <img
            class="w-full h-full object-cover object-center"
            alt="Hero background"
            src="/data-fab_teaser_bg.png"
          />
          <div class="absolute inset-0 w-full h-full overflow-hidden">
            <img
              :class="[
                'w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out',
                isLoaded ? 'translate-x-0' : 'translate-x-full'
              ]"
              alt="Hero foreground"
              src="/data-fab_teaser_wo.png"
            />
          </div>
        </div>

        <div class="relative w-full h-full flex flex-col z-10">
          <header class="w-full py-6 lg:py-8 px-6 lg:px-12 xl:px-16 2xl:px-20">
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
                      'font-jakarta relative transition-all duration-300',
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
                <span class="font-jakarta font-medium text-white text-sm">
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
            </div>

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
                        'font-jakarta',
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
                    <span class="font-jakarta font-medium text-white text-sm">
                      DE
                    </span>
                  </div>
                </nav>
              </div>
            </Transition>
          </header>

          <div class="flex-1 flex flex-col justify-center px-6 lg:px-12 xl:px-16 2xl:px-20">
            <div class="mb-5">
              <p class="font-jakarta font-medium text-white/95 text-xs md:text-sm tracking-[0.15em] uppercase">
                {{ headline }}
              </p>
            </div>

            <h1 class="font-roboto font-light text-white text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[5.5rem] tracking-tight leading-[1.1] mb-8 lg:mb-10 max-w-[720px]">
              {{ title }}
            </h1>

            <div class="flex flex-col sm:flex-row gap-4">
              <BaseButton size="lg">
                {{ primaryCta }}
              </BaseButton>

              <button class="font-jakarta font-normal text-base border-2 border-white text-white hover:bg-white hover:text-navy-primary transition-all duration-300 h-11 px-10 backdrop-blur-sm rounded-lg">
                {{ secondaryCta }}
              </button>
            </div>
          </div>

          <div class="flex justify-end items-end px-6 lg:px-12 xl:px-16 2xl:px-20 pb-8 lg:pb-10">
            <div class="max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]">
              <div class="min-h-[70px] lg:min-h-[80px] mb-4">
                <p class="font-jakarta font-normal text-white text-base lg:text-lg text-right leading-[1.6]">
                  <span class="font-bold">{{ currentHighlight.title }}</span>
                  <span> {{ currentHighlight.text }}</span>
                </p>
              </div>

              <div class="flex justify-end items-center gap-2.5">
                <button
                  v-for="(_, index) in highlights"
                  :key="index"
                  @click="goTo(index)"
                  :class="[
                    'h-1.5 transition-all duration-300 rounded-full',
                    currentIndex === index ? 'bg-white w-10' : 'bg-white/50 hover:bg-white/70 w-1.5'
                  ]"
                  :aria-label="`Go to slide ${index + 1}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { useCarousel } from '@/composables';
import { navigationItems as originalNavigationItems } from '@/data/navigation';

const isLoaded = ref(false);
const isMenuOpen = ref(false);
const activeSection = ref('');

const headline = 'HERZLICH WILLKOMMEN';
const title = 'Wir transformieren technische Herausforderungen in greifbare Erfolge.';
const primaryCta = 'Alle Cases einsehen';
const secondaryCta = 'Termin buchen';

const highlights = [
  {
    title: 'Selbstfahrende Autos',
    text: ' – Ein selbstfahrendes Auto generiert täglich bis zu 4 Terabyte an Daten durch Sensoren, Kameras und LIDAR-Technologie.'
  },
  {
    title: 'IoT-Geräte',
    text: ' – Bis 2025 werden weltweit über 75 Milliarden IoT-Geräte in Betrieb sein und kontinuierlich Daten generieren.'
  },
  {
    title: 'Streaming-Dienste',
    text: ' – Netflix verarbeitet täglich über 15 Petabyte an Daten für personalisierte Empfehlungen und Content-Streaming.'
  }
];

const navigationItems = computed(() => {
  return originalNavigationItems.map(item => ({
    ...item,
    active: activeSection.value === item.href.substring(1)
  }));
});

const { currentIndex, currentItem: currentHighlight, goTo, startAutoplay } = useCarousel(highlights, {
  autoplay: true,
  autoplayInterval: 9000,
  loop: true
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
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
  startAutoplay();
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});
</script>

<style scoped>
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
