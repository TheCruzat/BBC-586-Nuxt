<template>
  <section>
    <div v-for="(set, i) in builds" :key="set.header">
      <div class="flat">
        <h3>{{ set.header }}</h3>
        <p class="intro-blurb" v-if="set.brief" v-html="set.brief"></p>
        <template v-if="set.feature">
          <WildCard
            class="featured is-open"

            v-bind="set.feature"
          />
        </template>
        <hr v-if="set.feature" />
        <WildSet>
          <WildCard v-for="link in set.links" :key="link.title" v-bind="link" />
        </WildSet>
        <template v-if="set.finale">
          <WildCard
            class="featured is-open"
            v-if="set.finale"
            v-bind="set.finale"
          />
        </template>
        <!-- <hr> -->
      </div>

      <Testimonials :quotes="testimonialGroups[i]" />
    </div>

    <FinaleCTA
      class="no-border"
      styler="dark"
      subject="I%20want%20to%20talk%20about%20one%20of%20your%20projects"
      link-title="ask me about one of my projects"
      link-aria-label="email Dan Cruzat about his projects"
    />
    <Brackets name="work" />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { BuildSets } from "@/content/projects.js";
import { Testimonials as MasterList } from "@/content/Testimonials";

const builds = BuildSets;

const testimonialGroups = ref([]);

const setupGroups = () => {
  // 1. Create a local copy of the MasterList that we can "consume"
  let pool = [...MasterList].sort(() => 0.5 - Math.random());

  // 2. Map through each project set
  testimonialGroups.value = builds.map((set) => {
    let group = [];

    // Check if the set in meta.js has requested specific IDs
    // Example: testimonialIds: ['jen-thomas']
    if (set.testimonialIds && set.testimonialIds.length > 0) {
      group = MasterList.filter((q) => set.testimonialIds.includes(q.id));

      // Remove these specific quotes from the random pool so they don't repeat
      pool = pool.filter((q) => !set.testimonialIds.includes(q.id));
    }

    // Determine how many more quotes we need for this section
    // Defaults to 2 if not specified in meta.js
    const targetCount = set.testimonialLimit || 3;
    const needCount = targetCount - group.length;

    if (needCount > 0) {
      // Pull (pop) the needed amount from our unique random pool
      const extras = pool.splice(0, needCount);
      group = [...group, ...extras];
    }

    return group;
  });
};

onMounted(async () => {
  try {
    await setupGroups();
  } catch (err) {
    console.error("Setup error:", err);
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

section {
  background: var(--lyter);

  > div {
    width: 100%;
  }

  .flat {
    margin: 0 auto;
    padding-bottom: var(--gutter);
  }

  p.intro-blurb {
    margin-block: 2rem;

    @include v.mFlip() {
      margin-block: 3rem;
    }
  }

  h3 {
    color: var(--con);
    text-align: center;
    background: var(--paper);
    border-radius: 2rem;
  }

  .flat > h3 + p {
    text-align: center;
  }

  hr {
    border: none;
    border-top: 1px solid var(--paper) !important;
  }

  .featured + hr {
    margin-bottom: 1.5rem;
  }
}
</style>
