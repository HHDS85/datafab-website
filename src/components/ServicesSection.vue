<template>
  <section ref="sectionRef" id="leistungen" class="relative w-full py-16 md:py-20 lg:py-24 scroll-animate">
    <div class="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
      <div class="mb-10 md:mb-12 flex items-start justify-between">
        <div>
          <p class="font-family-jakarta font-medium text-[#1e1d1b] text-sm tracking-[0.05em] uppercase leading-[27.9px] mb-6 md:mb-8">
            SERVICES
          </p>
          <h2 class="font-family-roboto font-light text-[#273247] text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.15]">
            Unsere Leistungen
            <br />
            im Überblick
          </h2>
        </div>
        <div class="hidden lg:flex gap-3 mt-auto mb-2">
          <button
            @click="scrollLeft"
            class="w-11 md:w-12 h-11 md:h-12 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center transition-all"
            aria-label="Scroll left"
          >
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            @click="scrollRight"
            class="w-11 md:w-12 h-11 md:h-12 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center transition-all"
            aria-label="Scroll right"
          >
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="relative mb-12 md:mb-14 -mr-6 md:-mr-8 lg:-mr-12">
        <div ref="scrollContainer" class="hidden lg:flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          <div
            v-for="(service, index) in servicesData"
            :key="index"
            class="bg-[#273248] rounded-[9px] min-h-[340px] flex flex-col flex-shrink-0 w-[280px] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          >
            <div class="p-8 flex flex-col h-full">
              <div class="mb-auto">
                <span class="font-family-jakarta font-normal text-white/60 text-lg tracking-normal leading-normal">
                  {{ service.number }}
                </span>
              </div>
              <div class="flex flex-col gap-4 mt-8">
                <h3 class="font-family-jakarta font-semibold text-white text-xl tracking-normal leading-[1.3] whitespace-pre-line min-h-[56px] flex items-start">
                  {{ service.title }}
                </h3>
                <p class="font-family-jakarta font-normal text-white/75 text-base leading-[1.6] tracking-normal min-h-[96px]">
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
                <div class="bg-[#273248] rounded-[9px] min-h-[340px] flex flex-col">
                  <div class="p-8 flex flex-col h-full">
                    <div class="mb-auto">
                      <span class="font-family-jakarta font-normal text-white/60 text-lg tracking-normal leading-normal">
                        {{ service.number }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-4 mt-8">
                      <h3 class="font-family-jakarta font-semibold text-white text-xl tracking-normal leading-[1.3]">
                        {{ service.title }}
                      </h3>
                      <p class="font-family-jakarta font-normal text-white/75 text-base leading-[1.6] tracking-normal">
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

      <div class="flex justify-start">
        <button class="bg-[#242528] hover:bg-[#242528]/90 text-white rounded-[22px] h-[43px] px-7 font-family-jakarta font-normal text-lg leading-[27px] tracking-normal transition-all duration-300 hover:shadow-lg hover:scale-105 min-w-[180px]">
          Leistungskatalog
        </button>
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
