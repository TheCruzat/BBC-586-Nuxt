<template>
  <div class="sculpture-garden" aria-hidden="true">
    <span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>

    <span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>

    <span>
      <span></span>
      <span></span>
    </span>

    <span>
      <span></span>
      <span></span>
    </span>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

.sculpture-garden {
  --garden-color: var(--paper);
  @include v.mFlipUnder(48rem) {
    display: none;
  }
  // Hide decorative fixed chrome when zoomed / short viewport (1.4.10 reflow)
  @media (max-height: 40rem) {
    display: none;
  }
  position: fixed;
  width: 48vw;
  height: 5vw;
  background: var(--garden-color);
  left: calc(50% - 24vw);
  top: 5vw;
  z-index: 6;
  pointer-events: none;

  &:before,
  &:after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    width: 0px;
    height: 0px;
    border-style: solid;

    transform: rotate(0deg);
  }

  &:before {
    border-width: 0 0 6vw 6vw;
    border-color: transparent transparent var(--garden-color) transparent;
    left: calc(-6vw + 1px);
  }

  &:after {
    border-width: 6vw 0 0 6vw;
    border-color: transparent transparent transparent var(--garden-color);
    right: calc(-6vw + 1px);
  }

  span {
    display: block;
    position: absolute;
    background: var(--garden-color);

    > span {
      background: transparent;
      width: 0px;
      height: 0px;
      border-style: solid;
      transform: rotate(0deg);
      bottom: 0;
    }
  }

  > span {
    &:nth-child(1) {
      width: 20vw;
      height: 5vw;
      bottom: -2vw;
      left: -12vw;

      span:nth-child(1) {
        border-width: 0 0 6vw 6vw;
        border-color: transparent transparent var(--garden-color) transparent;
        left: calc(-6vw + 1px);
      }
      span:nth-child(2) {
        border-width: 5vw 5vw 0 0;
        border-color: var(--garden-color) transparent transparent transparent;
        right: calc(-5vw + 1px);
      }
      span:nth-child(3) {
        border-width: 0 4vw 4vw 0;
        border-color: transparent var(--garden-color) transparent transparent;
        left: calc(100% - 4vw);
        top: 100%;
      }
      span:nth-child(4) {
        border-width: 0 6vw 6vw 0;
        border-color: transparent var(--garden-color) transparent transparent;
        left: -6vw;
        top: 100%;
      }
    }

    &:nth-child(2) {
      width: 20vw;
      height: 5vw;
      bottom: -2vw;
      right: -12vw;

      span:nth-child(1) {
        border-width: 0 5vw 5vw 0;
        border-color: transparent var(--garden-color) transparent transparent;
        left: calc(-5vw + 1px);
      }
      span:nth-child(2) {
        border-width: 6vw 0 0 6vw;
        border-color: transparent transparent transparent var(--garden-color);
        right: calc(-6vw + 1px);
      }
      span:nth-child(3) {
        border-width: 4vw 4vw 0 0;
        border-color: var(--garden-color) transparent transparent transparent;
        right: calc(100% - 4vw);
        top: 100%;
      }
      span:nth-child(4) {
        border-width: 6vw 6vw 0 0;
        border-color: var(--garden-color) transparent transparent transparent;
        right: -6vw;
        top: 100%;
      }
    }
    &:nth-child(3) {
      width: 24vw;
      height: 4vw;
      top: -2.5vw;
      right: calc(50% - 12vw);

      span {
        width: 0px;
        height: 0px;
        border-style: solid;
        transform: rotate(0deg);
        bottom: 0;
      }

      span:nth-child(1) {
        border-width: 6vw 0 0 6vw;
        border-color: transparent transparent transparent var(--garden-color);
        left: calc(-2vw + 1px);
      }
      span:nth-child(2) {
        border-width: 0 0 6vw 6vw;
        border-color: transparent transparent var(--garden-color) transparent;
        right: calc(-2vw + 1px);
      }
    }
    &:nth-child(4) {
      width: 16vw;
      height: 5vw;
      bottom: -3vw;
      right: calc(50% - 8vw);

      span:nth-child(1) {
        border-width: 0 6vw 6vw 0;
        border-color: transparent var(--garden-color) transparent transparent;
        left: calc(-6vw + 1px);
        top: 0;
      }
      span:nth-child(2) {
        border-width: 6vw 6vw 0 0;
        border-color: var(--garden-color) transparent transparent transparent;
        right: calc(-6vw + 1px);
        top: 0;
      }
    }
  }
}
</style>
