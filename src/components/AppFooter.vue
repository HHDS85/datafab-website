<template>
  <footer class="relative w-full bg-transparent py-8 md:py-12 px-4 md:px-6">
    <div class="max-w-[1260px] mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 mb-12 md:mb-16">
        <div class="flex flex-col gap-4 md:gap-6 sm:col-span-2 lg:col-span-1">
          <img
            class="w-[180px] md:w-[244px] h-auto"
            alt="Footer logo"
            src="/footerlogo.svg"
          />
          <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base md:text-lg tracking-[0] leading-[27.9px]">
            Ihr Partner für innovative <br />
            und maßgeschneiderte Digitalisierungsstrategien.
          </p>
        </div>

        <div class="flex flex-col gap-6 md:gap-8">
          <h3 class="font-family-roboto font-normal text-[#1e1d1b] text-xl md:text-2xl tracking-[0] leading-[37.2px]">
            Über Data Fabricator
          </h3>
          <nav class="flex flex-col gap-3 md:gap-[15px]">
            <a
              v-for="(link, index) in aboutLinks"
              :key="`about-${index}`"
              href="#"
              class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base md:text-lg tracking-[0] leading-[27.9px] hover:text-[#1e1d1b] transition-colors relative inline-block w-fit group"
            >
              {{ link.label }}
              <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1e1d1b] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        <div class="flex flex-col gap-6 md:gap-8">
          <h3 class="font-family-roboto font-normal text-[#1e1d1b] text-xl md:text-2xl tracking-[0] leading-[37.2px]">
            Leistungen
          </h3>
          <nav class="flex flex-col gap-3 md:gap-[15px]">
            <a
              v-for="(link, index) in servicesLinks"
              :key="`service-${index}`"
              href="#"
              class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base md:text-lg tracking-[0] leading-[27.9px] hover:text-[#1e1d1b] transition-colors relative inline-block w-fit group"
            >
              {{ link.label }}
              <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1e1d1b] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        <div class="flex flex-col gap-6 md:gap-8">
          <h3 class="font-family-roboto font-normal text-[#1e1d1b] text-xl md:text-2xl tracking-[0] leading-[37.2px]">
            Unser Büro
          </h3>
          <div class="flex flex-col gap-4 md:gap-6">
            <div class="flex items-center gap-3 md:gap-4">
              <img
                class="w-5 md:w-6 h-5 md:h-6 flex-shrink-0"
                alt="Email icon"
                src="/ph-envelope-fill.svg"
              />
              <a
                href="mailto:info@data-fabricator.com"
                class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base lg:text-lg tracking-[0] leading-normal hover:text-[#1e1d1b] transition-colors break-all"
              >
                info@data-fabricator.com
              </a>
            </div>
            <div class="flex items-start gap-3 md:gap-4">
              <img
                class="w-5 md:w-6 h-5 md:h-6 flex-shrink-0 mt-1"
                alt="Location icon"
                src="/ph-map-pin-line-fill.svg"
              />
              <address class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-base md:text-lg tracking-[0] leading-6 not-italic">
                Rathausallee 70 <br />
                22846 Norderstedt
              </address>
            </div>
          </div>
        </div>
      </div>

      <div class="h-px bg-[#e5e5e5] mb-4 md:mb-6"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-family-jakarta font-normal text-[#1e1e1e]/80 text-sm md:text-base tracking-[0] leading-[24.8px] text-center md:text-left">
          Copyright {{ currentYear }} Data Fabricator GmbH. All rights reserved.
        </p>
        <nav class="flex items-center flex-wrap justify-center gap-4 md:gap-[25px]">
          <a
            v-for="(link, index) in legalLinks"
            :key="`legal-${index}`"
            href="#"
            class="font-family-jakarta font-normal text-[#1e1e1e]/80 text-sm md:text-base tracking-[0] leading-[24.8px] hover:text-[#1e1e1e] transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const aboutLinks = [
  { label: 'Unternehmen' },
  { label: 'Über uns' },
  { label: 'FAQ' }
];

const servicesLinks = [
  { label: 'Beratung' },
  { label: 'Datenanalyse' },
  { label: 'Datenvisualisierung' },
  { label: 'Automatisierung' }
];

const legalLinks = [
  { label: 'Impressum' },
  { label: 'AGB' },
  { label: 'Kontakt' }
];
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
