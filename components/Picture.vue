<template>
  <picture
    v-if="img"
    ref="root"
    :aria-hidden="isDecorative ? 'true' : undefined"
  >
    <template v-if="shouldLoad">
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
        v-if="fallbackSrc"
        :src="fallbackSrc"
        :alt="resolvedAlt"
        :loading="priority ? 'eager' : 'lazy'"
        :fetchpriority="priority ? 'high' : 'auto'"
        decoding="async"
        :style="imgStyle"
      />
    </template>
  </picture>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

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
  /** When true (or when alt is empty), treat as decorative. */
  decorative: {
    type: Boolean,
    default: false,
  },
});

const root = ref(null);
/** Priority images load immediately; others wait until near the viewport. */
const shouldLoad = ref(props.priority);
let observer = null;

const isDecorative = computed(
  () => props.decorative || props.alt.trim() === "",
);
const resolvedAlt = computed(() => (isDecorative.value ? "" : props.alt));

/** Prefer mobile as <img> fallback so mobile never pulls the desktop asset. */
const fallbackSrc = computed(
  () =>
    props.img?.mobile?.webp ||
    props.img?.mobile?.jpg ||
    props.img?.full?.webp ||
    props.img?.full?.jpg ||
    "",
);

onMounted(() => {
  if (props.priority || shouldLoad.value) return;

  if (typeof IntersectionObserver === "undefined") {
    shouldLoad.value = true;
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        shouldLoad.value = true;
        observer?.disconnect();
        observer = null;
      }
    },
    {
      // Start fetch slightly before the section enters view
      rootMargin: "200px 0px",
      threshold: 0.01,
    },
  );

  if (root.value) observer.observe(root.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
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
    // Absolute by default so 200–400% zoom / narrow reflow isn't fighting viewport-fixed art
    position: absolute;
    top: 0;
    left: 0;
  }
}

// Parallax “window” effect only when there’s room and motion is OK
@media (prefers-reduced-motion: no-preference) {
  @media (min-width: 64rem) and (min-height: 45rem) {
    picture img {
      position: fixed;
    }
  }
}
</style>
