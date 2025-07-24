<script setup lang="ts">
import {
  ContactBox,
  SkillBox,
  ExperienceBox,
  EducationBox,
  SystemBox,
} from '@components'
import { profileImg } from '@assets/images'

function print() {
  window.print()
}
</script>
<template>
  <div class="App">
    <div class="flex justify-center">
      <img
        width="200"
        height="200"
        :src="profileImg"
        alt=""
        class="profile-img" />
      <div class="ml-2">
        <ContactBox />
        <Box color="black" class="my-3 text-left">
          <h2>Eng: Kantanat Siripipatworakun</h2>
          <h2>TH: &nbsp;กันตณัฐ สิริพิพัฒน์วรคุณ</h2>
        </Box>
      </div>
    </div>
    <SkillBox />
    <SystemBox />
    <ExperienceBox />
    <EducationBox />
    <div class="flex justify-center no-print mt-1">
      <button @click="print">print as PDF file</button>
    </div>
  </div>
</template>
<style lang="scss">
@use '@assets/styles/index';
@use '@assets/styles/main';
li::marker {
  font-size: 24px;
}
</style>
<style lang="scss" scoped>
.App {
  padding: 20px;
  width: 210mm;
  margin: auto;
}

.profile-img {
  border-radius: 50%;
}

@page {
  size: A4;
  margin: 0;
}

@media print {
  :global(.no-print) {
    display: none;
  }
}
</style>
