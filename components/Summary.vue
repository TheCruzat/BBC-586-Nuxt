<template>
  <div class="summary" v-html="summary" />
</template>

<script setup>
import { summary } from "@/content/summary.js";
</script>

<style scoped lang="scss">
@use "@/styles/vars" as v;
@use "@/styles/global.scss" as g;
@use "@/styles/resume" as r;

.summary {
  @include v.mFlip(80rem) {
    padding-right: 9rem;
  }

  @media print {
    padding-right: 4rem;
  }
}
</style>
