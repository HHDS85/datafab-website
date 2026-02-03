<template>
  <section class="relative w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-4 md:pt-6">
    <div class="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-[32px] md:rounded-[40px] xl:rounded-[48px]">
      <div class="relative w-full min-h-[90vh]">
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

        <div class="relative w-full h-full flex flex-col justify-between z-10 px-6 lg:px-12 xl:px-16 2xl:px-20 py-24 lg:py-28 xl:py-32">
          <div class="flex-1 flex flex-col justify-center">
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

          <div class="flex justify-end items-end">
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
import { ref, computed, onMounted } from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { useCarousel } from '@/composables';

const isLoaded = ref(false);

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

const { currentIndex, currentItem: currentHighlight, goTo, startAutoplay } = useCarousel(highlights, {
  autoplay: true,
  autoplayInterval: 9000,
  loop: true
});

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
  startAutoplay();
});
</script>
