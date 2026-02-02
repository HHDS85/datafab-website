<template>
  <section ref="sectionRef" class="relative w-full bg-[#F4F5F7] py-24 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-12">
      <div class="mb-10">
        <p class="font-family-jakarta font-medium text-[#1e1d1b] text-sm tracking-[0.05em] uppercase">
          WILLKOMMEN
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div class="flex flex-col justify-start">
          <h2 class="font-family-roboto font-light text-[#273247] text-6xl tracking-tight leading-[1.15]">
            Herzlich Willkommen
            <br />
            bei Data Fabricator
          </h2>
        </div>

        <div class="flex flex-col justify-start gap-6">
          <p class="font-family-jakarta font-normal text-[#1e1d1b] text-lg leading-[1.75]">
            Data Fabricator ist Ihr Partner für innovative und
            maßgeschneiderte Digitalisierungsstrategien.
            Wir setzen auf eine enge Zusammenarbeit, um Ihre Ideen in
            erfolgreiche digitale Lösungen zu verwandeln.
          </p>

          <p class="font-family-jakarta font-normal text-[#1e1d1b] text-lg leading-[1.75]">
            Unser Leistungsspektrum reicht von der umfassenden
            Digitalisierungsberatung über die Entwicklung individueller
            Anwendungen bis hin zur Visualisierung komplexer Daten.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <button class="bg-[#242528] text-white hover:bg-[#323438] h-12 px-10 font-family-jakarta font-normal text-lg transition-all duration-300">
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
