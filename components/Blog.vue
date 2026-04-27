<template>
  <section>
    <div class="flat">
      <h3>Occasionally, I write</h3>
      <div class="cards">
        <a
          v-for="post in limitedPosts"
          :key="post.id"
          :href="post.link"
          target="_blank"
          class="blogcard"
        >
          <div class="card-header">
            <p class="card-title" v-html="post.title.rendered"></p>
          </div>

          <div class="card-body">
            <div
              v-if="post._embedded && post._embedded['wp:featuredmedia']"
              class="card-thumb"
            >
              <img
                width="150"
                height="150"
                :src="
                  post._embedded['wp:featuredmedia'][0].media_details.sizes
                    .medium.source_url
                "
                :alt="post.title.rendered"
              />
            </div>
            <div
              class="card-excerpt"
              v-html="truncateExcerpt(post.excerpt.rendered)"
            ></div>
          </div>

          <div
            class="card-footer"
            v-if="post._embedded && post._embedded['wp:term']"
          >
            <span
              v-for="term in post._embedded['wp:term'][0]"
              :key="term.id"
              class="label"
            >
              {{ term.name }}
            </span>
          </div>
        </a>
      </div>
      <div class="blog-link">
        <p>
          <a class="btn" :href="blogURL" target="_blank" title="read more at my blog" aria-label="visit Dan Cruzat's Blog (opens in new window)"
            >Visit My Blog</a
          >
        </p>
      </div>
    </div>
    <Brackets name="blog" />
  </section>
</template>

<script>
import { blogURL } from "@/content/meta";

export default {
  name: "Blog",
  data() {
    return {
      posts: [],
      blogURL,
      rootie: "https://coffeewith.thecruzat.com/wp-json/wp/v2/posts",
    };
  },
  computed: {
    limitedPosts() {
      return this.posts.slice(0, 4);
    },
  },
  mounted() {
    this.getAllData();
  },
  methods: {
    async getAllData() {
      try {
        // Nuxt 3 $fetch is global
        const data = await $fetch(this.rootie + "?_embed&per_page=4");
        this.posts = data;
      } catch (err) {
        console.error("Blog fetch error:", err.message);
      }
    },
    truncateExcerpt(html) {
      if (!html) return "";
      const plainText = html.replace(/<[^>]*>/g, "");
      const shortened = plainText.split(" ").slice(0, 32).join(" ");
      return "<p>" + shortened + "...</p>";
    },
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/vars" as v;

section {
  background: var(--conlyte);
}

.cards {
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // grid-template-columns: 100%;
  gap: 1.8rem var(--gutter);
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  $card_med: calc(50% - (#{var(--gutter)} / 2));
  $card_largo: calc(33.3333% - (#{var(--gutter)} / 1.5));

  @include v.mFlip(36rem) {
    // grid-template-columns: $card_med $card_med;
  }

  @include v.mFlip() {
    // grid-template-columns: $card_largo $card_largo $card_largo;
  }

  > a {
    border-radius: 0.5rem;
    text-decoration: none;
    border: 2px solid var(--lyter);
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
    // display: flex;
    align-items: center;
    padding: 1rem;
    background: #fff; // var(--paper);
    transition:
      border 0.35s ease-in,
      transform 0.35s ease-in;

    @include v.mFlip(64rem) {
      width: calc(50% - (var(--gutter) / 2));
    }

    &:hover {
      background: #fff;
      color: var(--hot);
      border-color: var(--con);
      transform: translateY(-2px);
      transition:
        border 0.15s ease-out,
        transform 0.15s ease-out;
      // border-left: 8px solid var(--hot);
    }

    p {
      margin: 0;
      line-height: 1.4;

      &:after {
        display: none;
      }
    }
  }
}

.card-header {
  margin-bottom: 0.75rem;
}

.card-title {
  margin: 0;
  font-size: var(--titleFontSize);
  @include v.mFlipUnder() {
    text-align: center;
  }
}

.card-thumb img {
  border-radius: 0.5rem;
  object-position: center;
  object-fit: cover;
}

.card-body {
  @include v.mFlip() {
    display: flex;
    gap: 1rem; // var(--gutter);
  }
  @include v.mFlipUnder() {
    .card-thumb {
      width: 100%;
      max-width: 300px;
      margin-inline: auto;
      img {
        width: 100%;
        height: auto;
        margin-bottom: 0.75rem;
      }
    }
  }
}

.card-excerpt {
  font-size: var(--bodyFontSizeBaseline);
  color: var(--bod);

  p {
    margin: 0;
  }
}

.card-footer {
  text-align: right;
  color: var(--bod);
  font-size: 0.75rem;
  text-transform: uppercase;
}

.blog-link {
  text-align: center;
}
</style>
