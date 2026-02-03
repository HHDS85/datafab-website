<template>
  <div class="flex flex-col gap-1.5">
    <label
      v-if="label"
      :for="textareaId"
      class="font-jakarta font-medium text-text-secondary text-xs"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <textarea
      :id="textareaId"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      :class="textareaClasses"
      v-bind="$attrs"
    ></textarea>
    <p v-if="error" class="font-jakarta text-xs text-red-500">
      {{ error }}
    </p>
    <p v-else-if="hint" class="font-jakarta text-xs text-gray-500">
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 4
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  },
  textareaId: {
    type: String,
    default: () => `textarea-${Math.random().toString(36).substr(2, 9)}`
  }
});

defineEmits(['update:modelValue', 'blur', 'focus']);

const textareaClasses = computed(() => {
  const baseClasses = 'w-full px-3.5 py-2.5 border rounded-lg font-jakarta text-sm resize-none outline-none transition-all';
  const stateClasses = props.error
    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
    : 'border-gray-300 focus:border-navy-card focus:ring-2 focus:ring-navy-card/20';
  const disabledClasses = props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';

  return [baseClasses, stateClasses, disabledClasses].join(' ');
});
</script>
