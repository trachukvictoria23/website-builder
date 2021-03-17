<template>
	<div class="draft">
		<sidebar />
		<main-content />
	</div>
</template>

<script>
import Sidebar from "@/components/Draft/Sidebar";
import MainContent from "@/components/Draft/MainContent";
import { mapGetters } from "vuex";

export default {
	/*beforeRouteEnter(to, from, next) {
		next(vm => {
            console.log('next')
            console.log('check router', document.getElementById("main"), vm.getDraftContent)
			document.getElementById("main").innerHTML = vm.getDraftContent;
			next();
		});
	},*/
	computed: {
		...mapGetters(["getDraftContent"])
	},
	components: {
		Sidebar,
		MainContent
	}
};
</script>

<style lang="scss" scoped>
.draft {
	display: flex;
	height: 100%;
	width: 100%;
}
</style>
