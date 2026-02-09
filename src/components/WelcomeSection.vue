<template>
  <section ref="sectionRef" class="relative w-full py-16 md:py-20 scroll-animate bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-container mx-auto px-6 lg:px-12 xl:px-16">
      <div class="mb-8 md:mb-10">
        <p class="font-jakarta font-medium text-dark-primary text-xs tracking-[0.05em] uppercase">
          {{ t('welcome.label') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        <div class="flex flex-col justify-start">
          <h2 class="font-roboto font-light text-navy-card-alt text-4xl md:text-5xl tracking-tight leading-[1.15]">
            {{ t('welcome.title') }}
          </h2>
        </div>

        <div class="flex flex-col justify-start gap-5 md:gap-6">
          <p class="font-jakarta font-normal text-dark-primary text-sm md:text-base leading-[1.7] md:leading-[1.75]">
            {{ t('welcome.intro') }}
          </p>

          <p class="font-jakarta font-normal text-dark-primary text-sm md:text-base leading-[1.7] md:leading-[1.75]">
            {{ t('welcome.description') }}
          </p>
        </div>
      </div>

      <div class="mt-10 md:mt-12 lg:mt-14">
        <button class="bg-dark-button text-white hover:bg-dark-button-hover h-11 px-8 md:px-10 font-jakarta font-normal text-sm md:text-base transition-all duration-300 rounded-lg">
          {{ t('welcome.button') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '@/composables';
import { useI18n } from '@/composables/core/useI18n';

const { t } = useI18n();
const sectionRef = ref(null);
useScrollAnimation(sectionRef);
</script>
