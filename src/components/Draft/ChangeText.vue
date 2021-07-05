<template>
	<div>
		<label for="heading">
			{{ $t("heading") }}
		</label>
		<div>
			<textarea
				name="heading"
				maxLength="128"
				class="app-input app-textarea"
				v-model="heading"
				@blur="setNewHeading"
			/>
		</div>
		<div class="sidebar-item">
			<input type="radio" value="left" v-model="textAlign" />
			<label>По левому краю</label>
			<br />
			<input type="radio" value="center" v-model="textAlign" />
			<label>По центру</label>
			<br />
			<input type="radio" value="right" v-model="textAlign" />
			<label>По левому краю</label>
		</div>
		<div class="sidebar-item">
			<label for="font_size">
				Розмір шрифту
			</label>
			<div class="content">
				<input
					name="font_size"
					minLength="1"
					maxLength="3"
					v-model="font_size"
					class="app-input"
					@keydown="isNumber"
					@blur="setNewFontSize"
				/>
				<span>px</span>
			</div>
		</div>
		<div class="sidebar-item flex">
			<input type="radio" value="h1" v-model="tagType" />
			<label>h1</label>
			<br />
			<input type="radio" value="h2" v-model="tagType" />
			<label>h2</label>
			<br />
			<input type="radio" value="h3" v-model="tagType" />
			<label>h3</label>
			<br />
			<input type="radio" value="h4" v-model="tagType" />
			<label>h4</label>
			<br />
			<input type="radio" value="h5" v-model="tagType" />
			<label>h5</label>
			<br />
			<input type="radio" value="h6" v-model="tagType" />
			<label>h6</label>
		</div>
		<div class="sidebar-item">
			<swatches-picker v-model="color" @input="setNewColor" />
		</div>
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
			color: "#333",
			textAlign: 'left',
			tagType: 'h1'
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
	watch: {
		textAlign() {
			this.updateTextAlign();
		}
	},
	methods: {
		updateTextAlign() {
			console.log("check", this.textAlign);
			this.$store.dispatch("setActiveElementOption", {
				name: "textAlign",
				val: this.textAlign
			});
		},
		setNewHeading() {
			this.$store.dispatch("setActiveElementVal", this.heading);
		},
		setActiveHeading(active_id) {
			console.log("nu", active_id);
			if (!active_id) return;
			const active_el = document.getElementById(active_id);
			this.heading = active_el.innerHTML;
			this.font_size = this.replaceNotDigits(active_el.style.fontSize);
			if (!this.font_size) this.font_size = "32";
			this.color = active_el.style.color;
			this.textAlign = active_el.style.textAlign;

			console.log("start", this.textAlign);
		},
		setNewFontSize() {
			this.$store.dispatch("setActiveElementOption", {
				val: this.font_size + "px",
				name: "fontSize"
			});
		},
		setNewColor() {
			this.$store.dispatch("setActiveElementOption", {
				val: this.color.hex,
				name: "color"
			});
		}
	}
};
</script>
