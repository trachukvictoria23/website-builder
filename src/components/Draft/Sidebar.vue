<template>
	<div class="sidebar">
		<component :is="setActiveComponent" />

		<div class="sidebar__add" @click="addNewBlock">
			<span>
				{{ $t("addNewBlock") }}
			</span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import ChangeInput from "./ChangeInput";
import ChangeText from "./ChangeText.vue";
import ChangeBlock from "./ChangeBlock.vue";
import staticMixin from "@/mixins/staticMixin";

export default {
	components: {
		ChangeText,
		ChangeInput,
		ChangeBlock
	},
	mixins: [staticMixin],
	computed: {
		...mapGetters(["getActiveDraftId", "getActiveDraftType"]),
		setActiveComponent() {
			if (!this.getActiveDraftType) return;
			return "Change" + this.setStrCapitalized(this.getActiveDraftType);
		}
	},
	methods: {
		addNewBlock() {
			this.$store.dispatch("addNewBlock");
		}
	}
};
</script>

<style lang="scss">
.sidebar {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: $sidebarWidth;
	border-right: 1px solid;
	padding: 24px;
	&__add {
		width: 100%;
		border: 1px solid;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: auto;
		cursor: pointer;
	}
	&__input {
		outline: none;
		border: 1px solid $color-border;
	}
}
</style>
