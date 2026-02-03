<template>
  <section ref="sectionRef" id="referenzen" class="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
      <div class="text-left mb-4 sm:mb-5 md:mb-6">
        <span class="font-family-jakarta font-medium text-[#1e1d1b] text-xs sm:text-sm tracking-[0.05em] uppercase">
          REFERENZEN
        </span>
      </div>

      <h2 class="font-family-roboto font-light text-[#1e1d1b] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] mb-6 sm:mb-8 md:mb-10">
        Letzte Projekte
      </h2>

      <h3 class="font-family-roboto font-semibold text-[#1e1d1b] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] tracking-tight leading-[1.2] mb-10 sm:mb-12 md:mb-16 max-w-full lg:max-w-[900px] whitespace-pre-line">
        {{ projectData.title }}
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
        <div class="flex flex-col items-start gap-6 sm:gap-7 md:gap-8">
          <button class="bg-[#242528] text-white hover:bg-[#323438] h-11 sm:h-12 md:h-13 px-8 sm:px-10 font-family-jakarta font-normal text-base sm:text-lg transition-all duration-300">
            Projektbericht
          </button>

          <img
            class="w-full h-auto"
            alt="Project image"
            :src="projectData.image"
          />
        </div>

        <div class="flex flex-col gap-8 sm:gap-10 md:gap-12">
          <div
            v-for="(section, index) in projectData.sections"
            :key="index"
          >
            <h4 class="font-family-roboto font-semibold text-[#1e1d1b] text-xl sm:text-2xl md:text-3xl lg:text-[32px] tracking-tight leading-[1.3] mb-4 sm:mb-5">
              {{ section.title }}
            </h4>

            <p class="font-family-jakarta font-normal text-[#1e1d1b]/75 text-base sm:text-lg md:text-[19px] leading-[1.75]">
              {{ section.content }}
            </p>

            <div
              v-if="index < projectData.sections.length - 1"
              class="mt-8 sm:mt-9 md:mt-10 h-px bg-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { projectData } from '@/data/projects';
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
