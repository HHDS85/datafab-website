<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
      aria-label="Language switcher"
    >
      <img src="/language.svg" alt="" class="w-5 h-5" />
      <span class="font-family-jakarta text-sm font-medium uppercase">{{ locale }}</span>
      <svg
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-32 bg-[#273248] rounded-lg shadow-xl border border-white/10 overflow-hidden z-50"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="w-full px-4 py-3 text-left font-family-jakarta text-sm hover:bg-white/5 transition-colors duration-200 flex items-center justify-between"
          :class="{ 'bg-white/10': locale === lang.code }"
        >
          <span>{{ lang.name }}</span>
          <span v-if="locale === lang.code" class="text-green-400">✓</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '@/composables/core/useI18n';

const { locale, setLocale } = useI18n();
const isOpen = ref(false);

const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' }
];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const changeLanguage = (code) => {
  setLocale(code);
  isOpen.value = false;
};

const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}
</style>
