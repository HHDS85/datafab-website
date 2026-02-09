<template>
  <section ref="sectionRef" id="referenzen" class="relative w-full py-16 md:py-20 scroll-animate">
    <div class="max-w-container mx-auto px-6 lg:px-12 xl:px-16">
      <div class="text-left mb-6 md:mb-8">
        <span class="font-jakarta font-medium text-dark-primary text-xs tracking-[0.05em] uppercase">
          {{ t('projects.label') }}
        </span>
      </div>

      <h2 class="font-roboto font-light text-dark-primary text-4xl md:text-5xl tracking-tight leading-[1.15] mb-8 md:mb-10">
        {{ t('projects.title') }}
      </h2>

      <h3 class="font-roboto font-semibold text-dark-primary text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.2] mb-10 md:mb-12 lg:mb-14 max-w-[700px] whitespace-pre-line">
        {{ t(projectData.titleKey) }}
      </h3>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">
        <div class="flex flex-col items-start gap-6 md:gap-8">
          <button class="bg-dark-button text-white hover:bg-dark-button-hover h-11 px-8 md:px-10 font-jakarta font-normal text-sm md:text-base transition-all duration-300 rounded-lg">
            {{ t('projects.button') }}
          </button>

          <img
            class="w-full h-auto"
            alt="Project image"
            :src="projectData.image"
          />
        </div>

        <div class="flex flex-col gap-8 md:gap-10 lg:gap-12">
          <div
            v-for="(section, index) in projectData.sections"
            :key="index"
          >
            <h4 class="font-roboto font-semibold text-dark-primary text-xl md:text-2xl lg:text-3xl tracking-tight leading-[1.3] mb-4 md:mb-5">
              {{ t(section.titleKey) }}
            </h4>

            <p class="font-jakarta font-normal text-dark-primary/75 text-sm md:text-base leading-[1.7] md:leading-[1.75]">
              {{ t(section.contentKey) }}
            </p>

            <div
              v-if="index < projectData.sections.length - 1"
              class="mt-6 md:mt-8 h-px bg-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { project as projectData } from '@/data/projects.data';
import { useScrollAnimation } from '@/composables';
import { useI18n } from '@/composables/core/useI18n';

const { t } = useI18n();
const sectionRef = ref(null);
useScrollAnimation(sectionRef);
</script>
