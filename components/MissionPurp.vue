<template>
  <section class="mission-purpose">
    <div id="hello" class="title-spacer shorty">
      <h2>I like to build</h2>
    </div>

    <div class="flat">
      <Summary />
      <Goodies />
    </div>
      <Brackets name="hello" />

  </section>
</template>

<script>
// import {types as BracketTypes} from "@/components/Brackets"
export default {
  name: 'MissionPurp',
  props: {
    msg: String
  },
  // data:function() {
  //  BracketTypes: BracketTypes
  // }
}
</script>

<style scoped lang="scss">

  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

  section {
    // margin-top: 28vw;
    // scroll-margin-top: -6vh;

    &.mission-purpose {
      // padding-block: 5rem;

      &:before {
        display: block;
        content: "";
        margin-bottom: 30vh;
      }

      clip-path: inset(0);

      .flat {
        min-height: calc(100vh - 14vw);
      }

      // scroll-margin-top: 5vh;


      @include v.mFlip() {
        // padding-block: 12vw;
        // scroll-margin-top: calc(5vw - 5rem);
      }
    }
  }
</style>
