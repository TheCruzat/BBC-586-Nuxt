<template>
  <section>
    <div class="flat">
      <p>
        I'm a Chicago kid that
        <a href="//thecruzat.com" target="_blank" title="about Dan Cruzat"
          >made good</a
        >
        in Rose City
      </p>
      <p>
        I call my brother sun cuz
        <a
          href="//pelican.bandcamp.com"
          target="_blank"
          title="see PELICAN live before you die"
          >he shines</a
        >
        like one
      </p>
      <p>
        John showed us
        <a
          href="http://www.johnhardyco.com"
          title="This Is The Way"
          target="_blank"
          >the autodidact way</a
        >
      </p>
      <p>
        Beats, Rhymes +
        <a
          href="//www.iheart.com/podcast/1119-my-momma-told-me-69919303/"
          title="Cmon Langston"
          target="_blank"
          >Podcasts</a
        >
      </p>
      <p>
        <a href="//p1rk5.com" target="_blank" title="Pirks da Pilot aka"
          >P1RK5</a
        >
        [SystemSound]
      </p>
      <p>
        <a
          href="//maps.app.goo.gl/AWAdCkLis855A6z26"
          target="_blank"
          title="The Root of the Equation"
          >Evanston Forever</a
        >
      </p>
    </div>
    <Brackets name="etc" />
  </section>
</template>

<script>
export default {
  name: "Misc",
  props: {
    msg: {
      type: String,
      default: "",
    },
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
