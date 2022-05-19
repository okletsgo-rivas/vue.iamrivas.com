<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { IProject } from "@/components/project/IProject";
import type { IFilter } from "@/components/project/IFilter";

const filters: IFilter[] = [
  { title: "ALL", id: "all", value: null },
  { title: "Programming", id: "programming", value: 127 },
  { title: "E-learning", id: "elearning", value: 129 },
  { title: "Design", id: "design", value: 126 },
];
const emit = defineEmits(["change"]);
const props = defineProps<{ projects: IProject[] }>();
const activeFilter = ref(filters[0]);
const filteredArray = computed(() => getFilteredArray(activeFilter.value));

watch([activeFilter, filteredArray], ([activeFilter, filteredArray]) => {
  emit("change", getFilteredArray(activeFilter));
});

function getFilteredArray(filter: IFilter): IProject[] {
  return filter.value == null
    ? props.projects.filter(
        (_, i, a) => a.findIndex((t) => t.nid == _.nid) == i
      )
    : props.projects.filter((_) => _.field_type == filter.value);
}
</script>

<template>
  <div
    name="filters"
    class="btn-group w-100"
    role="group"
    aria-label="Filter Group"
  >
    <button
      v-for="filter in filters"
      :key="filter.id"
      :class="`btn btn-${
        activeFilter.id == filter.id ? 'primary' : 'secondary'
      }`"
      @click="activeFilter = filter"
      type="button"
    >
      {{ filter.title }}
      <span class="badge badge-light ml-2">
        {{ getFilteredArray(filter).length }}
      </span>
    </button>
  </div>
</template>
