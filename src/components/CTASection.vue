<template>
  <section ref="sectionRef" id="kontakt" class="relative w-full bg-bg-light py-16 md:py-20 scroll-animate">
    <div class="container mx-auto max-w-container px-6 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">
        <div class="flex flex-col gap-8 md:gap-10 order-2 lg:order-1 max-w-[520px] lg:h-[500px] lg:justify-center">
          <div class="space-y-5 md:space-y-6">
            <h2 class="font-roboto font-light text-black text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] whitespace-pre-line">
              {{ t('contact.title') }}
            </h2>

            <p class="font-roboto font-normal text-gray-700 text-lg md:text-xl lg:text-2xl leading-[1.3]">
              {{ t('contact.subtitle') }}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button
              @click="showForm = true"
              class="h-11 px-8 md:px-10 font-jakarta font-normal text-sm md:text-base bg-dark-button hover:bg-dark-button-hover text-white transition-all duration-300 rounded-lg"
            >
              {{ t('contact.buttonForm') }}
            </button>

            <a
              href="https://wa.me/4940609272772"
              target="_blank"
              rel="noopener noreferrer"
              class="h-11 px-8 md:px-10 font-jakarta font-normal text-sm md:text-base border-2 border-navy-card-alt text-navy-card-alt hover:bg-navy-card-alt/5 flex items-center justify-center gap-2 transition-all duration-300 rounded-lg"
            >
              <img
                class="w-4 h-4"
                alt="WhatsApp icon"
                src="/whatsappicon.svg"
              />
              {{ t('contact.buttonWhatsApp') }}
            </a>
          </div>
        </div>

        <div
          :class="[
            'relative w-full order-1 lg:order-2 transition-all duration-700 ease-out',
            showForm ? 'h-[650px] md:h-[720px] lg:h-[820px]' : 'h-[450px] md:h-[500px]'
          ]"
          style="perspective: 2000px;"
        >
          <div
            class="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
            :style="{ transform: showForm ? 'rotateY(180deg)' : 'rotateY(0deg)' }"
            style="transform-style: preserve-3d;"
          >
            <div
              class="absolute inset-0 w-full h-full shadow-md overflow-hidden rounded-lg"
              style="backface-visibility: hidden;"
            >
              <img
                class="w-full h-full object-cover"
                alt="Kontakt img"
                src="/kontakt-img.png"
              />
            </div>

            <div
              class="absolute inset-0 w-full h-full bg-white shadow-md rounded-lg"
              style="backface-visibility: hidden; transform: rotateY(180deg);"
            >
              <div class="w-full h-full p-8">
                <ContactForm @close="showForm = false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '@/composables';
import { useI18n } from '@/composables/core/useI18n';
import ContactForm from './ContactForm.vue';

const { t } = useI18n();
const sectionRef = ref(null);
const showForm = ref(false);

useScrollAnimation(sectionRef);
</script>
