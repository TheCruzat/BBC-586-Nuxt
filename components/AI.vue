<template>
  <section>
    <div class="flat">
      <h3>Vibe Coding: The (AI)lephant In the Room</h3>

      <template v-for="(block, index) in ai" :key="index">
        <p v-if="block.p" v-html="block.p" />

        <ol v-else-if="block.list === 'ordered'">
          <li v-for="(item, i) in block.items" :key="i" v-html="item" />
        </ol>
      </template>
    </div>
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
}
</style>
