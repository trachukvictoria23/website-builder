<template>
	<div v-html="getDraftContent"></div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	computed: {
		...mapGetters([
			'getDraftContent'
		])
	}
};
</script>
