<script setup lang="ts">
const props = defineProps({
  color: String,
  title: String,
})
</script>
<template>
  <div :class="`pa-2 border-${props.color}`">
    <h3 v-if="props.title" :class="`txt-${props.color} text-center`">{{ props.title }}</h3>
    <slot />
  </div>
</template>
