<script setup lang="ts">
const props = defineProps<{ path: string }>();
</script>

<template>
  <div
    :style="`background-image:url(${props.path})`"
    className="col-md-6 full child"
    @click="props.onClick"
  />
</template>
