<template>
	<div>
		<label for="heading">
			{{ $t("heading") }}
		</label>
		<div>
			<textarea
				name="heading"
				maxLength="128"
				class="sidebar__textarea"
				v-model="heading"
				@blur="setNewHeading"
			/>
		</div>
		<label for="font_size">
			Font size
		</label>
		<div>
			<input
				name="font_size"
				minLength="1"
				maxLength="3"
				v-model="font_size"
				class="sidebar__input"
				@keydown="isNumber"
				@blur="setNewFontSize"
			/>
			<span>px</span>
		</div>
		<swatches-picker v-model="color" @input="setNewColor" />
	</div>
</template>

<script>
import staticMixin from "@/mixins/staticMixin";
import { Swatches } from "vue-color";
import { bus } from "@/main";

export default {
	components: {
		"swatches-picker": Swatches
	},
	mixins: [staticMixin],
	data() {
		return {
			heading: "Heading",
			font_size: "32",
			picker: "",
			color: "#333"
		};
	},
	created() {
		this.setActiveHeading(this.getActiveDraftId);
		//bus.$on("change-id", this.changeActiveElement);
	},
	mounted() {
		this.$store.watch(
			(state, getters) => getters.getActiveDraftId,
			(newValue, oldValue) => {
				this.setActiveHeading(newValue);
			}
		);
	},
	beforeDestroy() {
		//bus.$off("change-id", this.changeActiveElement);
	},
	methods: {
		setNewHeading() {
			this.$store.dispatch("setActiveHeading", this.heading);
		},
		setActiveHeading(active_id) {
			if (!active_id) return;
			const active_el = document.getElementById(active_id);
			this.heading = active_el.innerHTML;
			this.font_size = this.replaceNotDigits(active_el.style.fontSize);
			if (!this.font_size) this.font_size = "32";
			this.color = active_el.style.color;
		},
		setNewFontSize() {
			this.$store.dispatch("setActiveElementFontSize", this.font_size);
		},
		setNewColor() {
			this.$store.dispatch("setActiveElementColor", this.color.hex);
		}
	}
};
</script>
