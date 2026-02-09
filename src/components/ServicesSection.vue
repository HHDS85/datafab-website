<template>
  <section ref="sectionRef" id="leistungen" class="relative w-full py-16 md:py-20 scroll-animate">
    <div class="max-w-container mx-auto px-6 lg:px-12 xl:px-16">
      <div class="mb-10 md:mb-12 lg:mb-14 flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8">
        <div>
          <p class="font-jakarta font-medium text-dark-primary text-xs tracking-[0.05em] uppercase mb-6 md:mb-7">
            {{ t('services.label') }}
          </p>
          <h2 class="font-roboto font-light text-navy-card-alt text-4xl md:text-5xl tracking-tight leading-[1.15]">
            {{ t('services.title') }}
            <br />
            {{ t('services.subtitle') }}
          </h2>
        </div>
        <div class="hidden lg:flex items-center justify-between gap-12 mt-auto mb-2">
          <button
            @click="scrollLeft"
            class="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
            aria-label="Scroll left"
          >
            <svg class="w-6 h-6 text-navy-card-alt" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="scrollRight"
            class="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
            aria-label="Scroll right"
          >
            <svg class="w-6 h-6 text-navy-card-alt" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="relative mb-10 md:mb-12 lg:mb-14 -mr-6 lg:-mr-12 xl:-mr-16">
        <div ref="scrollContainer" class="hidden lg:flex gap-4 lg:gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          <div
            v-for="(service, index) in servicesData"
            :key="index"
            class="bg-navy-card min-h-[320px] lg:min-h-[340px] flex flex-col flex-shrink-0 w-[260px] lg:w-[280px] xl:w-[300px] rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          >
            <div class="p-6 lg:p-7 xl:p-8 flex flex-col h-full">
              <div class="mb-4">
                <span class="font-jakarta font-normal text-white/60 text-base lg:text-lg">
                  {{ service.number }}
                </span>
              </div>
              <div class="flex flex-col gap-4 lg:gap-5">
                <h3 class="font-jakarta font-semibold text-white text-base lg:text-lg xl:text-xl leading-[1.4] whitespace-pre-line min-h-[48px] lg:min-h-[52px] flex items-start">
                  {{ t(service.titleKey) }}
                </h3>
                <p class="font-jakarta font-normal text-white/75 text-sm xl:text-base leading-[1.6]">
                  {{ t(service.descriptionKey) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:hidden">
          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-out"
              :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
            >
              <div
                v-for="(service, index) in servicesData"
                :key="index"
                class="flex-shrink-0 px-2"
                :class="slideClass"
              >
                <div class="bg-navy-card min-h-[320px] md:min-h-[340px] flex flex-col rounded-xl shadow-lg">
                  <div class="p-6 md:p-7 flex flex-col h-full">
                    <div class="mb-3 md:mb-3.5">
                      <span class="font-jakarta font-normal text-white/60 text-sm md:text-base">
                        {{ service.number }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-3.5 md:gap-4">
                      <h3 class="font-jakarta font-semibold text-white text-base md:text-lg leading-[1.4] whitespace-pre-line">
                        {{ t(service.titleKey) }}
                      </h3>
                      <p class="font-jakarta font-normal text-white/75 text-sm leading-[1.6]">
                        {{ t(service.descriptionKey) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center gap-3.5 mt-7">
            <button
              @click="prevSlide"
              class="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
              :disabled="currentSlide === 0"
              :class="{ 'opacity-30 cursor-not-allowed': currentSlide === 0 }"
            >
              <svg class="w-5 h-5 text-navy-card" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex gap-1.5">
              <button
                v-for="(_, index) in paginationDots"
                :key="index"
                @click="goToSlide(index)"
                class="h-1.5 transition-all duration-300 rounded-full"
                :class="getDotClass(index)"
              ></button>
            </div>

            <button
              @click="nextSlide"
              class="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
              :disabled="currentSlide >= maxSlide"
              :class="{ 'opacity-30 cursor-not-allowed': currentSlide >= maxSlide }"
            >
              <svg class="w-5 h-5 text-navy-card" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { services as servicesData } from '@/data/services.data';
import { useScrollAnimation, useTouchGestures } from '@/composables';
import { useI18n } from '@/composables/core/useI18n';

const { t } = useI18n();
const sectionRef = ref(null);
useScrollAnimation(sectionRef);

const scrollContainer = ref(null);
const currentSlide = ref(0);
const slidesPerView = ref(1);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
  }
};

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth >= 768 && window.innerWidth < 1024 ? 2 : 1;
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});

const slideWidth = computed(() => 100 / slidesPerView.value);
const slideClass = computed(() => slidesPerView.value === 2 ? 'w-1/2' : 'w-full');
const maxSlide = computed(() => Math.ceil(servicesData.length / slidesPerView.value) - 1);
const paginationDots = computed(() => Array(maxSlide.value + 1).fill(0));
const getDotClass = (index) => currentSlide.value === index ? 'bg-navy-card w-8' : 'bg-navy-card/30 w-2';

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) currentSlide.value++;
};

const prevSlide = () => {
  if (currentSlide.value > 0) currentSlide.value--;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchGestures({
  onSwipeLeft: nextSlide,
  onSwipeRight: prevSlide,
  threshold: 50
});
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
