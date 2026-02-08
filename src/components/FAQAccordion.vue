<template>
  <section ref="sectionRef" id="faq" class="relative w-full py-20 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20">
        <div class="flex flex-col gap-8">
          <h2 class="font-family-roboto font-light text-[#1e1d1b] text-4xl md:text-5xl tracking-tight leading-[1.15]">
            {{ t('faqs.title') }}
          </h2>

          <p class="font-family-jakarta font-normal text-[#0f0e0e] text-base leading-[1.7] max-w-md">
            {{ t('faqs.subtitle') }}
          </p>
        </div>

        <div class="flex flex-col">
          <div class="w-full">
            <div
              v-for="(item, index) in faqItems"
              :key="index"
              class="border-b border-[#e5e5e5]"
            >
              <button
                @click="toggleItem(index)"
                class="w-full py-6 flex items-center justify-between text-left group transition-all duration-200"
                :aria-expanded="openItem === index"
              >
                <span class="font-family-jakarta font-medium text-[#1e1e1e] text-lg md:text-xl tracking-tight leading-normal pr-3 group-hover:text-[#273247] transition-colors duration-200">
                  {{ item.question }}
                </span>
                <div class="flex-shrink-0 w-9 h-9 flex items-center justify-center transition-all duration-300 ease-out">
                  <img
                    :src="openItem === index ? '/expandbutton01.png' : '/expandbutton02.png'"
                    :alt="openItem === index ? 'Collapse' : 'Expand'"
                    class="w-full h-full transition-all duration-300"
                  />
                </div>
              </button>

              <div
                class="accordion-content"
                :class="{ 'accordion-open': openItem === index }"
              >
                <div class="accordion-inner">
                  <div class="pb-6 pr-10">
                    <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base leading-[1.65]">
                      {{ item.answer }}
                    </p>
                  </div>
                </div>
              </div>
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

const faqItems = computed(() => t('faqs.items'));

const openItem = ref(0);

const toggleItem = (index) => {
  openItem.value = openItem.value === index ? null : index;
};
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-open {
  max-height: 500px;
}

.accordion-inner {
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease-out 0.1s, transform 0.3s ease-out 0.1s;
}

.accordion-open .accordion-inner {
  opacity: 1;
  transform: translateY(0);
}
</style>
