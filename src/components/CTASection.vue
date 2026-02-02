<template>
  <section ref="sectionRef" id="kontakt" class="relative w-full bg-[#E8E9EB] py-16 md:py-20 lg:py-24 scroll-animate">
    <div class="container mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div class="flex flex-col gap-8 md:gap-10 order-2 lg:order-1">
          <div class="space-y-5 md:space-y-6">
            <h2 class="font-family-roboto font-light text-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Datenlösungen
              ohne Umwege.
            </h2>

            <p class="font-family-roboto font-normal text-gray-700 text-xl md:text-2xl lg:text-3xl tracking-normal leading-[1.3]">
              Jetzt unverbindlich Kontakt aufnehmen!
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button
              class="h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-lg leading-[27px] tracking-normal bg-[#242528] hover:bg-[#242528]/90 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 min-w-[180px]"
            >
              Kontaktformular
            </button>

            <button
              class="h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-lg leading-[27px] tracking-normal border-2 border-[#273247] text-[#273247] hover:bg-[#273247]/5 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 min-w-[180px]"
            >
              <img
                class="w-5 h-5"
                alt="WhatsApp icon"
                src="/whatsappicon.svg"
              />
              WhatsApp
            </button>
          </div>
        </div>

        <div class="relative w-full h-[320px] md:h-[420px] lg:h-[480px] order-1 lg:order-2">
          <img
            class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-md"
            alt="Kontakt img"
            src="/kontakt-img.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const sectionRef = ref(null);
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
