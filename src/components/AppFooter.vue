<template>
  <footer class="relative w-full bg-transparent py-8 md:py-10 px-4 md:px-6">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-6 md:mb-8">
        <div class="flex flex-col gap-3">
          <img
            class="w-[160px] md:w-[180px] h-auto"
            alt="Footer logo"
            src="/footerlogo.svg"
          />
          <p class="font-family-jakarta font-normal text-[#1e1d1b]/70 text-sm md:text-base tracking-[-0.01em] leading-[1.5] max-w-sm">
            Ihr Partner für innovative und maßgeschneiderte Digitalisierungsstrategien.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <address class="font-family-jakarta font-normal text-[#1e1d1b]/70 text-sm md:text-base tracking-[-0.01em] leading-[1.6] not-italic">
            Rathausallee 70<br />
            22846 Norderstedt
          </address>
          <a
            href="mailto:info@data-fabricator.com"
            class="font-family-jakarta font-normal text-[#1e1d1b]/70 text-sm md:text-base tracking-[-0.01em] leading-normal hover:text-[#1e1d1b] transition-colors underline decoration-[#1e1d1b]/30 hover:decoration-[#1e1d1b] underline-offset-2"
          >
            info@data-fabricator.com
          </a>
        </div>
      </div>

      <div class="h-px bg-[#e5e5e5] mb-4"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p class="font-family-jakarta font-normal text-[#1e1e1e]/60 text-xs tracking-[-0.01em] leading-[1.5] text-center md:text-left">
          Copyright © {{ currentYear }} Data Fabricator GmbH
        </p>
        <nav class="flex items-center flex-wrap justify-center gap-4 md:gap-5">
          <component
            v-for="(link, index) in legalLinks"
            :key="`legal-${index}`"
            :is="link.to ? 'router-link' : 'a'"
            :to="link.to"
            :href="link.href"
            class="font-family-jakarta font-normal text-[#1e1e1e]/60 text-xs tracking-[-0.01em] leading-[1.5] hover:text-[#1e1e1e] transition-colors underline decoration-[#1e1d1b]/20 hover:decoration-[#1e1d1b] underline-offset-2"
          >
            {{ link.label }}
          </component>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const legalLinks = [
  { label: 'Impressum', to: '/impressum' },
  { label: 'AGB', href: '#' },
  { label: 'Kontakt', href: '#kontakt' }
];
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}
</style>
