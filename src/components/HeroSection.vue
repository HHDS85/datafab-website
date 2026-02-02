<template>
  <section class="relative w-full">
    <div class="relative w-full h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      <div class="absolute inset-0 w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-br from-[#071B3A]/20 to-[#0A2348]/40 z-[1]"></div>
        <img
          class="w-full h-full object-cover object-[75%_center] md:object-[65%_center] lg:object-center xl:object-[55%_center]"
          alt="Hero background"
          src="/datafabricator-header-desktop-01-1.png"
        />
      </div>

      <div class="relative max-w-[1220px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pt-28 md:pt-36 lg:pt-40 xl:pt-44 pb-8 md:pb-10 lg:pb-12 z-10 h-full flex flex-col">
      <div class="mb-3 md:mb-4">
        <p class="font-family-jakarta font-medium text-white/90 text-xs md:text-sm xl:text-sm tracking-[0.08em] uppercase leading-[27.9px]">
          HERZLICH WILLKOMMEN
        </p>
      </div>

      <h1 class="font-family-roboto font-light text-white text-3xl md:text-5xl lg:text-6xl xl:text-6xl tracking-tight leading-[1.1] mb-8 md:mb-10 xl:mb-12 max-w-[680px] drop-shadow-sm">
        Wir transformieren
        technische
        Herausforderungen in
        greifbare Erfolge.
      </h1>

      <div class="flex flex-col sm:flex-row gap-4 mb-auto">
        <button
          class="group relative h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-base md:text-lg xl:text-lg leading-[27px] tracking-normal bg-[#242528] text-white transition-all duration-500 ease-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-[1.03] hover:-translate-y-0.5 min-w-[200px] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#242528] before:to-[#3a3a3d] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
        >
          <span class="relative z-10">Alle Cases einsehen</span>
        </button>

        <button
          class="group relative h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-base md:text-lg xl:text-lg leading-[27px] tracking-normal border-2 border-white text-white hover:bg-white hover:text-[#071B3A] transition-all duration-500 ease-out hover:shadow-[0_8px_30px_rgb(255,255,255,0.4)] hover:scale-[1.03] hover:-translate-y-0.5 min-w-[200px] backdrop-blur-sm hover:backdrop-blur-0"
        >
          <span class="relative z-10">Termin buchen</span>
        </button>
      </div>

      <div class="flex justify-start md:justify-end items-end mt-auto pt-6 md:pt-8 xl:pt-10 pb-4 md:pb-6">
        <div class="w-full md:max-w-[540px] xl:max-w-[580px] md:pr-8 lg:pr-12">
          <div class="min-h-[60px] md:min-h-[50px] xl:min-h-[55px] mb-3 md:mb-4">
            <p class="font-family-jakarta font-normal text-white text-sm md:text-base xl:text-base text-left md:text-right tracking-normal leading-[1.5] drop-shadow-sm">
              <span class="font-bold">{{ currentHighlight.title }}</span>
              <span> {{ currentHighlight.text }}</span>
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
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#F4F5F7]/50 pointer-events-none"></div>
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
