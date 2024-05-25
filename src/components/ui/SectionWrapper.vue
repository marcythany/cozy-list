<script setup lang="ts">
const props = defineProps({
  center: {
    type: [Boolean, String],
    default: true
  },
  gap: {
    type: String,
    default: '4'
  }
})
</script>

<template>
  <section
    :class="{
      grid: true,
      'items-center justify-center': props.center === true,
      'items-start justify-start': props.center === 'horizontal',
      'items-end justify-end': props.center === 'vertical',
      [`gap-${props.gap}`]: props.gap
    }"
  >
    <slot />
  </section>
</template>
