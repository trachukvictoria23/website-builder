<template>
	<div class="change-block">
		<div class="flex align-center justify-between">
			<label for="height">
				{{ $t('height') }}
			</label>
			<div>
				<input
					name="height"
					minLength="1"
					maxLength="3"
					v-model="height"
					@keyPress="isNumber"
					@blur="setNewHeight"
				/>
				<span>px</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
import staticMixin from "@/mixins/staticMixin"

	export default {
		data() {
			return {
				height: '',
			};
		},
		mixins: [staticMixin],
		computed: {
			...mapGetters([
				"getActiveDraftId"
			])
		},
		created() {
			this.height = document.getElementById(this.getActiveDraftId).style.height
		},
		methods: {
			setNewHeight() {
				this.$store.dispatch('setActiveElementHeight', this.height);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.change-block {
	}
</style>
