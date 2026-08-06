<template>
  <section aria-label="Sidenotes">
    <div class="flat">
      <p>
        I'm a Chicago kid that
        <a
          href="//thecruzat.com"
          target="_blank"
          rel="noopener noreferrer"
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
          target="_blank"
          rel="noopener noreferrer"
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
          title="This Is The Way"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="This Is The Way — John Hardy Co (opens in new window)"
          >the autodidact way</a
        >
      </p>
      <p>
        Beats, Rhymes +
        <a
          href="//www.iheart.com/podcast/1119-my-momma-told-me-69919303/"
          title="Cmon Langston"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My Momma Told Me podcast (opens in new window)"
          >Podcasts</a
        >
      </p>
      <p>
        <a
          href="//p1rk5.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Pirks da Pilot aka"
          aria-label="P1RK5 (opens in new window)"
          >P1RK5</a
        >
        [SystemSound]
      </p>
      <p>
        <a
          href="//maps.app.goo.gl/AWAdCkLis855A6z26"
          target="_blank"
          rel="noopener noreferrer"
          title="The Root of the Equation"
          aria-label="Evanston Forever map (opens in new window)"
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
