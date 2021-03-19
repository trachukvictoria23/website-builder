<template>
	<div class="main-content" id="main"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["getDraftContent"])
	},
	mounted() {
		this.$el.innerHTML = this.getDraftContent;
		this.$store.commit("setActiveDraftId", null);
		this.$store.commit("setActiveDraftType", null)
		this.$store.dispatch("setActiveEvents");
	}
};
</script>

<style lang="scss" scoped>
.main-content {
	width: calc(100% - 400px);
	height: 100%;
	overflow-y: auto;
}
</style>
