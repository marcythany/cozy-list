<script setup lang="ts">
interface Props {
  className?: string
  gridTemplateColumns?: string
}

defineProps<Props>()
</script>

<template>
  <section
    :class="{
      'grid justify-items-center gap-4': !gridTemplateColumns,
      gridTemplateColumns: gridTemplateColumns,
      className: className
    }"
  >
    <slot />
  </section>
</template>
