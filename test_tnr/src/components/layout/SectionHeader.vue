<template>
  <div class="">
    <h1>{{ title }}</h1>
    <span>i</span>
    <span>autres trucs</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SectionHeader extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped>
</style>
