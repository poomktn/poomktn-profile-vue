<template>
  <div :class="`pa-2 border-${color}`">
    <h3 v-if="title" :class="`txt-${color} text-center`">{{ title }}</h3>
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    color: String,
    title: String,
  },
}
</script>