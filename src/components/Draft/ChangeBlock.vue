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
	<button @click="addHeading">
		Add heading
	</button>
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
