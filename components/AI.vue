<template>
  <section aria-labelledby="ai-heading">
    <div class="flat">
      <h3 id="ai-heading">The (AI)lephant In the Room</h3>

      <template v-for="(block, index) in ai" :key="index">
        <p v-if="block.p" v-html="block.p" />
        <ol v-else-if="block.list === 'ordered'">
          <li v-for="(item, i) in block.items" :key="i" v-html="item" />
        </ol>
      </template>

    </div>
    <FinaleCTA
      subject="I%20want%20to%20talk%20to%20you%20about%20your%20AI%20use"
      link-title="ask me about how I use AI tools"
      link-aria-label="email Dan Cruzat about his use of AI tools"
    />
    <Brackets name="ai" />
  </section>
</template>

<script setup>
import { ai } from "@/content/ai";
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

section {
  background: var(--paper);

  .flat {
    padding-block: 0 3rem;
  }
}
</style>
