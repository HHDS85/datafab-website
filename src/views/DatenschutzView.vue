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
        {{ t('legal.privacy.title') }}
      </h1>

      <div class="space-y-8 md:space-y-10">
        <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
          {{ t('legal.privacy.lastUpdated') }}
        </p>

        <section>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.privacy.intro') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.controller') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1 whitespace-pre-line">
            <p class="font-medium text-[#1e1d1b]">{{ t('legal.privacy.controllerInfo') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.purposes') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.privacy.purposesText') }}</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('legal.privacy.purpose1') }}</li>
              <li>{{ t('legal.privacy.purpose2') }}</li>
              <li>{{ t('legal.privacy.purpose3') }}</li>
              <li>{{ t('legal.privacy.purpose4') }}</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.webProvision') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.privacy.webProvisionText') }}</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('legal.privacy.webPurposes') }}</li>
              <li>{{ t('legal.privacy.webLegalBasis') }}</li>
              <li>{{ t('legal.privacy.webRetention') }}</li>
            </ul>
            <p class="mt-2">{{ t('legal.privacy.hostingProvider') }}</p>
            <p>{{ t('legal.privacy.dataProcessing') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.contact') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.privacy.contactText') }}</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('legal.privacy.contactLegalBasis') }}</li>
              <li>{{ t('legal.privacy.contactRetention') }}</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.cookies') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.privacy.cookiesText') }}</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('legal.privacy.cookiesTool') }}</li>
              <li>{{ t('legal.privacy.cookiesLegalBasis') }}</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.thirdParty') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.privacy.thirdPartyText') }}</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('legal.privacy.fonts') }}</li>
              <li>{{ t('legal.privacy.maps') }}</li>
              <li>{{ t('legal.privacy.spamProtection') }}</li>
            </ul>
            <p class="mt-2">{{ t('legal.privacy.thirdPartyLegalBasis') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.recipients') }}
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.privacy.recipientsText') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.retention') }}
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.privacy.retentionText') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.rights') }}
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.privacy.rightsText') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.complaint') }}
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.privacy.complaintText') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.security') }}
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.privacy.securityText') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.privacy.changes') }}
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.privacy.changesText') }}
          </p>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '@/composables/core/useI18n';

const { t } = useI18n();
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
