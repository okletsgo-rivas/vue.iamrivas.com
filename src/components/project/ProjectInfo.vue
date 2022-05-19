<script setup lang="ts">
import type { IProject } from "./IProject";

interface IProps {
  project: IProject;
  thumb: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="col-md-6 text-center d-flex align-items-center info child">
    <div>
      <h5>{{ props.project.i }} {{ props.project.title }}</h5>
      <div class="text-muted">
        <p v-html="props.project.body"></p>
        <p v-if="props.project.field_link.length">
          <a
            :href="props.project.field_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="btn btn-dark">Launch</button>
          </a>
        </p>
      </div>
      <div :style="`background-image:url(${props.thumb})`" class="thumb" />
    </div>
  </div>
</template>
