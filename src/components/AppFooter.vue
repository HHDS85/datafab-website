<template>
  <footer class="relative w-full bg-[#F9F9F9] py-10 md:py-12">
    <div class="max-w-[1220px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
        <div class="flex flex-col gap-3">
          <img
            class="w-[140px] md:w-[160px] h-auto"
            alt="Footer logo"
            src="/footerlogo.svg"
          />
          <div class="flex flex-col gap-1.5">
            <div class="flex flex-col sm:flex-row sm:items-center gap-2">
              <address class="font-family-jakarta font-normal text-[#1e1d1b]/70 text-xs md:text-sm tracking-[-0.01em] leading-[1.5] not-italic">
                Rathausallee 70, 22846 Norderstedt
              </address>
              <div class="flex items-center gap-2">
                <a
                  :href="googleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 font-family-jakarta font-normal text-[#1e1d1b]/60 text-[11px] tracking-[-0.01em] leading-normal hover:text-[#1e1d1b] transition-colors"
                >
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Google
                </a>
                <span class="text-[#1e1d1b]/30">|</span>
                <a
                  :href="appleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 font-family-jakarta font-normal text-[#1e1d1b]/60 text-[11px] tracking-[-0.01em] leading-normal hover:text-[#1e1d1b] transition-colors"
                >
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Apple
                </a>
              </div>
            </div>
            <a
              href="mailto:info@data-fabricator.com"
              class="font-family-jakarta font-normal text-[#1e1d1b]/70 text-xs md:text-sm tracking-[-0.01em] leading-normal hover:text-[#1e1d1b] transition-colors"
            >
              info@data-fabricator.com
            </a>
          </div>
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

const address = 'Rathausallee 70, 22846 Norderstedt, Germany';
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const appleMapsUrl = `https://maps.apple.com/?address=${encodeURIComponent(address)}`;

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
