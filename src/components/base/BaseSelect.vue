<template>
  <div class="flex flex-col gap-1.5">
    <label
      v-if="label"
      :for="selectId"
      class="font-jakarta font-medium text-text-secondary text-xs"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <select
      :id="selectId"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
      :class="selectClasses"
      v-bind="$attrs"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
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
    type: [String, Number],
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
  options: {
    type: Array,
    required: true,
    default: () => []
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
  selectId: {
    type: String,
    default: () => `select-${Math.random().toString(36).substr(2, 9)}`
  }
});

defineEmits(['update:modelValue']);

const selectClasses = computed(() => {
  const baseClasses = 'w-full px-3.5 py-2.5 border rounded-lg font-jakarta text-sm appearance-none bg-white cursor-pointer outline-none transition-all';
  const stateClasses = props.error
    ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
    : 'border-gray-300 focus:border-navy-card focus:ring-2 focus:ring-navy-card/20';
  const disabledClasses = props.disabled ? 'bg-gray-100 cursor-not-allowed' : '';

  return [baseClasses, stateClasses, disabledClasses].join(' ');
});
</script>
