<template>
  <transition name="slide-up">
    <div
      v-if="showBanner"
      ref="banner"
      class="consent-banner"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
      @keydown="onKeydown"
    >
      <p id="consent-title">
        <span>I'm into slinging code, not selling data. </span>
        <span
          >I use basic analytics to see where you're coming from and what you're
          clicking on.
        </span>
        <span>Is that okay with you?</span>
      </p>
      <div class="actions">
        <button ref="acceptBtn" type="button" class="btn" @click="accept">
          Yes that's okay
        </button>
        <button
          ref="declineBtn"
          type="button"
          class="btn minimal"
          @click="decline"
        >
          No thank you
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { loadGtm, scheduleGtmLoad } from "@/utils/loadGtm";

const showBanner = ref(false);
const banner = ref(null);
const acceptBtn = ref(null);
const declineBtn = ref(null);
let previouslyFocused = null;

const focusAccept = async () => {
  await nextTick();
  acceptBtn.value?.focus();
};

const dismiss = () => {
  showBanner.value = false;
  document.documentElement.style.removeProperty("--consent-offset");
  previouslyFocused?.focus?.();
  previouslyFocused = null;
};

const accept = () => {
  localStorage.setItem("consent_choice", "granted");
  loadGtm();
  window.dataLayer?.push({ event: "consent_granted" });
  dismiss();
};

const decline = () => {
  localStorage.setItem("consent_choice", "denied");
  dismiss();
};

const onKeydown = (event) => {
  if (event.key === "Escape") {
    decline();
    return;
  }
  if (event.key !== "Tab" || !banner.value) return;

  const focusable = [acceptBtn.value, declineBtn.value].filter(Boolean);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

onMounted(() => {
  const choice = localStorage.getItem("consent_choice");
  if (choice === "granted") {
    // Returning visitors: load analytics after idle so it does not compete with LCP
    scheduleGtmLoad();
    return;
  }
  if (!choice) {
    previouslyFocused = document.activeElement;
    showBanner.value = true;
    document.documentElement.style.setProperty("--consent-offset", "12rem");
    focusAccept();
  }
  // "denied" — never load GTM
});

watch(showBanner, (open) => {
  if (open) {
    document.documentElement.style.setProperty("--consent-offset", "12rem");
    focusAccept();
  }
});

onBeforeUnmount(() => {
  document.documentElement.style.removeProperty("--consent-offset");
});
</script>

<style lang="scss" scoped>
@use "@/styles/vars" as v;
@use "@/styles/global" as g;

.consent-banner {
  position: fixed;
  z-index: 9999;
  background: #fff;
  border: 2px solid var(--con);
  padding: 1.5rem;
  box-shadow: 0 8px 20px var(--bod);
  width: min(400px, calc(100vw - 2rem));
  border-radius: calc(var(--radius) / 2.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;

  // Sit above the sticky resume bar
  bottom: calc(4rem + env(safe-area-inset-bottom, 0px));
  left: 50%;
  right: auto;
  translate: -50% 0;
  max-height: min(80vh, 28rem);
  overflow: auto;

  @include v.shortViewport {
    bottom: 0.5rem;
    max-height: calc(100vh - 1rem);
    width: min(400px, calc(100vw - 1rem));
  }

  .actions {
    padding-top: 0.5rem;
  }

  p {
    margin-top: 0;
    span {
      width: 100%;
      display: block;
      line-height: 1.4;
      margin: 0 0 0.5rem;

      @include v.mFlip() {
        margin: 0 0 1rem;
        font-size: 1.125rem;
      }
    }
  }

  @include v.mFlip() {
    bottom: calc(2rem + env(safe-area-inset-bottom, 0px));
    top: unset;
    left: auto;
    right: 2rem;
    width: 400px;
    translate: unset;
  }

  button {
    background: transparent;
    color: var(--hot);
    padding: 0.5rem 1rem;
    min-height: 44px;
    cursor: pointer;
    margin-right: 0.5rem;
    border-radius: 2rem;
    border-color: var(--con);
    transition: 0.2s all ease-in-out;
    font-size: var(--bodyFontSizeBaseline);
    font-weight: 600;

    &.minimal {
      background: none;
      border-color: transparent;
      color: var(--bod);
      text-decoration: underline;
    }

    &:hover,
    &:hover.minimal {
      background: var(--hot);
      color: #fff;
      text-decoration: none;
      border-color: var(--hot);
    }
  }

  @media print {
    display: none;
  }
}
</style>
