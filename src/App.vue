<script setup lang="ts">
import {
  ContactBox,
  InterestBox,
  IntroduceBox,
  SkillBox,
  ExperienceBox,
  EducationBox,
  SystemBox,
} from './components'

function print() {
  window.print()
}
</script>
<template>
  <div class="App">
    <div class="flex justify-center">
      <img
        width="300"
        height="300"
        :src="require('@/assets/images/profile.jpg')"
        alt=""
        class="profile-img" />
      <div class="ml-2">
        <ContactBox />
        <Box color="black" class="my-2 text-center">
          <h2>Mr. Kantanat Siripipatworakun</h2>
        </Box>
        <InterestBox />
      </div>
    </div>
    <IntroduceBox />
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
@import '@/assets/styles/index';
@import '@/assets/styles/main';
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
