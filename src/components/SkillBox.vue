<script setup lang="ts">
const skill: string[] = [
  'Programming languages: JavaScript, TypeScript, Python',
  'Moderate English writing and communication skills',
  'Front-end frameworks: React Hook, Vue(2&3), Vuetify, Quasar, Nuxt',
  'UML design tools: Draw.io, Visual Paradigm',
  'Interface design tool: Figma, Zeplin',
  'Web hosting: Firebase',
  'Screen drawing tool: Epic Pen',
  'Python basic data science tools: Pandas, ScikitLearn',
]
</script>
<template>
  <Box color="green" class="mt-2" title="Main Skills">
    <div id="skill">
      <div>
        <li v-for="txt in skill" :key="txt" class="mb-1">
          {{ txt }}
        </li>
      </div>
    </div>
  </Box>
</template>
<style scoped lang="scss">
#skill {
  li::marker {
    content: '♰ ';
  }
}
</style>
