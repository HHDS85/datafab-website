<template>
  <section ref="sectionRef" id="faq" class="relative w-full py-24 scroll-animate">
    <div class="max-w-[1440px] mx-auto px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div class="flex flex-col gap-8">
          <h2 class="font-family-roboto font-light text-[#1e1d1b] text-6xl tracking-tight leading-[1.15]">
            FAQ
          </h2>

          <p class="font-family-jakarta font-normal text-[#0f0e0e] text-lg leading-[1.7] max-w-md">
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
                class="w-full py-6 flex items-center justify-between text-left group transition-all duration-200"
                :aria-expanded="openItem === item.id"
              >
                <span class="font-family-jakarta font-medium text-[#1e1e1e] text-xl tracking-tight leading-normal pr-4 group-hover:text-[#273247] transition-colors duration-200">
                  {{ item.question }}
                </span>
                <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300 ease-out">
                  <img
                    :src="openItem === item.id ? '/expandicon2.svg' : '/expandicon1.svg'"
                    :alt="openItem === item.id ? 'Collapse' : 'Expand'"
                    class="w-full h-full transition-all duration-300"
                  />
                </div>
              </button>

              <div
                class="accordion-content"
                :class="{ 'accordion-open': openItem === item.id }"
              >
                <div class="accordion-inner">
                  <div class="pb-6 pr-12">
                    <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base leading-[1.65]">
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
import { ref } from 'vue';
import { faqsData } from '@/data/faqs';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const sectionRef = ref(null);
useScrollAnimation(sectionRef);

const openItem = ref(faqsData.find(item => item.defaultOpen)?.id || null);

const toggleItem = (id) => {
  openItem.value = openItem.value === id ? null : id;
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
