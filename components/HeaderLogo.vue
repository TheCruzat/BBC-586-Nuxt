<template>
  <div>
    <h1>
      <span>built by the cruzat v{{ pv }}</span>

      <Logo :type="types.header" aria-hidden="true" focusable="false" />
    </h1>
    <SculptureGarden aria-hidden="true" />
  </div>
</template>

<script>
import { types } from "@/components/Logo";
import { portVersion } from "@/content/meta";

export default {
  name: "HeaderHome",
  data: function () {
    return {
      types,
      pv: portVersion,
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

h1 {
  padding: calc(#{var(--gutter)} / 2) var(--gutter);
  width: calc(100% - 2rem);
  max-width: 500px;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  background: var(--con);
  margin-top: var(--gutter);
  position: relative;
  z-index: 7;

  @include v.mFlipUnder(48rem) {
    $htrisize: 114px;

    &:after {
      display: block;
      content: "";
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: $htrisize 0 0 $htrisize;
      border-color: transparent transparent transparent var(--con);
      transform: rotate(0deg);
      position: absolute;
      bottom: 0;
      right: -$htrisize;
    }
  }

  @include v.mFlip(48rem) {
    margin-bottom: -0.8rem;
    width: 100%;
    max-width: unset;
    position: fixed;
    top: auto;
    right: auto;
    width: 100%;
    background: transparent;
  }

  // At high zoom / short viewports, keep the brand in document flow
  @media (max-height: 40rem) {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
  }

  span {
    text-align: right;
    display: inline-block;
    width: 100%;
    color: #fff;
    position: relative;
    z-index: 1;
    font-family: var(--title);
    padding: 0 1rem;
    font-size: 1.2rem;

    @include v.mFlip(48rem) {
      width: auto;
      font-size: 1.5rem;
      margin-left: auto;
      margin-right: auto;
      color: #fff;
      background: var(--con);
    }
  }
  svg {
    display: block;
    height: auto;
    width: 100%;
    margin: 0 auto -0.9rem;
    @include v.mFlip(48rem) {
      position: relative;
      transform: rotate(0);
      max-width: 100vw;
      width: 70vw;
      margin-top: 0;
      margin-bottom: -1.4rem;
    }

    @include v.mFlipUnder(48rem) {
      margin-bottom: 0;
    }
  }
}
</style>
