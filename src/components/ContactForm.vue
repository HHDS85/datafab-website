<template>
  <div class="relative w-full">
    <div class="flex flex-col gap-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
            Vorname *
          </label>
          <input
            v-model="formData.firstName"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base"
            placeholder="Max"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
            Nachname *
          </label>
          <input
            v-model="formData.lastName"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base"
            placeholder="Mustermann"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
          Unternehmen / Organisation *
        </label>
        <input
          v-model="formData.company"
          type="text"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base"
          placeholder="Muster GmbH"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
            E-Mail *
          </label>
          <input
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base"
            placeholder="max@mustermann.de"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
            Telefon
          </label>
          <input
            v-model="formData.phone"
            type="tel"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base"
            placeholder="+49 123 456789"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
          Thema / Anfrageart *
        </label>
        <select
          v-model="formData.topic"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base appearance-none bg-white cursor-pointer"
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

      <div class="flex flex-col gap-2">
        <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
          Kurzbeschreibung des Vorhabens *
        </label>
        <textarea
          v-model="formData.description"
          required
          rows="4"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base resize-none"
          placeholder="Beschreiben Sie Ihr Vorhaben in 3-8 Sätzen..."
        ></textarea>
        <p class="font-family-jakarta text-xs text-gray-500">
          3–8 Sätze reichen. Wenn vorhanden: Link zu Beispiel, Screenshots, Datenstruktur.
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
          Ziel / Erfolgskriterium *
        </label>
        <input
          v-model="formData.goal"
          type="text"
          required
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base"
          placeholder="Wir wollen X automatisieren, Erfolg = Y% weniger Aufwand / schnellere Reports / bessere Entscheidungen."
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
            Zeithorizont *
          </label>
          <select
            v-model="formData.timeline"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base appearance-none bg-white cursor-pointer"
          >
            <option value="">Bitte wählen...</option>
            <option value="asap">ASAP (0–4 Wochen)</option>
            <option value="1-3">1–3 Monate</option>
            <option value="3-6">3–6 Monate</option>
            <option value="6+">6+ Monate / noch offen</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-family-jakarta font-medium text-[#1e1d1b] text-sm">
            Budgetrahmen
          </label>
          <select
            v-model="formData.budget"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#273247] focus:ring-2 focus:ring-[#273247]/20 outline-none transition-all font-family-jakarta text-base appearance-none bg-white cursor-pointer"
          >
            <option value="">Bitte wählen...</option>
            <option value="<10k">< 10k €</option>
            <option value="10-25k">10–25k €</option>
            <option value="25-50k">25–50k €</option>
            <option value="50k+">50k+ €</option>
            <option value="open">Noch offen / erst scoping</option>
          </select>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <input
          v-model="formData.consent"
          type="checkbox"
          required
          id="consent"
          class="mt-1 w-4 h-4 accent-[#273247] cursor-pointer"
        />
        <label for="consent" class="font-family-jakarta text-sm text-[#1e1d1b]/80 cursor-pointer">
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

      <div class="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          @click="handleSubmit"
          type="submit"
          :disabled="isSubmitting"
          class="h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-lg leading-[27px] tracking-normal bg-[#242528] hover:bg-[#242528]/90 text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Wird gesendet...' : 'Unverbindlich anfragen' }}
        </button>

        <button
          @click="$emit('close')"
          type="button"
          class="h-[43px] px-7 rounded-[22px] font-family-jakarta font-normal text-lg leading-[27px] tracking-normal border-2 border-[#273247] text-[#273247] hover:bg-[#273247]/5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-w-[180px]"
        >
          Zurück
        </button>
      </div>

      <Transition name="fade">
        <div v-if="submitted" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
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
  goal: '',
  timeline: '',
  budget: '',
  consent: false,
  honeypot: ''
});

const isSubmitting = ref(false);
const submitted = ref(false);

const handleSubmit = async () => {
  if (formData.honeypot) {
    return;
  }

  if (!formData.firstName || !formData.lastName || !formData.company || !formData.email || !formData.topic || !formData.description || !formData.goal || !formData.timeline || !formData.consent) {
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
  opacity: 0;
}
</style>
