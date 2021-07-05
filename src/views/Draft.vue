<template>
	<div class="draft">
		<button class="submit-button preview-button" @click="preview">
			Preview
		</button>
		<sidebar />
		<main-content />
	</div>
</template>

<script>
import Sidebar from "@/components/Draft/Sidebar";
import MainContent from "@/components/Draft/MainContent";

export default {
	data() {
		return {
			options: []
		};
	},
	components: {
		Sidebar,
		MainContent
	},
	methods: {
		preview() {
		//	this.$store.commit("saveDraftContent");
			this.$router.push({ name: "Preview" });
		}
	}
};
</script>
