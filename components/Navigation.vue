<template>
  <div class="spacer tablet-up" aria-hidden="true">
    <Picture :img="image" decorative />
  </div>
  <nav aria-label="Primary">
    <div class="wrap">
      <LogoNav />
      <div class="links-wrap">
        <a
          v-for="link in linkS"
          :key="link[0]"
          :href="link[1]"
          :aria-current="currentHash === link[1] ? 'true' : undefined"
          :class="{ curr: currentHash === link[1] }"
          >{{ link[0] }}</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import bg from "@/assets/paperbg.webp";

const image = {
  mobile: {
    webp: bg,
  },
  full: {
    webp: bg,
  },
};

export default {
  name: "Navigation",
  data: function () {
    return {
      linkS: [
        ["hello", "#hello"],
        ["experience", "#experience"],
        ["work", "#work"],
        ["blog", "#scribblings"],
        ["etc", "#sidenotes"],
      ],
      image,
      currentHash: "",
      observer: null,
    };
  },
  mounted: function () {
    this.setupScrollSpy();
  },
  beforeUnmount: function () {
    this.observer?.disconnect();
  },
  methods: {
    setupScrollSpy: function () {
      if (typeof IntersectionObserver === "undefined") return;

      const ids = this.linkS.map((link) => link[1].slice(1));
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            );
          if (visible[0]?.target?.id) {
            this.currentHash = "#" + visible[0].target.id;
          }
        },
        {
          rootMargin: "-30% 0px -55% 0px",
          threshold: [0, 0.25, 0.5],
        },
      );

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) this.observer.observe(el);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

.blanco {
  position: relative;
}
.spacer {
  height: 75vh;
  background: var(--paper);
  padding-bottom: 1rem;
  position: relative;
  z-index: 4;
}
nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  z-index: 4;
  padding: 0;
  box-shadow: 0 0.5rem 0.5rem rgba(12, 12, 12, 0.05);

  // Don’t consume the whole viewport when zoomed / short
  @media (max-height: 30rem) {
    position: relative;
  }

  @include v.mFlip() {
    padding: 0.125rem 0;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;

    @include v.mFlipUnder(48rem) {
      align-items: center;
      flex-direction: column;
    }

    @include v.mFlip(80rem) {
      max-width: var(--container-width);
    }
  }

  .links-wrap {
    padding-left: var(--gutter);
    padding-right: var(--gutter);
    display: flex;
    gap: 0.25rem;
    font-size: 1rem;

    @include v.mFlip() {
      padding-left: 32px;
      padding-right: 32px;
      gap: 0.5rem;
    }

    @include v.mFlip(80rem) {
      font-size: 1.2rem;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-basis: 1;
    color: var(--con);
    padding: 0.75rem 0.75rem;
    min-height: 44px;
    min-width: 44px;
    line-height: 1.25;
    font-weight: bold;
    border-radius: 0.35rem;

    &.curr,
    &[aria-current="true"] {
      background: var(--conlyte);
      color: var(--con);
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }
}
</style>
