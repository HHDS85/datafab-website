<template>
  <section ref="sectionRef" id="referenzen" class="relative w-full py-20 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="text-left mb-8">
        <span class="font-family-jakarta font-medium text-[#1e1d1b] text-xs tracking-[0.05em] uppercase">
          REFERENZEN
        </span>
      </div>

      <h2 class="font-family-roboto font-light text-[#1e1d1b] text-4xl md:text-5xl tracking-tight leading-[1.15] mb-10">
        Letzte Projekte
      </h2>

      <h3 class="font-family-roboto font-semibold text-[#1e1d1b] text-3xl md:text-4xl tracking-tight leading-[1.2] mb-14 max-w-[700px] whitespace-pre-line">
        {{ projectData.title }}
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-start">
        <div class="flex flex-col items-start gap-8">
          <button class="bg-[#242528] text-white hover:bg-[#323438] h-11 px-10 font-family-jakarta font-normal text-base transition-all duration-300">
            Projektbericht
          </button>

          <img
            class="w-full h-auto rounded-2xl"
            alt="Project image"
            :src="projectData.image"
          />
        </div>

        <div class="flex flex-col gap-12">
          <div
            v-for="(section, index) in projectData.sections"
            :key="index"
          >
            <h4 class="font-family-roboto font-semibold text-[#1e1d1b] text-2xl md:text-3xl tracking-tight leading-[1.3] mb-5">
              {{ section.title }}
            </h4>

            <p class="font-family-jakarta font-normal text-[#1e1d1b]/75 text-base leading-[1.75]">
              {{ section.content }}
            </p>

            <div
              v-if="index < projectData.sections.length - 1"
              class="mt-8 h-px bg-gray-200"
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
