<template>
  <section ref="sectionRef" class="relative w-full py-20 scroll-animate bg-[#E8E9EB]">
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="mb-10">
        <p class="font-family-jakarta font-medium text-[#1e1d1b] text-xs tracking-[0.05em] uppercase">
          WILLKOMMEN
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20">
        <div class="flex flex-col justify-start">
          <h2 class="font-family-roboto font-light text-[#273247] text-4xl md:text-5xl tracking-tight leading-[1.15]">
            Herzlich Willkommen
            <br />
            bei Data Fabricator
          </h2>
        </div>

        <div class="flex flex-col justify-start gap-6">
          <p class="font-family-jakarta font-normal text-[#1e1d1b] text-base leading-[1.75]">
            Data Fabricator ist Ihr Partner für innovative und
            maßgeschneiderte Digitalisierungsstrategien.
            Wir setzen auf eine enge Zusammenarbeit, um Ihre Ideen in
            erfolgreiche digitale Lösungen zu verwandeln.
          </p>

          <p class="font-family-jakarta font-normal text-[#1e1d1b] text-base leading-[1.75]">
            Unser Leistungsspektrum reicht von der umfassenden
            Digitalisierungsberatung über die Entwicklung individueller
            Anwendungen bis hin zur Visualisierung komplexer Daten.
          </p>
        </div>
      </div>

      <div class="mt-14">
        <button class="bg-[#242528] text-white hover:bg-[#323438] h-11 px-10 font-family-jakarta font-normal text-base transition-all duration-300">
          Über uns
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '@/composables';

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
