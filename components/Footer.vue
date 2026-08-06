<template>
  <footer>
    <Goodies :type="GoodieTypes.footer" />
    <div class="read">
      <div class="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
      <div class="blur">
        <img class="cic" width="32" height="32" :src="cic" alt="" />
        <LogoTC :type="LogoTypes.footer" />
        <h3>built by the cruzat v{{ pv }}</h3>
        <p class="">
          <span>copyright &copy;2008-{{ yr }}</span>
          <span>{{ currentName }}</span>
          <span>all rights reserved : settle down</span>
          <span>0 = 0 = 0</span>
        </p>
      </div>
    </div>
    <Picture
      :img="img"
      :img-style="{ objectPosition: 'bottom', opacity: '0.75' }"
    />
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { types as LogoTypes } from "@/components/LogoTC";
import Picture from "@/components/Picture";
import { types as GoodieTypes } from "@/components/Goodies";
import bg from "@/assets/bg-board.webp";
import bgM from "@/assets/bg-board-mobile.webp";
import cic from "@/assets/chicago-in-cascadia.png";
import { portVersion } from "@/content/meta";

// Setup Static Data
const now = new Date();
const yr = now.getFullYear();
const pv = portVersion;
const img = {
  full: { webp: bg, jpg: bg },
  mobile: { webp: bgM },
};

// Dynamic Name Logic
// 1. Initialize with the static "Server-Safe" default
const currentName = ref("Dan Cruzat");

onMounted(async () => {
  // 2. Wait for hydration to finish completely
  await nextTick();

  const runtimeConfig = useRuntimeConfig();
  // Access the array specifically from the public object
  const list = runtimeConfig.public.theNames;

  if (list && list.length > 0) {
    const randomIndex = Math.floor(Math.random() * list.length);
    currentName.value = "Dan Cruzat aka " + list[randomIndex];
  }
});
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

footer {
  background: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 3;
  text-align: center;

  .footer-links {
    width: auto;
    display: inline-flex;
    gap: 0.5rem;

    // margin-block: 0;
    margin-top: 0;
    margin-bottom: 2rem;

    @include v.mFlip() {
    }

    a {
      $link_ease: 0.15s ease-in-out;
      background: var(--bod);
      display: block;
      color: var(--lyt);
      font-weight: 600;
      padding: 0.5rem 1.5rem;
      border-radius: 3rem;
      transition:
        background $link_ease,
        color $link_ease;
      flex-basis: 1;
      border: 1px solid rgba(255, 255, 255, 0.25);
      font-size: var(--bodyFontSizeBaseline);

      &:hover {
        background: #fff;
        color: var(--hot);
        border-color: #fff;
      }
    }
  }
  h3 {
    color: #fff;
    font-family: var(--title);
  }

  img.cic {
    display: block;
    max-width: 32px;
    border-radius: 50%;
    margin-bottom: 0.75rem;
    margin-inline: auto;
  }

  svg {
    margin-bottom: 0;
    align-self: flex-start;
    max-width: 200px;
    margin-inline: auto;
    @include v.mFlipUnder {
      //display: none;
    }
    @include v.mFlip() {
      align-self: center;
      margin-bottom: 0rem;
      width: auto;
    }
  }

  // @media (max-width: 64rem) {
  //   text-align: left;
  span {
    // display: none;
  }
  // }

  @include v.mFlip() {
    br:not(.keep) {
      // display: none;
    }
  }

  .read,
  svg,
  .goodies-set {
    position: relative;
    z-index: 2;
  }

  .goodies-set {
    @include v.mFlip() {
      align-self: center;
    }
  }

  .read {
    padding: 20px 20px 2.5rem;
    color: var(--paper);
    width: 100%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3,
    p {
      margin-block: 0;
    }

    h3 {
      margin-bottom: 0.75rem;
    }

    @include v.mFlip() {
      // position: absolute;
      // bottom: 0; left: 0; right: 0;
    }
    @include v.mFlipUnder() {
      background: var(--bod);
      padding-bottom: 24px;
    }

    span {
      display: block;
      margin-bottom: 0;

      &:nth-last-child(2) {
        margin-bottom: 0.75rem;
      }

      &:last-child {
        font-size: 1rem;
        font-family: monospace;
        font-weight: 100;
      }
    }
  }

  .blur {
    @include v.mFlip() {
      display: inline-block;
      width: auto;
      margin-top: 0;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(0.75rem);
      // background: rgba(0,0,0,0.2);
    }

    p {
      margin-bottom: 0;
      line-height: 1.8;
      font-size: 0.75rem;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
      font-weight: 600;
    }
  }
}
</style>
