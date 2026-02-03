<template>
  <header
    :class="[
      'left-0 right-0 z-50 transition-all duration-500 ease-out',
      isScrolled ? 'fixed top-0 bg-white/85 backdrop-blur-md shadow-sm py-3' : 'absolute top-0 bg-transparent py-5'
    ]"
  >
    <div :class="[
      'w-full mx-auto transition-all duration-500',
      isScrolled ? 'px-6 lg:px-12 xl:px-16' : 'px-10 lg:px-16 xl:px-20 2xl:px-24'
    ]">
      <div class="flex items-center justify-between">
              <img
                class="h-10 transition-all duration-300"
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
                      isScrolled
                        ? (item.active ? 'font-bold text-[#071B3A]' : 'font-normal text-[#071B3A]/70 group-hover:text-[#071B3A]')
                        : (item.active ? 'font-bold text-white' : 'font-normal text-white/90 group-hover:text-white'),
                      'tracking-wide uppercase text-sm'
                    ]"
                  >
                    {{ item.label }}
                    <span
                      :class="[
                        'absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-out',
                        isScrolled ? 'bg-[#071B3A]' : 'bg-white',
                        item.active ? 'w-full' : 'w-0 group-hover:w-full'
                      ]"
                    ></span>
                  </span>
                </a>
              </nav>

              <button
                :class="[
                  'hidden md:flex items-center gap-2 transition-all duration-300 px-6 h-9 rounded-lg',
                  isScrolled
                    ? 'bg-[#071B3A] hover:bg-[#0a2350] text-white'
                    : 'bg-[#242528] hover:bg-[#323438] text-white'
                ]"
              >
                <img
                  class="w-4 h-4"
                  alt="Language"
                  src="/language.svg"
                />
                <span class="font-family-jakarta font-medium text-sm">
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
                    :class="[
                      'h-0.5 w-full transition-all duration-300 ease-out transform origin-center',
                      isScrolled ? 'bg-[#071B3A]' : 'bg-white',
                      isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    ]"
                  ></span>
                  <span
                    :class="[
                      'h-0.5 w-full transition-all duration-300 ease-out',
                      isScrolled ? 'bg-[#071B3A]' : 'bg-white',
                      isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    ]"
                  ></span>
                  <span
                    :class="[
                      'h-0.5 w-full transition-all duration-300 ease-out transform origin-center',
                      isScrolled ? 'bg-[#071B3A]' : 'bg-white',
                      isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    ]"
                  ></span>
                </span>
              </button>
            </div>

      <Transition name="slide-fade">
        <div
          v-if="isMenuOpen"
          :class="[
            'lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl shadow-xl overflow-hidden border-t rounded-b-xl',
            isScrolled ? 'bg-white/95 border-gray-200' : 'bg-[#071B3A]/98 border-white/10'
          ]"
        >
          <nav class="flex flex-col p-5">
            <a
              v-for="(item, index) in navigationItems"
              :key="`mobile-nav-${index}`"
              :href="item.href"
              @click="closeMenu"
              :class="[
                'flex items-center justify-between py-3.5 border-b last:border-0 group -mx-2 px-2 transition-all duration-200',
                isScrolled
                  ? 'border-gray-200 hover:bg-gray-100'
                  : 'border-white/10 hover:bg-white/5'
              ]"
            >
              <span
                :class="[
                  'font-family-jakarta text-base transition-colors duration-200',
                  isScrolled
                    ? (item.active ? 'font-bold text-[#071B3A]' : 'font-normal text-[#071B3A]/70 group-hover:text-[#071B3A]')
                    : (item.active ? 'font-bold text-white' : 'font-normal text-white/80 group-hover:text-white')
                ]"
              >
                {{ item.label }}
              </span>
              <svg
                :class="[
                  'w-4 h-4 transform group-hover:translate-x-1 transition-all duration-200',
                  isScrolled ? 'text-[#071B3A]/40 group-hover:text-[#071B3A]/80' : 'text-white/40 group-hover:text-white/80'
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <div
              :class="[
                'mt-5 flex items-center justify-center gap-2 px-5 py-2.5 transition-all duration-200 rounded',
                isScrolled
                  ? 'bg-[#071B3A] hover:bg-[#0a2350] text-white'
                  : 'bg-[#242528] hover:bg-[#323438] text-white'
              ]"
            >
              <img class="w-4 h-4" alt="Language" src="/language.svg" />
              <span class="font-family-jakarta font-medium text-sm">
                DE
              </span>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>

  <section class="relative w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-4 md:pt-6">
    <div class="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-[32px] md:rounded-[40px] xl:rounded-[48px]">
      <div class="relative w-full min-h-[90vh]">
        <div class="absolute inset-0 w-full h-full rounded-[32px] md:rounded-[40px] xl:rounded-[48px] overflow-hidden">
          <img
            class="w-full h-full object-cover object-center"
            alt="Hero background"
            src="/datafabricator-header-desktop-01-1.png"
          />
        </div>

        <div class="relative w-full h-full flex flex-col justify-between z-10 px-6 lg:px-12 xl:px-16 2xl:px-20 py-24 lg:py-28 xl:py-32">
          <div class="flex-1 flex flex-col justify-center">
            <div class="mb-5">
              <p class="font-family-jakarta font-medium text-white/95 text-xs md:text-sm tracking-[0.15em] uppercase">
                HERZLICH WILLKOMMEN
              </p>
            </div>

            <h1 class="font-family-roboto font-light text-white text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[5.5rem] tracking-tight leading-[1.1] mb-8 lg:mb-10 max-w-[720px]">
              Wir transformieren
              technische
              Herausforderungen in
              greifbare Erfolge.
            </h1>

            <div class="flex flex-col sm:flex-row gap-4">
              <button class="font-family-jakarta font-normal text-base bg-[#242528] text-white hover:bg-[#323438] transition-all duration-300 px-10 h-11 rounded-lg">
                Alle Cases einsehen
              </button>

              <button class="font-family-jakarta font-normal text-base border-2 border-white text-white hover:bg-white hover:text-[#071B3A] transition-all duration-300 px-10 h-11 backdrop-blur-sm rounded-lg">
                Termin buchen
              </button>
            </div>
          </div>

          <div class="flex justify-end items-end">
            <div class="max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]">
              <div class="min-h-[70px] lg:min-h-[80px] mb-4">
                <p class="font-family-jakarta font-normal text-white text-base lg:text-lg text-right leading-[1.6]">
                  <span class="font-bold">{{ currentHighlight.title }}</span>
                  <span> {{ currentHighlight.text }}</span>
                </p>
              </div>

              <div class="flex justify-end items-center gap-2.5">
                <button
                  v-for="(_, index) in highlights"
                  :key="index"
                  @click="currentSlide = index"
                  :class="[
                    'h-1.5 transition-all duration-300 rounded-full',
                    currentSlide === index ? 'bg-white w-10' : 'bg-white/50 hover:bg-white/70 w-1.5'
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
import { navigationItems as originalNavigationItems } from '@/data/navigation';

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

const currentSlide = ref(0);
const isMenuOpen = ref(false);
const activeSection = ref('');
const isScrolled = ref(false);
let autoplayInterval = null;

const currentHighlight = computed(() => highlights[currentSlide.value]);

const navigationItems = computed(() => {
  return originalNavigationItems.map(item => ({
    ...item,
    active: activeSection.value === item.href.substring(1)
  }));
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 200;

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
  autoplayInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % highlights.length;
  }, 9000);

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
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
