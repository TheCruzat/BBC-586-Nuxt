<template>
  <div class="brands">
    <p>{{ brands.join(", ") }}</p>
  </div>
</template>

<script>
import { brands } from "@/content/brands.js";

export default {
  name: "ResBrands",
  data() {
    return {
      brands,
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as *;
@use "@/styles/resume" as *;
</style>
