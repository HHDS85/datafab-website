<template>
  <section ref="sectionRef" id="faq" class="relative w-full py-16 md:py-20 lg:py-24 scroll-animate">
    <div class="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        <div class="flex flex-col gap-8">
          <h2 class="font-family-roboto font-light text-[#1e1d1b] text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.15]">
            FAQ
          </h2>

          <p class="font-family-jakarta font-normal text-[#0f0e0e] text-base md:text-lg leading-[1.7] tracking-normal max-w-md">
            Weiterführende und ausführliche Informationen findest du auf
            unserer FAQ-Seite.
          </p>
        </div>

        <div class="flex flex-col">
          <div class="w-full">
            <div
              v-for="(item, index) in faqsData"
              :key="item.id"
              class="border-b border-[#e5e5e5]"
            >
              <button
                @click="toggleItem(item.id)"
                class="w-full py-5 md:py-6 flex items-center justify-between text-left group transition-all duration-200"
                :aria-expanded="openItem === item.id"
              >
                <span class="font-family-jakarta font-medium text-[#1e1e1e] text-base md:text-lg lg:text-xl tracking-[-0.01em] leading-normal pr-3 md:pr-4 group-hover:text-[#273247] transition-colors duration-200">
                  {{ item.question }}
                </span>
                <div
                  class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-gray-200"
                  :class="{ 'rotate-180 bg-gray-200': openItem === item.id }"
                >
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-gray-700 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </button>

              <Transition
                name="accordion"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
              >
                <div
                  v-show="openItem === item.id"
                  class="overflow-hidden"
                >
                  <div class="pb-5 md:pb-6 pr-12">
                    <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base tracking-[-0.01em] leading-[1.65]">
                      {{ item.answer }}
                    </p>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { faqsData } from '@/data/faqs';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const sectionRef = ref(null);
useScrollAnimation(sectionRef);

const openItem = ref(faqsData.find(item => item.defaultOpen)?.id || null);

const toggleItem = (id) => {
  openItem.value = openItem.value === id ? null : id;
};

const enter = (element) => {
  const width = getComputedStyle(element).width;
  element.style.width = width;
  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.height = 'auto';

  const height = getComputedStyle(element).height;

  element.style.width = null;
  element.style.position = null;
  element.style.visibility = null;
  element.style.height = 0;

  requestAnimationFrame(() => {
    element.style.height = height;
  });
};

const afterEnter = (element) => {
  element.style.height = 'auto';
};

const leave = (element) => {
  const height = getComputedStyle(element).height;
  element.style.height = height;

  requestAnimationFrame(() => {
    element.style.height = 0;
  });
};
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}

.font-family-inter {
  font-family: 'Inter', Helvetica, sans-serif;
}

.accordion-enter-active {
  transition: height 0.45s cubic-bezier(0.34, 1.26, 0.64, 1), opacity 0.35s ease-in;
  overflow: hidden;
}

.accordion-leave-active {
  transition: height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-out;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
}
</style>
