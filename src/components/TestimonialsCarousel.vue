<template>
  <section ref="sectionRef" class="relative w-full py-16 md:py-20 lg:py-24 scroll-animate">
    <div class="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
      <div class="mb-10 md:mb-12">
        <p class="font-family-jakarta font-medium text-[#1e1d1b] text-sm tracking-[0.05em] uppercase leading-[27.9px] mb-6 md:mb-8">
          TESTIMONIAL
        </p>
        <h2 class="font-family-roboto font-normal text-[#1e1d1b] text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.15]">
          Das sagen unsere<br />
          Kunden und Partner
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 md:gap-12 lg:gap-16 mb-10 md:mb-12 min-h-[420px] md:min-h-[320px]">
        <div class="flex justify-center lg:justify-start">
          <img
            class="w-full max-w-[280px] h-auto aspect-[280/320] rounded-xl object-cover shadow-sm"
            alt="Testimonial image"
            :src="currentTestimonial.image"
          />
        </div>

        <div class="flex flex-col justify-between min-h-[280px]">
          <div class="min-h-[180px]">
            <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base md:text-lg leading-[1.7] tracking-normal">
              {{ currentTestimonial.quote }}
            </p>
          </div>

          <div class="flex flex-col gap-1">
            <h3 class="font-family-roboto font-semibold text-[#1e1d1b] text-xl md:text-2xl tracking-normal leading-[1.3]">
              {{ currentTestimonial.author }}
            </h3>
            <p class="font-family-jakarta font-normal text-[#1e1d1b]/60 text-base tracking-normal leading-[1.5]">
              {{ currentTestimonial.position }}
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 pt-7 md:pt-8">
        <div class="flex items-center justify-between">
          <div class="font-family-jakarta font-normal text-2xl md:text-3xl tracking-normal leading-normal min-w-[100px]">
            <span class="font-bold text-[#242528] inline-block w-[50px] text-right">
              {{ String(currentIndex + 1).padStart(2, '0') }}
            </span>
            <span class="text-[#1e1d1b]/50 text-lg md:text-xl">
              /{{ String(testimonialsData.length).padStart(2, '0') }}
            </span>
          </div>

          <div class="flex gap-3">
            <button
              @click="previousSlide"
              class="w-11 md:w-12 h-11 md:h-12 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center transition-all"
              aria-label="Previous testimonial"
            >
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              @click="nextSlide"
              class="w-11 md:w-12 h-11 md:h-12 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { testimonialsData } from '@/data/testimonials';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const sectionRef = ref(null);
useScrollAnimation(sectionRef);

const currentIndex = ref(0);

const currentTestimonial = computed(() => testimonialsData[currentIndex.value]);

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0
    ? testimonialsData.length - 1
    : currentIndex.value - 1;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonialsData.length;
};
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
