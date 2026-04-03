<template>
  <section class="title-split">
    <div :id="id" class="title-spacer">
      <h2 v-if="msg" v-html="msg" />
    </div>

    <!-- Parallax wrapper with scale and movement effect -->
    <Picture :img="img" :priority="priority" />
  </section>
</template>

<script>

export default {
  name: "Split",
  props: {
    id: String,
    msg: String,
    img: Object,
    priority: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

  section.title-split {
    width: 100%;
    min-height: 80vh;
    margin-left: auto;
    margin-right: auto;
    margin: 0 0 0;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    scroll-margin-top: -48vh;
    padding-bottom: 2rem;

    @include v.mFlip() {
      scroll-margin-top: -48vh;
      width: 100%;
      min-height: 82vh;
      // justify-content: center;
      margin: 24vh auto 0;
      margin: 0 auto;
    }

    &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: var(--con);
      z-index: 0;
    }

    .flat {
      padding-block: 0;
    }

    h2 {
      color: #fff;
      text-shadow: 0 0 10px var(--bod);
      margin-bottom: 0; // var(--gutter);
      position: relative;
      z-index: 2;

      @include v.mFlip() {
        margin-bottom: 0;
      }
    }
  }
</style>
