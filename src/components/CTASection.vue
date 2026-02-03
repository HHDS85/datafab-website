<template>
  <section
    ref="sectionRef"
    id="kontakt"
    :class="[
      'relative w-full bg-[#E8E9EB] scroll-animate transition-all duration-700 ease-out',
      showForm ? 'min-h-[780px] md:min-h-[850px] lg:min-h-[920px]' : 'min-h-[500px]'
    ]"
  >
    <div class="max-w-[1440px] mx-auto h-full">
      <div
        :class="[
          'grid grid-cols-1 lg:grid-cols-2 transition-all duration-700 ease-out',
          showForm ? 'min-h-[780px] md:min-h-[850px] lg:min-h-[920px]' : 'min-h-[500px]'
        ]"
      >
        <div class="flex flex-col justify-center gap-10 py-20 px-6 lg:px-12 xl:px-16">
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
            'relative transition-all duration-700 ease-out',
            showForm ? 'h-[680px] md:h-[750px] lg:h-[820px]' : 'h-[400px] lg:h-[500px]'
          ]"
        >
          <div
            v-show="!showForm"
            class="absolute inset-0 w-full h-full shadow-md overflow-hidden z-0"
          >
            <img
              class="w-full h-full object-cover"
              alt="Kontakt img"
              src="/kontakt-img.png"
            />
          </div>

          <div
            v-show="showForm"
            class="absolute inset-0 w-full h-full bg-white shadow-md z-20"
          >
            <div class="w-full h-full p-6 md:p-8 overflow-y-auto">
              <ContactForm @close="showForm = false" />
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
