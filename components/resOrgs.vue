<template>
  <div class="orgs">
    <p>{{ orgs.join(", ") }}</p>
  </div>
</template>

<script>
import { orgs } from "@/content/orgs.js";

export default {
  name: "ResOrgs",
  data() {
    return {
      orgs,
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as *;
@use "@/styles/resume" as *;
</style>
