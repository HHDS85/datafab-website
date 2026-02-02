<template>
  <section ref="sectionRef" id="referenzen" class="relative w-full py-16 md:py-20 lg:py-24 scroll-animate">
    <div class="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
      <div class="text-left mb-5 md:mb-6">
        <span class="font-family-jakarta font-medium text-[#1e1d1b] text-sm tracking-[0.05em] uppercase leading-[27.9px]">
          REFERENZEN
        </span>
      </div>

      <h2 class="font-family-roboto font-light text-[#1e1d1b] text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-8 md:mb-10">
        Letzte Projekte
      </h2>

      <h3 class="font-family-roboto font-normal text-[#1e1d1b] text-2xl md:text-3xl lg:text-[40px] tracking-tight leading-[1.2] mb-12 md:mb-16 max-w-full md:max-w-[620px]">
        {{ projectData.title }}
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <div class="flex flex-col items-start gap-8">
          <button class="bg-[#242528] hover:bg-[#242528]/90 text-white rounded-[22px] h-[43px] px-7 font-family-jakarta font-normal text-lg leading-[27px] tracking-normal transition-all duration-300 hover:shadow-lg hover:scale-105 min-w-[180px]">
            Projektbericht
          </button>

          <img
            class="w-full h-auto rounded-lg shadow-sm"
            alt="Project image"
            :src="projectData.image"
          />
        </div>

        <div class="flex flex-col gap-10 md:gap-12">
          <div
            v-for="(section, index) in projectData.sections"
            :key="index"
            class="border-0 shadow-none bg-transparent"
          >
            <div class="p-0">
              <h4 class="font-family-roboto font-semibold text-[#1e1d1b] text-xl md:text-2xl tracking-normal leading-[1.3] mb-4">
                {{ section.title }}
              </h4>

              <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base md:text-lg leading-[1.7] tracking-normal">
                {{ section.content }}
              </p>

              <div
                v-if="index < projectData.sections.length - 1"
                class="mt-8 md:mt-10 h-px bg-gray-200"
              />
            </div>
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
