<script setup lang="ts">
const system: string[] = [
  'Login with email, password and SSO',
  'Initializing project template (fonts, colors)',
  'Forget and Reset password',
  'CRUD Table',
  'State Management',
  'Device Permission Request',
]
</script>
<template>
  <Box color="grey" class="mt-2" title="Web Systems Participation">
    <div id="system" class="flex flex-wrap">
      <li v-for="txt in system" :key="txt" class="mb-1 half">
        {{ txt }}
      </li>
    </div>
  </Box>
</template>
<style scoped lang="scss">
#system {
  li::marker {
    content: '▷ ';
  }
}
</style>
