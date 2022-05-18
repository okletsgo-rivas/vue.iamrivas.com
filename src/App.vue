<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/layout/Header.vue";
// import "bootstrap";
</script>

<template>
  <div class="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
/* @import "~bootstrap/"; */
</style>
