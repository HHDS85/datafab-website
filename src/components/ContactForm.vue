<template>
  <div class="relative w-full" @click.stop>
    <button
      @click.stop="$emit('close')"
      class="absolute -top-2 -right-2 w-9 h-9 rounded-lg bg-[#273247] hover:bg-[#1e2536] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 shadow-lg"
      aria-label="Schließen"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <div class="flex flex-col gap-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div class="flex flex-col gap-1.5">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-xs">
            Vorname *
          </label>
          <input
            v-model="formData.firstName"
            type="text"
            required
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-sm"
            placeholder="Max"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-xs">
            Nachname *
          </label>
          <input
            v-model="formData.lastName"
            type="text"
            required
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-sm"
            placeholder="Mustermann"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="font-family-jakarta font-medium text-[#1e1d1b] text-xs">
          Unternehmen / Organisation *
        </label>
        <input
          v-model="formData.company"
          type="text"
          required
          class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-sm"
          placeholder="Muster GmbH"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div class="flex flex-col gap-1.5">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-xs">
            E-Mail *
          </label>
          <input
            v-model="formData.email"
            type="email"
            required
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-sm"
            placeholder="max@mustermann.de"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-xs">
            Telefon
          </label>
          <input
            v-model="formData.phone"
            type="tel"
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-sm"
            placeholder="+49 123 456789"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="font-family-jakarta font-medium text-[#1e1d1b] text-xs">
          Thema / Anfrageart *
        </label>
        <select
          v-model="formData.topic"
          required
          class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-sm appearance-none bg-white cursor-pointer"
        >
          <option value="">Bitte wählen...</option>
          <option value="digitalization">Digitalisierungsberatung / Strategie</option>
          <option value="development">Individuelle Anwendung / Softwareentwicklung</option>
          <option value="visualization">Datenvisualisierung / Dashboards</option>
          <option value="engineering">Data Engineering / Schnittstellen / APIs</option>
          <option value="workshop">Workshop / Audit / Sparring</option>
          <option value="other">Sonstiges</option>
        </select>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="font-family-jakarta font-medium text-[#1e1d1b] text-xs">
          Kurzbeschreibung des Vorhabens *
        </label>
        <textarea
          v-model="formData.description"
          required
          rows="4"
          class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-sm resize-none"
          placeholder="Beschreiben Sie Ihr Vorhaben in 3-8 Sätzen..."
        ></textarea>
        <p class="font-family-jakarta text-xs text-gray-500">
          3–8 Sätze reichen. Wenn vorhanden: Link zu Beispiel, Screenshots, Datenstruktur.
        </p>
      </div>

      <div class="flex items-start gap-2.5">
        <input
          v-model="formData.consent"
          type="checkbox"
          required
          id="consent"
          class="mt-0.5 w-4 h-4 accent-[#273247] cursor-pointer"
        />
        <label for="consent" class="font-family-jakarta text-xs text-[#1e1d1b]/80 cursor-pointer">
          Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *
        </label>
      </div>

      <input
        v-model="formData.honeypot"
        type="text"
        tabindex="-1"
        autocomplete="off"
        class="absolute -left-[9999px] opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div class="flex flex-col sm:flex-row gap-3 pt-3">
        <button
          @click.stop="handleSubmit"
          type="submit"
          :disabled="isSubmitting"
          class="h-11 px-8 font-family-jakarta font-normal text-sm bg-[#242528] text-white hover:bg-[#323438] rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Wird gesendet...' : 'Unverbindlich anfragen' }}
        </button>

        <button
          @click.stop="$emit('close')"
          type="button"
          class="h-11 px-8 font-family-jakarta font-normal text-sm border-2 border-[#273247] text-[#273247] hover:bg-[#273247]/5 rounded-lg transition-all duration-300"
        >
          Zurück
        </button>
      </div>

      <Transition name="fade">
        <div v-if="submitted" class="mt-4 p-4 bg-green-50 border border-green-200">
          <p class="font-family-jakarta text-green-800 text-sm">
            Danke! Wir melden uns i. d. R. innerhalb von 1–2 Werktagen.
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

defineEmits(['close']);

const formData = reactive({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  topic: '',
  description: '',
  consent: false,
  honeypot: ''
});

const isSubmitting = ref(false);
const submitted = ref(false);

const handleSubmit = async () => {
  if (formData.honeypot) {
    return;
  }

  if (!formData.firstName || !formData.lastName || !formData.company || !formData.email || !formData.topic || !formData.description || !formData.consent) {
    alert('Bitte füllen Sie alle Pflichtfelder aus.');
    return;
  }

  isSubmitting.value = true;

  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log('Form submitted:', formData);
  submitted.value = true;
  isSubmitting.value = false;

  setTimeout(() => {
    submitted.value = false;
  }, 5000);
};
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 100;
}
</style>
