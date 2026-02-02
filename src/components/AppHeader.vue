<template>
  <header class="fixed top-4 md:top-6 left-4 md:left-8 lg:left-12 right-4 md:right-8 lg:right-12 flex items-center justify-between gap-4 md:gap-[50px] z-50 px-6 md:px-8 lg:px-12 py-5 md:py-6 lg:py-8 transition-all duration-300 ease-out rounded-[20px] md:rounded-[28px]" :class="{ 'bg-[#071B3A]/95 backdrop-blur-md shadow-xl py-2 md:py-3 top-2': isScrolled }">
    <div class="flex items-center gap-4 md:gap-[92px] flex-1">
      <img
        class="transition-all duration-300 ease-out"
        :class="isScrolled ? 'w-[120px] md:w-[160px] lg:w-[200px]' : 'w-[180px] md:w-[240px] lg:w-[300px]'"
        alt="Logo datafabrictor"
        src="/logo-datafabrictor.svg"
      />

      <nav class="hidden lg:flex items-center gap-[40px] flex-1 justify-end">
        <a
          v-for="(item, index) in navigationItems"
          :key="`nav-${index}`"
          :href="item.href"
          class="flex items-center gap-[11.5px] cursor-pointer group relative transform transition-transform duration-200 hover:scale-105"
        >
          <span
            :class="[
              'font-family-jakarta relative transition-all duration-300',
              item.active ? 'font-bold text-white' : 'font-normal text-white/90 group-hover:text-white',
              'tracking-wide uppercase whitespace-nowrap',
              isScrolled ? 'text-sm leading-[22px]' : 'text-base leading-[25.2px]'
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ease-out',
                item.active ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </span>
        </a>
      </nav>
    </div>

    <button
      class="hidden md:flex items-center gap-2 bg-[#242528] rounded-[99px] hover:bg-[#242528]/90 transition-all duration-500"
      :class="isScrolled ? 'px-4 lg:px-6 h-8 lg:h-10' : 'px-6 lg:px-10 h-10 lg:h-12'"
    >
      <img
        class="transition-all duration-500"
        :class="isScrolled ? 'w-4 h-4' : 'w-5 lg:w-6 h-5 lg:h-6'"
        alt="Language"
        src="/language.svg"
      />
      <span class="font-family-jakarta font-medium text-white transition-all duration-500" :class="isScrolled ? 'text-xs' : 'text-sm'">
        DE
      </span>
    </button>

    <button
      @click="toggleMenu"
      class="lg:hidden flex flex-col items-center justify-center w-10 h-10 text-white z-30 group"
      aria-label="Toggle menu"
    >
      <span class="flex flex-col gap-1.5 w-6">
        <span
          class="h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out transform origin-center"
          :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out"
          :class="isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
        ></span>
        <span
          class="h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-out transform origin-center"
          :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </span>
    </button>

    <Transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 mt-4 bg-[#071B3A]/98 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10"
      >
        <nav class="flex flex-col p-6">
          <a
            v-for="(item, index) in navigationItems"
            :key="`mobile-nav-${index}`"
            :href="item.href"
            @click="closeMenu"
            class="flex items-center justify-between py-4 border-b border-white/10 last:border-0 group hover:bg-white/5 -mx-2 px-2 rounded-lg transition-all duration-200"
          >
            <span
              :class="[
                'font-family-jakarta',
                item.active ? 'font-bold text-white' : 'font-normal text-white/80 group-hover:text-white',
                'text-lg tracking-[-0.36px] leading-[25.2px] transition-colors duration-200'
              ]"
            >
              {{ item.label }}
            </span>
            <svg class="w-5 h-5 text-white/40 group-hover:text-white/80 transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <div class="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-[#242528] rounded-[99px] hover:bg-[#242528]/80 transition-all duration-200">
            <img class="w-5 h-5" alt="Language" src="/language.svg" />
            <span class="font-family-jakarta font-medium text-white text-sm">
              DE
            </span>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { navigationItems } from '@/data/navigation';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.slide-fade-enter-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  transform: translateY(-15px) scale(0.95);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px) scale(0.97);
  opacity: 0;
}
</style>
