<template>
  <a
    href="#hello"
    class="logo-wrap"
    aria-label="built by the Cruzat — jump to introduction"
  >
    <Logo type="nav" />
  </a>
</template>

<script>
export default {
  name: "LogoNav",
};
</script>

<style lang="scss" scoped>
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

.logo-wrap {
  width: auto;
  flex-basis: 2;
  flex-grow: 2;
  font-family: var(--title);
  font-size: 1.5rem;
  line-height: 2;
  color: var(--con);
  padding-right: var(--gutter);
  display: flex;
  align-items: center;
  position: relative;
  height: auto;
  min-height: 64px;
  text-decoration: none;

  @include v.mFlipUnder(48rem) {
    width: 100%;
    font-size: 2rem;
    line-height: 1.5;
    background: #fff;
    padding-block: 0.5rem;
    justify-content: center;
  }

  @include v.mFlip(48rem) {
    padding-left: 32px;
    padding-right: 32px;
  }

  svg {
    max-width: 20rem;
    position: absolute;

    @include v.mFlipUnder(48rem) {
      top: 0.5rem;
      left: 50%;
      translate: -50% 0;
      width: 100%;
    }
    @include v.mFlip(48rem) {
      top: 0.5rem;
      left: 32px;
      max-width: 22rem;
    }
  }
}
</style>
