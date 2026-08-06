<template>
  <picture v-if="img" :aria-hidden="isDecorative ? 'true' : undefined">
    <source
      v-if="img.full?.webp"
      media="(min-width: 40rem)"
      :srcset="img.full.webp"
      type="image/webp"
    />
    <source
      v-if="img.full?.jpg"
      media="(min-width: 40rem)"
      :srcset="img.full.jpg"
    />

    <source
      v-if="img.mobile?.webp"
      :srcset="img.mobile.webp"
      type="image/webp"
    />
    <source v-if="img.mobile?.jpg" :srcset="img.mobile.jpg" />

    <img
      v-if="img.full?.webp"
      :src="img.full.webp"
      :alt="resolvedAlt"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      :decoding="priority ? 'sync' : 'async'"
      :style="imgStyle"
    />
  </picture>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  img: {
    type: Object,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  priority: {
    type: Boolean,
    default: false,
  },
  imgStyle: {
    type: Object,
    default: () => ({}),
  },
  noLazy: {
    type: Boolean,
    default: false,
  },
  /** When true (or when alt is empty), treat as decorative. */
  decorative: {
    type: Boolean,
    default: false,
  },
});

const isDecorative = computed(
  () => props.decorative || props.alt.trim() === "",
);
const resolvedAlt = computed(() => (isDecorative.value ? "" : props.alt));
</script>

<style lang="scss" scoped>
picture {
  display: block;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  clip-path: inset(0);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
