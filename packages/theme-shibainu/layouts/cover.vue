<script setup lang="ts">
import Background from '../assets/page-1.vue'
</script>

<template>
  <div class="kolibry-layout cover">
    <div class="my-auto w-full">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>
