<template>
  <section>
    <ContentBlock>
      <p v-html="skillsIntro" />
      <p v-html="skillsSub" />
    </ContentBlock>

    <ContentBlock
      header="dialects, systems + skills"
      container-class="skills"
      content-tag=""
    >
      <p
        v-for="skill in skillsToPayTheBills"
        :class="skill.class || 'know-rack'"
        :key="skill.label"
      >
        <strong v-html="skill.label" /><span v-html="skill.list" />
      </p>
    </ContentBlock>

    <ContentBlock
      header="agencies + organizations"
      container-class="orgs"
      content-tag="p"
    >
      {{ orgs.join(", ") }}
    </ContentBlock>

    <ContentBlock
      header="brands handled"
      container-class="brands"
      content-tag="p"
    >
      {{ brands.join(", ") }}
    </ContentBlock>

    <Poem />

    <FinaleCTA
      subject="I%20want%20to%20talk%20to%20you%20about%20your%20experience"
    />
    <Brackets name="experience" />
  </section>
</template>

<script>
import {
  skillsToPayTheBills,
  skillsIntro,
  skillsSub,
} from "@/content/skills.js";
import { orgs } from "@/content/orgs.js";

import { brands } from "@/content/brands.js";

export default {
  name: "SkillsExp",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      skillsIntro,
      skillsSub,
      skillsToPayTheBills,
      brands,
      orgs,
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/resume" as r;
@use "@/styles/vars" as v;
</style>
