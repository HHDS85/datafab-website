<template>
  <section class="relative w-full">
    <div class="relative w-full h-[100vh] overflow-hidden">
      <div class="absolute inset-0 w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-br from-[#071B3A]/20 to-[#0A2348]/40 z-[1]"></div>
        <img
          class="w-full h-full object-cover object-[75%_center] md:object-[65%_center] lg:object-center"
          alt="Hero background"
          src="/datafabricator-header-desktop-01-1.png"
        />
      </div>

      <div class="relative max-w-[1220px] mx-auto px-6 md:px-8 lg:px-12 pt-40 md:pt-48 lg:pt-56 pb-16 md:pb-20 z-10">
      <div class="mb-4 md:mb-6">
        <p class="font-family-jakarta font-medium text-white/90 text-xs md:text-sm tracking-[0.08em] uppercase leading-[27.9px]">
          SPEZIALISIERUNGEN
        </p>
      </div>

      <h1 class="font-family-roboto font-light text-white text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-10 md:mb-12 max-w-[680px] drop-shadow-sm">
        Wir transformieren
        technische
        Herausforderungen in
        greifbare Erfolge.
      </h1>

      <div class="flex flex-col sm:flex-row gap-4 mb-20 md:mb-28 lg:mb-32">
        <button
          class="group h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-lg leading-[27px] tracking-normal border border-white text-white hover:bg-white hover:text-[#071B3A] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] min-w-[200px]"
        >
          Alle Services ansehen
        </button>

        <button
          class="group h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-lg leading-[27px] tracking-normal bg-[#242528] text-white hover:bg-white hover:text-[#242528] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] min-w-[200px]"
        >
          Termin vereinbaren
        </button>
      </div>

      <div class="flex justify-start md:justify-end items-end min-h-[120px] md:min-h-[100px]">
        <div class="w-full md:max-w-[480px]">
          <div class="min-h-[72px] md:min-h-[60px] mb-4 md:mb-5">
            <p class="font-family-jakarta font-normal text-white/90 text-sm md:text-base text-left md:text-right tracking-normal leading-[1.6] drop-shadow-sm">
              <span class="font-bold">{{ currentHighlight.title }}</span>
              <span>{{ currentHighlight.text }}</span>
            </p>
          </div>

          <div class="flex justify-start md:justify-end items-center gap-2">
            <button
              v-for="(_, index) in highlights"
              :key="index"
              @click="currentSlide = index"
              :class="[
                'h-2 rounded-full transition-all duration-300',
                currentSlide === index ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2'
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
