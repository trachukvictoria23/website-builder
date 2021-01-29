<template>
	<div class="home">
		<ul class="home__ul">
			<li class="home__li home__li--empty" @click="createNewProject">
				<span>
					Create new project
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			createNewProject() {
				this.$router.push({ name: 'Draft' });
			},
		},
	};
</script>

<style lang="scss" scoped>
	.home {
		padding: 40px;
		&__ul {
		}
		&__li {
			list-style: none;
			width: 256px;
			height: 256px;
			border: 1px solid;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			&--empty {
			}
		}
	}
</style>
