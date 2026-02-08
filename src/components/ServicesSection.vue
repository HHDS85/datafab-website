<template>
  <section ref="sectionRef" id="leistungen" class="relative w-full py-16 md:py-20 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="mb-10 md:mb-12 lg:mb-14 flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8">
        <div>
          <p class="font-family-jakarta font-medium text-[#1e1d1b] text-xs tracking-[0.05em] uppercase mb-6 md:mb-7">
            {{ t('services.label') }}
          </p>
          <h2 class="font-family-roboto font-light text-[#273247] text-4xl md:text-5xl tracking-tight leading-[1.15]">
            {{ t('services.title') }}
            <br />
            {{ t('services.subtitle') }}
          </h2>
        </div>
        <div class="hidden lg:flex items-center justify-between gap-12 mt-auto mb-2">
          <button
            @click="scrollLeft"
            class="nav-arrow w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
            aria-label="Scroll left"
          >
            <svg class="w-6 h-6 text-[#273247]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="scrollRight"
            class="nav-arrow w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-70"
            aria-label="Scroll right"
          >
            <svg class="w-6 h-6 text-[#273247]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
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
            class="bg-[#273248] min-h-[320px] lg:min-h-[340px] flex flex-col flex-shrink-0 w-[260px] lg:w-[280px] xl:w-[300px] rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          >
            <div class="p-6 lg:p-7 xl:p-8 flex flex-col h-full">
              <div class="mb-4">
                <span class="font-family-jakarta font-normal text-white/60 text-base lg:text-lg">
                  {{ service.number }}
                </span>
              </div>
              <div class="flex flex-col gap-4 lg:gap-5">
                <h3 class="font-family-jakarta font-semibold text-white text-base lg:text-lg xl:text-xl leading-[1.4] whitespace-pre-line min-h-[48px] lg:min-h-[52px] flex items-start">
                  {{ t(service.titleKey) }}
                </h3>
                <p class="font-family-jakarta font-normal text-white/75 text-sm xl:text-base leading-[1.6]">
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
                <div class="bg-[#273248] min-h-[320px] md:min-h-[340px] flex flex-col rounded-xl shadow-lg">
                  <div class="p-6 md:p-7 flex flex-col h-full">
                    <div class="mb-3 md:mb-3.5">
                      <span class="font-family-jakarta font-normal text-white/60 text-sm md:text-base">
                        {{ service.number }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-3.5 md:gap-4">
                      <h3 class="font-family-jakarta font-semibold text-white text-base md:text-lg leading-[1.4] whitespace-pre-line">
                        {{ t(service.titleKey) }}
                      </h3>
                      <p class="font-family-jakarta font-normal text-white/75 text-sm leading-[1.6]">
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
              <svg class="w-5 h-5 text-[#273248]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
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
              <svg class="w-5 h-5 text-[#273248]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
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
import { useScrollAnimation } from '@/composables';
import { useI18n } from '@/composables/core/useI18n';

const { t } = useI18n();
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
    : 'bg-[#273248]/30 w-2';
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

.nav-arrow {
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
