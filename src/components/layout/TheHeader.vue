<template>
  <Transition name="header-slide">
    <header
      v-show="isScrolled"
      class="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-3"
    >
      <div class="w-full mx-auto px-6 lg:px-12 xl:px-16">
        <div class="flex items-center justify-between">
          <img
            class="h-10"
            alt="Data Fabricator Logo"
            src="/logo_black.svg"
          />

          <nav class="hidden lg:flex items-center gap-8">
            <a
              v-for="(item, index) in items"
              :key="`nav-${index}`"
              :href="item.href"
              class="flex items-center cursor-pointer group relative"
            >
              <span
                :class="[
                  'font-jakarta relative transition-all duration-300 tracking-wide uppercase text-sm',
                  item.active ? 'font-bold text-navy-primary' : 'font-normal text-navy-primary/70 group-hover:text-navy-primary'
                ]"
              >
                {{ item.label }}
                <span
                  :class="[
                    'absolute -bottom-1 left-0 h-[2px] bg-navy-primary transition-all duration-300 ease-out',
                    item.active ? 'w-full' : 'w-0 group-hover:w-full'
                  ]"
                ></span>
              </span>
            </a>
          </nav>

          <button
            class="hidden md:flex items-center gap-2 transition-all duration-300 px-6 h-9 rounded-lg bg-navy-primary hover:bg-navy-secondary text-white"
          >
            <img class="w-4 h-4" alt="Language" src="/language.svg" />
            <span class="font-jakarta font-medium text-sm">ENG</span>
          </button>

          <button
            @click="toggleMenu"
            class="lg:hidden flex flex-col items-center justify-center w-9 h-9 z-30 group relative"
            aria-label="Toggle menu"
          >
            <span class="flex flex-col gap-1.5 w-5">
              <span
                :class="[
                  'h-0.5 w-full bg-navy-primary transition-all duration-300 ease-out transform origin-center',
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                ]"
              ></span>
              <span
                :class="[
                  'h-0.5 w-full bg-navy-primary transition-all duration-300 ease-out',
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                ]"
              ></span>
              <span
                :class="[
                  'h-0.5 w-full bg-navy-primary transition-all duration-300 ease-out transform origin-center',
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                ]"
              ></span>
            </span>
          </button>
        </div>

        <Transition name="slide-fade">
          <div
            v-if="isMenuOpen"
            class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden border-t border-gray-200 rounded-b-xl"
          >
            <nav class="flex flex-col p-5">
              <a
                v-for="(item, index) in items"
                :key="`mobile-nav-${index}`"
                :href="item.href"
                @click="closeMenu"
                class="flex items-center justify-between py-3.5 border-b last:border-0 border-gray-200 hover:bg-gray-100 group -mx-2 px-2 transition-all duration-200"
              >
                <span
                  :class="[
                    'font-jakarta text-base transition-colors duration-200',
                    item.active ? 'font-bold text-navy-primary' : 'font-normal text-navy-primary/70 group-hover:text-navy-primary'
                  ]"
                >
                  {{ item.label }}
                </span>
                <svg
                  class="w-4 h-4 text-navy-primary/40 group-hover:text-navy-primary/80 transform group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>

              <div class="mt-5 flex items-center justify-center gap-2 px-5 py-2.5 bg-navy-primary hover:bg-navy-secondary text-white transition-all duration-200 rounded">
                <img class="w-4 h-4" alt="Language" src="/language.svg" />
                <span class="font-jakarta font-medium text-sm">ENG</span>
              </div>
            </nav>
          </div>
        </Transition>
      </div>
    </header>
  </Transition>
</template>

<script setup>
import { useNavigation } from '@/composables';
import { navigationItems } from '@/data/navigation.data';

const { isMenuOpen, isScrolled, items, toggleMenu, closeMenu } = useNavigation(navigationItems);
</script>

<style scoped>
.header-slide-enter-active {
  transition: all 0.4s ease-out;
}

.header-slide-leave-active {
  transition: all 0.3s ease-in;
}

.header-slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.header-slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
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
  transform: translateY(-5px);
  opacity: 0;
}
</style>
