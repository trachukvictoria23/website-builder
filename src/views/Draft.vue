<template>
	<div class="draft">
		<span>{{ options }}</span>
		<button class="draft__preview" @click="add">Preview</button>
		<sidebar />
		<main-content />
	</div>
</template>

<script>
import Sidebar from "@/components/Draft/Sidebar";
import MainContent from "@/components/Draft/MainContent";

import { db } from "../main";

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
	firestore() {
		return {
			options: db.collection("options")
		};
	},
	methods: {
		preview() {
			const content = document.getElementById("main").innerHTML;
			this.$store.commit("saveDraftContent", content);
			this.$router.push({ name: "Preview" });
			//this.$router.push({ name: 'Preview', params: { content} })
		},
		add() {
			let option = {
				option2: 'hello'
			}
			db.collection("options").add({ 'option3': 'ggg' });
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
