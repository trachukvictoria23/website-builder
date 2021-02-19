<template>
	<div class="change-block">
		<div class="flex align-center justify-between">
			<label for="height">
				{{ $t("height") }}
			</label>
			<div>
				<input
					name="height"
					minLength="1"
					maxLength="3"
					v-model="height"
					class="sidebar__input"
					@keydown="isNumber"
					@blur="setNewHeight"
				/>
				<span>px</span>
			</div>
		</div>
		<button @click="addHeading">Add heading</button>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import staticMixin from "@/mixins/staticMixin";

export default {
	data() {
		return {
			height: "",
			heading: "",
		};
	},
	mixins: [staticMixin],
	computed: {
		...mapGetters(["getActiveDraftId"]),
	},
	created() {
		this.height = this.replaceNotDigits(
			document.getElementById(this.getActiveDraftId).style.height
		);
	},
	mounted() {
		/*this.$store.watch(
				(state, getters) => getters.getActiveGrid,
				(newValue, oldValue) => {
					if (
						this.type !== newValue &&
						this.gridOptions &&
						this.gridOptions.api
					) {
						this.currentIndex = null;
						this.gridOptions.api.deselectAll();
						this.gridOptions.api.clearFocusedCell();
						this.gridOptions.api.redrawRows();
					} else {
						this.$nextTick().then(() => {
							this.currentIndex = this.currentIndex ? this.currentIndex : 0;
							this.returnFocus();
						});
					}
				}
			);*/
	},
	methods: {
		setNewHeight() {
			this.$store.dispatch("setActiveElementHeight", this.height);
		},
		addHeading() {
			this.$store.dispatch("addNewHeading");
		},
	},
};
</script>

<style lang="scss" scoped>
.change-block {
}
</style>
