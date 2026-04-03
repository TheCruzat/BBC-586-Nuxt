<template>
	<div class="flat">
		<component :is="headerTag" v-if="header" v-html="header" />
		<div
			v-if="content"
			:class="containerClass">
			<component :is="contentTag" v-html="content" />

		</div>
		<component v-if="!content" :is="contentTag">
			<slot />
		</component>
		<slot v-if="!contentTag" />
	</div>
</template>

<script>
	export default {
		name: 'ContentBlock',

		props: {
			header: String,
			content: String,
			containerClass: String,
			headerTag: {
				type: String,
				default: 'h3'
			},
			contentTag: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style scoped lang="scss">

  @use "@/styles/global.scss" as g;
  @use "@/styles/vars" as v;

  p {
  	width: 100%;
  }

</style>
