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

      <div class="relative w-full max-w-[1920px] mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 pt-48 pb-20 z-10 h-full flex flex-col">
        <div class="mb-6">
          <p class="font-family-jakarta font-medium text-white/95 text-sm tracking-[0.15em] uppercase">
            HERZLICH WILLKOMMEN
          </p>
        </div>

        <h1 class="font-family-roboto font-light text-white text-7xl xl:text-8xl tracking-tight leading-[1.1] mb-14 max-w-[900px]">
          Wir transformieren
          technische
          Herausforderungen in
          greifbare Erfolge.
        </h1>

        <div class="flex gap-6 mb-auto">
          <button class="font-family-jakarta font-normal text-lg xl:text-xl bg-[#242528] text-white hover:bg-[#323438] transition-all duration-300 px-12 h-14">
            Alle Cases einsehen
          </button>

          <button class="font-family-jakarta font-normal text-lg xl:text-xl border-2 border-white text-white hover:bg-white hover:text-[#071B3A] transition-all duration-300 px-12 h-14 backdrop-blur-sm">
            Termin buchen
          </button>
        </div>

        <div class="flex justify-end items-end mt-auto pt-16">
          <div class="max-w-[700px]">
            <div class="min-h-[90px] mb-8">
              <p class="font-family-jakarta font-normal text-white text-xl text-right leading-[1.6]">
                <span class="font-bold">{{ currentHighlight.title }}</span>
                <span> {{ currentHighlight.text }}</span>
              </p>
            </div>

            <div class="flex justify-end items-center gap-3">
              <button
                v-for="(_, index) in highlights"
                :key="index"
                @click="currentSlide = index"
                :class="[
                  'h-2 transition-all duration-300',
                  currentSlide === index ? 'bg-white w-12' : 'bg-white/50 hover:bg-white/70 w-2'
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
