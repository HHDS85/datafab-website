<template>
  <section ref="sectionRef" class="relative w-full bg-[#F4F5F7] py-16 sm:py-20 md:py-24 lg:py-28 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
      <div class="mb-6 sm:mb-8 md:mb-10">
        <p class="font-family-jakarta font-medium text-[#1e1d1b] text-xs sm:text-sm tracking-[0.05em] uppercase">
          WILLKOMMEN
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        <div class="flex flex-col justify-start">
          <h2 class="font-family-roboto font-light text-[#273247] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] tracking-tight leading-[1.15]">
            Herzlich Willkommen
            <br />
            bei Data Fabricator
          </h2>
        </div>

        <div class="flex flex-col justify-start gap-5 sm:gap-6">
          <p class="font-family-jakarta font-normal text-[#1e1d1b] text-base sm:text-lg md:text-xl lg:text-[21px] leading-[1.75]">
            Data Fabricator ist Ihr Partner für innovative und
            maßgeschneiderte Digitalisierungsstrategien.
            Wir setzen auf eine enge Zusammenarbeit, um Ihre Ideen in
            erfolgreiche digitale Lösungen zu verwandeln.
          </p>

          <p class="font-family-jakarta font-normal text-[#1e1d1b] text-base sm:text-lg md:text-xl lg:text-[21px] leading-[1.75]">
            Unser Leistungsspektrum reicht von der umfassenden
            Digitalisierungsberatung über die Entwicklung individueller
            Anwendungen bis hin zur Visualisierung komplexer Daten.
          </p>
        </div>
      </div>

      <div class="mt-12 sm:mt-14 md:mt-16">
        <button class="bg-[#242528] text-white hover:bg-[#323438] h-11 sm:h-12 md:h-13 px-8 sm:px-10 font-family-jakarta font-normal text-base sm:text-lg md:text-xl transition-all duration-300">
          Über uns
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const sectionRef = ref(null);
useScrollAnimation(sectionRef);
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
