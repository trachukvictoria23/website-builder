<template>
	<div class="sidebar">
		<div class="sidebar-item">
			<label for="margin">
				Відступ
			</label>
			<div class="content">
				<input
					name="margin"
					minLength="0"
					maxLength="8"
					v-model="margin"
					class="app-input"
					@keydown="isNumber"
				/>
				<span>px</span>
			</div>
		</div>
		<div class="sidebar-item mb-20">
			<label for="padding">
				Внутрішній відступ
			</label>
			<div class="content">
				<input
					name="padding"
					minLength="0"
					maxLength="8"
					v-model="padding"
					class="app-input"
					@keydown="isNumber"
				/>
				<span>px</span>
			</div>
		</div>
		<component :is="setActiveComponent" />
		<div class="sidebar__actions">
			<button
				class="submit-button submit-button--danger"
				@click="$store.dispatch('removeElement')"
			>
				<span>
					{{ $t("removeEl") }}
				</span>
			</button>
			<button class="submit-button" @click="addNewBlock">
				<span>
					{{ $t("addNewBlock") }}
				</span>
			</button>
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
	data() {
		return {
			margin: 0,
			padding: 0
		};
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
	height: calc(100% + 16px);
	width: $sidebarWidth;
	border-right: 1px solid;
	padding: 24px;
	padding-top: 40px;
	margin-top: -16px;
	background: $color-gray;
	&__actions {
		margin-top: auto;
		button {
			width: 100%;
			&:last-child {
				margin-top: 10px;
			}
		}
		/*width: 100%;
		border: 1px solid;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: auto;
		cursor: pointer;*/
	}
	&__input {
		outline: none;
		border: 1px solid $color-border;
	}
}
</style>
