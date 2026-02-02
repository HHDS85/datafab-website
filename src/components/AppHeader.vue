<template>
  <header class="fixed top-4 md:top-6 left-4 md:left-8 lg:left-12 right-4 md:right-8 lg:right-12 flex items-center justify-between gap-4 md:gap-[50px] z-50 px-6 md:px-8 lg:px-12 py-5 md:py-6 lg:py-8 transition-all duration-500 ease-in-out rounded-[20px] md:rounded-[28px]" :class="{ 'bg-[#071B3A]/95 backdrop-blur-md shadow-2xl py-3 md:py-4 top-2 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12': isScrolled }">
    <div class="flex items-center gap-4 md:gap-[92px] flex-1">
      <img
        class="transition-all duration-500 ease-in-out"
        :class="isScrolled ? 'w-[140px] md:w-[180px] lg:w-[220px]' : 'w-[180px] md:w-[240px] lg:w-[300px]'"
        alt="Logo datafabrictor"
        src="/logo-datafabrictor.svg"
      />

      <nav class="hidden lg:flex items-center gap-[40px] flex-1 justify-end">
        <a
          v-for="(item, index) in navigationItems"
          :key="`nav-${index}`"
          :href="item.href"
          class="flex items-center gap-[11.5px] cursor-pointer group relative"
        >
          <span
            :class="[
              'font-family-jakarta relative transition-all duration-500',
              item.active ? 'font-bold text-white' : 'font-normal text-white/90 group-hover:text-white',
              'tracking-wide uppercase whitespace-nowrap',
              isScrolled ? 'text-sm leading-[22px]' : 'text-base leading-[25.2px]'
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ease-out',
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
      class="lg:hidden flex items-center justify-center w-10 h-10 text-white z-30"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!isMenuOpen"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <Transition name="slide-fade">
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 mt-4 bg-[#071B3A]/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden"
      >
        <nav class="flex flex-col p-6">
          <a
            v-for="(item, index) in navigationItems"
            :key="`mobile-nav-${index}`"
            :href="item.href"
            @click="closeMenu"
            class="flex items-center justify-between py-4 border-b border-white/10 last:border-0"
          >
            <span
              :class="[
                'font-family-jakarta',
                item.active ? 'font-bold text-white' : 'font-normal text-white/80',
                'text-lg tracking-[-0.36px] leading-[25.2px] transition-colors'
              ]"
            >
              {{ item.label }}
            </span>
          </a>

          <div class="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-[#242528] rounded-[99px]">
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
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
