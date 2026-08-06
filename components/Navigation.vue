<template>
  <div class="spacer tablet-up" aria-hidden="true">
    <Picture :img="image" decorative />
  </div>
  <nav aria-label="Primary">
    <div class="wrap">
      <LogoNav />
      <!-- builtby the cruzat -->
      <div class="links-wrap">
        <a v-for="link in linkS" :key="link[0]" :href="link[1]">{{
          link[0]
        }}</a>
      </div>
    </div>
  </nav>
</template>

<script>
import bg from "@/assets/paperbg.webp";
// import mbg from '@/assets/paperbg.webp';

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
        // ['', '#'],
      ],
      image,
    };
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
    gap: 0.5rem;
    font-size: 1rem;

    @include v.mFlip() {
      padding-left: 32px;
      padding-right: 32px;
    }

    @include v.mFlip(80rem) {
      font-size: 1.2rem;
    }
  }

  a {
    display: inline-block;
    flex-basis: 1;
    color: var(--con);
    padding: 6px 8px;
    line-height: 1.25;
    font-weight: bold;

    &.curr {
      background: #fff;
      color: var(--con);
    }
  }
}
</style>
