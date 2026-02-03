<template>
  <section class="relative w-full pt-14 px-6 lg:px-12 xl:px-16">
    <div class="relative w-full max-w-[1440px] mx-auto overflow-hidden rounded-3xl">
      <div class="relative w-full min-h-[85vh]">
        <div class="absolute inset-0 w-full h-full">
          <div class="absolute inset-0 bg-gradient-to-br from-[#071B3A]/20 to-[#0A2348]/40 z-[1]"></div>
          <img
            class="w-full h-full object-cover object-center"
            alt="Hero background"
            src="/datafabricator-header-desktop-01-1.png"
          />
        </div>

        <div class="relative w-full px-6 lg:px-12 xl:px-16 pt-24 md:pt-32 lg:pt-36 pb-16 lg:pb-20 z-10 h-full flex flex-col">
          <div class="mb-5">
            <p class="font-family-jakarta font-medium text-white/95 text-xs md:text-sm tracking-[0.15em] uppercase">
              HERZLICH WILLKOMMEN
            </p>
          </div>

          <h1 class="font-family-roboto font-light text-white text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.1] mb-10 max-w-[720px]">
            Wir transformieren
            technische
            Herausforderungen in
            greifbare Erfolge.
          </h1>

          <div class="flex flex-col sm:flex-row gap-4 mb-auto">
            <button class="font-family-jakarta font-normal text-base bg-[#242528] text-white hover:bg-[#323438] transition-all duration-300 px-10 h-11">
              Alle Cases einsehen
            </button>

            <button class="font-family-jakarta font-normal text-base border-2 border-white text-white hover:bg-white hover:text-[#071B3A] transition-all duration-300 px-10 h-11 backdrop-blur-sm">
              Termin buchen
            </button>
          </div>

          <div class="flex justify-end items-end mt-auto pt-12 lg:pt-16">
            <div class="max-w-[560px]">
              <div class="min-h-[70px] lg:min-h-[80px] mb-6">
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
                    'h-1.5 transition-all duration-300',
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
