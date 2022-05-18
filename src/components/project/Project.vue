<script setup lang="ts">
import ProjectInfo from "./ProjectInfo.vue";
// import ProjectImage from "./ProjectImage.vue";
// import Bounce from "react-reveal/Bounce";

const emits = defineEmits(["onImageClickHandler"]);

interface IProject {
  title: string;
  body: string;
  field_tags: string;
  field_image: string;
  field_type: string;
  nid: string;
  field_link: string;
}
interface IProps {
  project: IProject;
  i: number;
}

const props = withDefaults(defineProps<IProps>(), {
  project: {
    title: "K9 USA",
    body: "\u003Cp\u003EBranding and blister package design for a new pet registry company that also handles service dog certificates for owners.\u003C/p\u003E\n",
    field_tags: "Adobe Illustrator",
    field_image:
      "/sites/iamrivas/files/styles/projects/public/project/k9usa.jpg.jpeg?itok=G0ikpKAt",
    field_type: "126",
    nid: "521",
    field_link: "",
  },
  i: -1,
});

const getThumb = () => {
  const img = "//d9.iamrivas.com" + props.project.field_image;
  return {
    backgroundImage: img.length ? `url(${img})` : "none",
  };
};
const arr = [];
const isEven = props.i % 2 === 1;
</script>

<template>
  <div class="d-flex project">
    <ProjectInfo key="0" :project="props.project" :img="img" />
    <ProjectImage key="1" :bg="img" :path="props.project.field_image" />
  </div>
</template>
