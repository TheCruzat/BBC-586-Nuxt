<template>
  <div id="app" class="standard-page">
  	<HeaderPage class="page-header" />
    <div class="flat">
      <div class="standard-content">
		<slot />
        <p><a href="/" class="btn">Home</a></p>
      </div>
    </div>
    <Brackets name="privacy" />
  	<Footer />
  	<CookieConsent />
  </div>
</template>

<script>
	export default {
		name: "PageFrame"
	}
</script>

<style scoped lang="scss">
  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

  .flat {
  	@include v.mFlip() {
  		padding-top: 18vw;
  	}

  }

  .standard-page {
    // padding: 10rem var(--gutter) 5rem;
    background: #fff; // var(--paper);
    min-height: 100vh;

    .standard-content {
      max-width: 40rem;
      margin: 2rem auto 4rem;
      line-height: 1.6;
      position: relative;
      z-index: 1;

      h3 { margin-top: 2rem; color: var(--hot); }
      p { margin-bottom: 1.2rem; }
      ul { margin-bottom: 1.2rem; padding-left: 1.5rem; }
      li:not(:last-child) { margin-bottom: 1rem; }

      @include v.mFlip() {
	      &:after {
	      	display: block;
	      	content: "";
	      	position: fixed;
	      	z-index: 0;
	      	top: 0;
	      	left: 0;
	      	right: 0;
	      	height: 10vw;
	      	background: #fff;
	      }

      }
    }
  }
</style>
