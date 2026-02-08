<template>
  <section ref="sectionRef" class="relative w-full py-20 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="mb-14">
        <p class="font-family-jakarta font-medium text-[#1e1d1b] text-xs tracking-[0.05em] uppercase mb-7">
          TESTIMONIAL
        </p>
        <h2 class="font-family-roboto font-light text-[#1e1d1b] text-4xl md:text-5xl tracking-tight leading-[1.15]">
          Das sagen unsere<br />
          Kunden und Partner
        </h2>
      </div>

      <div class="max-w-[1000px]">
        <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 mb-12 min-h-[300px]">
          <div class="flex justify-center lg:justify-start">
            <img
              class="w-full max-w-[260px] h-auto aspect-[260/300] object-cover shadow-sm rounded-lg"
              alt="Testimonial image"
              :src="currentTestimonial.image"
            />
          </div>

          <div class="flex flex-col justify-between min-h-[260px]">
            <div class="min-h-[160px]">
              <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base leading-[1.7]">
                {{ currentTestimonial.quote }}
              </p>
            </div>

            <div class="flex flex-col gap-1.5 mt-6">
              <h3 class="font-family-roboto font-semibold text-[#1e1d1b] text-xl md:text-2xl leading-[1.3]">
                {{ currentTestimonial.author }}
              </h3>
              <p class="font-family-jakarta font-normal text-[#1e1d1b]/60 text-sm md:text-base leading-[1.5]">
                {{ currentTestimonial.position }}
              </p>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8">
          <div class="flex items-center justify-between">
            <div class="font-family-jakarta font-normal text-3xl min-w-[100px]">
              <span class="font-bold text-[#242528] inline-block w-[50px] text-right">
                {{ String(currentIndex + 1).padStart(2, '0') }}
              </span>
              <span class="text-[#1e1d1b]/50 text-xl">
                /{{ String(testimonialsData.length).padStart(2, '0') }}
              </span>
            </div>

            <div class="flex items-center justify-between gap-12">
              <button
                @click="previousSlide"
                class="nav-arrow transform rotate-180 w-9 h-9 flex items-center justify-center transition-all duration-300 hover:opacity-70"
                aria-label="Previous testimonial"
              >
                <img src="/testimonialnavigation-2@2x.png" alt="Previous" class="w-full h-full" />
              </button>
              <button
                @click="nextSlide"
                class="nav-arrow w-9 h-9 flex items-center justify-center transition-all duration-300 hover:opacity-70"
                aria-label="Next testimonial"
              >
                <img src="/testimonialnavigation-2@2x.png" alt="Next" class="w-full h-full" />
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
import { testimonials as testimonialsData } from '@/data/testimonials.data';
import { useScrollAnimation } from '@/composables';

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

.nav-arrow {
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
