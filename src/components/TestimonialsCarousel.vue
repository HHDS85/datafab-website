<template>
  <section ref="sectionRef" class="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
      <div class="mb-10 sm:mb-12 md:mb-14">
        <p class="font-family-jakarta font-medium text-[#1e1d1b] text-xs sm:text-sm tracking-[0.05em] uppercase mb-4 sm:mb-5 md:mb-6">
          TESTIMONIAL
        </p>
        <h2 class="font-family-roboto font-light text-[#1e1d1b] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] tracking-tight leading-[1.15]">
          Das sagen unsere<br />
          Kunden und Partner
        </h2>
      </div>

      <div class="max-w-full lg:max-w-[1000px]">
        <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 sm:gap-12 md:gap-14 lg:gap-16 mb-10 sm:mb-12 min-h-[320px] sm:min-h-[340px]">
          <div class="flex justify-center lg:justify-start">
            <img
              class="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] h-auto aspect-[280/320] object-cover shadow-sm"
              alt="Testimonial image"
              :src="currentTestimonial.image"
            />
          </div>

          <div class="flex flex-col justify-between min-h-[280px] sm:min-h-[300px]">
            <div class="min-h-[160px] sm:min-h-[180px] md:min-h-[200px]">
              <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base sm:text-lg md:text-xl lg:text-[21px] leading-[1.7]">
                {{ currentTestimonial.quote }}
              </p>
            </div>

            <div class="flex flex-col gap-1 mt-6">
              <h3 class="font-family-roboto font-semibold text-[#1e1d1b] text-xl sm:text-2xl md:text-[26px] leading-[1.3]">
                {{ currentTestimonial.author }}
              </h3>
              <p class="font-family-jakarta font-normal text-[#1e1d1b]/60 text-base sm:text-lg leading-[1.5]">
                {{ currentTestimonial.position }}
              </p>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 sm:pt-7 md:pt-8">
          <div class="flex items-center justify-between">
            <div class="font-family-jakarta font-normal text-2xl sm:text-3xl min-w-[80px] sm:min-w-[100px]">
              <span class="font-bold text-[#242528] inline-block w-[40px] sm:w-[50px] text-right">
                {{ String(currentIndex + 1).padStart(2, '0') }}
              </span>
              <span class="text-[#1e1d1b]/50 text-lg sm:text-xl">
                /{{ String(testimonialsData.length).padStart(2, '0') }}
              </span>
            </div>

            <div class="flex items-center justify-between gap-10 sm:gap-12 md:gap-14">
              <button
                @click="previousSlide"
                class="nav-arrow nav-arrow-left w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
              </button>
              <button
                @click="nextSlide"
                class="nav-arrow nav-arrow-right w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
              >
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

.nav-arrow {
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
}

.nav-arrow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-style: solid;
  transition: all 0.3s ease;
}

.nav-arrow-left::before {
  border-width: 8px 14px 8px 0;
  border-color: transparent #1E1D1B transparent transparent;
  margin-left: -2px;
}

.nav-arrow-right::before {
  border-width: 8px 0 8px 14px;
  border-color: transparent transparent transparent #9C9689;
  margin-left: 2px;
}

.nav-arrow-left:hover::before {
  border-color: transparent #000000 transparent transparent;
  transform: translate(-55%, -50%);
}

.nav-arrow-right:hover::before {
  border-color: transparent transparent transparent #7a7369;
  transform: translate(-45%, -50%);
}
</style>
