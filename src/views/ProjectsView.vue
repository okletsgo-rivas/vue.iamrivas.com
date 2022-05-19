<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProjectFilter from "@/components/project/ProjectFilter.vue";
import ProjectComponent from "@/components/project/ProjectComponent.vue";
import type { IProject } from "@/components/project/IProject";
import type { IFilter } from "@/components/project/IFilter";
import { useStore } from "@/stores/store";
// import {useStore} from '@/stores/projects'

const store = useStore();
const projects = ref<IProject[]>([]);
const filteredArray = ref<IFilter[]>([]);
const error = ref<string | null>(null);

const onFilterChange = (_) => (filteredArray.value = _);

onMounted(async () => {
  try {
    const url = store.isMock
      ? "./iamrivas-data_dump.json"
      : "https://d9.iamrivas.com/json/projects2";
    const res = await fetch(url);
    if (res.ok) projects.value = await res.json();
  } catch (e: any) {
    error.value = e.message;
  }
});
</script>

<template>
  <div v-if="!projects" class="container">
    <div class="row">
      <div class="col">
        <div v-if="error" class="alert alert-danger" role="alert">
          Error: {{ error }}
        </div>
        <em v-else>Loading...</em>
      </div>
    </div>
  </div>
  <div v-else class="container projects">
    <div class="row filters">
      <div class="col-xs-12 w-100">
        <ProjectFilter :projects="projects" @change="onFilterChange" />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <ProjectComponent
          v-for="(project, i) in filteredArray"
          :key="i"
          :project="project"
          :i="i"
        />
      </div>
    </div>
  </div>
</template>
