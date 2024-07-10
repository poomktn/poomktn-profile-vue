<script setup lang="ts">
import { ref } from 'vue'
const TELEPHONE_NUMBER = '092-416-4261'
const GITHUB_LINK = 'https://github.com/poomktn'
const mailTooltip = ref(false)

function setTooltip(bool: boolean) {
  mailTooltip.value = bool
}
</script>
<template>
  <Box color="orange">
    <div class="mb-1">
      <b>Tel: </b><span>{{ TELEPHONE_NUMBER }}</span>
    </div>
    <div class="flex">
      <b>Email:</b>&nbsp;<span>kuntanut.s@gmail.com</span>&nbsp;
      <div class="relative no-print cursor-default">
        <div
          class="bg-black txt-white border-black text-center"
          style="width: 20px"
          @mouseenter="setTooltip(true)"
          @mouseleave="setTooltip(false)">
          ?
        </div>
        <div v-show="mailTooltip" class="tooltip pa-1 bg-black txt-white border-black">
          <span>
            Email is difference from name because I try my name as email but got invalid, so I
            decide to change vowels of my name
          </span>
        </div>
      </div>
    </div>
    <div>
      <b>Github:</b> <a :href="GITHUB_LINK" target="_blank">{{ GITHUB_LINK }}</a>
    </div>
  </Box>
</template>
<style lang="scss" scoped>
.tooltip {
  width: 200px;
  position: absolute;
  left: 20px;
  top: -50px;
  z-index: 2;
}
</style>
