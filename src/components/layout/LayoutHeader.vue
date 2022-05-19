<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const links = ["projects", "bio", "resume"];

const scrolled = ref<boolean>(false);

onBeforeMount(() => {
  window.addEventListener(
    "scroll",
    (e) => (scrolled.value = window.scrollY > 0)
  );
});
</script>

<template>
  <nav class="navbar navbar-expand-md sticky-top" :class="{ scrolled }">
    <div class="container">
      <div>
        <a class="navbar-brand" href="/">
          <img src="./logo.svg" alt="logo" />
        </a>
      </div>
      <div class="flex-grow-1 text-right">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-auto" id="navbar-nav">
          <div class="ml-auto navbar-nav">
            <router-link
              v-for="link in links"
              :key="link"
              :to="'/' + link"
              class="nav-link"
            >
              {{ link }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.router-link-active:link,
.router-link-active:hover {
  text-decoration: underline;
}
</style>
