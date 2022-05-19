<script setup lang="ts">
const props = defineProps<{ path: string }>();
</script>

<template>
  <div
    style="pointer-events: none"
    :style="`background-image:url(${props.path})`"
    className="col-md-6 full child"
  />
  <!-- TODO: click event to lightbox -->
</template>
