<template>
  <div class="skills">
    <p
      v-for="skill in skillsToPayTheBills"
      :key="skill.label"
      :class="skill.class || 'know-rack'"
    >
      <strong v-html="skill.label" />
      <span v-html="skill.list" />
    </p>
  </div>
</template>

<script>
import { skillsToPayTheBills, skillsIntro } from "@/content/skills.js";

export default {
  name: "ResSkills",
  data() {
    return {
      skillsIntro,
      skillsToPayTheBills,
    };
  },
};
</script>

<style lang="scss">
@use "@/styles/global.scss" as *;
@use "@/styles/resume" as *;

.skills {
  width: 100%;
  // border-bottom: 2px solid #ccc;
  // display: block;
  // margin-bottom: 1rem;
  // padding-block: 1rem;
  @media print {
    padding-block: 1rem;
  }
}

.know-finale {
  padding-top: 3rem;
  text-align: right;
  // color: #878787; // var(--con);
}
</style>
