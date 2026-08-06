<template>
  <div class="testimonials" v-if="displayQuotes.length > 0">
    <div class="testimonial-container">
      <div
        class="testimonial-live"
        aria-live="polite"
        aria-atomic="true"
      >
        <transition name="fade" mode="out-in">
          <blockquote :key="currentIndex" class="testimonial-slide">
            <div
              class="testimonial-quote"
              v-html="displayQuotes[currentIndex].quote"
            />
            <footer>
              <cite>
                <a
                  :href="displayQuotes[currentIndex].link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="'learn more about ' + displayQuotes[currentIndex].name"
                  :aria-label="displayQuotes[currentIndex].ariaLabel"
                >
                  <strong v-html="displayQuotes[currentIndex].name" />
                </a>
              </cite>
              <span
                v-html="displayQuotes[currentIndex].role"
                class="testimonial-sub"
              />
            </footer>
          </blockquote>
        </transition>
      </div>

      <div
        class="dots"
        role="group"
        aria-label="Choose testimonial"
        v-if="displayQuotes.length > 1"
      >
        <button
          v-for="(quote, i) in displayQuotes"
          :key="quote.id || i"
          type="button"
          :aria-current="currentIndex === i ? 'true' : undefined"
          :aria-label="
            'View testimonial ' +
            (i + 1) +
            ' of ' +
            displayQuotes.length +
            (quote.name ? ': ' + quote.name : '')
          "
          @click="currentIndex = i"
        >
          <span aria-hidden="true">&bull;</span>
        </button>
      </div>

      <div class="quote-marks" aria-hidden="true">
        <strong>“</strong>
        <strong>”</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Testimonials as MasterList } from "@/content/Testimonials";

const props = defineProps({
  // NEW: Accept an array of quote objects directly from parent
  quotes: {
    type: Array,
    default: () => [],
  },
  // Specific IDs filter (overrides the provided quotes if needed)
  ids: {
    type: Array,
    default: () => [],
  },
  // Limit for the current instance
  limit: {
    type: Number,
    default: 0,
  },
});

const currentIndex = ref(0);

const displayQuotes = computed(() => {
  // 1. Determine the source pool (Passed Prop vs Master List)
  const pool = props.quotes.length > 0 ? props.quotes : MasterList;

  let list = [];

  // 2. Filter by ID if requested
  if (props.ids.length > 0) {
    list = pool.filter((q) => props.ids.includes(q.id));
  } else {
    list = [...pool];
  }

  // 3. Apply limit
  if (props.limit > 0) {
    return list.slice(0, props.limit);
  }

  return list;
});
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g; //
@use "@/styles/vars" as v; //

.testimonials {
  background: var(--conlyte); // #D7EFFE; // #A9B6C6; // var(--paper);
  border-block: 2px solid #fff;
  margin-bottom: 3rem;
  width: 100%;
  padding-top: 1rem;
  overflow: hidden;
}

.testimonial-container {
  padding: 1rem var(--gutter);
  width: 100%;
  margin: 0 auto;
  position: relative;
  max-width: 36rem;

  @include v.mFlip() {
    padding: 2rem 32px;
    max-width: 44rem; // 64rem;
  }

  .testimonial-slide {
    position: relative;
    z-index: 1;
    margin: 0;

    .testimonial-quote {
      display: block;
      margin-bottom: 1.75rem;
      font-style: italic;
      font-size: var(--bodyFontSizeBaseline);
      line-height: 1.8;

      :deep(p) {
        margin: 0;

        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }

    footer {
      margin: 0;
      line-height: 1.2;
      font-size: 1.125rem;
      font-style: normal;

      @include v.mFlip() {
        padding-left: calc(50% + 0.5rem);
      }

      cite {
        font-style: normal;
      }

      a {
        background: unset;
        border: none;

        &:hover {
          background: var(--con);
          padding-inline: 0.25rem;
        }
      }
    }

    .testimonial-sub {
      display: block;
      font-size: 75%;
    }
  }

  .dots {
    margin-top: 0rem;
    position: relative;
    z-index: 1;
    display: flex;
    gap: 0.25rem;

    @include v.mFlip() {
      position: absolute;
      bottom: 30px;
      right: calc(50% + 0.5rem);
      margin: 0;
    }
    button {
      background: none;
      border: none;
      font-size: 3.5rem;
      color: var(--con);
      cursor: pointer;
      line-height: 1;
      transition: color 0.3s ease;
      margin: 0;
      padding: 0;
      width: 28px;
      height: 28px;
      text-align: center;
      // Solid muted blue (~3:1+ on conlyte) instead of low-opacity --con
      color: #5a8fb0;
      opacity: 1;

      &[aria-current="true"] {
        color: var(--con);
      }
    }
  }

  .quote-marks {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    pointer-events: none;

    strong {
      position: absolute;
      top: 0;
      left: -1.25rem;
      font-family: serif;
      font-size: 2rem;
      color: var(--con);
      opacity: 0.3;

      + strong {
        top: unset;
        left: unset;
        right: -1.25rem;
        bottom: 9rem;
      }

      @include v.mFlip() {
        top: 0.5rem;
        left: -4rem;
        font-size: 8rem;
        line-height: 1;

        + strong {
          right: 3rem;
          bottom: 0rem;
          font-size: 5rem;
        }
      }

      @include v.mFlipUnder() {
        &:first-child {
          display: none;
        }
        &:last-child {
          top: unset;
          bottom: 2rem;
          font-size: 5rem;
          right: 1rem;
        }
      }
    }
  }
}

// Simple fade transition for Vue 3
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
