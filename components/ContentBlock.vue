<template>
  <div class="flat">
    <component :is="headerTag" v-if="header"> {{ header }} </component>
    <div v-if="content" :class="containerClass">
      <component :is="contentTag"> {content} </component>
    </div>
    <component v-if="!content" :is="contentTag">
      <slot />
    </component>
    <slot v-if="!contentTag" />
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
      default: "",
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
