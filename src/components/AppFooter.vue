<template>
  <footer class="relative w-full bg-transparent py-8 md:py-10 px-4 md:px-6">
    <div class="max-w-[1260px] mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 mb-8 md:mb-10">
        <div class="flex flex-col gap-3 md:gap-4 sm:col-span-2 lg:col-span-1">
          <img
            class="w-[160px] md:w-[200px] h-auto"
            alt="Footer logo"
            src="/footerlogo.svg"
          />
          <p class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base tracking-[-0.01em] leading-[1.6]">
            Ihr Partner für innovative <br />
            und maßgeschneiderte Digitalisierungsstrategien.
          </p>
        </div>

        <div class="flex flex-col gap-4 md:gap-5">
          <h3 class="font-family-roboto font-normal text-[#1e1d1b] text-lg md:text-xl tracking-[-0.01em] leading-[1.4]">
            Über Data Fabricator
          </h3>
          <nav class="flex flex-col gap-2.5 md:gap-3">
            <a
              v-for="(link, index) in aboutLinks"
              :key="`about-${index}`"
              href="#"
              class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base tracking-[-0.01em] leading-[1.6] hover:text-[#1e1d1b] transition-colors relative inline-block w-fit group"
            >
              {{ link.label }}
              <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1e1d1b] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        <div class="flex flex-col gap-4 md:gap-5">
          <h3 class="font-family-roboto font-normal text-[#1e1d1b] text-lg md:text-xl tracking-[-0.01em] leading-[1.4]">
            Leistungen
          </h3>
          <nav class="flex flex-col gap-2.5 md:gap-3">
            <a
              v-for="(link, index) in servicesLinks"
              :key="`service-${index}`"
              href="#"
              class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base tracking-[-0.01em] leading-[1.6] hover:text-[#1e1d1b] transition-colors relative inline-block w-fit group"
            >
              {{ link.label }}
              <span class="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1e1d1b] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        <div class="flex flex-col gap-4 md:gap-5">
          <h3 class="font-family-roboto font-normal text-[#1e1d1b] text-lg md:text-xl tracking-[-0.01em] leading-[1.4]">
            Unser Büro
          </h3>
          <div class="flex flex-col gap-3 md:gap-4">
            <div class="flex items-center gap-2.5 md:gap-3">
              <img
                class="w-4 md:w-5 h-4 md:h-5 flex-shrink-0"
                alt="Email icon"
                src="/ph-envelope-fill.svg"
              />
              <a
                href="mailto:info@data-fabricator.com"
                class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base tracking-[-0.01em] leading-normal hover:text-[#1e1d1b] transition-colors break-all"
              >
                info@data-fabricator.com
              </a>
            </div>
            <div class="flex items-start gap-2.5 md:gap-3">
              <img
                class="w-4 md:w-5 h-4 md:h-5 flex-shrink-0 mt-0.5"
                alt="Location icon"
                src="/ph-map-pin-line-fill.svg"
              />
              <address class="font-family-jakarta font-normal text-[#1e1d1b]/80 text-sm md:text-base tracking-[-0.01em] leading-[1.5] not-italic">
                Rathausallee 70 <br />
                22846 Norderstedt
              </address>
            </div>
          </div>
        </div>
      </div>

      <div class="h-px bg-[#e5e5e5] mb-3 md:mb-4"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-3">
        <p class="font-family-jakarta font-normal text-[#1e1e1e]/80 text-xs md:text-sm tracking-[-0.01em] leading-[1.5] text-center md:text-left">
          Copyright {{ currentYear }} Data Fabricator GmbH. All rights reserved.
        </p>
        <nav class="flex items-center flex-wrap justify-center gap-3 md:gap-5">
          <component
            v-for="(link, index) in legalLinks"
            :key="`legal-${index}`"
            :is="link.to ? 'router-link' : 'a'"
            :to="link.to"
            :href="link.href"
            class="font-family-jakarta font-normal text-[#1e1e1e]/80 text-xs md:text-sm tracking-[-0.01em] leading-[1.5] hover:text-[#1e1e1e] transition-colors"
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
  { label: 'Impressum', to: '/impressum' },
  { label: 'AGB', href: '#' },
  { label: 'Kontakt', href: '#kontakt' }
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
