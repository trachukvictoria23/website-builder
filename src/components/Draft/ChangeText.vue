<template>
	<div>
		<label for="height">
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
	</div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Heading"
    }
  },
  methods: {
    setNewHeading() {
      this.$store.dispatch("setActiveHeading", this.heading);
    }
  }
}
</script>
