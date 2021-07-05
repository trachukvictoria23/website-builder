<template>
	<div class="home">
		<ul class="home__ul">
			<li class="home__li home__li--empty" @click="createNewProject">
				<span>
					Створити новий <br> проект
				</span>
			</li>
			<li
				class="home__li"
				v-for="(val, key) in getUserProjects"
				:key="key"
				@click="openProject(key, val.content)"
			>
				{{ val.name }}
				<button class="delete-button" @click.stop="$store.dispatch('deleteUserProject', val)">
					<img src="img/delete.svg" />
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getUserProjects"])
	},
	methods: {
		createNewProject() {
			this.$store.commit("setActiveProjectId", null);
			this.$store.commit("clearDraftContent");
			//	this.$store.dispatch("saveDraftContent", null);
			this.$router.push({ name: "Draft" });
		},
		openProject(project_id, content) {
			this.$store.commit("setActiveProjectId", project_id);
			this.$store.dispatch("saveDraftContent", content);
			this.$router.push({ name: "Draft" });
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	padding: 40px;
	&__ul {
		display: flex;
		flex-wrap: wrap;
	}
	&__li {
		list-style: none;
		min-width: 300px;
		height: 300px;
		width: 300px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40px;
		background: $color-gray;
		border: 1px solid $color-blue;
		text-align: center;
		font-size: 18px;
		position: relative;
		.delete-button {
			outline: none;
			border: none;
			background: none;
			cursor: pointer;
			position: absolute;
			right: 12px;
			top: 12px;
			z-index: 5;
			img {
				width: 28px;
			}
		}
		&--empty {
			background: $color-blue;
			color: white;
			font-size: 28px;
			&:hover {
				background: rgba(25, 25, 112, 0.75);
			}
		}
	}
}
</style>
