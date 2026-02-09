<template>
  <div class="relative w-full">
    <button
      @click="$emit('close')"
      class="absolute -top-2 -right-2 w-9 h-9 rounded-lg bg-navy-card-alt hover:bg-navy-secondary text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 shadow-lg"
      :aria-label="t('contact.form.close')"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <div class="flex flex-col gap-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div class="flex flex-col gap-1.5">
          <label class="font-jakarta font-medium text-dark-primary text-xs">
            {{ t('contact.form.firstName') }} {{ t('contact.form.required') }}
          </label>
          <input
            v-model="formData.firstName"
            type="text"
            required
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-navy-card-alt focus:ring-2 focus:ring-navy-card-alt/20 outline-none transition-all font-jakarta text-sm"
            placeholder="Max"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="font-jakarta font-medium text-dark-primary text-xs">
            {{ t('contact.form.lastName') }} {{ t('contact.form.required') }}
          </label>
          <input
            v-model="formData.lastName"
            type="text"
            required
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-navy-card-alt focus:ring-2 focus:ring-navy-card-alt/20 outline-none transition-all font-jakarta text-sm"
            placeholder="Mustermann"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="font-jakarta font-medium text-dark-primary text-xs">
          {{ t('contact.form.company') }} {{ t('contact.form.required') }}
        </label>
        <input
          v-model="formData.company"
          type="text"
          required
          class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-navy-card-alt focus:ring-2 focus:ring-navy-card-alt/20 outline-none transition-all font-jakarta text-sm"
          placeholder="Muster GmbH"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div class="flex flex-col gap-1.5">
          <label class="font-jakarta font-medium text-dark-primary text-xs">
            {{ t('contact.form.email') }} {{ t('contact.form.required') }}
          </label>
          <input
            v-model="formData.email"
            type="email"
            required
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-navy-card-alt focus:ring-2 focus:ring-navy-card-alt/20 outline-none transition-all font-jakarta text-sm"
            placeholder="max@mustermann.de"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="font-jakarta font-medium text-dark-primary text-xs">
            {{ t('contact.form.phone') }}
          </label>
          <input
            v-model="formData.phone"
            type="tel"
            class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-navy-card-alt focus:ring-2 focus:ring-navy-card-alt/20 outline-none transition-all font-jakarta text-sm"
            placeholder="+49 123 456789"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="font-jakarta font-medium text-dark-primary text-xs">
          {{ t('contact.form.topic') }} {{ t('contact.form.required') }}
        </label>
        <select
          v-model="formData.topic"
          required
          class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-navy-card-alt focus:ring-2 focus:ring-navy-card-alt/20 outline-none transition-all font-jakarta text-sm appearance-none bg-white cursor-pointer"
        >
          <option value="">{{ t('contact.form.topicPlaceholder') }}</option>
          <option value="digitalization">{{ t('contact.form.topicOptions.digitalization') }}</option>
          <option value="development">{{ t('contact.form.topicOptions.development') }}</option>
          <option value="visualization">{{ t('contact.form.topicOptions.visualization') }}</option>
          <option value="engineering">{{ t('contact.form.topicOptions.engineering') }}</option>
          <option value="workshop">{{ t('contact.form.topicOptions.workshop') }}</option>
          <option value="other">{{ t('contact.form.topicOptions.other') }}</option>
        </select>
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="font-jakarta font-medium text-dark-primary text-xs">
          {{ t('contact.form.description') }} {{ t('contact.form.required') }}
        </label>
        <textarea
          v-model="formData.description"
          required
          rows="4"
          class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:border-navy-card-alt focus:ring-2 focus:ring-navy-card-alt/20 outline-none transition-all font-jakarta text-sm resize-none"
          :placeholder="t('contact.form.descriptionPlaceholder')"
        ></textarea>
        <p class="font-jakarta text-xs text-gray-500">
          {{ t('contact.form.descriptionHint') }}
        </p>
      </div>

      <div class="flex items-start gap-2.5">
        <input
          v-model="formData.consent"
          type="checkbox"
          required
          id="consent"
          class="mt-0.5 w-4 h-4 accent-navy-card-alt cursor-pointer"
        />
        <label for="consent" class="font-jakarta text-xs text-dark-primary/80 cursor-pointer">
          {{ t('contact.form.consent') }} {{ t('contact.form.required') }}
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
          @click="handleSubmit"
          type="submit"
          :disabled="isSubmitting"
          class="h-11 px-8 font-jakarta font-normal text-sm bg-dark-button text-white hover:bg-dark-button-hover rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
        </button>

        <button
          @click="$emit('close')"
          type="button"
          class="h-11 px-8 font-jakarta font-normal text-sm border-2 border-navy-card-alt text-navy-card-alt hover:bg-navy-card-alt/5 rounded-lg transition-all duration-300"
        >
          {{ t('contact.form.back') }}
        </button>
      </div>

      <Transition name="fade">
        <div v-if="submitted" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p class="font-jakarta text-green-800 text-sm">
            {{ t('contact.form.success') }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useI18n } from '@/composables/core/useI18n';

const { t } = useI18n();
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
  if (formData.honeypot) return;

  if (!formData.firstName || !formData.lastName || !formData.company || !formData.email || !formData.topic || !formData.description || !formData.consent) {
    alert(t('contact.form.error'));
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
