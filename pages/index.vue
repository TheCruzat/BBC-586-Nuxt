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
            <Split id="experience" msg="experience" :img="img[1]" />
            <SkillsExp />
            <Split id="work" msg="notable projects" :img="img[2]" />
            <Builds />
            <Split id="scribblings" msg="scribblings" :img="img[3]" />
            <Blog />
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
import { ImageSets } from "@/content/SplitIMG";

const img = ref(ImageSets);
</script>

<style scoped lang="scss">
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
</style>
