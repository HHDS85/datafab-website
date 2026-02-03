<template>
  <section ref="sectionRef" id="leistungen" class="relative w-full py-28 xl:py-32 scroll-animate">
    <div class="max-w-[1920px] mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24">
      <div class="mb-16 flex items-start justify-between">
        <div>
          <p class="font-family-jakarta font-medium text-[#1e1d1b] text-sm xl:text-[15px] tracking-[0.05em] uppercase mb-8">
            SERVICES
          </p>
          <h2 class="font-family-roboto font-light text-[#273247] text-6xl xl:text-7xl tracking-tight leading-[1.15]">
            Unsere Leistungen
            <br />
            im Überblick
          </h2>
        </div>
        <div class="hidden lg:flex items-center justify-between gap-14 mt-auto mb-2">
          <button
            @click="scrollLeft"
            class="nav-arrow nav-arrow-left w-10 h-10 flex items-center justify-center transition-all duration-300"
            aria-label="Scroll left"
          >
          </button>
          <button
            @click="scrollRight"
            class="nav-arrow nav-arrow-right w-10 h-10 flex items-center justify-center transition-all duration-300"
            aria-label="Scroll right"
          >
          </button>
        </div>
      </div>

      <div class="relative mb-16 -mr-8 lg:-mr-16 xl:-mr-20 2xl:-mr-24">
        <div ref="scrollContainer" class="hidden lg:flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          <div
            v-for="(service, index) in servicesData"
            :key="index"
            class="bg-[#273248] min-h-[400px] xl:min-h-[420px] flex flex-col flex-shrink-0 w-[320px] xl:w-[360px] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          >
            <div class="p-9 xl:p-10 pb-8 flex flex-col h-full">
              <div class="mb-5">
                <span class="font-family-jakarta font-normal text-white/60 text-xl">
                  {{ service.number }}
                </span>
              </div>
              <div class="flex flex-col gap-6">
                <h3 class="font-family-jakarta font-semibold text-white text-xl xl:text-2xl leading-[1.4] whitespace-pre-line min-h-[60px] flex items-start">
                  {{ service.title }}
                </h3>
                <p class="font-family-jakarta font-normal text-white/75 text-base xl:text-lg leading-[1.6]">
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
                <div class="bg-[#273248] min-h-[380px] flex flex-col">
                  <div class="p-8 pb-7 flex flex-col h-full">
                    <div class="mb-4">
                      <span class="font-family-jakarta font-normal text-white/60 text-lg">
                        {{ service.number }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-5">
                      <h3 class="font-family-jakarta font-semibold text-white text-xl leading-[1.4]">
                        {{ service.title }}
                      </h3>
                      <p class="font-family-jakarta font-normal text-white/75 text-base leading-[1.6]">
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
              class="w-10 h-10 flex items-center justify-center bg-[#273248]/10 hover:bg-[#273248]/20 transition-colors"
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
                class="h-2 transition-all duration-300"
                :class="getDotClass(index)"
              ></button>
            </div>

            <button
              @click="nextSlide"
              class="w-10 h-10 flex items-center justify-center bg-[#273248]/10 hover:bg-[#273248]/20 transition-colors"
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
