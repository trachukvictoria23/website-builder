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

		<!--<v-color-picker
      class="ma-2"
      :swatches="swatches"
      show-swatches
    ></v-color-picker> -->
	</div>
</template>

<script>
import staticMixin from "@/mixins/staticMixin";

export default {
	mixins: [staticMixin],
	data() {
		return {
			heading: "Heading",
			font_size: "32",
			picker: ""
		};
	},
	created() {
		this.setActiveHeading(this.getActiveDraftId);
	},
	mounted() {
		this.$store.watch(
			(state, getters) => getters.getActiveDraftId,
			(newValue, oldValue) => {
				this.setActiveHeading(newValue);
			}
		);
	},
	methods: {
		setNewHeading() {
			this.$store.dispatch("setActiveHeading", this.heading);
		},
		setActiveHeading(active_id) {
			if (!active_id) return;
			this.heading = document.getElementById(active_id).innerHTML;
			this.font_size = this.replaceNotDigits(
				document.getElementById(active_id).style.fontSize
			);
			if (!this.font_size) this.font_size = "32";
		},
		setNewFontSize() {
			this.$store.dispatch("setActiveElementFontSize", this.font_size);
		}
	}
};
</script>
