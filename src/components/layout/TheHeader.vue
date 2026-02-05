<template>
  <header
    :class="[
      'fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out',
      isScrolled ? 'bg-white/85 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    ]"
  >
    <div
      :class="[
        'w-full mx-auto transition-all duration-500',
        isScrolled ? 'px-6 lg:px-12 xl:px-16' : 'px-10 lg:px-16 xl:px-20 2xl:px-24'
      ]"
    >
      <div class="flex items-center justify-between">
        <img
          class="h-10 transition-all duration-300"
          alt="Data Fabricator Logo"
          src="/logo-datafabrictor.svg"
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
                isScrolled
                  ? (item.active ? 'font-bold text-navy-primary' : 'font-normal text-navy-primary/70 group-hover:text-navy-primary')
                  : (item.active ? 'font-bold text-white' : 'font-normal text-white/90 group-hover:text-white')
              ]"
            >
              {{ item.label }}
              <span
                :class="[
                  'absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-out',
                  isScrolled ? 'bg-navy-primary' : 'bg-white',
                  item.active ? 'w-full' : 'w-0 group-hover:w-full'
                ]"
              ></span>
            </span>
          </a>
        </nav>

        <button
          :class="[
            'hidden md:flex items-center gap-2 transition-all duration-300 px-6 h-9 rounded-lg',
            isScrolled
              ? 'bg-navy-primary hover:bg-navy-secondary text-white'
              : 'bg-dark-button hover:bg-dark-button-hover text-white'
          ]"
        >
          <img
            class="w-4 h-4"
            alt="Language"
            src="/language.svg"
          />
          <span class="font-jakarta font-medium text-sm">DE</span>
        </button>

        <button
          @click="toggleMenu"
          class="lg:hidden flex flex-col items-center justify-center w-9 h-9 z-30 group relative"
          aria-label="Toggle menu"
        >
          <span class="flex flex-col gap-1.5 w-5">
            <span
              :class="[
                'h-0.5 w-full transition-all duration-300 ease-out transform origin-center',
                isScrolled ? 'bg-navy-primary' : 'bg-white',
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              ]"
            ></span>
            <span
              :class="[
                'h-0.5 w-full transition-all duration-300 ease-out',
                isScrolled ? 'bg-navy-primary' : 'bg-white',
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              ]"
            ></span>
            <span
              :class="[
                'h-0.5 w-full transition-all duration-300 ease-out transform origin-center',
                isScrolled ? 'bg-navy-primary' : 'bg-white',
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              ]"
            ></span>
          </span>
        </button>
      </div>

      <Transition name="slide-fade">
        <div
          v-if="isMenuOpen"
          :class="[
            'lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl shadow-xl overflow-hidden border-t rounded-b-xl',
            isScrolled ? 'bg-white/95 border-gray-200' : 'bg-navy-primary/98 border-white/10'
          ]"
        >
          <nav class="flex flex-col p-5">
            <a
              v-for="(item, index) in items"
              :key="`mobile-nav-${index}`"
              :href="item.href"
              @click="closeMenu"
              :class="[
                'flex items-center justify-between py-3.5 border-b last:border-0 group -mx-2 px-2 transition-all duration-200',
                isScrolled
                  ? 'border-gray-200 hover:bg-gray-100'
                  : 'border-white/10 hover:bg-white/5'
              ]"
            >
              <span
                :class="[
                  'font-jakarta text-base transition-colors duration-200',
                  isScrolled
                    ? (item.active ? 'font-bold text-navy-primary' : 'font-normal text-navy-primary/70 group-hover:text-navy-primary')
                    : (item.active ? 'font-bold text-white' : 'font-normal text-white/80 group-hover:text-white')
                ]"
              >
                {{ item.label }}
              </span>
              <svg
                :class="[
                  'w-4 h-4 transform group-hover:translate-x-1 transition-all duration-200',
                  isScrolled ? 'text-navy-primary/40 group-hover:text-navy-primary/80' : 'text-white/40 group-hover:text-white/80'
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <div
              :class="[
                'mt-5 flex items-center justify-center gap-2 px-5 py-2.5 transition-all duration-200 rounded',
                isScrolled
                  ? 'bg-navy-primary hover:bg-navy-secondary text-white'
                  : 'bg-dark-button hover:bg-dark-button-hover text-white'
              ]"
            >
              <img class="w-4 h-4" alt="Language" src="/language.svg" />
              <span class="font-jakarta font-medium text-sm">DE</span>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { useNavigation } from '@/composables';
import { navigationItems } from '@/data/navigation.data';

const { isMenuOpen, isScrolled, items, toggleMenu, closeMenu } = useNavigation(navigationItems);
</script>

<style scoped>
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
