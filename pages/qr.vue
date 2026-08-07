<template>
  <div id="app" class="qr-page">
    <main>
      <QR class="qr-code" aria-label="QR code" />
    </main>
    <footer>
      <a :href="rootURL" aria-label="theCruzat" title="theCruzat">
        <LogoTC />
      </a>
    </footer>
  </div>
</template>

<script setup>
import { rootURL } from "@/content/meta";

useHead({
  title: "QR : builtby theCruzat",
});
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

.qr-page {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 2rem 1.5rem;

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .qr-code {
    display: block;
    width: min(100%, 28rem);
    height: auto;
    aspect-ratio: 1;
  }

  footer {
    flex-shrink: 0;
    padding-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      display: block;
      max-width: 16rem;
      width: 100%;

      &:hover :deep(svg) {
        fill: var(--hot);
      }
    }

    :deep(svg) {
      display: block;
      width: 100%;
      height: auto;
      fill: var(--bod);
    }
  }
}
</style>
