<template>
  <section class="relative w-full">
    <div class="relative w-full h-screen overflow-hidden">
      <div class="absolute inset-0 w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-br from-[#071B3A]/20 to-[#0A2348]/40 z-[1]"></div>
        <img
          class="w-full h-full object-cover object-center"
          alt="Hero background"
          src="/datafabricator-header-desktop-01-1.png"
        />
      </div>

      <div class="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pt-32 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-18 md:pb-20 z-10 h-full flex flex-col">
        <div class="mb-3 sm:mb-4">
          <p class="font-family-jakarta font-medium text-white/95 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] uppercase">
            HERZLICH WILLKOMMEN
          </p>
        </div>

        <h1 class="font-family-roboto font-light text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-tight leading-[1.1] mb-8 sm:mb-10 md:mb-12 max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px]">
          Wir transformieren
          technische
          Herausforderungen in
          greifbare Erfolge.
        </h1>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-auto">
          <button class="font-family-jakarta font-normal text-base sm:text-lg md:text-xl bg-[#242528] text-white hover:bg-[#323438] transition-all duration-300 px-8 sm:px-10 h-11 sm:h-12 md:h-13">
            Alle Cases einsehen
          </button>

          <button class="font-family-jakarta font-normal text-base sm:text-lg md:text-xl border-2 border-white text-white hover:bg-white hover:text-[#071B3A] transition-all duration-300 px-8 sm:px-10 h-11 sm:h-12 md:h-13 backdrop-blur-sm">
            Termin buchen
          </button>
        </div>

        <div class="flex justify-end items-end mt-auto pt-8 sm:pt-10 md:pt-12">
          <div class="max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[650px]">
            <div class="min-h-[60px] sm:min-h-[70px] md:min-h-[80px] lg:min-h-[90px] mb-5 sm:mb-6">
              <p class="font-family-jakarta font-normal text-white text-base sm:text-lg md:text-xl lg:text-[21px] text-right leading-[1.6]">
                <span class="font-bold">{{ currentHighlight.title }}</span>
                <span> {{ currentHighlight.text }}</span>
              </p>
            </div>

            <div class="flex justify-end items-center gap-2.5 sm:gap-3">
              <button
                v-for="(_, index) in highlights"
                :key="index"
                @click="currentSlide = index"
                :class="[
                  'h-1.5 sm:h-2 transition-all duration-300',
                  currentSlide === index ? 'bg-white w-10 sm:w-12' : 'bg-white/50 hover:bg-white/70 w-1.5 sm:w-2'
                ]"
                :aria-label="`Go to slide ${index + 1}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

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
let autoplayInterval = null;

const currentHighlight = computed(() => highlights[currentSlide.value]);

onMounted(() => {
  autoplayInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % highlights.length;
  }, 9000);
});

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
