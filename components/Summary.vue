<template>
  <div class="summary">

      <p><strong>Senior Front End Engineer</strong> with 20+ years building UI for <strong>indie shops and household names</strong>. Portland OR, remote-native. My best work happens when I own the front end, the user layer; close to the <strong>design</strong>, close to the <strong>code</strong>, a <strong>mentor</strong> to guide the way.</p>
      <p>Currently building in <strong>React</strong> and <strong>WordPress</strong>, with <strong>Astro</strong>, <strong>Vue</strong> and <strong>Next</strong> regularly in the mix.</p>
      <p>I am madly <strong>in love</strong> with <strong>CSS</strong>, which is evolving faster than ever.</p>

  </div>
</template>

<script>
  export default {
    name: 'Summary'
  }
</script>

<style scoped lang="scss">

@use "@/styles/vars" as v;
@use "@/styles/global.scss" as g;
@use "@/styles/resume" as r;

.summary {

  @include v.mFlip(80rem) {
    padding-right: 9rem;
  }


  @media print {
    padding-right: 4rem;
  }
}

</style>
