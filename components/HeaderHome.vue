<template>
  <header
    aria-label="built by the Cruzat: the online portfolio of Dan Cruzat, front end engineer based in Portland Oregon"
    @scroll="handleParallax"
  >
    <HeaderLogo />

    <div aria-hidden="true" class="tiptop">
      <div class="subset">
      <p class="name">Dan Cruzat</p>
      <p><strong>Senior Front End Engineer + UI Architect</strong></p>
      <p>Bridging Design & Code in Portland, OR</p>
      </div>
    </div>

    <span class="header-corner"></span>
    <span class="header-corner"></span>
    <span class="header-corner"></span>
    <span class="header-corner"></span>
    <span class="header-corner"></span>
    <span class="header-corner"></span>
    <span class="header-brace top-white"></span>
    <span class="header-brace tl-white"></span>
    <span class="header-brace tr-white"></span>
    <span class="header-brace bottom-con"></span>
    <span class="header-brace bottom-white"><span /><span /></span>

    <!-- Parallax wrapper for image -->
    <div class="parallax-wrapper" ref="parallaxWrapper">
      <Picture
        :img="img[0]"
        :noLazy="true"
        priority="true"
        :imgStyle="{
          objectPosition: 'var(--headerBGPos)',
          transform: `translateY(${parallaxOffset}px)`,
          transition: isScrolling ? 'none' : 'transform 0.1s ease-out'
        }"
      />
    </div>

  </header>
</template>

<script>
import Picture from "@/components/Picture";
import { ImageSets } from "@/content/SplitIMG";
import bgM from "@/assets/bg-fopo-mobile.webp";
import bg from "@/assets/fopo.jpg";

const headerTypes = {
  social: "social",
}

export default {
  name: 'HeaderHome',
  data: function() {
    return {
      img: ImageSets,
      parallaxOffset: 0,
      isScrolling: false,
      scrollTimeout: null,
      headerTop: 0,
      windowHeight: 0
    }
  },
  props: {
    msg: String,
  },
  mounted: function() {
    this.windowHeight = window.innerHeight
    this.headerTop = this.$refs.parallaxWrapper?.offsetTop || 0
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout)
    }
  },
  methods: {
    handleScroll: function(event) {
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.parallaxOffset = 0;
        return;
      }
      const scrollY = window.scrollY
      const headerElement = this.$refs.parallaxWrapper

      if (!headerElement) return

      const headerRect = headerElement.getBoundingClientRect()
      const headerBottom = scrollY + headerRect.height

      // Only apply parallax when header is in viewport
      if (scrollY < headerBottom) {
        // Parallax effect: move background slower than scroll
        // Adjust the multiplier (0.5) for more or less intense parallax
        this.parallaxOffset = scrollY * 0.53
      }

      this.isScrolling = true
      clearTimeout(this.scrollTimeout)
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false
      }, 150)
    },
    handleResize: function() {
      this.windowHeight = window.innerHeight
      this.headerTop = this.$refs.parallaxWrapper?.offsetTop || 0
    }
  }
}
</script>

<style scoped lang="scss">

  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

  header {

    --frame-color: var(--con);

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 4rem);
    padding: 0;
    position: relative;
    margin: 0 0 4rem;
    z-index: 5;
    border-right: 1rem solid var(--frame-color);
    border-top: 1rem solid var(--lyt);
    // border-bottom: 1rem solid var(--frame-color);
    background: #8cd8fe;
    overflow: hidden;
    clip-path: inset(0);

    @include v.mFlip(48rem) {
       height: 100vh;
       background-position: 40% 50%;
       border: none;
       border-top: 1rem solid var(--frame-color);
       margin: 0;

       &:after {
        display: block;
        content: "";
        width: 100%;
        height: 4.5rem;
        background: #fff; //var(--frame-color);
        z-index: 5;
        position: absolute;
        left: 0;
        bottom: 0;
       }
    }

    // Parallax wrapper for the image
    .parallax-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      overflow: hidden;
      will-change: transform;

      @include v.mFlip() {
        border-left: 1rem solid var(--frame-color);
        border-right: 1rem solid var(--frame-color);
      }
    }

    .header-corner {

      border-style: solid;
      transform: rotate(0deg);
      position: absolute;
      top: -1rem;
      z-index: 2;
      --corner-size: 72px;
      --small-corner-size: 44px;

      &:nth-child(3) {
        left: 0;
        border-width: var(--corner-size) var(--corner-size) 0 0;
        border-color: var(--frame-color) transparent transparent transparent;

        @include v.mFlipUnder() {
          border-color: var(--lyt) transparent transparent transparent;
        }

        @include v.mFlipBetween(48rem, 64rem) {

        }
      }

      &:nth-child(4) {
        right: 0;
        border-width: 0 var(--corner-size) var(--corner-size) 0;
        border-color: transparent var(--frame-color) transparent transparent;
        @include v.mFlipUnder() {
          right: -1rem;
        }
      }

      &:nth-child(5) {
        left: 0;
        top: unset;
        bottom: 4.5rem;
        border-width: var(--corner-size) 0 0 var(--corner-size);
        border-color: transparent transparent transparent #fff;

        @include v.mFlipUnder(64rem) {
          display: none;
        }
      }

      &:nth-child(6) {
        right: 0;
        top: unset;
        bottom: 4.5rem;
        border-width: 0 0 var(--corner-size) var(--corner-size);
        border-color: transparent transparent #fff transparent;

        @include v.mFlipUnder(64rem) {
          display: none;
        }
      }

      &:nth-child(7) {
        left: 0;
        top: unset;
        bottom: 0;
        border-width: var(--small-corner-size) 0 0 var(--small-corner-size);
        border-color: transparent transparent transparent var(--con);
        z-index: 6;
        @include v.mFlipUnder(64rem) {
          display: none;
        }
      }

      &:nth-child(8) {
        right: 0;
        top: unset;
        bottom: 0;
        border-width: 0 0 var(--small-corner-size) var(--small-corner-size);
        border-color: transparent transparent var(--con) transparent;
        z-index: 6;
        @include v.mFlipUnder(64rem) {
          display: none;
        }
      }

      @include v.mFlipUnder(40rem) {
        // display: none;
      }
    }

    .header-brace {
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      height: 12px;
      bottom: 0;
      z-index: 6;

      @include v.mFlipUnder() {
        display: none;
      }

      &.bottom-con {
        background: var(--con);
      }

      &.bottom-white {
        background: #fff;
        height: 12px;
        bottom: 0px;
        width: 400px;
        left: 50%;
        transform: translateX(-50%);
        // border-style: solid;

        &:before, &:after {
          display: block;
          content: "";
          position: absolute;
          top: 0;
          border-style: solid;
        }

        &:before {
          border-width: 0 14px 14px 0;
          border-color: transparent #fff transparent transparent;
          left: -14px;
        }

        &:after {
          border-width: 14px 14px 0 0;
          border-color: #fff transparent transparent transparent;
          right: -14px;
        }
      }

      &.top-white {
        top: -1rem;
        bottom: unset;
        height: 1rem;
        background: var(--lyter);
        width: 14vw;
        left: 50%;
        translate: -50% 0;

        &:before, &:after {
          display: block;
          content: "";
          border-style: solid;
          position: absolute;
        }

        &:before {
          border-width: 0 1rem 1rem 0;
          border-color: transparent var(--lyter) transparent transparent;
          left: calc(1px - 1rem);
          // background: red;
        }

        &:after {
          border-width: 1rem 1rem 0 0;
          border-color: var(--lyter) transparent transparent transparent;
          right: calc(1px - 1rem);
        }
      }

      &.tl-white {
        width: 20vw;
        height: 1.5rem;
        top: -1rem;
        left: 0;
        bottom: unset;
        background: var(--lyt);
        z-index: 1;

        &:after {
          display: block;
          content: "";
          border-style: solid;
          position: absolute;
        }

        &:after {
          border-width: 1.5rem 1.5rem 0 0;
          border-color: var(--lyt) transparent transparent transparent;
          right: -1.5rem;
        }
      }

      &.tr-white {
        width: 20vw;
        height: 1.5rem;
        top: -1rem;
        right: 0;
        left: unset;
        bottom: unset;
        background: var(--lyt);
        z-index: 1;

        &:after {
          display: block;
          content: "";
          border-style: solid;
          position: absolute;
        }

        &:after {

          border-width: 0 1.5rem 1.5rem 0;
          border-color: transparent var(--lyt) transparent transparent;
          left: -1.5rem;
        }
      }
    }
  }
  h1, p {
    margin: 0;
  }

  .tiptop {
    width: 100%;
    position: relative;
    background: #fff;
    display: inline-block;
    width: auto;
    margin-bottom: -1px;
    z-index: 6;

    @include v.mFlip(48rem) {
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      left: calc(50% - 207px);
      width: 414px;
    }

    $tsize: 116px;
    $hcorners: #fff;
    &:after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      right: -132px;
      border-style: solid;
      border-width: 140px 0 0 140px;
      border-color: transparent transparent transparent $hcorners;
      transform: rotate(0deg);

      @include v.mFlipUnder(40rem) {
        // display: none;
      }

      @include v.mFlip(48rem) {
        bottom: 2.5rem;
      }

      @include v.mFlip() {
        border-width: 180px 0 0 180px;
      }
    }

    &:before {
      display: block;
      content: "";
      position: absolute;
      bottom: 2.5rem;
      left: -132px;
      border-style: solid;
      border-width: 180px 180px 0 0;
      border-color: transparent $hcorners transparent transparent;
      @include v.mFlipUnder(48rem) {
        display: none;
      }
      @include v.mFlipUnder(64rem) {
        border-width: 140px 140px 0 0;
        // display: none;
      }
    }
  }

  .subset {
    width: 100%;

    padding: 0.8rem var(--gutter) 0;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--title);
    position: relative;
    z-index: 2;



    @include v.mFlip(48rem) {
      max-width: 45rem;
      padding-bottom: 2rem;
      p {
        text-align: center;
      }
    }
  }
  p {
    text-transform: lowercase;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    color: var(--bod);
    line-height: 1.2;
    align-self: flex-end;
    text-align: left;
    @include v.mFlip() {
      width: auto;
      font-size: 1.5rem;
      text-align: left;
      br {
        display: none;
      }
    }

    &.name {
      opacity: 1;
      text-transform: capitalize;
      font-size: 3rem;
      color: var(--hot);
      margin-bottom: 1px;
      @include v.mFlip() {
        font-size: 3.5rem;
      }
    }
  }
</style>
