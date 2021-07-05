<template>
	<div class="change-block">
		<div class="sidebar-item">
			<label for="height">
				{{ $t("height") }}
			</label>
			<div class="content">
				<input
					name="height"
					minLength="1"
					maxLength="3"
					v-model="height"
					class="app-input"
					@keydown="isNumber"
					@blur="setNewHeight"
				/>
				<span>px</span>
			</div>
		</div>
		<div class="sidebar-item">
			<swatches-picker v-model="color" @input="setNewColor" />
		</div>
		<div class="sidebar-item">
			<button class="add-button" @click="addElement('h1')">
				<img src="img/plus.svg" />Додати заголовок
			</button>
		</div>
		<div class="sidebar-item">
			<button class="add-button" @click="addElement('p')">
				<img src="img/plus.svg" />Додати текст
			</button>
		</div>
		<div class="sidebar-item">
			<button class="add-button" @click="addElement('p')">
				<img src="img/plus.svg" />Додати картинку
			</button>
		</div>
		<div class="sidebar-item">
			<button class="add-button" @click="addElement('p')">
				<img src="img/plus.svg" />Додати форму
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import staticMixin from "@/mixins/staticMixin";
import { Swatches } from "vue-color";

export default {
	components: {
		"swatches-picker": Swatches
	},
	data() {
		return {
			height: "",
			color: "#FFFFFF"
		};
	},
	mixins: [staticMixin],
	computed: {
		...mapGetters(["getActiveDraftId"])
	},
	created() {
		this.setActiveHeight(this.getActiveDraftId);
	},
	mounted() {
		this.$store.watch(
			(state, getters) => getters.getActiveDraftId,
			(newValue, oldValue) => {
				this.setActiveHeight(newValue);
			}
		);
	},
	methods: {
		setActiveHeight(active_id) {
			if (!active_id) return;
			const active_el = document.getElementById(active_id);
			if (!active_el) return;
			this.height = this.replaceNotDigits(active_el.style.height);
			this.color = active_el.style.color;
		},
		setNewHeight() {
			this.$store.dispatch("setActiveElementOption", {
				val: this.height + "px",
				name: "height"
			});
		},
		addElement(tag) {
			this.$store.dispatch("addNewTextElement", tag);
		},
		setNewColor() {
			this.$store.dispatch("setActiveElementOption", {
				val: this.color.hex,
				name: "background"
			});
		}
	}
};
</script>
