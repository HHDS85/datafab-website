<template>
  <section ref="sectionRef" id="kontakt" class="relative w-full bg-[#E8E9EB] py-20 scroll-animate">
    <div class="container mx-auto max-w-[1440px] px-6 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-start">
        <div class="flex flex-col gap-10 order-2 lg:order-1 max-w-[520px]">
          <div class="space-y-6">
            <h2 class="font-family-roboto font-light text-black text-4xl md:text-5xl tracking-tight leading-[1.1]">
              Datenlösungen
              ohne Umwege.
            </h2>

            <p class="font-family-roboto font-normal text-gray-700 text-xl md:text-2xl leading-[1.3]">
              Jetzt unverbindlich Kontakt aufnehmen!
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button
              @click="showForm = true"
              class="h-11 px-10 font-family-jakarta font-normal text-base bg-[#242528] hover:bg-[#323438] text-white transition-all duration-300 rounded-lg"
            >
              Kontaktformular
            </button>

            <a
              href="https://wa.me/4940609272772"
              target="_blank"
              rel="noopener noreferrer"
              class="h-11 px-10 font-family-jakarta font-normal text-base border-2 border-[#273247] text-[#273247] hover:bg-[#273247]/5 flex items-center justify-center gap-2 transition-all duration-300 rounded-lg"
            >
              <img
                class="w-4 h-4"
                alt="WhatsApp icon"
                src="/whatsappicon.svg"
              />
              WhatsApp
            </a>
          </div>
        </div>

        <div
          :class="[
            'relative w-full order-1 lg:order-2 transition-all duration-700 ease-out',
            showForm ? 'h-[680px] md:h-[750px] lg:h-[820px]' : 'h-[400px] md:h-[450px] lg:h-[500px]'
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
import ContactForm from './ContactForm.vue';

const sectionRef = ref(null);
const showForm = ref(false);

useScrollAnimation(sectionRef);
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
