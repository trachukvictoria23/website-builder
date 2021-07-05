<template>
	<div class="draft">
		<!--<button class="submit-button preview-button" @click="$store.dispatch('saveUserProject')">
			Save
		</button> -->
		<div class="w-full" v-html="getDraftContent"></div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["getDraftContent"])
	}
};
</script>
