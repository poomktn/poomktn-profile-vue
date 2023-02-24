<template>
  <div :class="`pa-2 border-${color}`" style={style}>
    <h3 v-if="title" :class="`txt-${color} text-center`">{{title}}</h3>
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    color: String,
    title: String,
    borderRadius: String,
    borderColor: String,
    backgroundColor: String,
    padding: String,
    margin: String,
    width: String,
    height: String
  },
}
</script>