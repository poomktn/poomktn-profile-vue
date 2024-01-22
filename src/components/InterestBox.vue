<template>
  <Box color="blue" title="Interest">
    <div id="interest" class="flex">
      <div>
        <li>Front-end Development</li>
        <li>Astrology</li>
        <li>Airsoft</li>
      </div>
      <div>
        <li>Tarot card</li>
        <li>Gaming</li>
      </div>
    </div>
  </Box>
</template>
<style lang="scss" scoped>
#interest {
  li::marker {
    content: '☨ ';
  }
}
</style>
