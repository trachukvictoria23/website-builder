<template>
	<transition name="fade">
		<div id="app">
			<transition name="fade" mode="out-in">
				<router-view :key="$route.path" />
			</transition>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'app',
		components: {},
	};
</script>

<style lang="scss">
	@import '~@/assets/style/main.scss';
</style>
