<template>
  <footer class="relative w-full bg-[#F9F9F9] py-10 md:py-12">
    <div class="max-w-[1220px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
        <div class="flex flex-col gap-2">
          <img
            class="w-[140px] md:w-[160px] h-auto"
            alt="Footer logo"
            src="/footerlogo.svg"
          />
          <p class="font-family-jakarta font-normal text-[#1e1d1b]/60 text-xs md:text-sm tracking-[-0.01em] leading-[1.5] max-w-xs">
            Ihr Partner für innovative und maßgeschneiderte Digitalisierungsstrategien.
          </p>
        </div>

        <div class="flex flex-col gap-1.5">
          <address class="font-family-jakarta font-normal text-[#1e1d1b]/60 text-xs md:text-sm tracking-[-0.01em] leading-[1.5] not-italic">
            Rathausallee 70, 22846 Norderstedt
          </address>
          <a
            href="mailto:info@data-fabricator.com"
            class="font-family-jakarta font-normal text-[#1e1d1b]/60 text-xs md:text-sm tracking-[-0.01em] leading-normal hover:text-[#1e1d1b] transition-colors"
          >
            info@data-fabricator.com
          </a>
        </div>
      </div>

      <div class="h-px bg-[#e5e5e5] my-5"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-2.5">
        <p class="font-family-jakarta font-normal text-[#1e1e1e]/50 text-[11px] tracking-[-0.01em] leading-[1.4] text-center md:text-left">
          © {{ currentYear }} Data Fabricator GmbH
        </p>
        <nav class="flex items-center flex-wrap justify-center gap-3 md:gap-4">
          <component
            v-for="(link, index) in legalLinks"
            :key="`legal-${index}`"
            :is="link.to ? 'router-link' : 'a'"
            :to="link.to"
            :href="link.href"
            class="font-family-jakarta font-normal text-[#1e1e1e]/50 text-[11px] tracking-[-0.01em] leading-[1.4] hover:text-[#1e1e1e] transition-colors"
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
