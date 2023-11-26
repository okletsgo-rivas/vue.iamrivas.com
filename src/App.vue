<script setup lang="ts">
import { RouterView } from "vue-router";
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
// import "bootstrap";
</script>

<template>
  <div class="app">
    <LayoutHeader />
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
/* @import "~bootstrap/"; */
</style>
