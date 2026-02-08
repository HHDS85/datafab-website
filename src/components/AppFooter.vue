<template>
  <footer class="relative w-full bg-[#273248] py-20 lg:py-24">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 mb-16 lg:mb-20">
        <div class="flex flex-col gap-7">
          <img
            class="w-[180px] h-auto brightness-0 invert"
            alt="Footer logo"
            src="/footerlogo.svg"
          />
          <p class="font-family-jakarta font-normal text-white/60 text-base leading-[1.7] max-w-[300px]">
            Ihr Partner für innovative und maßgeschneiderte Digitalisierungsstrategien.
          </p>
        </div>

        <div class="flex flex-col gap-6">
          <h3 class="font-family-jakarta font-semibold text-white text-base">
            Kontakt
          </h3>
          <div class="flex flex-col gap-3.5">
            <div class="flex flex-col gap-2">
              <address class="font-family-jakarta font-normal text-white/80 text-[15px] leading-[1.6] not-italic">
                Rathausallee 70<br />
                22846 Norderstedt
              </address>
              <div class="flex items-center gap-3 mt-1">
                <a
                  :href="googleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 font-family-jakarta font-medium text-white/70 text-xs hover:text-white transition-colors group"
                >
                  <svg class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Google Maps
                </a>
                <span class="text-white/20">•</span>
                <a
                  :href="appleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 font-family-jakarta font-medium text-white/70 text-xs hover:text-white transition-colors group"
                >
                  <svg class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Apple Maps
                </a>
              </div>
            </div>
            <a
              href="mailto:info@data-fabricator.com"
              class="font-family-jakarta font-normal text-white/80 text-[15px] hover:text-white transition-colors inline-flex items-center gap-2 group"
            >
              <svg class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@data-fabricator.com
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <h3 class="font-family-jakarta font-semibold text-white text-base">
            Links
          </h3>
          <nav class="flex flex-col gap-3.5">
            <component
              v-for="(link, index) in legalLinks"
              :key="`legal-${index}`"
              :is="link.to ? 'router-link' : 'a'"
              :to="link.to"
              :href="link.href"
              class="font-family-jakarta font-normal text-white/70 text-[15px] hover:text-white transition-all duration-300 w-fit cursor-pointer group relative"
            >
              <span class="relative">
                {{ link.label }}
                <span class="absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
              </span>
            </component>
          </nav>
        </div>
      </div>

      <div class="h-px bg-white/10 mb-7"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-family-jakarta font-normal text-white/40 text-sm text-center md:text-left">
          © {{ currentYear }} Data Fabricator GmbH. Alle Rechte vorbehalten.
        </p>
        <div class="flex items-center gap-4">
          <a
            href="#"
            class="text-white/40 hover:text-white/70 transition-colors"
            aria-label="LinkedIn"
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

const currentYear = computed(() => new Date().getFullYear());

const address = 'Rathausallee 70, 22846 Norderstedt, Germany';
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const appleMapsUrl = `https://maps.apple.com/?address=${encodeURIComponent(address)}`;

const legalLinks = [
  { label: 'Impressum', to: '/impressum' },
  { label: 'Datenschutz', to: '/datenschutz' },
  { label: 'AGB', to: '/agb' }
];
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}
</style>
