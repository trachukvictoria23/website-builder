<template>
	<transition name="fade">
		<div id="app">
			<app-header />
			<transition name="fade" mode="out-in">
				<router-view :key="$route.path" />
			</transition>
		</div>
	</transition>
</template>

<script>
export default {
	name: "app",
	created() {
		this.$store.dispatch("updateUserInfo");
	}
};
</script>

<style lang="scss">
@import "~@/assets/style/main.scss";
</style>
