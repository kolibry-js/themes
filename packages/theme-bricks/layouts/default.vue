<template>
  <div class="kolibry-layout default">
    <slot />
  </div>
</template>

<style lang="postcss">
.kolibry-layout.default {
  background-image: url("../assets/page-5.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4em 5em;
}
</style>
