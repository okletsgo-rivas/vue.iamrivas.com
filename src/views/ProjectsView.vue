<script lang="ts">
import { onMounted, reactive } from "vue";
import Project from "@/components/project/Project.vue";
// import {useStore} from '@/stores/projects'

export default {
  setup() {
    const state = reactive({
      projects: [],
    });
    onMounted(async () => {
      console.log("onMounted");
      try {
        const res = await fetch("https://d9.iamrivas.com/json/projects2", {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        });
        console.log(res);
        if (res.ok) state.projects = await res.json();
      } catch (e) {
        console.error(e);
      }
    });

    return { state };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <em>Loading...</em>
      </div>
    </div>
  </div>
  <div class="container projects">
    <div ref="filters" class="row filters">
      <div class="col-xs-12">
        <div
          name="filters"
          class="btn-group w-100"
          role="group"
          aria-label="Filter Group"
        >
          <button
            v-for="id in ['test', 'test', 'test']"
            type="button"
            class="btn btn-light"
            :value="{ value: id, id: id }"
            :key="id"
          >
            {{ id }}
            <span class="badge badge-light ml-2">10</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <Project v-for="(project, i) in state.projects" :key="i" :i="i" />
      </div>
    </div>
  </div>
</template>
