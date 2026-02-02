<template>
  <section ref="sectionRef" id="leistungen" class="relative w-full py-16 md:py-20 lg:py-24 scroll-animate">
    <div class="max-w-[1220px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      <div class="mb-12 md:mb-14 flex items-start justify-between">
        <div>
          <p class="font-family-jakarta font-medium text-[#1e1d1b] text-sm tracking-[0.05em] uppercase leading-[27.9px] mb-5 md:mb-6">
            SERVICES
          </p>
          <h2 class="font-family-roboto font-light text-[#273247] text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.15]">
            Unsere Leistungen
            <br />
            im Überblick
          </h2>
        </div>
        <div class="hidden lg:flex gap-2.5 mt-auto mb-1">
          <button
            @click="scrollLeft"
            class="w-11 h-11 rounded-[8px] border border-[#d4d4d4] hover:bg-[#f5f5f5] hover:border-[#a3a3a3] flex items-center justify-center transition-all duration-200"
            aria-label="Scroll left"
          >
            <svg class="w-4 h-4 text-[#404040]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            @click="scrollRight"
            class="w-11 h-11 rounded-[8px] border border-[#d4d4d4] hover:bg-[#f5f5f5] hover:border-[#a3a3a3] flex items-center justify-center transition-all duration-200"
            aria-label="Scroll right"
          >
            <svg class="w-4 h-4 text-[#404040]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="relative mb-12 md:mb-14 -mr-6 md:-mr-8 lg:-mr-12">
        <div ref="scrollContainer" class="hidden lg:flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          <div
            v-for="(service, index) in servicesData"
            :key="index"
            class="bg-[#273248] rounded-[9px] min-h-[400px] flex flex-col flex-shrink-0 w-[280px] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          >
            <div class="p-8 pb-10 flex flex-col h-full">
              <div class="mb-4">
                <span class="font-family-jakarta font-normal text-white/60 text-lg tracking-normal leading-normal">
                  {{ service.number }}
                </span>
              </div>
              <div class="flex flex-col gap-5">
                <h3 class="font-family-jakarta font-semibold text-white text-xl tracking-normal leading-[1.4] whitespace-pre-line h-[64px] flex items-start">
                  {{ service.title }}
                </h3>
                <p class="font-family-jakarta font-normal text-white/75 text-base leading-[1.7] tracking-normal h-[120px]">
                  {{ service.description }}
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
                class="flex-shrink-0 px-3"
                :class="slideClass"
              >
                <div class="bg-[#273248] rounded-[9px] min-h-[400px] flex flex-col">
                  <div class="p-8 pb-10 flex flex-col h-full">
                    <div class="mb-4">
                      <span class="font-family-jakarta font-normal text-white/60 text-lg tracking-normal leading-normal">
                        {{ service.number }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-5">
                      <h3 class="font-family-jakarta font-semibold text-white text-xl tracking-normal leading-[1.4]">
                        {{ service.title }}
                      </h3>
                      <p class="font-family-jakarta font-normal text-white/75 text-base leading-[1.7] tracking-normal">
                        {{ service.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center gap-4 mt-8">
            <button
              @click="prevSlide"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[#273248]/10 hover:bg-[#273248]/20 transition-colors"
              :disabled="currentSlide === 0"
              :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
            >
              <svg class="w-5 h-5 text-[#273248]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex gap-2">
              <button
                v-for="(_, index) in paginationDots"
                :key="index"
                @click="goToSlide(index)"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="getDotClass(index)"
              ></button>
            </div>

            <button
              @click="nextSlide"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[#273248]/10 hover:bg-[#273248]/20 transition-colors"
              :disabled="currentSlide >= maxSlide"
              :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlide }"
            >
              <svg class="w-5 h-5 text-[#273248]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
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
import { servicesData } from '@/data/services';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const sectionRef = ref(null);
useScrollAnimation(sectionRef);

const scrollContainer = ref(null);
const currentSlide = ref(0);
const slidesPerView = ref(1);
const touchStartX = ref(0);
const touchEndX = ref(0);

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
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    slidesPerView.value = 2;
  } else {
    slidesPerView.value = 1;
  }
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});

const slideWidth = computed(() => 100 / slidesPerView.value);
const slideClass = computed(() => {
  return slidesPerView.value === 2 ? 'w-1/2' : 'w-full';
});

const maxSlide = computed(() => {
  return Math.ceil(servicesData.length / slidesPerView.value) - 1;
});

const paginationDots = computed(() => {
  return Array(maxSlide.value + 1).fill(0);
});

const getDotClass = (index) => {
  return currentSlide.value === index
    ? 'bg-[#273248] w-8'
    : 'bg-[#273248]/30';
};

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const swipeThreshold = 50;
  const diff = touchStartX.value - touchEndX.value;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }

  touchStartX.value = 0;
  touchEndX.value = 0;
};
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
