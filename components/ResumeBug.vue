<template>
  <section class="resume-bug" aria-label="Resume links">
    <div class="floater">
      <ul>
        <li v-for="link in resumeLinks" :key="link.label">
          <a
            :href="link.href"
            :target="link.new ? '_blank' : undefined"
            :rel="link.new ? 'noopener noreferrer' : undefined"
          >
            <span>{{ link.label }}</span>
            <span v-if="link.new" class="visually-hidden">
              (opens in new window)</span
            >
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { resumeFile, resumeURL } from "@/content/meta";

const resumeLinks = [
  {
    href: resumeURL,
    label: "see resume",
  },
  {
    href: resumeFile,
    label: "save resume",
    new: true,
  },
];

export default {
  name: "ResumeBug",
  data: function () {
    return {
      resumeLinks,
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

section.resume-bug {
  $rbpad: 0;

  position: sticky;
  bottom: 0;
  top: auto;
  z-index: 3;
  padding-top: $rbpad;
  padding-bottom: $rbpad;
  border-bottom: 0.5rem solid var(--lyt);

  @include v.shortViewport {
    position: static;
    border-bottom: none;
  }

  .floater {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    padding: 0;
    background: var(--lyt);
    position: relative;

    border-radius: 2rem 2rem 0 0;
    overflow: hidden;

    ul {
      margin: 0 auto;
      padding: 0;
      list-style: none;
      display: grid;
      width: 100%;
      max-width: 440px;
      gap: 0;
      grid-template-columns: repeat(2, 1fr);
    }

    li:nth-child(1) a {
      padding-left: calc(var(--gutter) * 1.5);
    }

    li:nth-child(2) a {
      padding-right: calc(var(--gutter) * 1.5);
    }

    a {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: 0px solid transparent;
      color: var(--bod);

      font-size: 0.8rem;
      font-weight: 900;
      padding: 0.75rem 0.75rem;
      min-height: 44px;

      &:hover {
        background: var(--hot);
        border-color: var(--hot);
        color: #fff;
      }

      @include v.mFlip(480px) {
        font-size: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @include v.mFlip() {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
}
</style>
