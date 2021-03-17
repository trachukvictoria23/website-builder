<template>
	<div class="main-content" id="main">
		<button class="main-content__preview" @click="preview">Preview</button>
	</div>
</template>

<script>
export default {
	methods: {
		preview() {
			const content = this.$el.innerHTML;
			this.$store.commit("saveDraftContent", content);
			this.$router.push({ name: "Preview" });
			//this.$router.push({ name: 'Preview', params: { content} })
		}
	}
};
</script>

<style lang="scss" scoped>
.main-content {
	width: calc(100% - 400px);
	height: 100%;
	overflow-y: auto;
	position: relative;
	&__preview {
		position: absolute;
		top: 40px;
		right: 40px;
		z-index: 5;
	}
}
</style>
