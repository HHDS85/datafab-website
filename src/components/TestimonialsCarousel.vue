<template>
  <section ref="sectionRef" class="relative w-full pt-16 md:pt-20 pb-6 md:pb-8 scroll-animate">
    <div class="max-w-container mx-auto px-6 lg:px-12 xl:px-16">
      <div class="mb-10 md:mb-12 lg:mb-14">
        <p class="font-jakarta font-medium text-dark-primary text-xs tracking-[0.05em] uppercase mb-6 md:mb-7">
          {{ t('testimonials.label') }}
        </p>
        <h2 class="font-roboto font-light text-dark-primary text-4xl md:text-5xl tracking-tight leading-[1.15] whitespace-pre-line">
          {{ t('testimonials.title') }}
        </h2>
      </div>

      <div class="max-w-[1000px]">
        <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-10 lg:mb-12">
          <div class="flex justify-center md:justify-start">
            <img
              class="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[260px] h-[240px] md:h-[280px] lg:h-[300px] object-cover shadow-sm rounded-lg"
              alt="Testimonial image"
              :src="currentTestimonial.image"
            />
          </div>

          <div class="flex flex-col justify-between">
            <div>
              <p class="font-jakarta font-normal text-dark-primary/80 text-sm md:text-base leading-[1.6] md:leading-[1.7]">
                {{ currentTestimonial.quote }}
              </p>
            </div>

            <div class="flex flex-col gap-1.5 mt-6 md:mt-8">
              <h3 class="font-roboto font-semibold text-dark-primary text-lg md:text-xl lg:text-2xl leading-[1.3]">
                {{ currentTestimonial.author }}
              </h3>
              <p class="font-jakarta font-normal text-dark-primary/60 text-sm md:text-base leading-[1.5]">
                {{ currentTestimonial.position }}
              </p>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 md:pt-8">
          <div class="flex items-center justify-between">
            <div class="font-jakarta font-normal text-2xl md:text-3xl min-w-[80px] md:min-w-[100px]">
              <span class="font-bold text-dark-button inline-block w-[40px] md:w-[50px] text-right">
                {{ String(currentIndex + 1).padStart(2, '0') }}
              </span>
              <span class="text-dark-primary/50 text-lg md:text-xl">
                /{{ String(testimonialsData.length).padStart(2, '0') }}
              </span>
            </div>

            <div class="flex items-center justify-between gap-8 md:gap-12">
              <button
                @click="previousSlide"
                class="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
                aria-label="Previous testimonial"
              >
                <svg class="w-5 h-5 md:w-6 md:h-6 text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="nextSlide"
                class="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
                aria-label="Next testimonial"
              >
                <svg class="w-5 h-5 md:w-6 md:h-6 text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useScrollAnimation } from '@/composables';
import { useI18n } from '@/composables/core/useI18n';

const { t } = useI18n();
const sectionRef = ref(null);
useScrollAnimation(sectionRef);

const currentIndex = ref(0);
const testimonialsData = computed(() => t('testimonials.items'));

const currentTestimonial = computed(() => ({
  ...testimonialsData.value[currentIndex.value],
  image: '/testimonialimage.png'
}));

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0
    ? testimonialsData.value.length - 1
    : currentIndex.value - 1;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonialsData.value.length;
};
</script>
