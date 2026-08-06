<template>
  <svg
    :type="type"
    class="bb-logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 157"
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <use href="#builtby-logo" width="900" height="157" />
  </svg>
</template>

<script>
export const types = {
  header: "header",
  footer: "footer",
  social: "social",
  nav: "nav",
};

export default {
  name: "Logo",
  props: {
    type: types,
  },
};
</script>

<style lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

// Styles apply on the <svg>/<use> — symbol path uses fill/stroke: inherit
svg.bb-logo {
  &[type="header"] {
    fill: #fff;
    stroke: transparent;

    @include v.mFlip(48rem) {
      stroke: var(--hot);
    }
  }

  &[type="nav"] {
    display: block;
    position: relative;
    z-index: 2;
    fill: var(--bod);
    stroke: transparent;
    // Former nav-bg duplicate: white halo via stroke on one mark
    @include v.mFlip() {
      stroke: #fff;
      stroke-width: 1.125rem;
      paint-order: stroke fill;
    }
  }

  &[type="footer"] {
    fill: var(--paper);
    stroke: var(--con);
  }

  &[type="social"] {
    width: 1138px;
    display: block;
    margin-bottom: 1.5rem;
    fill: #fff;
    stroke: var(--hot);
    stroke-width: 1px;
  }

  &[type="loader"] {
    display: block;
    margin-bottom: 1.5rem;
    fill: #fff;
    stroke: var(--hot);
    stroke-width: 1px;
  }
}
</style>
