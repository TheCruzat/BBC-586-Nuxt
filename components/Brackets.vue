<template>
  <div aria-hidden="true" class="brackets" :data-type="activeType.label">
    <strong>{{ activeType.char }}</strong>
    <strong>{{ activeType.endChar || activeType.char }}</strong>
  </div>
</template>

<script>
// Keep your types export as is
export const types = {
  hello: { label: "hello", char: "+" },
  ai: { label: "ai", char: "@" },
  experience: { label: "experience", char: "<", endChar: "/>" },
  work: { label: "work", char: "{", endChar: "}" },
  blog: { label: "blog", char: "“", endChar: "”" },
  etc: { label: "etc", char: "/*", endChar: "*/" },
};

export default {
  name: "Brackets",
  props: {
    // We pass the string key (e.g., 'hello') here
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    activeType() {
      // Fallback to 'hello' if the passed name doesn't exist
      return types[this.name] || types.hello;
    },
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

.brackets {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 10vh;
  display: none;
  align-items: flex-end;
  justify-content: space-between;
  z-index: -2;
  color: var(--paper);
  font-family: Arial;
  font-weight: bold;

  @include v.mFlip(40rem) {
    display: flex;
  }

  // strong {
  // border: 1px solid red;
  // background: red;
  // }

  &[data-type="hello"] {
    top: 0;
    // bottom: 0vh;

    strong {
      // margin-left: -3.5vw;
      transform: translateX(-25%);

      + strong {
        // margin-right: -3.5vw;
        transform: translateX(25%);
      }
    }
  }

  &[data-type="ai"] {
    top: 0;
    color: #fff;
    // bottom: 0vh;

    strong {
      // margin-left: -3.5vw;
      transform: translateX(-50%);

      + strong {
        // margin-right: -3.5vw;
        transform: translateX(50%);
      }
    }
  }

  &[data-type="experience"] {
    strong {
      // margin-left: -3.5vw;
      transform: translateX(-25%);

      + strong {
        // margin-right: -3.5vw;
        transform: translateX(25%);
      }
    }
  }

  &[data-type="work"] {
    // color: #fff;
    bottom: 14vh;

    strong {
      // margin-left: -3.5vw;
      transform: translateX(-12.5%);

      + strong {
        // margin-right: -3.5vw;
        transform: translateX(12.5%);
      }
    }
  }

  &[data-type="blog"] {
    bottom: 4.5vh;
    font-family: Arial Black;
    color: var(--lyter);

    strong {
      // margin-left: -3.5vw;
      transform: translateX(-6.25%);

      + strong {
        // margin-right: -3.5vw;
        transform: translateX(6.25%);
      }
    }
  }

  &[data-type="etc"] {
    // bottom: 8vh;

    strong {
      // margin-left: -3.5vw;
      transform: translateX(-6.25%);

      + strong {
        // margin-right: -3.5vw;
        transform: translateX(6.25%);
      }
    }
  }
}

strong {
  font-size: 24vw;
  font-weight: 100;

  + strong {
    margin-left: 0;
  }
}
</style>
