<template>
	<header class="app-header">
		<div class="logo">
			<span>Website builder</span>
		</div>
		<div class="login" v-if="getUserInfo">
			<p>
				{{ getUserInfo.email }}
			</p>
			<div class="icon" @click="$store.dispatch('logout')">
				<img src="img/logout.svg" />
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getUserInfo"])
	}
};
</script>

<style lang="scss" scoped>
.app-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 48px;
	padding: 0 48px;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
	.logo {
		width: 0;
		height: 0;
		border-top: 150px solid $color-gray;
		margin-left: -48px;
		border-right: 2000px solid transparent;
		span {
			position: absolute;
			top: 36%;
			margin-left: 36px;
			font-size: 36px;
		}
	}
	.login {
		display: flex;
		position: absolute;
		right: 36px;
		top: 24px;
		.icon {
			cursor: pointer;
			height: 40px;
			margin-left: 20px;
			img {
				max-height: 100%;
			}
		}
	}
}
</style>
