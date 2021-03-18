<template>
	<div class="draft">
		<button class="draft__preview" @click="preview">Preview</button>
		<sidebar />
		<main-content />
	</div>
</template>

<script>
import Sidebar from "@/components/Draft/Sidebar";
import MainContent from "@/components/Draft/MainContent";

export default {
	components: {
		Sidebar,
		MainContent
	},
	methods: {
		preview() {
			const content = document.getElementById('main').innerHTML;
			this.$store.commit("saveDraftContent", content);
			this.$router.push({ name: "Preview" });
			//this.$router.push({ name: 'Preview', params: { content} })
		}
	}
};
</script>

<style lang="scss" scoped>
.draft {
	display: flex;
	height: 100%;
	width: 100%;
	position: relative;
	&__preview {
		position: absolute;
		top: 40px;
		right: 40px;
		z-index: 5;
	}
}
</style>
