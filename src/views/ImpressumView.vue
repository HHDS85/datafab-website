<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
      <div class="flex items-center justify-between mb-12 md:mb-16">
        <router-link
          to="/"
          class="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            class="w-[140px] md:w-[160px] h-auto"
            alt="Data Fabricator Logo"
            src="/logo-datafabrictor.svg"
          />
        </router-link>

        <router-link
          to="/"
          class="inline-flex items-center gap-2 h-[40px] px-6 rounded-[20px] font-family-jakarta font-normal text-base leading-[24px] tracking-normal border-2 border-[#273247] text-[#273247] hover:bg-[#273247] hover:text-white transition-all duration-300"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          {{ t('legal.back') }}
        </router-link>
      </div>

      <h1 class="font-family-roboto font-light text-[#1e1d1b] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-10 md:mb-12">
        {{ t('legal.imprint.title') }}
      </h1>

      <div class="space-y-8 md:space-y-10">
        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.imprint.heading1') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1">
            <p class="font-medium text-[#1e1d1b]">{{ t('legal.imprint.company') }}</p>
            <p>{{ t('legal.imprint.street') }}</p>
            <p>{{ t('legal.imprint.city') }}</p>
            <p>{{ t('legal.imprint.country') }}</p>
          </div>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.imprint.represented') }}
          </h3>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.imprint.ceo') }}
          </p>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.imprint.contact') }}
          </h3>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1">
            <p>{{ t('legal.imprint.phone') }} <a href="tel:+494060927272" class="text-[#273247] hover:underline underline-offset-2">+49 (0) 40 / 60 92 72 72</a></p>
            <p>{{ t('legal.imprint.email') }} <a href="mailto:m.schultz@data-fabricator.com" class="text-[#273247] hover:underline underline-offset-2">m.schultz@data-fabricator.com</a></p>
          </div>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.imprint.register') }}
          </h3>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1">
            <p>{{ t('legal.imprint.registerCourt') }}</p>
            <p>{{ t('legal.imprint.registerNumber') }}</p>
          </div>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.imprint.vatId') }}
          </h3>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.imprint.vatNumber') }}
          </p>
        </section>

        <div class="border-t border-gray-200 pt-8 md:pt-10"></div>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-5">
            {{ t('legal.imprint.legalNotices') }}
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                {{ t('legal.imprint.contentLiability') }}
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                {{ t('legal.imprint.contentLiabilityText') }}
              </p>
            </div>

            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                {{ t('legal.imprint.linksLiability') }}
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                {{ t('legal.imprint.linksLiabilityText') }}
              </p>
            </div>

            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                {{ t('legal.imprint.copyright') }}
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                {{ t('legal.imprint.copyrightText') }}
              </p>
            </div>

            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                {{ t('legal.imprint.dataProtection') }}
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                {{ t('legal.imprint.dataProtectionText') }}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '@/composables/core/useI18n';
import { useMeta } from '@/composables';

const { t } = useI18n();
useMeta('imprint');
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
