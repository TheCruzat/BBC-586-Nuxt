<template>
  <PageFrame>
    <h1>Terms of Use</h1>
    <p>Last Updated: March 2026</p>

    <h3>1. Usage</h3>
    <p>
      This is a professional portfolio. Feel free to browse and check out the
      demos. Just don't try to break the site or use it for anything it wasn't
      intended for.
    </p>

    <h3>2. Intellectual Property</h3>
    <p>
      The code samples and projects here are my work. While I share a lot of
      logic on GitHub, the specific branding, content, and design of this
      portfolio are copyright &copy;2008-{{ yr }}.
    </p>

    <h3>3. No Warranties</h3>
    <p>
      I build things to last, but everything here is provided "as is." I'm not
      responsible if a demo goes offline or if you find a bug in an old project.
    </p>

    <h3>4. Settle Down</h3>
    <p>
      As the footer says: all rights reserved, but cmon now, settle down. Use
      the code samples to learn, build something cool, and let's keep the
      internet useful."
    </p>
  </PageFrame>
</template>
<script setup>
const yr = new Date().getFullYear();
</script>
<style lang="scss" scoped>
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;
</style>
