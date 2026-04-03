<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "WildSet"
}
</script>

<style scoped lang="scss">

  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--gutter);
    padding-bottom: 2rem;
  }
</style>
