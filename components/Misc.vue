<template>
  <section aria-label="Sidenotes">
    <div class="flat">
      <p>
        I'm a Chicago kid that
        <a
          href="//thecruzat.com"
          v-bind="ext"
          title="about Dan Cruzat"
          aria-label="about Dan Cruzat (opens in new window)"
          >made good</a
        >
        in Rose City
      </p>
      <p>
        I call my brother sun cuz
        <a
          href="//pelican.bandcamp.com"
          v-bind="ext"
          title="see PELICAN live before you die"
          aria-label="see PELICAN live before you die (opens in new window)"
          >he shines</a
        >
        like one
      </p>
      <p>
        John showed us
        <a
          href="https://www.johnhardyco.com"
          v-bind="ext"
          title="This Is The Way"
          aria-label="This Is The Way — John Hardy Co (opens in new window)"
          >the autodidact way</a
        >
      </p>
      <p>
        Beats, Rhymes +
        <a
          href="//www.iheart.com/podcast/1119-my-momma-told-me-69919303/"
          v-bind="ext"
          title="Cmon Langston"
          aria-label="My Momma Told Me podcast (opens in new window)"
          >Podcasts</a
        >
      </p>
      <p>
        <a href="//p1rk5.com" v-bind="ext" title="Pirks da Pilot aka"
          >P1RK5<span class="visually-hidden"> (opens in new window)</span></a
        >
        [SystemSound]
      </p>
      <p>
        <a
          href="//maps.app.goo.gl/AWAdCkLis855A6z26"
          v-bind="ext"
          title="The Root of the Equation"
          >Evanston Forever<span class="visually-hidden">
            (opens in new window)</span
          ></a
        >
      </p>
    </div>
    <Brackets name="etc" />
  </section>
</template>

<script>
import { externalLinkAttrs } from "@/utils/externalLink";

export default {
  name: "Misc",
  data() {
    return {
      ext: externalLinkAttrs("//x"),
    };
  },
};
</script>

<style scoped lang="scss">
h3 {
  font-family: var(--title);
  color: #ccc;
}

.flat {
  margin-bottom: 0;
}
</style>
