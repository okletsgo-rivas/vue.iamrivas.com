<script setup lang="ts">
import type { IProject } from "./IProject";
import ProjectInfo from "./ProjectInfo.vue";
import ProjectImage from "./ProjectImage.vue";
// import Bounce from "react-reveal/Bounce";

const emits = defineEmits(["onImageClickHandler"]);

interface IProps {
  project: IProject;
  i: number;
}

const props = defineProps<IProps>();
const hasImg = props.project.field_image.length > 0;
const img = hasImg ? "//d9.iamrivas.com" + props.project.field_image : "";
const isEven = props.i % 2 === 1;
</script>

<template>
  <div class="d-flex project">
    <ProjectInfo v-if="isEven" key="0" :project="props.project" :thumb="img" />

    <ProjectImage key="1" :path="img" />

    <ProjectInfo v-if="!isEven" key="0" :project="props.project" :thumb="img" />
  </div>
</template>
