<template>
  <div class="credits">
    <div
      class="expo-block"
      v-for="(credit, index) in credits"
      :key="index"
      :class="{ 'no-print': credit.noprint }"
    >
      <h3>
        {{ credit.company }} <span>: {{ credit.position }}</span>
      </h3>
      <p>{{ credit.time }} : {{ credit.tech }}</p>
      <ul>
        <li v-for="(deet, ind2x) in credit.deets" :key="ind2x">
          {{ deet }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import credits from "@/content/credits.js";

export default {
  name: "ResCredits",
  data: function () {
    return {
      credits,
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as *;
@use "@/styles/resume" as *;

</style>
