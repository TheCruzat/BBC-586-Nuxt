<template>
  <div class="finale-cta flat" :data-style="styler">
    <hr />
    <div class="">
      <h3>have a question?</h3>
      <p>
        <a
          :href="'mailto:' + contactEmail + '?subject=' + subject"
          :title="linkTitle || undefined"
          class="btn"
        >
          Ask Me Anything
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { contactEmail } from "@/content/meta";
export default {
  name: "FinaleCTA",
  props: {
    subject: {
      type: String,
      default: "",
    },
    linkTitle: {
      type: String,
      default: "",
    },
    linkAriaLabel: {
      type: String,
      default: "",
    },
    styler: {
      type: String,
      default: "",
    },
  },
  data: function () {
    return {
      contactEmail,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

section {
  $finale-mobile: 36rem;

  .finale-cta hr + div {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;

    @include v.mFlip($finale-mobile) {
      flex-direction: row;
      gap: 2rem;
      padding-top: 3rem;
    }
  }

  .finale-cta.flat {
    display: block;
    padding-top: 4rem;
    padding-bottom: 0;

    hr {
      margin: 0;
      height: 0px;
      border: none;
      border-top: 1px solid var(--lyt);
      display: block;
    }

    h3 {
      margin: 0; //  0 1rem;

      @include v.mFlip($finale-mobile) {
        // margin: 2rem 0 0;
      }
    }

    &.no-border {
      padding-block: 2rem;
      hr {
        display: none;

        + div {
          padding-block: 1rem;
        }
      }
    }
  }

  [data-style="dark"].finale-cta.flat {
    h3 {
      color: var(--bod);
    }
    hr {
      border-color: var(--paper);
    }
    .btn {
      border-color: #555;

      &:hover {
        border-color: var(--hot);
      }
    }
  }
}
</style>
