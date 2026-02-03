<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <span :class="{ 'invisible': loading }">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});

const buttonClasses = computed(() => {
  const baseClasses = 'relative font-jakarta font-normal transition-all duration-300 rounded-lg inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-dark-button text-white hover:bg-dark-button-hover',
    secondary: 'bg-navy-primary text-white hover:bg-navy-secondary',
    outline: 'border-2 border-navy-card text-navy-card hover:bg-navy-card/5',
    ghost: 'text-navy-card hover:bg-navy-card/5'
  };

  const sizeClasses = {
    sm: 'h-9 px-6 text-sm',
    md: 'h-11 px-10 text-base',
    lg: 'h-12 px-12 text-base'
  };

  const disabledClasses = props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClass = props.fullWidth ? 'w-full' : '';

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    disabledClasses,
    widthClass
  ].filter(Boolean).join(' ');
});
</script>
