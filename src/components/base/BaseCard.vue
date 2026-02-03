<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'dark', 'bordered'].includes(value)
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
  },
  rounded: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  hoverable: {
    type: Boolean,
    default: false
  }
});

const cardClasses = computed(() => {
  const baseClasses = 'flex flex-col';

  const variantClasses = {
    default: 'bg-white shadow-sm',
    dark: 'bg-navy-card text-white',
    bordered: 'bg-white border border-gray-200'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6 lg:p-7 xl:p-8',
    lg: 'p-8 lg:p-10 xl:p-12'
  };

  const roundedClasses = {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl'
  };

  const hoverClasses = props.hoverable
    ? 'transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer'
    : '';

  return [
    baseClasses,
    variantClasses[props.variant],
    paddingClasses[props.padding],
    roundedClasses[props.rounded],
    hoverClasses
  ].filter(Boolean).join(' ');
});
</script>
