<template>
  <div
    class="project-card"
    :class="{ 'is-open': isOpen }"
    @click="toggleDrawer"
  >
    <p class="pc-title">{{ title }}</p>
    <button
      class="pc-close"
      @click.stop="closeDrawer"
      aria-label="Close details"
    >
      <span />
      <span />
    </button>
    <hr />
    <p class="pc-link">
      <a :href="url" :title="title" :aria-label="ariaLabel" target="_blank" @click.stop>{{
        displayUrl
      }}</a>
    </p>
    <p class="pc-tasks">{{ tasks }}</p>
    <p class="pc-year">{{ year }} : {{ tech }}</p>

    <div class="pc-drawer">
      <hr />
      <p class="pc-desc" v-html="desc"></p>
      <a
        class="view-source"
        v-if="repo"
        :href="repo"
        target="_blank"
        :aria-label="repoAriaLabel"
        >View Source</a
      >
      <hr v-if="studio || team" />

      <p v-if="studio" class="pc-studio">
        for:
        <a
          :href="studio.link"
          :title="studio.name"
          :aria-label="studio.ariaLabel"
          target="_blank"
          @click.stop
          >{{ studio.name }}</a
        >
      </p>

      <div v-if="team.length > 0" class="project-team">
        <p>team:</p>
        <ul>
          <li v-for="t in team" :key="t.name">
            <a :href="t.link" :aria-label="t.ariaLabel" target="_blank" @click.stop>{{ t.name }}</a> :
            {{ t.role }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WildCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    ariaLabel: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
    studio: {
      type: Object,
      default: null,
    },
    tasks: {
      type: String,
      default: "",
    },
    repo: {
      type: String,
      default: "",
    },
    team: {
      type: Array,
      default: () => [],
    },
    tech: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    displayUrl() {
      if (!this.url) return "";
      return this.url.replace(/^(https?:)?\/\//, "").replace(/\/$/, "");
    },
  },
  methods: {
    toggleDrawer() {
      if (!this.isOpen) this.isOpen = true;
    },
    closeDrawer() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

.project-card {
  --card-spacer: 0.5rem;

  width: 100%;
  max-width: 470px;
  font-size: 0.825rem;
  background: #fff;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  cursor: pointer;
  position: relative;
  transition:
    background 0.35s ease-in,
    border-color 0.35s ease-in;

  @include v.mFlip(48rem) {
    font-size: 1rem;
  }

  @include v.mFlip(64rem) {
    max-width: calc(50% - (var(--gutter) / 2));
  }

  &.featured {
    max-width: 48rem;
    margin-bottom: 1.5rem;
    border: 2px solid #666 !important;
    margin-inline: auto;

    p {
      font-size: var(--bodyFontSize);
    }

    .pc-title {
      font-size: calc(var(--titleFontSize) * 1.5);
    }
    .pc-drawer {
      max-height: unset;
      opacity: 1;
    }
    .pc-close {
      display: none;
    }
  }

  // --- The "Swell" Effect (Hover) ---
  &:hover {
    --card-spacer: 0.75rem;
    background: #fff;
    border-color: var(--con);
    transform: translateY(-2px);
    transition:
      background 0.15s ease-out,
      border-color 0.15s ease-out;

    .pc-title,
    .pc-year,
    .pc-desc,
    hr {
      transition: all 0.35s ease-out;
    }

    .pc-title {
      color: var(--hot);
    }
  }

  // --- The "Open" State (Click) ---
  &.is-open {
    background: #fff;
    border-color: var(--con);
    cursor: default;
    --card-spacer: 1rem;

    .pc-title {
      color: var(--hot);
      margin-bottom: 0.75rem;
    }

    .pc-drawer {
      max-height: 1000px;
      opacity: 1;
      transition:
        max-height 0.5s ease-out,
        opacity 0.3s ease-in;
    }

    .pc-close {
      // display: block;
      width: 40px;
      height: 40px;
      top: 0;
      right: 0rem;

      span {
        width: 14px;
        left: calc(50% - 7px);
      }
    }
  }

  .view-source {
    display: inline-block;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    font-size: 90%;
  }

  .pc {
    &-title {
      font-size: var(--titleFontSize);
      line-height: 1.4;
      margin: 0;
      margin-bottom: var(--card-spacer);
      transition: all 0.35s ease-out;
    }
    &-link {
      font-size: var(--bodyFontSizeBaseline);
    }
    &-year,
    &-link {
      margin: 0;
      margin-bottom: var(--card-spacer);
    }
    &-tasks {
      margin-bottom: 0;
    }
    &-desc {
      font-size: var(--bodyFontSizeBaseline);
      margin: 0;
      margin-bottom: var(--card-spacer);
    }

    &-drawer {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      position: relative;
      transition:
        max-height 0.25s ease-out,
        opacity 0.2s ease-out;
    }
    &-close {
      position: absolute;
      // top: 0.25rem;
      top: 20px;
      right: 20px;
      background: transparent;
      // background: yellow;
      border: none;
      font-size: 1.25rem;
      color: var(--bod);
      cursor: pointer;
      padding: 0.25rem;
      z-index: 10;
      display: block;
      width: 0px;
      height: 0px;
      transition: all 0.2s ease-in-out;

      span {
        display: block;
        height: 2px;
        width: 0;
        background: var(--bod);
        position: absolute;
        top: calc(50% - 1px);
        left: 50%; // calc(50% - 9px);
        transition: all 0.1s ease-in-out;

        &:nth-child(1) {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }
      }

      &:hover {
        color: var(--hot);
      }
    }
  }

  // --- Shared Elements & Lists ---
  .project-team {
    ul {
      padding-left: 1rem;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li,
  p {
    margin: 0;
    padding: 0;
  }

  hr {
    height: 1px;
    border-top: 1px solid #ddd;
    border-bottom: none;
    margin: 0 0 var(--card-spacer);
  }

  a {
    font-weight: 600;
    color: inherit;
    text-decoration: none; // underline;
    transition: all 0.2s;
    border: none;
    background: transparent;
    color: var(--con);

    &:hover {
      background: var(--hot);
      color: #fff;
      padding-inline: 0.25rem;
      text-decoration: none;
    }
  }
  .project-team {
    a:hover {
      background: var(--con);
    }
  }
}
</style>
