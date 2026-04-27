<template>
  <div :type="type" class="goodies-set">
    <a
      v-for="(link, ndx) in links"
      :key="link.title"
      :href="link.url"
      :title="link.title"
      :aria-label="link.ariaLabel"
      :data-mega="link.mega"
      target="_blank"
      :class="{ sub: ndx > topRow }"
    >
      <ClientOnly
        ><font-awesome-icon :icon="[link.icon.slice(0, 3), link.icon.slice(4)]"
      /></ClientOnly>
      <span class="label" v-html="link.label"></span>
    </a>
  </div>
</template>

<script>
import { GoodiesLinks as goodies } from "@/content/goodies.js";

export const types = {
  header: "header",
  footer: "footer",
};

function setRow(q) {
  return Math.ceil(q.length / 2) - 1;
}

export default {
  name: "Goodies",
  props: {
    type: types,
  },
  data: function () {
    return {
      links: goodies,
      topRow: setRow(goodies),
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

.goodies-set {
  font-size: var(--bodyFontSizeBaseline);
  display: flex;
  flex-wrap: wrap;
  padding: calc(var(--gutter) * 2) 0 0;
  align-self: flex-start;
  justify-content: center; // space-between;
  width: 100%;
  max-width: 20rem;
  gap: var(--gutter);
  margin-left: auto;
  margin-right: auto;

  @include v.mFlip() {
    justify-content: center; // space-around;
    padding-left: 0;
    padding-right: 0;
    max-width: 840px;
  }

  &[type="footer"] {
    margin: 9vh auto 9vh;
    @include v.mFlip() {
      padding-bottom: 0;
      margin: 4vh auto 0;
    }
    a {
      color: var(--paper);
      background: var(--bod);
      opacity: 1;
      border-color: var(--bod);
      box-shadow: 0 0 0.125rem rgba(255, 255, 255, 0.75);
      &:hover {
        border-color: #fff; // var(--bod); // var(--hot);
        background: #fff;
        // box-shadow: 0 0 0.125rem rgba(0,0,0,0.75);
        .label,
        i,
        svg {
          color: var(--hot);
          transition: color 0.35s ease-out;
        }
      }
      .label,
      i,
      svg {
        color: rgba(255, 255, 255, 0.75);
        transition: color 0.35s ease-in;
      }
    }
  }

  a {
    color: var(--bod);
    display: flex;
    width: calc(50% - var(--gutter) / 2);
    align-items: center;
    height: 3.25rem;
    background: #fff;
    // margin-bottom: var(--gutter);
    padding-left: var(--gutter);
    border-radius: var(--radius); // 0.5rem;
    border: 2px solid var(--lyt);
    transition:
      color 0.35s ease-in,
      background 0.35s ease-in;

    &:hover {
      transition:
        color 0.15s ease-out,
        background 0.15s ease-out;
      color: #fff;
      background: var(--hot);
      border-color: var(--hot);
    }
    @include v.mFlip() {
      width: calc(25% - var(--gutter));
    }

    &.subb {
      background: #fff;
      color: var(--bod);

      &:hover {
        background: var(--hot);
        color: #fff;
      }
    }

    svg {
      width: 32px;
      text-align: center;
      font-size: 1.5rem;
      margin-right: 0.625rem;
      @include v.mFlip() {
        width: 40px;
      }
    }

    .label {
      font-size: var(--bodyFontSizeBaseline);
      cursor: pointer;
      font-weight: 600;
      @include v.mFlip() {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
