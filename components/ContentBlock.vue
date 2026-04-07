<template>
  <div class="flat">
    <template v-if="header">
      <component :is="headerTag || 'h3'">{{ header }}</component>
    </template>

    <div v-if="content" :class="containerClass">
      <component :is="contentTag || 'div'">{{ content }}</component>
    </div>

    <template v-else>
      <component v-if="contentTag" :is="contentTag" :class="containerClass">
        <slot />
      </component>
      <slot v-else />
    </template>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",

  props: {
    header: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    containerClass: {
      type: String,
      default: "",
    },
    headerTag: {
      type: String,
      default: "h3",
    },
    contentTag: {
      type: String,
      default: "div",
    },
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

p {
  width: 100%;
}
</style>
