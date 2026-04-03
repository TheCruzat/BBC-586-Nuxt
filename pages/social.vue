<template>
  <div id="app" class="social">

    <div class="social-container">

      <div class="social-logo-wrap">
        <Logo :type="types.social" />
      </div>

      <div class="social-descriptor">
        <p>builtby the cruzat {{ pv }}</p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { types } from "@/components/Logo"
import { portVersion } from "@/content/meta";

const pv = portVersion;
// Set page title
useHead({
  title: 'Social Image'
})
</script>

<style scoped lang="scss">

  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

.social {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--subtitle);

  .social-logo-wrap {
    display: inline-block;
    width: auto;
    svg {
      padding: 0.8rem 1.2rem;
    }
  }

  header {
    width: 1200px;
    height: 630px;
    border: 1px solid #ccc;
    overflow: hidden;

    .subset {
      display: none;
      p {
        font-size: 4rem;
      }
    }
  }

  .social-descriptor {
    background: #fff;
    width: 100%;
    display: inline-block;
    font-family: var(--title);
    font-size: 9rem;
    text-align: center;
    color: var(--con);
    padding: 3.75rem 0 2.5rem;

    p {
      margin: 0;
      line-height: 1;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    p:nth-child(2) {
      font-size: 6rem;
      color: var(--hot);
    }
  }

  .social-container {
    width: 1200px;
    height: 630px;
    border: 1px solid #ccc;
    background: var(--lyt);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    picture {
      top: 2rem;
      left: 2rem;
      right: 2rem;
      bottom: 2rem;
    }
  }
}
</style>
