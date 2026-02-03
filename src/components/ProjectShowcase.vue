<template>
  <section ref="sectionRef" id="referenzen" class="relative w-full py-28 xl:py-32 scroll-animate">
    <div class="max-w-[1920px] mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24">
      <div class="text-left mb-8">
        <span class="font-family-jakarta font-medium text-[#1e1d1b] text-sm xl:text-[15px] tracking-[0.05em] uppercase">
          REFERENZEN
        </span>
      </div>

      <h2 class="font-family-roboto font-light text-[#1e1d1b] text-5xl xl:text-6xl tracking-tight leading-[1.15] mb-12">
        Letzte Projekte
      </h2>

      <h3 class="font-family-roboto font-semibold text-[#1e1d1b] text-5xl xl:text-6xl tracking-tight leading-[1.2] mb-20 max-w-[900px]">
        {{ projectData.title }}
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-28 items-start">
        <div class="flex flex-col items-start gap-10">
          <button class="bg-[#242528] text-white hover:bg-[#323438] h-14 px-12 font-family-jakarta font-normal text-lg xl:text-xl transition-all duration-300">
            Projektbericht
          </button>

          <img
            class="w-full h-auto"
            alt="Project image"
            :src="projectData.image"
          />
        </div>

        <div class="flex flex-col gap-14">
          <div
            v-for="(section, index) in projectData.sections"
            :key="index"
          >
            <h4 class="font-family-roboto font-semibold text-[#1e1d1b] text-3xl xl:text-4xl tracking-tight leading-[1.3] mb-6">
              {{ section.title }}
            </h4>

            <p class="font-family-jakarta font-normal text-[#1e1d1b]/75 text-lg xl:text-xl leading-[1.75]">
              {{ section.content }}
            </p>

            <div
              v-if="index < projectData.sections.length - 1"
              class="mt-10 h-px bg-gray-200"
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
