<template>
  <div class="site-wrapper">
    <a class="skip-link" href="#app">Skip to main content</a>

    <div class="main-content">
      <HeaderHome />

      <main id="app">
        <div class="relative">
          <div class="relative">
            <Navigation />
            <MissionPurp />
            <AI />
            <Split
              id="experience"
              msg="experience"
              :img="img[1]"
              :priority="true"
            />
            <SkillsExp />
            <Split id="work" msg="notable projects" :img="img[2]" />
            <Builds @loaded="onSectionLoaded('work')" />
            <Split id="scribblings" msg="scribblings" :img="img[3]" />
            <Blog @loaded="onSectionLoaded('blog')" />
            <Split id="sidenotes" msg="sidenotes" :img="img[4]" />
          </div>
          <Misc />
          <ResumeBug />
        </div>
      </main>

      <Footer />
      <ClientOnly>
        <CookieConsent />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ImageSets } from "@/content/SplitIMG";

const img = ref(ImageSets);
const showLoader = ref(true);

onMounted(() => {
  // As soon as the client takes over, start the fade out.
  // This is much faster than waiting for specific section loads.
  setTimeout(() => {
    showLoader.value = false;
  }, 300); // 300ms is the "sweet spot" for a quick brand flash
});
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;

.skip-link {
  position: absolute;
  left: var(--gutter);
  top: 0;
  z-index: 10000;
  padding: 0.75rem 1.25rem;
  background: var(--hot);
  color: #fff;
  font-weight: 700;
  border-radius: 0 0 0.5rem 0.5rem;
  transform: translateY(-120%);
  transition: transform 0.15s ease-out;

  &:focus,
  &:focus-visible {
    transform: translateY(0);
    outline-offset: 2px;
  }
}

.relative {
  position: relative;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}

.loader {
  position: fixed;
  inset: 0;
  background: var(--paper);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  &-content {
    color: var(--con);
    h3 {
      font-family: var(--title);
      font-size: clamp(2rem, 5vw, 12rem);
      line-height: 1;
      margin-block: 0;
    }
    p {
      width: 100%;
      text-align: center;
      color: var(--bod);
    }
  }
}

.main-content {
  animation: fadeIn 0.3s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .main-content {
    animation: none;
  }

  .fade-leave-active {
    transition: none;
  }
}

.progress-container {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--hot, #ff0000);
  transition: width 0.3s ease-out;
}
</style>
