<template>
  <section class="resume-bug">
    <div class="floater">
      <ul>
        <li v-for="link in resumeLinks" :key="link.label">
          <a :href="link.href" :target="link.new ? '_blank' : null">
            <span v-html="link.label"></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { resumeFile, resumeURL } from "@/content/meta";
const resumeFileLabel = "save resume";
const resumeURLLabel = "see resume";
const resumeLinks = [
  {
    href: resumeURL,
    label: resumeURLLabel,
    icon: "fa-map-o",
  },
  {
    href: resumeFile,
    label: resumeFileLabel,
    icon: "fa-floppy-o",
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

    h3 {
      margin: 0;
    }

    ul {
      margin: 0 auto;
      padding: 0;
      list-style: none;
      display: grid;
      width: 100%;
      max-width: 440px;
      gap: 0;
      grid-template-columns: repeat(2, 1fr);

      @include v.mFlip(480px) {
        //gap: var(--gutter);
      }
    }

    li:nth-child(1) a {
      border-radius: 0 0 0 0;
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
      background: transparent; // var(--paper);
      border: 0px solid transparent; // var(--con);
      color: var(--bod);
      // border-radius: var(--radius) 0 0 var(--radius);
      font-size: 0.8rem;
      font-weight: 900;
      padding: 0.5rem 0.75rem;

      .cloak {
        display: inline-block;
        width: 0px;
        overflow: hidden;
      }

      &:hover {
        background: var(--hot);
        border-color: var(--hot);
        color: #fff;

        span.cloak {
          max-width: 100px;
        }
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

      i {
        font-size: 1.25rem;
        display: inline-block;
        margin-right: 0.75rem;
        text-align: center;

        @include v.mFlip(480px) {
          font-size: 1.5rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
