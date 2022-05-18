<script setup lang="ts">
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
}

const props = withDefaults(defineProps<IProps>(), {
  project: undefined,
  img: "",
});
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
      <div :style="props.img" class="thumb" />
    </div>
  </div>
</template>