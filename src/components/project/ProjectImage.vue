<script setup lang="ts">
const props = defineProps<{ bg: string; path: string }>();
</script>

<template>
  <div
    :style="props.bg"
    className="col-md-6 full child"
    @click="props.onClick"
  />
</template>