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
        {{ t('legal.terms.title') }}
      </h1>

      <div class="space-y-8 md:space-y-10">
        <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
          {{ t('legal.terms.lastUpdated') }}
        </p>

        <section>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.terms.intro') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.scope') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.scopeText1') }}</p>
            <p>{{ t('legal.terms.scopeText2') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.services') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.servicesText1') }}</p>
            <p>{{ t('legal.terms.servicesText2') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.cooperation') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.cooperationText1') }}</p>
            <p>{{ t('legal.terms.cooperationText2') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.payment') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.paymentText1') }}</p>
            <p>{{ t('legal.terms.paymentText2') }}</p>
            <p>{{ t('legal.terms.paymentText3') }}</p>
            <p>{{ t('legal.terms.paymentText4') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.changes') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.changesText1') }}</p>
            <p>{{ t('legal.terms.changesText2') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.acceptance') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.acceptanceText1') }}</p>
            <p>{{ t('legal.terms.acceptanceText2') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.ip') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.ipText1') }}</p>
            <p>{{ t('legal.terms.ipText2') }}</p>
            <p>{{ t('legal.terms.ipText3') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.confidentiality') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.confidentialityText1') }}</p>
            <p>{{ t('legal.terms.confidentialityText2') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.liability') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.liabilityText1') }}</p>
            <p>{{ t('legal.terms.liabilityText2') }}</p>
            <p>{{ t('legal.terms.liabilityText3') }}</p>
            <p>{{ t('legal.terms.liabilityText4') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.warranty') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.warrantyText1') }}</p>
            <p>{{ t('legal.terms.warrantyText2') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.termination') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.terminationText1') }}</p>
            <p>{{ t('legal.terms.terminationText2') }}</p>
            <p>{{ t('legal.terms.terminationText3') }}</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.reference') }}
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            {{ t('legal.terms.referenceText') }}
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            {{ t('legal.terms.final') }}
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>{{ t('legal.terms.finalText1') }}</p>
            <p>{{ t('legal.terms.finalText2') }}</p>
            <p>{{ t('legal.terms.finalText3') }}</p>
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
useMeta('terms');
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
