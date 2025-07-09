<script setup lang="ts">
const skill: string[] = [
  'Programming languages: TypeScript, JavaScript, Python, Java',
  'Front-end frameworks: React Hook, Vue 2&3, ViteJS, NuxtJS, NextJS',
  'State Management: Redux & Zustand (React Hook), Vuex (Vue 2), Pinia (Vue 3)',
  'Page Routing: React Router (React Hook), Vue Router (Vue 2&3)',
  'Code Editor and Extension: Visual Studio Code, ESLint, Prettier',
  'Git tools: GitHub, GitLab, Fork, Sourcetree',
  'Web hosting: Firebase',
  'Python basic data science tools: Pandas, ScikitLearn',
  'Moderate English writing and communication skills',
]
</script>
<template>
  <Box color="blue" class="mt-2" title="Main Skills">
    <div id="skill">
      <li v-for="txt in skill" :key="txt" class="mb-1">
        {{ txt }}
      </li>
    </div>
  </Box>
</template>
<style scoped lang="scss">
#skill {
  li::marker {
    content: '▷ ';
  }
}
</style>
