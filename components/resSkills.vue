<template>
  <ul class="skills">
    <li
      v-for="skill in skillsToPayTheBills"
      :key="skill.label"
      :class="skill.class || 'know-rack'"
    >
      <strong v-html="skill.label" />
      <span v-html="skill.list" />
    </li>
  </ul>
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
  @media print {
    padding-block: 1rem;
  }
}

.know-finale {
  padding-top: 3rem;
  text-align: right;
}
</style>
