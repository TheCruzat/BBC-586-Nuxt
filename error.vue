<template>
  <PageFrame>
    <div class="error-page">
      <header class="error-header">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Route Not Found</h2>
        <p class="error-message">What looks good?</p>
      </header>

      <nav class="error-nav">
        <a href="/resume" class="btn">Resume</a>
        <a href="/privacy" class="btn">Privacy Policy</a>
        <a href="/resume" class="btn">Terms of Use</a>
      </nav>
    </div>
  </PageFrame>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped lang="scss">
@use "@/styles/vars" as v;

.error-header {
  margin-bottom: 2rem;
}

.error-nav {
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
