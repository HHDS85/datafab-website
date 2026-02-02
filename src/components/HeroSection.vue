<template>
  <section class="relative w-full">
    <div class="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      <div class="absolute inset-0 w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-br from-[#071B3A]/30 to-[#0A2348]/50 z-[1]"></div>
        <img
          class="w-full h-full object-cover object-center"
          alt="Hero background"
          src="/datafabricator-header-desktop-01-1.png"
        />
      </div>

      <div class="relative w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 lg:pb-20 z-10 h-full flex flex-col">
      <div class="mb-6 md:mb-8">
        <p class="font-family-jakarta font-medium text-white/95 text-[10px] md:text-xs tracking-[0.15em] uppercase leading-relaxed">
          HERZLICH WILLKOMMEN
        </p>
      </div>

      <h1 class="font-family-roboto font-light text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] mb-10 md:mb-14 lg:mb-16 max-w-[900px]">
        Wir transformieren
        technische
        Herausforderungen in
        greifbare Erfolge.
      </h1>

      <div class="flex flex-col sm:flex-row gap-4 mb-auto">
        <button
          class="group relative h-12 md:h-14 px-8 md:px-10 font-family-jakarta font-medium text-sm md:text-base tracking-wide bg-[#242528] text-white transition-all duration-300 ease-out hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] hover:-translate-y-1 min-w-[220px] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#242528] before:to-[#3a3a3d] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
        >
          <span class="relative z-10">Alle Cases einsehen</span>
        </button>

        <button
          class="group relative h-12 md:h-14 px-8 md:px-10 font-family-jakarta font-medium text-sm md:text-base tracking-wide border-2 border-white text-white hover:bg-white hover:text-[#071B3A] transition-all duration-300 ease-out hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] hover:scale-[1.02] hover:-translate-y-1 min-w-[220px] backdrop-blur-sm hover:backdrop-blur-0"
        >
          <span class="relative z-10">Termin buchen</span>
        </button>
      </div>

      <div class="flex justify-start md:justify-end items-end mt-auto pt-8 md:pt-12">
        <div class="w-full md:max-w-[600px] lg:max-w-[700px]">
          <div class="min-h-[70px] md:min-h-[65px] mb-5 md:mb-6">
            <p class="font-family-jakarta font-normal text-white text-base md:text-lg text-left md:text-right tracking-normal leading-[1.6]">
              <span class="font-bold">{{ currentHighlight.title }}</span>
              <span> {{ currentHighlight.text }}</span>
            </p>
          </div>

          <div class="flex justify-start md:justify-end items-center gap-2.5">
            <button
              v-for="(_, index) in highlights"
              :key="index"
              @click="currentSlide = index"
              :class="[
                'h-2 rounded-full transition-all duration-300',
                currentSlide === index ? 'bg-white w-10' : 'bg-white/50 hover:bg-white/70 w-2'
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
