<template>
  <div class="credits">
      <div class="expo-block" v-for="(credit, index) in credits" :key="index" :class="{ 'no-print': credit.noprint  }">
        <h3>{{credit.company}} <span>: {{credit.position}}</span></h3>
        <p>{{credit.time}} : {{credit.tech}}</p>
        <ul>
          <li v-for="(deet, index) in credit.deets" :key="index">
            {{deet}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import credits from "@/content/credits.js"

  export default {
    name: 'ResCredits',
    data: function() {
      return {
        credits: credits
      }
    }
  }
</script>

<style scoped lang="scss">

@use "@/styles/global.scss" as *;
@use "@/styles/resume" as *;

</style>
