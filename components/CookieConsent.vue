<template>
  <transition name="slide-up">
    <div v-if="showBanner" class="consent-banner">
      <p>
        <span>I'm into slinging code, not selling data. </span>
        <span
          >I use basic analytics to see where you're coming from and what you're
          clicking on.
        </span>
        <span>Is that okay with you?</span>
      </p>
      <div class="actions">
        <button aria-label="Yes I consent to analytics tracking" class="btn" @click="accept">Yes that's okay</button>
        <button aria-label="No I do not consent to analytics tracking" class="btn minimal" @click="decline">No thank you</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
const showBanner = ref(false);

onMounted(() => {
  if (!localStorage.getItem("consent_choice")) {
    showBanner.value = true;
  }
});

const accept = () => {
  localStorage.setItem("consent_choice", "granted");
  showBanner.value = false;
  // Trigger GTM event if needed
  window.dataLayer?.push({ event: "consent_granted" });
};

const decline = () => {
  localStorage.setItem("consent_choice", "denied");
  showBanner.value = false;
};
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
  width: 400px;
  // height: 160px;
  // font-size: 0.85rem;
  border-radius: calc(var(--radius) / 2.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;

  // Mobile: Bottom Center
  bottom: 4rem;
  left: 50%;
  right: auto;
  translate: -50% 0;

  @include v.mFlip() {
    // font-size: 1rem;
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

  // Tablet+: Bottom Left
  @include v.mFlip() {
    bottom: 2rem;
    top: unset;
    left: auto;
    right: 2rem;
    width: 400px;
    translate: unset; // translateX(-50%);
    // border-radius: 0.5rem;
  }

  button {
    background: transparent; // var(--hot);
    color: var(--hot);
    // border: none;
    padding: 0.5rem 1rem;
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
