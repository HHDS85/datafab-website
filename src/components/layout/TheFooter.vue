<template>
  <footer class="relative w-full bg-navy-card py-20 lg:py-24">
    <div class="max-w-container mx-auto px-6 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 mb-16 lg:mb-20">
        <div class="flex flex-col gap-7">
          <img
            class="w-[180px] h-auto brightness-0 invert"
            alt="Data Fabricator Logo"
            src="/footerlogo.svg"
          />
          <p class="font-jakarta font-normal text-white/60 text-base leading-[1.7] max-w-[300px]">
            Ihr Partner für innovative und maßgeschneiderte Digitalisierungsstrategien.
          </p>
        </div>

        <div class="flex flex-col gap-6">
          <h3 class="font-jakarta font-semibold text-white text-base">
            Datenschutz
          </h3>
          <nav class="flex flex-col gap-3.5">
            <router-link
              v-for="(link, index) in legalLinks"
              :key="`legal-${index}`"
              :to="link.to"
              class="font-jakarta font-normal text-white/70 text-[15px] transition-all duration-300 w-fit cursor-pointer group relative"
            >
              <span class="relative group-hover:text-white">
                {{ link.label }}
                <span class="absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
              </span>
            </router-link>
          </nav>
        </div>
      </div>

      <div class="h-px bg-white/10 mb-7"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-jakarta font-normal text-white/40 text-sm text-center md:text-left">
          © {{ currentYear }} {{ COMPANY_INFO.NAME }}. Alle Rechte vorbehalten.
        </p>
        <div class="flex items-center gap-4">
          <a
            :href="EXTERNAL_LINKS.LINKEDIN"
            class="text-white/40 hover:text-white/70 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { EXTERNAL_LINKS, ROUTE_PATHS } from '@/constants';

const COMPANY_INFO = {
  NAME: 'Data Fabricator GmbH'
};

const currentYear = computed(() => new Date().getFullYear());

const legalLinks = [
  { label: 'Impressum', to: ROUTE_PATHS.IMPRESSUM },
  { label: 'Datenschutz', to: ROUTE_PATHS.DATENSCHUTZ },
  { label: 'AGB', to: ROUTE_PATHS.AGB }
];
</script>
